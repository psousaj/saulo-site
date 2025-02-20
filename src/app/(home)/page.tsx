import PaymentBox from "@/components/PaymentBox";
import FrequentlyAsks from "@/components/FrequentlyAsks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import EbookItens from "@/components/EbookItens";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  },
  {
    name: "Nome Paciente",
    stars: 5,
    text: "Descubra como transformar sua alimentação e otimizar seus treinos com este guia prático voltado para quem está começando no mundo da musculação!",
  }
]

const results = [
  "https://picsum.photos/400/500",
  "https://placebear.com/400/500",
  "https://random.imagecdn.app/400/500",
  "https://random-image-pepebigotes.vercel.app/api/random-image"
]

const ebookItens = [
  {
    title: "Dieta Flexível:",
    text: "Balanço calórico, calcular suas necessidades calóricas. Melhorar seus resultados com base nas suas calorias.",
  },
  {
    title: "Como se alimentar:",
    text: "Proteínas, carboidratos, gorduras, fibras, micro e micronutrientes.",
  },
  {
    title: "Suplementação:",
    text: "Quando e por que usar suplemento, principais tipos de suplementos, whey e creatina.",
  },
  {
    title: "Manipulação de dieta para ganho e perda de peso:",
    text: "Ganhar peso, perder peso, bulking e cutting (Noções básicas).",
  },
  {
    title: "Treinamento Físico:",
    text: "Musculação, estrutura do treino, quando mudar o treino e volume do treino.",
  },
]

const asks = [
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
]

export default function Home() {
  return (
    <main className="p-4 lg:p-10 pb-0 text-white grid grid-cols-1 gap-10 mx-auto max-w-[1300px]">
      {/* Hero Section */}
      <HeroSection />

      {/* Itens do Ebook */}
      <EbookItens ebookItems={ebookItens} />

      {/* About Section */}
      <About />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Results */}
      <Results results={results} />

      {/* Offer */}
      <PaymentBox />

      {/* Frequently Questions */}
      <FrequentlyAsks asks={asks} />

      <Footer />
    </main >
  )
}
