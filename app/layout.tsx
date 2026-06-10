import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import BfcacheHandler from "@/components/ui/BfcacheHandler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berracast.com"),
  title: "Berracast | El Podcast Premium para Emprendedores Berracos",
  description:
    "El podcast oficial para mentes inconformes. Charlas reales sobre negocios, mentalidad de crecimiento, desarrollo personal y superación sin filtros. Escucha el taller y conferencias en vivo.",
  keywords: [
    "podcast berracast",
    "emprendimiento colombia",
    "negocios latam",
    "mentalidad berraca",
    "taller de podcasting",
    "liderazgo y desarrollo",
    "historias de exito",
  ],
  authors: [{ name: "Berracast Team" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://berracast.com",
    siteName: "Berracast",
    title: "Berracast | El Podcast Premium para Emprendedores Berracos",
    description:
      "Charlas reales sobre negocios, mentalidad y desarrollo personal con líderes de la industria. No te pierdas el evento y taller exclusivo.",
    images: [
      {
        url: "/OgImage.webp",
        width: 1200,
        height: 630,
        alt: "Berracast Podcast Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berracast | Emprendimiento y Mentalidad sin Filtros",
    description:
      "Charlas de alto nivel sobre negocios, mentalidad y podcasting. Accede a los talleres en vivo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://berracast.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${inter.variable} ${raleway.variable} antialiased bg-brand-black text-text-primary overflow-x-hidden`}
      >
        <BfcacheHandler />
        {children}
      </body>
    </html>
  );
}
