import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Saulo Alves",
  description: "Guia Prático de Dieta para Iniciantes na Musculação",
  creator: "Saulo Alves"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased max-w-[100vw] relative`}
        style={{
          backgroundImage: `url('/assets/img/BG.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </body>
    </html>
  );
}
