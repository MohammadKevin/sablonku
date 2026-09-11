"use client";

import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20tanya%20informasi%20stok%20kaos%20polos%20dan%20jasa%20sablon.";

  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 overflow-hidden shadow-xs p-1">
                <Image
                  src="/icon.png"
                  alt="Blankshirt Malang Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-zinc-900 text-base">
                  Blankshirt Malang
                </span>
                <span className="text-[11px] font-semibold text-emerald-700">
                  Workshop &amp; Store Kaos Polos di Malang
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
              Pusat grosir &amp; eceran kaos polos distro Cotton Combed (20s/24s/30s), kaos oversize,
              serta workshop sablon custom DTF &amp; plastisol di Kota Malang dengan garansi kepuasan.
            </p>

            <div className="pt-2 text-xs space-y-2 text-zinc-700">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp / CS:{" "}
                  <strong className="text-zinc-900">+62 898-0080-309</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Jl. MT Haryono / Dinoyo, Kec. Lowokwaru, Kota Malang</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Senin – Sabtu: 09.00 – 17.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Column 2: Pilihan Produk & Bahan */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900">
              Katalog Blankshirt
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#produk" className="hover:text-emerald-600 transition-colors">
                  Kaos Polos Combed 30s
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-600 transition-colors">
                  Combed 24s Heavyweight
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-600 transition-colors">
                  Kaos Oversize Streetwear
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-600 transition-colors">
                  Paket Sablon Kaos Custom
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-emerald-600 transition-colors">
                  Sablon DTF High-Res 300 DPI
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-emerald-600 transition-colors">
                  Sablon Plastisol Curing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Panduan & Informasi */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900">
              Panduan &amp; Informasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sizechart" className="hover:text-emerald-600 transition-colors">
                  Size Chart &amp; Panduan Ukuran
                </a>
              </li>
              <li>
                <a href="#warna" className="hover:text-emerald-600 transition-colors">
                  Katalog 30+ Pilihan Warna
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-emerald-600 transition-colors">
                  Store &amp; Workshop di Malang
                </a>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Konsultasi Desain &amp; Mockup Gratis
                </a>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Ketentuan Grosir &amp; Garansi Reject
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© 2026 Blankshirt Malang (Kaos Polos Malang). All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Workshop &amp; Store Resmi di</span>
            <strong className="text-zinc-700">Kota Malang, Jawa Timur</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
