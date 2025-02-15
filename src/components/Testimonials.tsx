import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

type Testimonial = {
    name: string
    stars: number
    text: string
}

export default function Results({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <div className="container mx-auto space-y-16">
            {/* Testimonials Carousel */}
            <div className="space-y-8">
                <div className="text-center space-y-2">
                    <h4 className="font-bold text-3xl">Veja o que meus pacientes estão dizendo sobre mim:
                    </h4>
                    <img src="/assets/img/line.png" alt="..." />
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                                <Card className="border-0 bg-opacity-0 border-opacity-0">
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                            <div className="flex text-yellow-400">
                                                {Array(testimonial.stars)
                                                    .fill(null)
                                                    .map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-current" />
                                                    ))}
                                            </div>
                                            <p className="text-gray-300 text-sm">{testimonial.text}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-black" />
                    <CarouselNext className="text-black" />
                </Carousel>
            </div>
        </div>
    )
}