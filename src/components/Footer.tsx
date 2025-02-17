import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="container mt-10 grid grid-cols-1 justify-center items-center md:grid-cols-4 w-full max-h-40 h-fit">
            <div className="col-span-1 mx-auto h-auto">
                <Image src="/assets/img/logo.png" alt="Logo" width={180} height={90} />
            </div>
            <div className="md:col-span-3 flex flex-wrap justify-between items-start">
                <div className="space-y-6 flex-1">
                    <p className="">
                        CRN: 18186
                        <span className="block mt-6">
                            &copy; Copyright 2025.
                            <span className="block">
                                Todos os direitos reservados.
                            </span>
                        </span>
                    </p>
                </div>
                <div className="flex flex-col justify-between gap-1 flex-1 h-auto">
                    <p>Acompanhe nas redes sociais</p>
                    <div className="self-start space-y-1">
                        <Link className="flex gap-2 justify-center items-center m-0" href="/instagram">
                            <Instagram width={20} height={20} />
                            @sauloalvesnutri
                        </Link>
                        <Link aria-disabled className="flex gap-2 justify-center items-center m-0" href="/instagram">
                            <Facebook fill="#fff" width={20} height={20} />
                            @sauloalvesnutri
                        </Link>
                    </div>
                </div>
                <div className="space-y-6 flex-1">
                    <p className="">
                        Localização
                        <span className="block mt-6">
                            Rua padre Pedro Ribeiro, 120 - Salesianos
                            <span className="block">
                                Juazeiro do Norte - CE, 63050-017
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

