import {AuthorHero} from "@/components/author-hero";
import {BlogList} from "@/components/blog-list";
import {AuthorSummury} from "@/components/author-summury";
import {AuthorSkills} from "@/components/author-skills";
import {
  authorName,
  authorOccupation,
  authorPhoto,
  githubURL,
  linkedinURL,
  siteDescription,
  twitterURL,
} from "@/lib/consts";
import {Person, WithContext} from "schema-dts";

export default function Home() {
  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': authorName,
    'description': siteDescription,
    'url': process.env.NEXT_PUBLIC_FRONTEND_HOST,
    'jobTitle': authorOccupation,
    'gender': 'male',
    'nationality': 'Ukrainian',
    'image': authorPhoto,
    'sameAs': [twitterURL, githubURL, linkedinURL],
    'alumniOf': 'Dnipro State University of Internal Affairs, Dnipro National University of Railway Transport named after academician V. Lazaryan',
    'birthPlace': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dnipro',
        'addressCountry': 'Ukraine',
        'postalCode': '49000',
      },
    }
  }
  return (
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        <AuthorHero/>

        <AuthorSummury/>

        <AuthorSkills/>

        <h2 className="text-2xl font-bold leading-8 tracking-tight">Latest Blog Posts</h2>
        <BlogList maxResults={2}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      </div>
  )
}
