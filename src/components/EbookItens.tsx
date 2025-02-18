import { ComprarButton } from "@/components/ComprarButton";

type EbookItem = {
    title: string
    text: string
}

export default function EbookItens({ ebookItems }: { ebookItems: EbookItem[] }) {
    return (

        <div className="container mx-auto w-full flex flex-1 flex-col gap-10 justify-center items-center">
            {/* Title */}
            <div className="text-center space-y-2">
                <h4 className="font-bold text-3xl">Tudo que você terá acesso: </h4>
                <img src="/assets/img/line.png" alt="..." />
            </div>
            {/* Itens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center text-base leading-5">
                {ebookItems.map((item, index) => (
                    <div key={index} className="w-full h-20">
                        <span className="font-bold">{item.title} </span>
                        {item.text}
                    </div>
                ))}
            </div>

            {/* Button */}
            <ComprarButton />
        </div>
    )
}