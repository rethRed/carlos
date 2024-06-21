import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { randomUUID } from "crypto";
import Link from "next/link";
import { ImageEnum } from "../enums";

type NewsType = {
    id: string
    image: string
    title: string
    description: string
}

export default function MoreNews() {

    const news: NewsType[] = [
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        },
        {
            id: randomUUID(),
            image: ImageEnum.BOLSONARO,
            title: "Mas e as joias do Bolsonaro?",
            description: "Era tudo a mesma coisa, confia."
        }
    ]



    return (<>
    <Navbar />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    news.map((singleNews) => {
                        return (
                            <div key={singleNews.id}>  
                              <Card>
                            <CardContent className="p-0">
                              <img
                                src={singleNews.image}
                                width="400"
                                height="225"
                                alt={singleNews.image}
                                className="object-cover aspect-video"
                              />
                            </CardContent>
                            <CardHeader className="px-4 pt-4">
                              <h3 className="text-lg font-bold">{singleNews.title}</h3>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                              <p className="text-muted-foreground">
                                {singleNews.description}
                              </p>
                            </CardContent>
                            <CardFooter className="px-4 pb-4">
                              <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                              >
                                Read More
                              </Link>
                            </CardFooter>
                          </Card>
                            </div>
                            
                        )
                    })
                }
            </div>
          </div>
        </section>
        <Footer />
    </>)
}
