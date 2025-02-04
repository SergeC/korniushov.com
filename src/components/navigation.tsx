"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import {ModeToggle} from '@/components/mode-toggle'
import {Home, FileText, User} from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold">Home</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
        </div>
      </div>
    </header>
  )
}
