"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import {ModeToggle} from '@/components/mode-toggle'
import {FileText, User, PawPrint} from 'lucide-react'
import {authorName} from "@/lib/consts";
import {UkrainianFlag} from "@/components/icons";
import {MobileNav} from "@/components/mobile-nav";

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PawPrint className="h-6 w-6 animate-pulse"/>
            <span className="font-bold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">{authorName}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="https://x.com/hashtag/StandWithUkraine" className="font-bold italic" target="_blank" rel="nofollow">
              <div className="flex items-center space-x-2">
                <UkrainianFlag/>
                <span>#StandWithUkraine</span>
              </div>
            </Link>
            <Link
              href="/blog"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === '/blog' ? "text-foreground" : "text-foreground/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </div>
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === '/about' ? "text-foreground" : "text-foreground/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>About</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
