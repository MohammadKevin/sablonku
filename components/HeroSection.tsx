"use client";

import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function HeroSection() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20tertarik%20dengan%20kaos%20polos%20dan%20sablon%20custom.%20Boleh%20minta%20info%20pricelist%20dan%20katalog?";

  const trustHighlights = [
    {
      icon: ShieldCheck,
      title: "100% Katun Combed Asli",
      desc: "Combed 20s/24s/30s adem & lembut",
    },
    {
      icon: Sparkles,
      title: "Grosir & Eceran Satuan/Partai",
      desc: "Tanpa batas order hingga ribuan pcs",
    },
    {
      icon: MapPin,
      title: "Workshop & Store di Malang",
      desc: "Pilih bahan & sample langsung di store",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-20 border-b border-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Status Pill / Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-6 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
          </span>
          <span className="tracking-wide">
            BLANKSHIRT MALANG • PUSAT KAOS POLOS &amp; SABLON CUSTOM TERLENGKAP
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] max-w-4xl mx-auto">
          Pusat Kaos Polos &amp; Sablon Custom Terlengkap di Malang - Blankshirt Malang
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
          Pusat grosir &amp; eceran Cotton Combed (20s/24s/30s), kaos polos distro, dan jasa sablon
          custom di Kota Malang. Kualitas premium, jahitan rapi standar distro, tanpa minimum order
          hingga ribuan pcs dengan garansi kepuasan.
        </p>

        {/* Dual CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pesan Sekarang via WA</span>
          </a>

          <a
            href="#produk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-zinc-800 bg-white px-6 py-3.5 text-sm font-bold text-zinc-900 hover:bg-zinc-50 active:scale-95 transition-all"
          >
            <span>Order Custom / Cek Pricelist</span>
          </a>
        </div>

        {/* 3 Trust Cards Highlight Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-200/90 bg-white p-3 sm:p-5 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3 py-2 sm:py-1 px-3 text-left"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
