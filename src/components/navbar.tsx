import { Home, NewspaperIcon, Search, SearchIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Navbar() {

    return <>
   <header className="bg-primary text-primary-foreground py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <NewspaperIcon className="w-6 h-6" />
            <span className="text-xl font-bold">reth&apos;s News</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="/news" className="hover:underline" prefetch={false}>
              News
            </Link>
            <Link href="/more-news" className="hover:underline" prefetch={false}>
              More news
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <Input type="text" placeholder="Search Bolsonaro or Lula news..." className="pr-10 w-full" />
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      </>
}

  
  