"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Berapa minimal order quantity (MOQ) di Atelier Garment?",
    a: "Minimal pemesanan kami adalah 24 pcs per desain/kategori produk. Anda diperbolehkan membagi jumlah tersebut ke berbagai variasi ukuran (S, M, L, XL, XXL) tanpa biaya tambahan.",
  },
  {
    q: "Apakah bisa dibuatkan sampel fisik (proof sample) sebelum produksi massal?",
    a: "Untuk pemesanan partai besar di atas 100 pcs, kami menyediakan fasilitas pembuatan 1 pcs sample fisik untuk approval sebelum seluruh pesanan dipotong dan dijahit massal. Untuk order 24-99 pcs, approval menggunakan lembar SPK & Digital Mockup 3D detail presisi.",
  },
  {
    q: "Berapa lama estimasi pengerjaan pesanan?",
    a: "Estimasi normal adalah 7 hingga 14 hari kerja setelah approval SPK & pembayaran DP (Uang Muka). Kami juga melayani layanan express (rush order) 3-5 hari kerja sesuai dengan ketersediaan slot workshop harian.",
  },
  {
    q: "Bagaimana sistem pembayaran dan legalitas faktur?",
    a: "Sistem pembayaran terbagi atas Down Payment (DP) 50% untuk mulai produksi, dan pelunasan 50% saat barang selesai QC dan siap dikirim. Kami melayani invoice resmi berbadan usaha untuk kebutuhan instansi pemerintah, BUMN, dan korporat swasta.",
  },
  {
    q: "Bagaimana jika ada produk yang cacat jahitan atau sablon?",
    a: "Kami memberikan garansi retur/perbaikan 100% apabila ditemukan kesalahan produksi yang tidak sesuai dengan SPK approval (misal: jahitan bolong, salah ukuran, sablon terkelupas saat pertama kali diterima). Komplain berlaku 7 hari sejak barang tiba.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="border-b border-zinc-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded bg-zinc-100 border border-zinc-300 px-2.5 py-1 text-xs font-mono font-bold uppercase text-zinc-800 mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
            Pertanyaan Umum Seputar Order &amp; Produksi
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
