import {getAllPosts, Module} from "@/lib/blog";
import Link from 'next/link';
import {formatDate} from "date-fns/format";

interface BlogListProps {
  maxResults?: number;
}

export async function BlogList({maxResults}: BlogListProps) {
  const allPosts = await getAllPosts(Module.Blog);
  let showAll: boolean = false;
  let posts = allPosts;
  if (maxResults && allPosts.length > maxResults) {
    posts = allPosts.slice(0, maxResults);
    showAll = true;
  }

  return (
      <div className="w-full">
        <ul>
          {posts.map((post) => {
            return (
                <li key={post.slug} className="py-3">
                  <article>
                    <div className='pointer mb-1 flex flex-col space-y-2 transition-colors xl:space-y-0'>
                      <div>
                        <Link className="group" href={`/blog/${post.slug}`}>
                          <div
                              className="mb-2 rounded-lg border border-transparent p-2 group-hover:border-primary-400 group-hover:bg-primary-100 dark:hover:bg-primary-900">
                            <dl className="block">
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={formatDate(post.createdAt, "yyyy-MM-dd")} suppressHydrationWarning>
                                  {formatDate(post.createdAt, "yyyy-MM-dd")}
                                </time>
                              </dd>
                            </dl>
                            <div>
                              <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                  <p className="text-gray-900 dark:text-gray-100">{post.title}</p>
                                </h2>
                              </div>
                              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {post.excerpt}
                              </div>
                              {showAll && (
                                  <div className="font-medium leading-6 text-primary-500 group-hover:text-primary-300">
                                    Read more &rarr;
                                  </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
            )
          })}
        </ul>
      </div>
  );
}
