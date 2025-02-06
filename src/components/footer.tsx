import {authorName} from "@/lib/consts";
import Link from "next/link";

export function Footer() {
  return (
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <ul className="inline-flex gap-4 mb-3">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          <br/>
          &copy; {new Date().getFullYear()} {authorName}. All rights reserved.
        </div>
      </footer>
  );
}
