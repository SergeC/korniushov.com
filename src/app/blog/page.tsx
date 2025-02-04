import {getAllPosts, Module, Post} from '@/lib/blog'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Link from 'next/link'
import {format} from 'date-fns'

export default async function BlogPage() {
  const posts = await getAllPosts(Module.Blog)

  return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6">
          {posts.map((post: Post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {format(new Date(post.date), 'MMMM dd, yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
  )
}
