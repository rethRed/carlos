import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BusIcon, ClubIcon, ComputerIcon, HistoryIcon, HomeIcon, TvIcon } from "lucide-react"
import { ImageEnum } from "../enums"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 px-4 md:px-6 py-12">
          <section>
            <div className="mb-8">
              <img
                src={ImageEnum.BOLSONARO}
                width="800"
                height="450"
                alt="bolsonaro"
                className="rounded-lg w-full aspect-[16/9] object-cover"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">Bolsonaro matou 100 milhoes de judeus</h2>
                <p className="text-muted-foreground mt-2">
                  Bolsonaro genocida frouxo acaba de resucitar hittler
                </p>
              </div>
            </div>
          </section>
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <nav className="space-y-2">
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>Lula meu presidente</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>Lula honesto</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>E as Joias do bolsonaro</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>Deepweb</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>Bolsonaro</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <TvIcon className="w-5 h-5" />
                  <span>Lula</span>
                </Link>
              </nav>
            </div>
           
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <Input type="email" placeholder="Enter your email so we can span you" className="w-full" />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
