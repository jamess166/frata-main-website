import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-4">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-4 text-muted-foreground">
           <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://placehold.co/40x40.png`} alt={post.author} data-ai-hint="person portrait"/>
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <span className="hidden md:inline">•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'd \'de\' MMMM, yyyy', { locale: es })}
          </time>
        </div>
      </header>
      
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          layout="fill" 
          objectFit="cover"
          data-ai-hint="technology blog"
        />
      </div>

      <div 
        className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
