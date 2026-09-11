import { Scissors, Phone, Clock, MapPin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Atelier%20Garment,%20saya%20ingin%20konsultasi%20order.";

  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300 pt-16 pb-24 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                <Scissors className="h-5 w-5" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white uppercase tracking-wider block">
                  Atelier Garment
                </span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  Konveksi &amp; Workshop Sablon Indonesia
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Mitra resmi manufaktur apparel instansi, universitas, event organizer, dan clothing brand. Mengedepankan ketepatan waktu, kualitas jahitan garment, dan transparansi bahan.
            </p>

            <div className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-mono text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Kapasitas: 5.000 Pcs / Bulan
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#katalog" className="hover:text-amber-400 transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#bahan" className="hover:text-amber-400 transition-colors">
                  Pilihan Bahan &amp; Sablon
                </a>
              </li>
              <li>
                <a href="#size-chart" className="hover:text-amber-400 transition-colors">
                  Panduan Size Chart
                </a>
              </li>
              <li>
                <a href="#hitung-biaya" className="hover:text-amber-400 transition-colors">
                  Kalkulator Biaya
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-amber-400 transition-colors">
                  Alur SOP Produksi
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Layanan Admin
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>+62 898-0080-309</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>Senin - Sabtu: 08.00 - 21.00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>Workshop Garment Hub, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Fast WhatsApp Box */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Konsultasi Instan
            </h4>
            <p className="text-xs text-zinc-400">
              Kirim desain Anda dan dapatkan estimasi harga resmi dalam hitungan menit.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 transition-colors"
            >
              <span>Chat WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} ATELIER GARMENT KONVEKSI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>TERMS OF PRODUCTION (SPK)</span>
            <span>•</span>
            <span>GARANSI QC GRADE A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
