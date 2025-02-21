import { cn } from "@/lib/utils";
import Link from "next/link";

type ComprarButtonProps = {
    className?: string
    textClassName?: string
}

export function ComprarButton({ className, textClassName }: ComprarButtonProps) {
    return (
        <Link
            href="/comprar"
            className={cn(
                "inline-block rounded-full text-center px-6 py-2 max-w-[310px] max-h-[60px] opacity-95",
                "bg-gradient-to-bl from-[#5CCAFD] to-[#005A95] border border-[#55b6e0] shadow-[-1px_1px_40px_-5px_#49bdedb]",
                className
            )}
        // style={{
        //     backgroundImage: `url('/assets/img/comprarButton.png')`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        // }}
        >
            <p className={cn(
                "text-lg font-bold text-white/90",
                textClassName
            )}
            >
                QUERO COMPRAR AGORA!
            </p>
        </Link>)
}