import { ComprarButton } from "@/components/ComprarButton";

export default function EbookItens() {
    return (

        <div className="container mx-auto w-full flex flex-1 flex-col gap-10 justify-center items-center">
            {/* Title */}
            <div className="text-center space-y-2">
                <h4 className="font-bold text-3xl">Tudo que você terá acesso: </h4>
                <img src="/assets/img/line.png" alt="..." />
            </div>
            {/* Itens */}
            <div className="leading-5 flex gap-6 flex-1 justify-evenly items-center flex-wrap text-base">
                <div className="max-w-[30%] w-min-[20%] h-20">
                    <span className="font-bold">Dieta Flexível: </span>
                    Balanço calórico, calcular suas necessidades calóricas.
                    melhorar seus resultados com base nas suas calorias.
                </div>
                <div className="max-w-[30%] min-w-[20%] h-20">
                    <span className="font-bold">Como se alimentar: </span>
                    Proteínas, carboidratos gorduras, fibras, micro e micronutrientes.
                </div>
                <div className="max-w-[30%] w-min-[20%] h-20">
                    <span className="font-bold">Suplementação: </span>
                    Quando e porque usar suplemento, principais tipos de suplementos, whey e creatina.
                </div>
                <div className="max-w-[30%] w-min-[20%] h-20">
                    <span className="font-bold">Manipulação de dieta para ganho e perda de peso: </span>
                    Ganhar peso, perder peso, bulking e cultting (Noções básicas).
                </div>
                <div className="max-w-[30%] w-min-[20%] h-20">
                    <span className="font-bold">Treinamento Físico: </span>
                    Musculação, estrutura do treino, quando mudar o  treino e volume do treino.
                </div>
            </div>
            {/* Button */}
            <ComprarButton />
        </div>
    )
}