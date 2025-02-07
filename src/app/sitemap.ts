// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import type {MetadataRoute} from 'next'
import {getAllPosts, Module, Post} from "@/lib/blog";
import {authorName, siteDescription} from "@/lib/consts";
import {writeFileSync} from "fs";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // add static pages
  const uris: MetadataRoute.Sitemap = [
    {
      url: '/',
      priority: 1,
    }, {
      url: '/blog',
      priority: 0.8,
    }, {
      url: '/about',
      priority: 0.8,
    },
  ];

  // add blog posts
  const posts = await getAllPosts(Module.Blog);
  for (const post of posts) {
      uris.push({
          url: `/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt || post.createdAt),
          priority: 0.8,
      });
  }

  // RSS for blog post & snippet
  if (posts.length > 0) {
    const rss = generateRss(posts);
    writeFileSync('./public/feed.xml', rss)
  }

  // return sitemap array
  return uris.map((uri) => {
    uri.url = getFullUrl(uri.url);
    if (!('lastModified' in uri)) {
      uri.lastModified = new Date();
    }
    if (!('priority' in uri)) {
      uri.priority = 0.5;
    }
    if (!('changeFrequency' in uri)) {
      uri.changeFrequency = changefreq.daily;
    }
    return uri;
  });
}

enum changefreq {
  always = 'always',
  hourly = 'hourly',
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
  never = 'never',
}

function getFullUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_FRONTEND_HOST}${path}`
}

function generateRssItem(post: Post) {
  return `
    <item>
      <guid>${getFullUrl(`/blog/${post.slug}`)}</guid>
      <title>${post.title}</title>
      <link>${getFullUrl(`/blog/${post.slug}`)}</link>
      ${post.excerpt && `<description>${post.excerpt}</description>`}
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <author>${authorName}</author>
    </item>
	`
}

function generateRss(posts: Post[]) {
  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${authorName}'s Blog</title>
        <link>${getFullUrl(`/blog`)}</link>
        <description>${siteDescription}</description>
        <language>en-us</language>
        <managingEditor>${authorName}</managingEditor>
        <webMaster>${authorName}</webMaster>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${getFullUrl(`/feed.xml`)}" rel="self" type="application/rss+xml"/>
        ${posts.map((post) => generateRssItem(post)).join('')}
      </channel>
    </rss>
	`
}
