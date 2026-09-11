"use client";

import { MapPin, Clock, Navigation, ExternalLink, Truck } from "lucide-react";

export default function WorkshopLocationSection() {
  const gmapsUrl =
    "https://maps.google.com/?q=Jl.+MT+Haryono+Dinoyo+Lowokwaru+Malang+Jawa+Timur";
  const embedUrl =
    "https://maps.google.com/maps?q=Jl.+MT+Haryono%2C+Dinoyo%2C+Kec.+Lowokwaru%2C+Kota+Malang%2C+Jawa+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="lokasi" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Workshop Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
              WORKSHOP &amp; STORE KAOS POLOS DI MALANG
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              Bisa Datang Langsung ke Store Blankshirt Malang &amp; Pilih Bahan Sepuasnya
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
              Anda berdomisili di Malang dan sekitarnya? Kunjungi store &amp; workshop Blankshirt Malang untuk merasakan
              langsung handfeel bahan katun combed, melihat sample hasil sablon, dan konsultasi gratis
              dengan tim kami.
            </p>

            {/* List of Details */}
            <div className="mt-8 space-y-5 w-full">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Alamat Workshop</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                    Jl. MT Haryono / Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur (Kawasan kampus
                    UB, UIN &amp; Polinema)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Jam Operasional</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                    Senin – Sabtu: 09.00 – 17.00 WIB (Minggu &amp; Tanggal Merah harap konfirmasi via
                    WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                  <Navigation className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Akses &amp; Parkir Nyaman</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                    Lokasi strategis mudah diakses motor dan mobil dengan area parkir yang memadai dan
                    aman.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-800 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 active:scale-95 transition-all"
              >
                <span>Buka Lokasi di Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Maps Preview */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-md flex flex-col">
              {/* Map Header Bar */}
              <div className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wide truncate">
                    Blankshirt Workshop Malang
                  </span>
                </div>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline shrink-0"
                >
                  <span>Petunjuk Arah</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Google Maps Embed iframe */}
              <div className="relative w-full h-[320px] sm:h-[360px] bg-zinc-100">
                <iframe
                  title="Google Maps Preview Blankshirt Malang"
                  src={embedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Shipping Info Footer */}
              <div className="p-4 bg-zinc-50 border-t border-zinc-200/80 flex items-center justify-between gap-3 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>
                    Siap kirim <strong>GoSend / GrabExpress</strong> (Malang Raya) &amp; Kargo
                  </span>
                </div>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0"
                >
                  Buka Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
