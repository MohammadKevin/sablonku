"use client";

import { Printer, Tag, BadgePercent, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Printer,
      title: "Sablon Berkualitas & Tahan Lama",
      description:
        "Menggunakan mesin & tinta premium seperti DTF (Direct Transfer Film) dan Plastisol Curing, warna tajam dan tahan cuci berkali-kali.",
      points: [
        "DTF High-Res 300 DPI / Plastisol Premium",
        "Warna solid, gradasi tajam & cerah",
        "Tidak mudah retak & luntur saat dicuci",
      ],
    },
    {
      icon: Tag,
      title: "Custom Brand & Makloon Lengkap",
      description:
        "Bagi Anda yang merintis clothing brand sendiri, kami sediakan jasa sablon lengkap dengan aksesoris brand eksklusif.",
      points: [
        "Custom label woven leher & label satin",
        "Hangtag tebal & packaging plastik rapi",
        "Pilihan pola potong (regular, boxy, oversized)",
      ],
    },
    {
      icon: BadgePercent,
      title: "Harga Grosir & Fleksibel",
      description:
        "Mendukung pesanan mulai dari kuantiti kecil untuk sampel hingga pesanan ribuan pcs untuk skala korporat dengan harga terbaik.",
      points: [
        "Tanpa minimum order ketat (bisa satuan)",
        "Harga grosir berjenjang semakin hemat",
        "Garansi tepat waktu & jaminan garansi reject",
      ],
    },
  ];

  return (
    <section id="layanan" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            LAYANAN &amp; KEUNGGULAN KAMI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Siap Cetak Kaos Brand, Event &amp; Komunitas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Solusi terpercaya dari Blankshirt Malang untuk memproduksi apparel promosi, merchandise
            event, hingga clothing brand dengan standar kualitas terjamin.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
              >
                <div>
                  {/* Green Round Badge Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Points with Checkmarks */}
                <div className="mt-6 space-y-2 border-t border-zinc-100 pt-4">
                  {service.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
