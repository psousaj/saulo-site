import { cn } from "@/lib/utils";
import Link from "next/link";

export function ComprarButton({ classname }: { classname?: string }) {
    return (
        <Link
            href="#"
            className={cn(
                "inline-block rounded-full text-center px-8 py-6 max-w-[310px] max-h-[76px]",
                classname
            )}
            style={{
                backgroundImage: `url('/assets/img/comprarButton.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <p className="text-lg font-bold text-white/90">QUERO COMPRAR AGORA!</p>
        </Link>)
}