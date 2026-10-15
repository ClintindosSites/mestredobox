import "./globals.css";
import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsappFloat";

export const metadata: Metadata = {
  title: {
    default: "Mestre do Box | Box de Banheiro Sob Medida em Belo Horizonte",
    template: "%s | Mestre do Box",
  },

  description:
    "Orçamento, instalação e manutenção de box de banheiro em Belo Horizonte. Trabalhamos com box frontal, box até o teto, box de canto e muito mais, e o melhor: melhor preço da Grande BH.",

  keywords: [
    "box de banheiro em bh",
    "box para banheiro bh",
    "orçamento box de banheiro",
    "preço box de banheiro bh",
    "instalação de box de banheiro em bh",
    "manutenção de box de banheiro",
    "comprar box de banheiro bh",
    "box de vidro",
    "box de banheiro sob medida",
    "box de vidro temperado",
    "box para banheiro pequeno",
    "box de banheiro moderno",
    "instalação de box",
    "box sob medida",
    "box sob medida em bh",
    "Mestre do Box",
  ],

  applicationName: "Mestre do Box",

  authors: [
    {
      name: "Mestre do Box",
    },
  ],

  creator: "Clintin dos Sites",
  publisher: "Clintin dos SItes",

  metadataBase: new URL("https://www.mestredobox.com.br"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mestre do Box | Box de Banheiro Sob Medida em Belo Horizonte",
    description:
      "Box de banheiro sob medida e personalizados como: box até o teto, box frontal, box de canto, box em L e muito mais",
    url: "https://www.mestredobox.com.br",
    siteName: "Mestre do Box",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image-1.webp",
        width: 1200,
        height: 630,
        alt: "Mestre do Box - Box de banheiro sob medida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mestre do Box | Box de Banheiro Sob Medida em Belo Horizonte",
    description:
      "Box de banheiro sob medida e personalizados como: box até o teto, box frontal, box de canto, box em L e muito mais",
    images: ["/og-image-1.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "home improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#171717]">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
