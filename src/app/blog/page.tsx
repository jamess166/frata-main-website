import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { getAllPosts } from "@/lib/blog";

const copy = {
  blogTitle: "Blog y noticias",
  blogDescription:
    "Artículos, ideas y noticias del mundo BIM y la construcción digital.",
  by: "Por",
} as const;

export const metadata: Metadata = {
  title: copy.blogTitle,
  description: copy.blogDescription,
  alternates: {
    canonical: "https://www.frataingenieros.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section>
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-10 lg:pb-16 lg:pt-24">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{copy.blogTitle}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{copy.blogDescription}</p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid gap-5 px-5 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:pb-28">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-tile bg-surface transition-transform duration-200 ease-out active:scale-[0.99]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    width={1200}
                    height={750}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <article className="flex flex-1 flex-col p-7">
                  <time dateTime={post.date} className="text-sm text-muted-foreground">
                    {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                  </time>
                  <h2 className="mt-2 font-headline text-title text-foreground">{post.title}</h2>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted-foreground">{post.summary}</p>
                  <span className="link-more mt-auto pt-5 text-[1.0625rem]">
                    Leer artículo
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
