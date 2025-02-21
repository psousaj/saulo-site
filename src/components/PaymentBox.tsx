"use client"

import Image from "next/image"
import { ComprarButton } from "./ComprarButton"

export default function PaymentBox() {
    return (
        <div className="container relative flex justify-center w-full p-6 overflow-visible">
            {/* Center Image */}
            <div className="bg-gradient-to-l from-[#004370] to-[#4697BE] absolute w-[98.8svw] h-[310px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="-translate-x-6 md:translate-x-0 md:p-6 flex relative items-center gap-[135px]">
                {/* LEFT */}
                <div className="relative bg-gradient-to-tl from-[#000914] to-[#00415A] border border-[#2F87AC] shadow-[3px_-3px_40px_-1px_#2F87AC] space-y-4 p-4 md:p-6 max-w-[312px] md:max-w-[370px] rounded-2xl flex-1 h-[420px] flex justify-center flex-col">
                    {/* Header */}
                    <div className="text-left">
                        <p className="text-xl font-medium text-center mb-5 text-pretty">Você leva tudo isso por apenas:</p>
                        <div className="text-white text-xl font-semibold mx-auto">
                            <div className="flex flex-col items-start">
                                <span className="text-xl relative">
                                    <span className="line-through decoration-red-600 decoration-[2.5px]">de R$ 57,90</span>
                                </span>
                                {/* Main price display */}
                                <div className="text-4xl items-baseline font-bold relative">
                                    <span className="text-xl absolute top-[2px]">por:</span>
                                    <span className="text-5xl">5X R$</span>
                                    <span className="text-8xl font-bold leading-none">8</span>
                                    <span className="text-5xl absolute bottom-3">,25</span>
                                </div>

                                {/* À vista price */}
                                <div className="mt-2 mx-auto">
                                    <span className="text-xl">ou à vista por 37,90</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <ComprarButton className="px-4 md:px-2" textClassName="md:text-base" />

                    {/* Security Badges */}
                    <div className="mt-4">
                        <div className="text-sm mb-5 flex justify-center items-center gap-2">Ambiente 100% seguro <Image src="/assets/img/cadeado.png" width={18} height={8} alt="" /></div>
                        <div className="flex justify-evenly items-center gap-5">
                            <Image src={"/assets/img/creditCard.png"} width={32} height={16} title="Cartão de crédito" alt="Forma de pagamento Cartão de Crédito" />
                            <Image src={"/assets/img/barcode.png"} width={32} height={16} title="Boleto Bancário" alt="Forma de pagamento Boleto" />
                            <Image src={"/assets/img/pix.png"} width={32} height={16} title="Pix" alt="Forma de pagamento Pix" />
                            <Image src={"/assets/img/hotmart.png"} width={80} height={16} title="Hotmart" alt="Logo Hotmart" />
                        </div>
                    </div>

                    {/* Medal */}
                    <Image
                        src={"/assets/img/selo.png"}
                        alt=""
                        width={150}
                        height={75}
                        className="absolute -right-[85px] md:-right-[110px] scale-[.68] md:scale-100 top-1/2 -translate-y-[180px] md:-translate-y-[58%]"
                    />
                </div>

                {/* RIGHT */}
                <div className="hidden md:flex items-start mt-5 flex-1">
                    <div className="flex-1 space-y-7">
                        <h3 className="text-3xl leading-7 font-bold mb-2 flex flex-col">
                            Você não tem absolutamente
                            <span className="inline-block">nada a perder!</span>
                        </h3>
                        <p className="text-sm leading-normal">
                            Temos absoluta certeza de que o e-book Guia Prático de Dieta para Iniciantes na Musculação vai te trazer
                            muito conhecimento, mas se em até 7 dias após a compra, se você não estiver satisfeito com o material,
                            devolvemos todo o seu dinheiro!
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}

