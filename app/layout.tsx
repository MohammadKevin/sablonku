import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier Konveksi & Sablon | Workshop Garment Apparel Custom Vendor Resmi",
  description:
    "Pusat produksi custom apparel resmi: Kaos Combed, Polo Shirt Lacoste, Kemeja PDH Drill, dan Jaket Hoodie. Minimal order 24 pcs, gratis mockup digital, presisi bordir komputer dan sablon DTF/Plastisol bergaransi.",
  keywords: [
    "konveksi kaos",
    "sablon dtf",
    "sablon plastisol",
    "kemeja pdh",
    "kemeja drill",
    "jaket hoodie custom",
    "polo shirt custom",
    "vendor konveksi indonesia",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-900 font-sans selection:bg-amber-500/20 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
