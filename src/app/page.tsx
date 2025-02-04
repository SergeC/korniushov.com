import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, Twitter, Linkedin} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {AuthorHero} from "@/components/author-hero";

export default function Home() {
  return (
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to My Personal Website</h1>
          <p className="text-xl text-muted-foreground">
            Full-stack developer, writer, and technology enthusiast
          </p>
        </div>

        <AuthorHero />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Latest Blog Posts</CardTitle>
              <CardDescription>Check out my recent writings</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/post-1" className="text-blue-500 hover:underline">
                    Getting Started with Next.js 15
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-2" className="text-blue-500 hover:underline">
                    TypeScript Best Practices
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
              <CardDescription>Some of my best work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-500 hover:underline">
                    Project 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-500 hover:underline">
                    Project 2
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
