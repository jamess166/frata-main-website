import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";

const copy = {
  blogTitle: "Blog y Noticias",
  blogDescription: "Explora nuestros ultimos articulos, ideas y noticias del mundo de BIM y la construccion digital.",
  readMore: "Leer mas",
  by: "Por",
} as const;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {copy.blogTitle}
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">{copy.blogDescription}</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="group flex flex-col overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="technology blog"
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>
                <time dateTime={post.date}>{format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}</time>
                <span className="mx-2">•</span>
                <span>{`${copy.by} ${post.author}`}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.summary}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="link" className="px-0">
                <Link href={`/blog/${post.slug}`}>{copy.readMore}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
