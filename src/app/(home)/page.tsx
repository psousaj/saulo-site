import Image from "next/image";
import { ComprarButton } from "@/components/ComprarButton";
import { aboutLight, topLight, line, principal } from "@/components/Images";

export default function Home() {
  return (
    <main className="p-10">
      <div className="container mx-auto grid h-screen grid-cols-1 lg:grid-cols-2 items-center">
        {/* Light */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image src={topLight} alt="..." />
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
            src={principal}
            alt="Guia Prático de Dieta para Musculação"
            width={600}
            height={700}
            className="object-contain max-w-none w-[150%] lg:w-full"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto w-full flex flex-1 justify-center items-center">
        {/* Title */}
        <div className="text-center space-y-2">
          <h3 className="font-bold text-3xl">Tudo que você terá acesso: </h3>
          <Image src={line} alt="..." />
        </div>
      </div>
    </main>
  )
}
