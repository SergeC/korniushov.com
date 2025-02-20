import {getAllPosts, getPost, Module, Post} from '@/lib/blog'
import {format} from 'date-fns'
import {notFound} from 'next/navigation'
import {blogPostingSchema} from "@/lib/jsonLd";

export async function generateStaticParams() {
  // https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  const posts = getAllPosts(Module.Blog)
  return posts.map((post: Post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({params}: { params: Promise<{ slug: string }> }) {
  try {
    const slug = (await params).slug
    const post = await getPost(slug, Module.Blog);

    return (
        <article className="max-w-4xl mx-auto prose dark:prose-invert text-justify">
          <h1>{post.title}</h1>
          <div className="text-muted-foreground mb-8">
            {post.createdAt ? format(post.createdAt, 'MMMM dd, yyyy') : null}
          </div>
          {post.content}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(blogPostingSchema(post))}}/>
        </article>
    )
  } catch (error) {
    notFound()
  }
}
