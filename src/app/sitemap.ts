// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import type {MetadataRoute} from 'next'
import {getAllPosts, Module} from "@/lib/blog";

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

  // return sitemap array
  return uris.map((uri) => {
    uri.url = getFulUrl(uri.url);
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

function getFulUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_FRONTEND_HOST}${path}`
}
