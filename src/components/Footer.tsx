import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="container relative mt-10 grid grid-cols-1 gap-2 justify-center items-center md:grid-cols-4 w-full max-w-screen-xl max-h-40 h-fit">
            {/* LOGO LEFT */}
            <div className="col-span-1 mx-auto h-auto">
                <Image src="/assets/img/logo.png" alt="Logo" width={180} height={90} />
            </div>
            {/* Text Right */}
            <div className="w-full divide-white divide-double divide-x-2 grid grid-cols-1 md:col-span-3 gap-8 md:grid-cols-3 items-start p-6">
                {/* Copyright */}
                <div className="space-y-6 h-full p-2 border-l-2 border-white">
                    <p className="text-sm">
                        CRN: 18186
                        <span className="block mt-6">
                            &copy; Copyright 2025.
                            <span className="block">Todos os direitos reservados.</span>
                        </span>
                    </p>
                </div>
                {/* Social */}
                <div className="space-y-4 h-full p-2">
                    <p className="text-sm">Acompanhe nas redes sociais</p>
                    <div className="flex flex-col space-y-3">
                        <Link className="flex gap-2 items-center text-sm hover:opacity-80 transition-opacity" href="/instagram">
                            <Instagram width={20} height={20} />
                            @sauloalvesnutri
                        </Link>
                        <Link
                            aria-disabled
                            className="flex gap-2 items-center text-sm hover:opacity-80 transition-opacity"
                            href="/instagram"
                        >
                            <Facebook fill="#fff" width={20} height={20} />
                            @sauloalvesnutri
                        </Link>
                    </div>
                </div>
                {/* Address */}
                <div className="space-y-6 p-2">
                    <p className="text-sm">
                        Localização
                        <span className="block mt-6">
                            Rua padre Pedro Ribeiro, 120 - Salesianos
                            <span className="block">Juazeiro do Norte - CE, 63050-017</span>
                        </span>
                    </p>
                </div>
            </div>
            {/* Line */}
            <div className="w-full h-2 md:col-span-4 bg-gradient-to-r from-[#0092C8] to-[#0092C8]" />
        </div>
    );
};

