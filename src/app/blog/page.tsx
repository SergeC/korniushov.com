import {getAllPosts, Module, Post} from '@/lib/blog'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Link from 'next/link'
import {format} from 'date-fns'
import {BlogSchema} from "@/lib/jsonLd";

export default async function BlogPage() {
  const posts = await getAllPosts(Module.Blog)
  return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6">
          {posts.map((post: Post) => (
            <article key={post.slug}>
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {format(post.createdAt, 'MMMM dd, yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(BlogSchema)}}/>
      </div>
  )
}
