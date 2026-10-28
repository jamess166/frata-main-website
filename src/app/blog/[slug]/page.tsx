import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
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

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `https://www.frataingenieros.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-8 pt-12 lg:pt-16">
      <header className="container mx-auto max-w-3xl px-5 sm:px-6">
        <Link
          href="/blog"
          className="-ml-1 inline-flex items-center gap-0.5 text-[0.9375rem] text-primary hover:underline underline-offset-4"
        >
          <ChevronLeft className="h-4 w-4" />
          Blog
        </Link>
        <p className="mt-8 text-sm text-muted-foreground">
          <time dateTime={post.date}>{format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}</time>
          {" · "}
          {post.author}
        </p>
        <h1 className="mt-3 font-headline text-display-lg text-foreground">{post.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{post.summary}</p>
      </header>

      <div className="container mx-auto mt-12 max-w-6xl px-5 sm:px-6">
        <Image
          src={post.image}
          alt={post.title}
          width={2000}
          height={1125}
          priority
          sizes="(min-width: 1200px) 1100px, 100vw"
          className="w-full rounded-tile object-cover"
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert container mx-auto mt-12 max-w-3xl px-5 sm:px-6 prose-headings:font-headline prose-headings:font-semibold prose-headings:tracking-[-0.015em] prose-headings:text-foreground prose-p:text-foreground/85 prose-li:text-foreground/85 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
