import type {Metadata, Viewport} from "next";
import {Inter} from 'next/font/google';
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Navigation} from "@/components/navigation";
import {Footer} from "@/components/footer";
import {
  authorName,
  siteDescription,
  siteKeywords,
  twitterUsername
} from "@/lib/consts";
import {PersonSchema} from "@/lib/jsonLd";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | ' + authorName,
    default: authorName, // a default is required when creating a template
  },
  description: siteDescription,
  keywords: siteKeywords,
  twitter: {
    title: authorName,
    description: siteDescription,
    creator: twitterUsername,
  },
  openGraph: {
    title: authorName,
    description: siteDescription,
    url: process.env.NEXT_PUBLIC_FRONTEND_HOST,
    siteName: authorName,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/feed.xml`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'fff' },
    { media: '(prefers-color-scheme: dark)', color: '000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <meta name="msapplication-TileColor" content="#000000" />
      <head />
      <body className={inter.className} suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="container mx-auto px-4 py-8 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(PersonSchema)}}/>
      </body>
      </html>
  );
}
