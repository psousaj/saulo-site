import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: "1",
        title: "Para quem é esse E-book?",
        content:
            "Esse e-book é ideal para iniciantes na musculação que desejam aprender a se alimentar corretamente, montar sua dieta de forma equilibrada e entender os fundamentos da suplementação e do treino para alcançar seus objetivos, seja ganhar massa muscular ou perder gordura.",
    },
    {
        id: "2",
        title: "Como funciona o prazo de entrega?",
        content:
            "Após a confirmação do pagamento, você receberá um e-mail com o link para acessar e baixar o e-book imediatamente. O processo é 100% digital e seguro.",
    },
    {
        id: "3",
        title: "Posso pagar por boleto ou Pix?",
        content:
            "Sim! Aceitamos pagamentos via cartão de crédito, boleto bancário e Pix. Caso opte pelo boleto, a compensação pode levar até 3 dias úteis.",
    },
    {
        id: "4",
        title: "Como acessar o produto?",
        content:
            "Assim que o pagamento for aprovado, você receberá um e-mail com o link para baixar o e-book. Certifique-se de inserir um e-mail válido no momento da compra para evitar problemas no recebimento do material.",
    },
    {
        id: "5",
        title: "Como faço para comprar?",
        content:
            "Basta clicar no botão de compra disponível na página, escolher a forma de pagamento e finalizar a transação. Após a aprovação do pagamento, você terá acesso imediato ao material.",
    },
    {
        id: "6",
        title: "Consigo ter resultados com o E-book?",
        content:
            "Sim! O e-book traz um guia prático e direto para te ajudar a otimizar sua alimentação e seus treinos. Se você seguir as orientações corretamente e manter disciplina e consistência, conseguirá alcançar seus objetivos com mais eficiência.",
    },
];


export default function FrequentlyAsks() {
    return (
        <div className="container relative grid grid-cols-2">
            <div className="space-y-8 font-bold">
                <h2 className="text-3xl ml-6">Perguntas <span className="text-blue-500">frequentes</span></h2>
                <Accordion type="single" collapsible className="w-full  space-y-4" defaultValue="3">
                    {items.map((item) => (
                        <AccordionItem
                            value={item.id}
                            key={item.id}
                            className="text-3xl max-w-lg rounded-xl border-b-0 shadow-[0px_0px_7px_rgba(255,255,255,0.4)] border-[#8bd5fa] shadow-[#5DC2F3] bg-gradient-to-l to-[#03526E] from-[#002C46] pl-6 pr-4"
                        >
                            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="pb-2 text-muted-foreground text-white font-light">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-6">
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
                        className="whatsappBox w-7/12 h-24 rounded-md flex justify-center items-center gap-4 p-4"
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
