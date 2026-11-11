import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "MAMOTIS — Una segunda vida. Una pieza única.",
  description: "MAMOTIS transforma abrigos vintage en bolsos artesanales únicos. Cada pieza tiene una historia anterior y otra por escribir.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MAMOTIS — Una segunda vida. Una pieza única.",
    description: "Bolsos artesanales únicos creados a partir de abrigos vintage de piel.",
    url: "https://mamotiss.com",
    siteName: "MAMOTIS",
    images: [{ url: "https://mamotiss.com/og-image.jpg", width: 1200, height: 630, alt: "MAMOTIS" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMOTIS — Una segunda vida. Una pieza única.",
    description: "Bolsos artesanales únicos creados a partir de abrigos vintage de piel.",
    images: ["https://mamotiss.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
