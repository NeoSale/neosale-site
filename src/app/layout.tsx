import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeoSale AI | Automação de Vendas no WhatsApp com IA",
  description:
    "Transforme seu WhatsApp em uma máquina de vendas 24/7. Agentes de IA que respondem em 30 segundos, qualificam leads e agendam reuniões automaticamente.",
  keywords:
    "automação whatsapp, ia vendas, chatbot whatsapp, sdr ia, vendas automatizadas, neosale",
  authors: [{ name: "NeoSale AI" }],
  openGraph: {
    title: "NeoSale AI | Automação de Vendas no WhatsApp com IA",
    description:
      "Transforme seu WhatsApp em uma máquina de vendas 24/7. Agentes de IA que respondem em 30 segundos, qualificam leads e agendam reuniões automaticamente.",
    url: "https://neosaleai.com.br",
    siteName: "NeoSale AI",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoSale AI | Automação de Vendas no WhatsApp com IA",
    description:
      "Transforme seu WhatsApp em uma máquina de vendas 24/7. Agentes de IA que respondem em 30 segundos, qualificam leads e agendam reuniões automaticamente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
