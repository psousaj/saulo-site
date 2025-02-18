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
      <FrequentlyAsks />

      <Footer />
    </main >

  )
}
