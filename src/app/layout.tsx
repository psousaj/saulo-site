import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import GridBackground from "@/components/Layout/GridBackground";


const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

// const domain = "www.sauloalvesnutri.com.br"
const domain = "www.saulo-alves.vercel.app"

export const metadata: Metadata = {
  title: "Saulo Alves - Nutricionista Esportivo",
  description: "Guia Prático de Dieta para Iniciantes na Musculação. Aprenda a montar sua dieta com um especialista em Nutrição Esportiva e Emagrecimento.",
  keywords: "nutrição, dieta, musculação, guia, iniciantes na musculação, alimentação saudável, emagrecimento, saúde",
  robots: "index, follow",
  authors: [
    { name: "José Pinheiro", url: "https://pinheirodev.com" }
  ],
  publisher: "José Pinheiro",
  alternates: {
    canonical: `https://${domain}`,
  },
  openGraph: {
    title: "Saulo Alves - Nutricionista",
    description: "Guia Prático de Dieta para Iniciantes na Musculação.",
    url: `https://${domain}`,
    type: "website",
    images: [
      {
        url: `https://${domain}/assets/img/principal.png`,
        width: 1200,
        height: 630,
        alt: "Saulo Alves - Guia de Dieta para Iniciantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seuTwitter",
    title: "Saulo Alves - Nutricionista",
    description: "Guia Prático de Dieta para Iniciantes na Musculação.",
    images: [`https://${domain}/assets/img/principal.png`],
  },
};


const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saulo Alves",
  "url": `https://${domain}`,
  "jobTitle": "Nutricionista Esportivo",
  "sameAs": [
    "https://www.instagram.com/sauloalvesnutri/",
    "https://br.linkedin.com/in/saulo-martins-alves-37b6a1155"
  ]
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
        <GoogleTagManager gtmId="GTM-T2Q5N8K8" />
        <meta name="google-site-verification" content="qm_OqDT1xrHIeume0ConisQQVoTThUR93uTW0_PYeJM" />
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      </head>
      <body className={`${poppins.variable} antialiased bg-black relative select-none`}>
        <GridBackground />
        <div className="relative z-10">
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
