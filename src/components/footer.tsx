import {authorName} from "@/lib/consts";

export function Footer() {
  return (
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} {authorName}. All rights reserved.
        </div>
      </footer>
  );
}
