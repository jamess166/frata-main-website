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
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{copy.blogTitle}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{copy.blogDescription}</p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid gap-5 px-5 pb-8 sm:px-6 md:grid-cols-2 lg:px-8">
          {posts.map((post, i) => (
            <Reveal key={post.slug} className={i === 0 ? "md:col-span-2" : undefined}>
              <Link
                href={`/blog/${post.slug}`}
                className={`group grid h-full overflow-hidden rounded-tile bg-surface transition-transform duration-200 ease-out active:scale-[0.99] ${
                  i === 0 ? "md:grid-cols-[1.4fr_1fr]" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    width={1400}
                    height={800}
                    sizes={i === 0 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <article className="flex flex-col p-8 lg:p-10">
                  <time dateTime={post.date} className="text-sm text-muted-foreground">
                    {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                  </time>
                  <h2 className="mt-2 font-headline text-title text-foreground">{post.title}</h2>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{post.summary}</p>
                  <span className="link-more mt-auto pt-6 text-[1.0625rem]">
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
