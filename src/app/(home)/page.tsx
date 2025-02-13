import Image from "next/image";
import { ComprarButton } from "@/components/ComprarButton";
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  }
]

const results = [
  "https://picsum.photos/400/500",
  "https://placebear.com/400/500",
  "https://random.imagecdn.app/400/500",
  "https://random-image-pepebigotes.vercel.app/api/random-image"
]

export default function Home() {
  return (
    <main className="p-10 text-white">
      {/* Hero Section */}
      <div className="container mx-auto grid h-screen grid-cols-1 lg:grid-cols-2 items-center">
        {/* Light */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image src="/assets/img/topLight.png" fill alt="..." />
        </div>

        {/* Left Column - Text Content */}
        <div className="space-y-8 lg:pr-0">
          <div className="space-y-6">
            <h1 className="text-4xl space-y-3 font-bold leading-relaxed text-white md:text-5xl lg:text-6xl">
              <span className="block">Guia Prático de Dieta</span>
              <span className="block font-normal">para Iniciantes na</span>
              <span className="block">Musculação:</span>
            </h1>
          </div>

          <p className="text-3xl leading-7 text-white/90">
            Transforme sua alimentação
            <span className="block">e otimize seus treinos</span>
          </p>

          <ComprarButton />
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end overflow-hidden">
          <Image
            src="/assets/img/principal.png"
            alt="Guia Prático de Dieta para Musculação"
            width={600}
            height={700}
            className="object-contain max-w-none w-[150%] lg:w-full"
            priority
          />
        </div>
      </div>
      {/* Itens do Ebook */}
      <div className="container mx-auto w-full flex flex-1 flex-col gap-10 justify-center items-center">
        {/* Title */}
        <div className="text-center space-y-2">
          <h4 className="font-bold text-3xl">Tudo que você terá acesso: </h4>
          <img src="/assets/img/line.png" alt="..." />
        </div>
        {/* Itens */}
        <div className="leading-5 flex gap-6 flex-1 justify-evenly items-center flex-wrap text-base">
          <div className="max-w-[30%] w-min-[20%] h-20">
            <span className="font-bold">Dieta Flexível: </span>
            Balanço calórico, calcular suas necessidades calóricas.
            melhorar seus resultados com base nas suas calorias.
          </div>
          <div className="max-w-[30%] min-w-[20%] h-20">
            <span className="font-bold">Como se alimentar: </span>
            Proteínas, carboidratos gorduras, fibras, micro e micronutrientes.
          </div>
          <div className="max-w-[30%] w-min-[20%] h-20">
            <span className="font-bold">Suplementação: </span>
            Quando e porque usar suplemento, principais tipos de suplementos, whey e creatina.
          </div>
          <div className="max-w-[30%] w-min-[20%] h-20">
            <span className="font-bold">Manipulação de dieta para ganho e perda de peso: </span>
            Ganhar peso, perder peso, bulking e cultting (Noções básicas).
          </div>
          <div className="max-w-[30%] w-min-[20%] h-20">
            <span className="font-bold">Treinamento Físico: </span>
            Musculação, estrutura do treino, quando mudar o  treino e volume do treino.
          </div>
        </div>
        {/* Button */}
        <ComprarButton />
      </div>
      {/* About Section */}
      <div className="container mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative overflow-visible">
        {/* Left Column - Image */}
        <div className="relative">
          <Image
            src="/assets/img/saulo.png"
            alt="Saulo Alves"
            width={600}
            height={700}
            className="rounded-3xl"
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className="relative space-y-6 p-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0088FF]">
            VOCÊ VAI APRENDER
            <span className="block">COM QUEM SABE!</span>
          </h2>

          <h3 className="text-2xl font-bold text-white">Saulo Alves</h3>

          <p className="text-gray-300 text-lg">
            Nutricionista, Bacharel em Direito, acadêmico de Educação Física, pós-graduado em Docência no Ensino
            Superior, Bodybuilding e Life Coaching.
          </p>

          <p className="text-gray-300 text-lg">
            Com mais de seis anos de experiência como atleta de fisiculturismo e Coach, mais de 3000 pacientes, alunos e
            vidas mudadas. Entre suas conquistas como treinador mais de 23 títulos overall e mais de 100 pódios em
            competições com seus atletas. Entre suas maiores conquistas como atleta estão os pódios nos prestigiados
            campeonatos Olympia Brasil e Arnold Classic, que o consolidaram como um dos principais atletas de sua
            categoria Mens Physique.
          </p>

          <p className="text-gray-300 text-lg">
            Além de sua carreira de sucesso no fisiculturismo, Saulo Alves atua como especialista em Nutrição Esportiva
            e Emagrecimento, oferecendo estratégias personalizadas para atletas de alto rendimento e para quem busca
            melhorar sua saúde e performance.
          </p>

          <ComprarButton />
        </div>

        {/* About Light */}
        <div className="absolute top-[15%] -right-[4.6%] w-full h-1/2 z-[-1]">
          <Image src="/assets/img/aboutLight.png" fill alt="..." />
        </div>

        {/* About Content */}
        <div className="col-span-2 -translate-y-52 w-full flex flex-1 flex-col gap-10 justify-center items-center">
          {/* Title */}
          <div className="text-center space-y-2">
            <h4 className="font-bold text-3xl">Sobre o conteúdo: </h4>
            <img src="/assets/img/line.png" alt="..." />
          </div>
          {/* Texto */}
          <p className="text-gray-300 text-base text-left space-y-4">
            <span className="inline-block">Descubra como transformar sua alimentação e otimizar seus treinos
              com este guia prático voltado para quem está começando no mundo da musculação!
            </span>
            <span className="inline-block">
              Neste ebook, Saulo Alves, atleta de fisiculturismo e nutricionista, traz orientações simples
              e eficazes para iniciantes que desejam alcançar seus objetivos, seja ganhar massa muscular ou perder gordura.
              Com explicações detalhadas sobre macronutrientes, balanço calórico, suplementação e muito mais, você
              aprenderá a montar suas próprias refeições, ajustar sua dieta de acordo com seus resultados e organizar
              seus treinos de forma produtiva.
            </span>
            <span className="inline-block">
              Além disso, o guia aborda a importância de manter uma alimentação equilibrada e mostra que é possível atingir
              seus objetivos de forma flexível e sustentável, sem abrir mão da qualidade de vida.
            </span>
            <span className="inline-block">
              Perfeito para quem deseja começar na musculação com o pé direito, este ebook é o primeiro passo para você
              conquistar o corpo que deseja, com saúde e dedicação!
            </span>
          </p>

          <ComprarButton />
        </div>

      </div>
      {/* Testimonials */}
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


        {/* Results */}
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
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {results.map((result, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="border-0 bg-opacity-0 border-opacity-0">
                    <CardContent className="p-4">
                      <Image src={result} className="rounded-xl" width={400} height={500} alt="Generic photo" />
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
    </main>
  )
}
