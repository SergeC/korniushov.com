import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {compileMDX} from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import {JSX} from "react";

export interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  createdAt: Date;
  updatedAt: Date | undefined;
  content: JSX.Element | undefined;
}

export enum Module {
  Blog = 'content/blog',
  Legal = 'content/legal',
  Careers = 'content/careers',
}

export async function getPost(slug: string, module: Module): Promise<Post> {
  const fullPath = path.join(getMarkdownPathByModule(module), `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const {data, content} = matter(fileContents);

  const {content: mdxContent} = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
      },
    },
  })

  const post: Post = {
    slug: slug,
    title: data.title,
    excerpt: data.excerpt,
    createdAt: new Date(data.createdAt),
    updatedAt: undefined,
    content: mdxContent,
  };
  if (data.updatedAt) {
    post.updatedAt = new Date(data.updatedAt);
  }

  return post
}

export function getAllPosts(module: Module): Post[] {
  const files = fs.readdirSync(getMarkdownPathByModule(module))
  const posts: Post[] = []

  for (const file of files) {
    const slug: string = file.replace(/\.mdx$/, '')
    const fullPath = path.join(getMarkdownPathByModule(module), file)
    // skip non md files
    if (!file.endsWith('.mdx')) {
      continue
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data} = matter(fileContents)

    const post: Post = {
      slug: slug,
      title: data.title,
      excerpt: data.excerpt,
      createdAt: new Date(data.createdAt),
      updatedAt: undefined,
      content: undefined
    };

    if (data.updatedAt) {
      post.updatedAt = new Date(data.updatedAt);
    }

    posts.push(post)
  }

  return posts.sort((a: Post, b: Post) => {
    if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return -1
    }
  })
}

function getMarkdownPathByModule(module: Module): string {
  return path.join(process.cwd(), module.toString())
}
