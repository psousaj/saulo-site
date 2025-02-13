import Link from "next/link";
import { button } from '@/components/Images';

export function ComprarButton() {
    return (
        <Link
            href="#"
            className="inline-block rounded-full text-center px-8 py-6"
            style={{
                backgroundImage: `url(${button.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <p className="text-xl font-bold text-white/90">QUERO COMPRAR AGORA!</p>
        </Link>)
}