import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function Results({ results }: { results: string[] }) {
    return (
        <div className="space-y-8">
            {/* Title */}
            <div className="text-center space-y-2">
                <h4 className="font-bold text-3xl">Resultados: </h4>
                <img src="/assets/img/line.png" alt="..." />
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full justify-evenly"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {results.map((result, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                            <Card className="border-0 bg-opacity-0 border-opacity-0">
                                <CardContent className="p-4">
                                    <Image src={result} className="rounded-xl" width={300} height={400} alt="Generic photo" />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-black" />
                <CarouselNext className="text-black" />
            </Carousel>
        </div>
    )
}