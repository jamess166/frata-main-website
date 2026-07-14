import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { getAllPosts } from "@/lib/blog";

const copy = {
  blogTitle: "Blog y noticias",
  blogDescription:
    "Artículos, ideas y noticias del mundo BIM y la construcción digital.",
  by: "Por",
} as const;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          <Reveal>
            <Eyebrow>Blog</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {copy.blogTitle}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {copy.blogDescription}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link href={`/blog/${post.slug}`} className="block">
                <article className="group grid gap-4 border-b border-border py-10 md:grid-cols-[200px_1fr_auto] md:items-baseline md:gap-8 lg:py-14">
                  <time
                    dateTime={post.date}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {format(new Date(post.date), "d MMM yyyy", { locale: es })}
                  </time>
                  <div>
                    <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {post.summary}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {copy.by} {post.author}
                    </p>
                  </div>
                  <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
                    Leer
                    <ArrowUpRight className="h-4 w-4" />
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
