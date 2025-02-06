"use client"
// https://github.com/shadcn-ui/ui/blob/main/apps/www/components/mobile-nav.tsx
import * as React from "react"
import Link, {LinkProps} from "next/link"
import {useRouter} from "next/navigation"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {Home, FileText, User} from 'lucide-react'
import {authorName} from "@/lib/consts"
import {UkrainianFlag} from "@/components/icons"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-4 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <SheetTitle>
                  <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
                      <Home className="h-6 w-6 mr-2" />
                      <span className="font-bold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">{authorName}</span>
                  </MobileLink>
                </SheetTitle>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-4">
                        <MobileLink
                            href="https://x.com/hashtag/StandWithUkraine"
                            className="flex items-center space-x-2 font-bold italic"
                            onOpenChange={setOpen}
                            target="_blank"
                            rel="nofollow"
                        >
                            <UkrainianFlag/>
                            <span>#StandWithUkraine</span>
                        </MobileLink>
                        <MobileLink
                            href="/blog"
                            className="flex items-center space-x-2"
                            onOpenChange={setOpen}
                        >
                            <FileText className="h-4 w-4" />
                            <span>Blog</span>
                        </MobileLink>
                        <MobileLink
                            href="/about"
                            className="flex items-center space-x-2"
                            onOpenChange={setOpen}
                        >
                            <User className="h-4 w-4" />
                            <span>About</span>
                        </MobileLink>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
    target?: string
    rel?: string
}

function MobileLink({
                        href,
                        onOpenChange,
                        className,
                        children,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
