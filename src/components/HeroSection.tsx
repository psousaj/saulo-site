import Image from 'next/image';
import { ComprarButton } from '@/components/ComprarButton';

export default function HeroSection() {
    return (

        <div className="container mx-auto grid md:h-dvh gap-10 md:gap-2 grid-cols-1 lg:grid-cols-2 items-center">
            {/* Light */}
            <div className="absolute inset-0 w-full h-[250px] md:h-[550px] z-[-1]">
                <Image src="/assets/img/topLight.png" fill alt="..." />
            </div>

            {/* Left Column - Text Content */}
            <div className="space-y-8 mx-auto lg:pr-0">
                <div className="space-y-6 z-10">
                    <h1 className="text-3xl space-y-3 font-bold leading-10 md:leading-relaxed text-white md:text-5xl lg:text-6xl">
                        <span className="block">Guia Prático de Dieta</span>
                        <span className="block font-normal">para Iniciantes na</span>
                        <span className="block">Musculação:</span>
                    </h1>
                </div>

                <div className="hidden md:inline-block text-2xl md:text-3xl leading-7 text-white/90">
                    <p>Transforme sua alimentação</p>
                    <p className="block">e otimize seus treinos</p>
                </div>

                <ComprarButton className='hidden md:inline-block' />
            </div>

            {/* Right Column - Image */}
            <div className="relative flex justify-center lg:justify-end overflow-y-visible max-h-[550px] md:h-full w-full">
                <Image
                    src="/assets/img/principal.png"
                    alt="Guia Prático de Dieta para Musculação"
                    width={600}
                    height={700}
                    // className="relative z-[-1] scale-105 md:scale-100 -top-16 md:inset-0 object-contain w-[150%] lg:w-full"
                    className="relative z-[-1] scale-105 md:inset-0 object-contain w-[150%] lg:w-full"
                    priority
                />
            </div>
        </div>
    )
}