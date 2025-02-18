import { cn } from "@/lib/utils";
import Link from "next/link";

export function ComprarButton({ classname }: { classname?: string }) {
    return (
        <Link
            href="#"
            className={cn(
                "inline-block rounded-full text-center px-6 py-2 max-w-[310px] max-h-[60px] opacity-95",
                "bg-gradient-to-bl from-[#5CCAFD] to-[#005A95] border border-[#55b6e0] shadow-[-1px_1px_40px_-5px_#49bdedb]",
                classname
            )}
        // style={{
        //     backgroundImage: `url('/assets/img/comprarButton.png')`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        // }}
        >
            <p className="text-lg font-bold text-white/90">QUERO COMPRAR AGORA!</p>
        </Link>)
}