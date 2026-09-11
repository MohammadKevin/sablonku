import type { Metadata } from "next";
import { Raleway, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blankshirt Malang (Kaos Polos Malang) - Pusat Kaos Polos & Sablon Custom Terlengkap di Malang",
  description:
    "Blankshirt Malang: Pusat grosir & eceran Cotton Combed 20s/24s/30s, kaos polos distro, kaos oversize, dan jasa sablon custom DTF & plastisol terlengkap di Kota Malang.",
  keywords: [
    "blankshirt malang",
    "kaos polos malang",
    "sablon kaos malang",
    "cotton combed malang",
    "kaos oversize malang",
    "sablon dtf malang",
    "grosir kaos polos malang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${raleway.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-900 font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
