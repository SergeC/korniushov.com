import {AuthorHero} from "@/components/author-hero";
import {BlogList} from "@/components/blog-list";
import {AuthorSummury} from "@/components/author-summury";
import {AuthorSkills} from "@/components/author-skills";

export default function Home() {
  return (
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        <AuthorHero/>

        <AuthorSummury/>

        <AuthorSkills/>

        <h2 className="text-2xl font-bold leading-8 tracking-tight">Latest Blog Posts</h2>
        <BlogList maxResults={2}/>
      </div>
  )
}
