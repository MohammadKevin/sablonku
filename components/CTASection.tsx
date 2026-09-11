"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export default function CTASection() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20pembuatan%20kaos%20polos%20dan%20sablon%20custom.";

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200/90 bg-zinc-50/50 p-8 sm:p-14 text-center shadow-xs">
          {/* Tag */}
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            KONSULTASI SEKARANG • BLANKSHIRT MALANG
          </span>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight max-w-2xl mx-auto leading-snug">
            Butuh Kaos Polos Cepat atau Mau Bikin Sablon Custom Komunitas?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-xs sm:text-base text-zinc-600 leading-relaxed max-w-xl mx-auto">
            Diskusikan ide desain &amp; kebutuhan kaos Anda dengan tim Blankshirt Malang sekarang. Fast response via
            WhatsApp dan dapatkan penawaran harga grosir terbaik!
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order via WhatsApp Blankshirt</span>
            </a>

            <a
              href="tel:+628980080309"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-900 px-3 py-2"
            >
              <PhoneCall className="h-3.5 w-3.5 text-zinc-400" />
              <span>Atau telepon: +62 898-0080-309</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
