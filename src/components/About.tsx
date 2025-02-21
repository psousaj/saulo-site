"use client"

import Image from "next/image"
import { ComprarButton } from "@/components/ComprarButton"
import { useReducer, useRef } from "react"

// Estados possíveis de cada seção
enum ReadMoreState {
    OPEN = 1,
    CLOSED = 0,
}

enum ReadMoreSection {
    ABOUT_SAULO = "saulo",
    ABOUT_EBOOK = "ebook",
}

type ReadMoreStateMap = Partial<Record<ReadMoreSection, ReadMoreState>>;

type ReadMoreAction = {
    target: ReadMoreSection;
    value: ReadMoreState;
};

const readMoreReducer = (state: ReadMoreStateMap, action: ReadMoreAction): ReadMoreStateMap => {
    return {
        ...state,
        [action.target]: action.value,
    };
}

export default function About() {
    const [readMoreState, dispatch] = useReducer(readMoreReducer, {
        saulo: ReadMoreState.CLOSED,
        ebook: ReadMoreState.CLOSED,
    })
    const refs = {
        saulo: useRef<HTMLDivElement>(null),
        ebook: useRef<HTMLDivElement>(null)
    }

    const toggleReadMore = (section: ReadMoreSection): void => {
        const isClosed = readMoreState[section] === ReadMoreState.CLOSED;

        dispatch({
            target: section,
            value: isClosed ? ReadMoreState.OPEN : ReadMoreState.CLOSED,
        });

        if (!isClosed) {
            switch (section) {
                case ReadMoreSection.ABOUT_SAULO:
                    refs.saulo?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    break
                case ReadMoreSection.ABOUT_EBOOK:
                    refs.ebook?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    break
                default:
                    break
            }
        }
    };


    return (
        <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="relative flex-1">
                <Image
                    src="/assets/img/saulo.png"
                    alt="Saulo Alves"
                    width={600}
                    height={700}
                    className="rounded-3xl absolute z-[-1] top-24 opacity-50 md:opacity-90 md:inset-0"
                    priority
                />
            </div>

            {/* Right Column - Content */}
            <div className="relative space-y-6 p-4 overflow-visible flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl mb-10 md:mb-0 font-bold text-[#0088FF]">
                    VOCÊ VAI APRENDER
                    <span className="block">COM QUEM SABE!</span>
                </h2>

                <h3 ref={refs.saulo} className="text-2xl font-bold text-white">Saulo Alves</h3>

                {/* About Saulo */}
                <div className="relative">
                    <article
                        data-readmore={readMoreState.saulo}
                        className="prose space-y-3 md:space-y-6 text-gray-300 text-lg transition-all duration-500 ease-in-out overflow-hidden relative
              max-lg:data-[readmore='0']:line-clamp-6 max-lg:data-[readmore='0']:max-h-[200px]
              max-lg:data-[readmore='1']:line-clamp-none max-lg:data-[readmore='1']:max-h-[1000px] mb-0"
                    >
                        <p>
                            Nutricionista, Bacharel em Direito, acadêmico de Educação Física, pós-graduado em Docência no Ensino
                            Superior, Bodybuilding e Life Coaching.
                        </p>

                        <p>
                            Com mais de seis anos de experiência como atleta de fisiculturismo e Coach, mais de 3000 pacientes, alunos e
                            vidas mudadas. Entre suas conquistas como treinador mais de 23 títulos overall e mais de 100 pódios em
                            competições com seus atletas. Entre suas maiores conquistas como atleta estão os pódios nos prestigiados
                            campeonatos Olympia Brasil e Arnold Classic, que o consolidaram como um dos principais atletas de sua
                            categoria Mens Physique.
                        </p>

                        <p>
                            Além de sua carreira de sucesso no fisiculturismo, Saulo Alves atua como especialista em Nutrição Esportiva
                            e Emagrecimento, oferecendo estratégias personalizadas para atletas de alto rendimento e para quem busca
                            melhorar sua saúde e performance.
                        </p>
                    </article>

                    {/* Ler mais - Só aparece no mobile */}
                    <span
                        onClick={() => toggleReadMore(ReadMoreSection.ABOUT_SAULO)}
                        className="text-blue-400 cursor-pointer hover:text-blue-300 text-sm self-end transition-all mt-2 max-lg:inline-block hidden"
                    >
                        {readMoreState.saulo === ReadMoreState.OPEN ? "Ler menos" : "Ler mais..."}
                    </span>
                </div>

                <ComprarButton className="mx-auto" />

                {/* About Light */}
                <div className="absolute top-44 w-full h-2/3 z-[-1]">
                    <Image src="/assets/img/aboutLight.png" fill alt="..." />
                </div>
            </div>


            {/* About Content */}
            <div className="col-span-1 p-4 md:col-span-2 w-full flex flex-1 flex-col gap-10 justify-center items-center">
                {/* Title */}
                <div ref={refs.ebook} className="text-center space-y-2">
                    <h4 className="font-bold text-3xl">Sobre o conteúdo: </h4>
                    <img src="/assets/img/line.png" alt="..." />
                </div>

                {/* Texto */}
                <div className="relative">
                    <article data-readmore={readMoreState.ebook} className="prose text-pretty text-gray-300 text-base text-left space-y-4 transition-all duration-500 ease-in-out overflow-hidden relative
              max-lg:data-[readmore='0']:line-clamp-[8] max-lg:data-[readmore='0']:max-h-[250px]
              max-lg:data-[readmore='1']:line-clamp-none max-lg:data-[readmore='1']:max-h-[1000px] mb-0 text-ellipsis">
                        <p>
                            Descubra como transformar sua alimentação e otimizar seus treinos
                            com este guia prático voltado para quem está começando no mundo da musculação!
                        </p>
                        <p>
                            Neste ebook, Saulo Alves, atleta de fisiculturismo e nutricionista, traz orientações simples
                            e eficazes para iniciantes que desejam alcançar seus objetivos, seja ganhar massa muscular ou perder gordura.
                            Com explicações detalhadas sobre macronutrientes, balanço calórico, suplementação e muito mais, você
                            aprenderá a montar suas próprias refeições, ajustar sua dieta de acordo com seus resultados e organizar
                            seus treinos de forma produtiva.
                        </p>
                        <p>
                            Além disso, o guia aborda a importância de manter uma alimentação equilibrada e mostra que é possível atingir
                            seus objetivos de forma flexível e sustentável, sem abrir mão da qualidade de vida.
                        </p>
                        <p>
                            Perfeito para quem deseja começar na musculação com o pé direito, este ebook é o primeiro passo para você
                            conquistar o corpo que deseja, com saúde e dedicação!
                        </p>
                    </article>
                    {/* Ler mais - Só aparece no mobile */}
                    <span
                        onClick={() => toggleReadMore(ReadMoreSection.ABOUT_EBOOK)}
                        className="text-blue-400 cursor-pointer hover:text-blue-300 text-sm text-right transition-all mt-4 max-lg:inline-block hidden"
                    >
                        {readMoreState.saulo === ReadMoreState.OPEN ? "Ler menos" : "Ler mais..."}
                    </span>
                </div>


                <ComprarButton />
            </div>

        </div>
    )
}