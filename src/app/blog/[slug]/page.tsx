import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://placehold.co/40x40.png" alt={post.author} data-ai-hint="person portrait" />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <span className="hidden md:inline">•</span>
          <time dateTime={post.date}>{format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}</time>
        </div>
      </header>

      <div className="relative mb-12 h-96 w-full overflow-hidden rounded-lg">
        <Image src={post.image} alt={post.title} fill className="object-cover" data-ai-hint="technology blog" />
      </div>

      <div
        className="prose prose-lg mx-auto max-w-4xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
