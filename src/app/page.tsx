import {AuthorHero} from "@/components/author-hero";
import {AuthorBio} from "@/components/author-bio";

export default function Home() {
  return (
      <div className="flex flex-col items-center space-y-8">
        <AuthorHero/>

        <AuthorBio/>
      </div>
  )
}
