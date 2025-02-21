import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/Layout/GridBackground";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Saulo Alves",
  description: "Guia Prático de Dieta para Iniciantes na Musculação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="creator" content="José Pinheiro" />
      </head>
      <body className={`${poppins.variable} antialiased bg-black relative`}>
        <GridBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
