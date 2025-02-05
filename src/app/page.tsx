import {AuthorHero} from "@/components/author-hero";
import {AuthorBio} from "@/components/author-bio";
import {BlogList} from "@/components/blog-list";

export default function Home() {
  return (
      <div className="flex flex-col items-center space-y-8">
        <AuthorHero/>

        <AuthorBio/>

        <BlogList maxResults={2}/>
      </div>
  )
}
