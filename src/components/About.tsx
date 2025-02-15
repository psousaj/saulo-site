import Image from "next/image"
import { ComprarButton } from "@/components/ComprarButton"

export default function About() {
    return (

        <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="relative flex-1">
                <Image
                    src="/assets/img/saulo.png"
                    alt="Saulo Alves"
                    width={600}
                    height={700}
                    className="rounded-3xl absolute z-[-1]"
                    priority
                />
            </div>

            {/* Right Column - Content */}
            <div className="relative space-y-6 p-4 overflow-visible flex flex-col justify-center">
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

                <ComprarButton classname="mx-auto" />

                {/* About Light */}
                <div className="absolute bottom-0 w-full h-2/3 z-[-1]">
                    <Image src="/assets/img/aboutLight.png" fill objectFit="cover" alt="..." />
                </div>
            </div>


            {/* About Content */}
            <div className="col-span-1 md:col-span-2 w-full flex flex-1 flex-col gap-10 justify-center items-center">
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
    )
}