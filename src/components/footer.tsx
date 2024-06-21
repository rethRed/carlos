import { Home, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function Footer() {

    return <>
       <footer className="bg-muted border-t">
        <div className="container px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2024 reth&apos;s News. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              About our mission
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              wanna make a bussiness contact on deepweb?
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              How we steal you data
            </Link>
          </div>
        </div>
      </footer>
      </>
}

  
  