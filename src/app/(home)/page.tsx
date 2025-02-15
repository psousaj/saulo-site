import Image from "next/image";
import { ComprarButton } from "@/components/ComprarButton";
import PaymentBox from "@/components/PaymentBox";
import FrequentlyAsks from "@/components/FrequentlyAsks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import EbookItens from "@/components/EbookItens";
import HeroSection from "@/components/HeroSection";

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

export default function Home() {
  return (
    <main className="p-10 text-white grid grid-cols-1 gap-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Itens do Ebook */}
      <EbookItens />

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
    </main >
  )
}
