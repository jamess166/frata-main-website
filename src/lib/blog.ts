import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/blog/posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  contentHtml: string;
  [key: string]: any;
}

export async function getPostBySlug(slug: string): Promise<PostData | undefined> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug: realSlug,
      contentHtml,
      ...data,
    } as PostData;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return undefined;
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return await getPostBySlug(slug);
      })
  );

  const validPosts = allPostsData.filter((p): p is PostData => p !== undefined);

  // Sort posts by date in descending order
  return validPosts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}
