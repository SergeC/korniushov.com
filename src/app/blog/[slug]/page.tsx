import {getAllPosts, getPost, Module, Post} from '@/lib/blog'
import {format} from 'date-fns'
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  // https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  const posts = await getAllPosts(Module.Blog)
  return posts.map((post: Post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({params}: { params: Promise<{ slug: string }> }) {
  try {
    const slug = (await params).slug
    const {title, date, content} = await getPost(slug, Module.Blog) as Post;

    return (
        <article className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1>{title}</h1>
          <div className="text-muted-foreground mb-8">
            {date ? format(new Date(date), 'MMMM dd, yyyy') : null}
          </div>
          {content}
        </article>
    )
  } catch (error) {
    notFound()
  }
}
