"use client"

import Image from "next/image"
import { ComprarButton } from "./ComprarButton"

export default function PaymentBox() {
    return (
        <div className="container w-full mx-auto p-6 relative overflow-visible">
            {/* Center Image */}
            <Image
                src={'/assets/img/blueRectPagamento.png'}
                alt="..."
                fill
                className="absolute w-[150%] h-fit z-[-1] brightness-75"
            />

            <div className="p-6 flex relative items-center gap-[135px]">
                {/* LEFT */}
                <div
                    style={{
                        backgroundImage: "url('/assets/img/paymentBox.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "118% 116.5%",
                        backgroundPosition: "center",
                    }}
                    className="left relative space-y-3 p-10 rounded-2xl w-[370px] h-[420px] flex justify-center flex-col">
                    {/* Header */}
                    <div className="text-left">
                        <p className="text-lg font-medium text-center mb-5">Você leva tudo isso por apenas:</p>
                        <div className="text-white text-xl font-semibold">
                            <div className="flex flex-col items-start">
                                <span className="text-xl relative">
                                    <span className="line-through decoration-red-600 decoration-[2.5px]">de R$ 57,90</span>
                                </span>
                                {/* Main price display */}
                                <div className="text-4xl items-baseline font-bold relative">
                                    <span className="text-xl absolute top-1">por:</span>
                                    <span className="text-5xl">5X R$</span>
                                    <span className="text-8xl font-bold leading-none">6</span>
                                    <span className="text-5xl absolute bottom-3">,98</span>
                                </div>

                                {/* À vista price */}
                                <div className="mt-2 mx-auto">
                                    <span className="text-lg">ou à vista por 34,90</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <ComprarButton classname="bg-[100%_110%] px-4" />

                    {/* Security Badges */}
                    <div className="mt-4">
                        <p className="text-sm mb-5 flex justify-center items-center gap-2">Ambiente 100% seguro <Image src="/assets/img/cadeado.png" width={18} height={8} alt="" /></p>
                        <div className="flex justify-evenly items-center gap-5">
                            <Image src={"/assets/img/creditCard.png"} width={32} height={16} alt="" />
                            <Image src={"/assets/img/barcode.png"} width={32} height={16} alt="" />
                            <Image src={"/assets/img/pix.png"} width={32} height={16} alt="" />
                            <Image src={"/assets/img/hotmart.png"} width={80} height={16} alt="" />
                        </div>
                    </div>

                    {/* Medal */}
                    <Image
                        src={"/assets/img/selo.png"}
                        alt=""
                        width={150}
                        height={75}
                        className="absolute -right-[120px] top-1/2 -translate-y-1/2"
                    />
                </div>

                {/* RIGHT */}
                <div className="flex items-start mt-5 flex-1">
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
        </div>
    )
}

