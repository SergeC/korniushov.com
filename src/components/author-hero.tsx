import {Button} from "@/components/ui/button";
import {Linkedin, MapPin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  authorLocation,
  authorName,
  authorOccupation,
  authorPhoto,
  githubURL,
  linkedinURL,
  twitterURL
} from "@/lib/consts";
import {SiGithub, SiX} from "@icons-pack/react-simple-icons";

export function AuthorHero() {
  return (<>
    <div className="flex flex-col items-center justify-center space-x-2 pb-8 md:flex-row mt-5">
      {authorPhoto && (
          <div className="pr-2 xl:pr-4">
            <Image
                src={authorPhoto}
                alt="avatar"
                width={224}
                height={224}
                className="h-48 w-48 min-w-48 rounded-full border-2 border-primary-400 md:h-52 md:w-52"
            />
          </div>
      )}
      <div className="text-center md:text-left">
        <h1 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight sm:text-3xl md:text-4xl bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
          {authorName}
        </h1>
        <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{authorOccupation}</div>
        <div className="md:text-md text-base text-gray-500 dark:text-gray-400 flex space-x-1 items-center justify-center md:justify-start"><MapPin className=" h-5 w-5"/> {authorLocation}</div>
        <div className="flex space-x-3 pt-6 justify-center md:justify-start">
          <Button variant="outline" size="icon" asChild>
            <Link href={linkedinURL} target="_blank" rel="nofollow">
              <Linkedin className="h-5 w-5"/>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={githubURL} target="_blank" rel="nofollow">
              <SiGithub className="h-5 w-5"/>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={twitterURL} target="_blank" rel="nofollow">
              <SiX className="h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>);
}
