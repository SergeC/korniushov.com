import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Linkedin} from "lucide-react"
import {AuthorHero} from "@/components/author-hero";
import {AuthorBio} from "@/components/author-bio";
import {AuthorSkills} from "@/components/author-skills";
import Link from "next/link";
import {githubURL, linkedinURL, twitterURL} from "@/lib/consts";
import {SiGithub, SiX} from "@icons-pack/react-simple-icons";

export default function AboutPage() {
  return (
      <div className="max-w-4xl mx-auto space-y-8">
        <AuthorHero/>
        <AuthorBio/>

        <div className="grid gap-6">
          <AuthorSkills/>

          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-3">
                <Link
                    href={linkedinURL}
                    target="_blank" rel="nofollow"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4"/>
                  <span>LinkedIn</span>
                </Link>
                <Link
                    href={githubURL}
                    target="_blank" rel="nofollow"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <SiGithub className="h-4 w-4"/>
                  <span>GitHub</span>
                </Link>
                <Link
                    href={twitterURL}
                    target="_blank" rel="nofollow"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <SiX className="h-4 w-4"/>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
