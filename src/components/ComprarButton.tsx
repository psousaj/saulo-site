import Link from "next/link";

export function ComprarButton() {
    return (
        <Link
            href="#"
            className="inline-block rounded-full text-center px-8 py-6"
            style={{
                backgroundImage: `url('/assets/img/comprarButton.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <p className="text-xl font-bold text-white/90">QUERO COMPRAR AGORA!</p>
        </Link>)
}