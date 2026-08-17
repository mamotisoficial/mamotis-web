import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import '@fontsource/cormorant-garamond/300.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/300-italic.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import "./globals.css";

const dmMono = DM_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "MAMOTIS — Arqueología del Lujo",
  description: "Bolsos únicos creados a partir de pieles rescatadas. Madrid.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
