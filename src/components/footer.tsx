import Link from "next/link";

export function Footer() {
  return (
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} My Personal Website. All rights reserved.
          <br/>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-1">&bull;</span>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
  );
}
