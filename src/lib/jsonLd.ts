// !!! Waning: always test pages with all validators below and fix all errors before deploying to production.
// https://search.google.com/test/rich-results
// https://validator.schema.org/
// https://classyschema.org/Visualisation

/**
 * Reference:
 * https://www.danielkcheung.com/scheming-schemas/how-to-describe-someone-with-structured-data/ !!
 * https://developers.google.com/search/docs/appearance/structured-data/profile-page
 * https://www.fabian-kleiser.de/blog/adding-json-ld-to-a-personal-website/
 * https://jsonld.com/person/
 *
 */
import {
    authorName,
    authorOccupation,
    authorPhoto,
    githubURL,
    indiehackersURL,
    linkedinURL,
    scholarURL,
    siteDescription,
    twitterURL,
} from "@/lib/consts";
import {AboutPage, Blog, BlogPosting, Person, ProfilePage, WithContext} from "schema-dts";
import {getAllPosts, Module, Post} from "@/lib/blog";

const personId = `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/#person`;
const profilePageId = `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/#profilepage`;
const aboutPageId = `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/about`;
const blogId = `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/blog`;

export const PersonSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: authorName,
    honorificPrefix: 'Mr.',
    description: siteDescription,
    url: process.env.NEXT_PUBLIC_FRONTEND_HOST,
    jobTitle: {
        '@type': 'DefinedTerm',
        name: authorOccupation,
        description: 'Providing technical guidance and mentorship to a team of software developers',
        '@id': 'https://www.wikidata.org/wiki/Q4105860',
    },
    // hasOccupation: { // triggers error in rich results test
    //     '@type': 'Occupation',
    //     name: authorOccupation,
    //     qualifications: 'Providing technical guidance and mentorship to a team of software developers',
    //     '@id': 'https://www.wikidata.org/wiki/Q4105860',
    // },
    gender: 'male',
    nationality: {
        '@type': 'Country',
        name: 'Ukraine',
        '@id': 'https://www.wikidata.org/wiki/Q212',
    },
    image: authorPhoto,
    sameAs: [twitterURL, githubURL, linkedinURL, indiehackersURL, scholarURL],
    alumniOf: [{
        '@type': 'EducationalOrganization',
        name: 'Dnipro State University of Internal Affairs',
        '@id': 'https://www.wikidata.org/wiki/Q4163228',
    }, {
        '@type': 'EducationalOrganization',
        name: 'Dnipro National University of Railway Transport named after academician V. Lazaryan',
        '@id': 'https://www.wikidata.org/wiki/Q4163239',
    }],
    birthPlace: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dnipro',
            addressCountry: 'Ukraine',
            postalCode: '49000',
            '@id': 'https://www.wikidata.org/wiki/Q48256',
        },
    },
    knowsLanguage: [{
        '@type': 'Language',
        name: 'English',
        alternateName: 'en-US',
    }, {
        '@type': 'Language',
        name: 'Ukrainian',
        alternateName: 'uk-UA',
    }],
    knowsAbout: [{
        '@type': 'DefinedTerm',
        name: 'Software Development',
        '@id': 'https://www.wikidata.org/wiki/Q638608',
    }, {
        '@type': 'DefinedTerm',
        name: 'Software Engineering',
        '@id': 'https://www.wikidata.org/wiki/Q80993',
    }, {
        '@type': 'DefinedTerm',
        name: 'Symfony',
        '@id': 'https://www.wikidata.org/wiki/Q1322933',
    }, {
        '@type': 'DefinedTerm',
        name: 'PHP',
        '@id': 'https://www.wikidata.org/wiki/Q59',
    }, {
        '@type': 'DefinedTerm',
        name: 'FinTech',
        '@id': 'https://www.wikidata.org/wiki/Q16319025',
    }, {
        '@type': 'DefinedTerm',
        name: 'Artificial Intelligence',
        '@id': 'https://www.wikidata.org/wiki/Q11660',
    }, {
        '@type': 'DefinedTerm',
        name: 'Startups',
        '@id': 'https://www.wikidata.org/wiki/Q129238',
    }],
    mainEntityOfPage: {'@id': aboutPageId},
    subjectOf: {'@id': aboutPageId},
}

export const ProfilePageSchema: WithContext<ProfilePage> = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': profilePageId,
    mainEntity: {
        name: authorName,
        '@id': personId,
    },
    // "isPartOf":{'@id': `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/#site`},
}


// export const WebPageSchema: WithContext<WebPage> = {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     '@id': aboutPageId,
//     url: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/about`,
//     inLanguage: 'en-US',
//     isPartOf: {
//         '@id': `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/#site`,
//     },
//     about: {'@id': personId},
//     mainEntity: {'@id': personId},
// }

export const AboutPageSchema: WithContext<AboutPage> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': aboutPageId,
    url: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/about`,
    inLanguage: 'en-US',
    // isPartOf: {
    //     '@id': aboutPageId,
    // },
    mainEntity: {'@id': personId},
}

const posts = getAllPosts(Module.Blog);
export const BlogSchema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': blogId,
    url: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/blog`,
    inLanguage: 'en-US',
    // isPartOf: {
    //     '@id': aboutPageId,
    // },
    name: `${authorName}'s Blog`,
    publisher: {'@id': personId,},
    blogPost: posts.map((post: Post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.createdAt.toISOString(),
        url: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/blog/${post.slug}`,
        author: {'@id': personId},
    })),
}

export function blogPostingSchema(post: Post): WithContext<BlogPosting> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.createdAt.toISOString(),
        url: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/blog/${post.slug}`,
        author: {'@id': personId},
    };
}

// const graph: Graph = {
//     '@context': 'https://schema.org',
//     '@graph': [
//         {
//             '@type': 'Person',
//             '@id': 'https://my.site/#alyssa',
//             name: 'Alyssa P. Hacker',
//             hasOccupation: {
//                 '@type': 'Occupation',
//                 name: 'LISP Hacker',
//                 qualifications: 'Knows LISP',
//             },
//             mainEntityOfPage: {'@id': 'https://my.site/about/#page'},
//             subjectOf: {'@id': 'https://my.site/about/#page'},
//         },
//         {
//             '@type': 'AboutPage',
//             '@id': 'https://my.site/#site',
//             url: 'https://my.site',
//             name: "Alyssa P. Hacker's Website",
//             inLanguage: 'en-US',
//             description: 'The personal website of LISP legend Alyssa P. Hacker',
//             mainEntity: {'@id': 'https://my.site/#alyssa'},
//         },
//         {
//             '@type': 'WebPage',
//             '@id': 'https://my.site/about/#page',
//             url: 'https://my.site/about/',
//             name: "About | Alyssa P. Hacker's Website",
//             inLanguage: 'en-US',
//             isPartOf: {
//                 '@id': 'https://my.site/#site',
//             },
//             about: {'@id': 'https://my.site/#alyssa'},
//             mainEntity: {'@id': 'https://my.site/#alyssa'},
//         },
//     ],
// };