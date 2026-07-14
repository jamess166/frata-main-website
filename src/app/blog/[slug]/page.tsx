import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <header className="mx-auto max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <time dateTime={post.date}>
            {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
          </time>
          <span className="mx-3 text-primary">·</span>
          {post.author}
        </p>
        <h1 className="mt-6 font-headline text-display-lg font-black text-foreground">
          {post.title}
        </h1>
      </header>

      <div className="mx-auto mt-14 max-w-4xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1400}
          height={700}
          priority
          className="h-72 w-full object-cover grayscale sm:h-96"
        />
      </div>

      <div
        className="prose prose-lg prose-invert mx-auto mt-14 max-w-4xl prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
