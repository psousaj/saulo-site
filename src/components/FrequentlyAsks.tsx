import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

type AskType = {
    id: string
    title: string
    content: string
}

type AskPropType = {
    asks: AskType[]
}

export default function FrequentlyAsks({ asks }: AskPropType) {
    return (
        <div className="container relative grid grid-cols-1 gap-6 md:grid-cols-2 md:pl-12">
            <div className="space-y-8 font-bold">
                <h2 className="text-3xl ml-6">Perguntas <span className="text-blue-500">frequentes</span></h2>
                <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="1">
                    {asks.map((item) => (
                        <AccordionItem
                            value={item.id}
                            key={item.id}
                            className="max-w-lg rounded-xl border-b-0 shadow-[0px_0px_7px_rgba(255,255,255,0.4)] border-[#8bd5fa] shadow-[#5DC2F3] bg-gradient-to-l to-[#03526E] from-[#002C46] pl-6 pr-4"
                        >
                            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline text-xl">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="pb-2 text-muted-foreground text-white font-light">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="mt-6 md:mt-0 col-span-1 flex flex-col justify-center gap-6">
                <div className="space-y-3 leading-5">
                    <h4 className="text-3xl font-bold">Ficou com <span className="block m-0 p-0">alguma dúvida?</span></h4>
                    <p className="font-light">Confira as respostas para as perguntas frequentes <span className="block">ou entre em contato comigo</span></p>
                </div>
                <Link href={'/contato'}>
                    <div
                        style={{
                            backgroundImage: "url('/assets/img/whatsappBox.png')",
                            backgroundPosition: "-31px center",
                            backgroundSize: "117% 158%"
                        }}
                        className="whatsappBox w-full max-w-[383px] xl:w-8/12 h-24 rounded-md flex justify-center items-center gap-4 p-4"
                    >
                        <Image src={"/assets/img/iconWhats.png"} alt="..." width={35} height={35} />
                        <div className="space-y-1">
                            <p className="font-bold space-y-1 leading-4 text-base text-start">
                                ATENDIMENTO POR WHATSAPP
                                <span className="block text-sm font-normal">Clique aqui para tirar suas dúvidas</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
}
