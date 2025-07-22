import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/blog';
import { useLanguage } from '@/hooks/use-language'; // We'll create this hook
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default async function BlogPage() {
  const posts = await getAllPosts();
  // This is a server component, so we can't use the useLanguage hook directly.
  // We will pass the locale to the client components or handle it here if needed.
  // For now, we will assume a default language or pass it down.
  const lang = 'es'; // Example, this could come from headers, etc.
  const t = (key: string) => {
      const translations = {
        en: { blogTitle: 'Blog & News', blogDescription: 'Explore our latest articles, insights, and news from the world of BIM and digital construction.', readMore: 'Read More', by: 'By' },
        es: { blogTitle: 'Blog y Noticias', blogDescription: 'Explora nuestros últimos artículos, ideas y noticias del mundo de BIM y la construcción digital.', readMore: 'Leer Más', by: 'Por' },
      };
      return translations[lang][key] || key;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t('blogTitle')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('blogDescription')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="technology blog"
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'd \'de\' MMMM, yyyy', { locale: es })}
                </time>
                <span className="mx-2">•</span>
                <span>{`${t('by')} ${post.author}`}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.summary}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="link" className="px-0">
                 <Link href={`/blog/${post.slug}`}>{t('readMore')}</Link>
               </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
