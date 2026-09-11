import {
  MessageSquare,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Package,
} from "lucide-react";

export default function HeroSection() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Atelier%20Garment,%20saya%20ingin%20konsultasi%20produksi%20apparel%20custom.";

  const trustPills = [
    { icon: Layers, label: "Kapasitas 5.000 Pcs/Bulan" },
    { icon: Cpu, label: "Bordir Komputer Presisi" },
    { icon: Sparkles, label: "Sablon DTF & Plastisol" },
    { icon: ShieldCheck, label: "Garansi QC & Tepat Waktu" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 workshop-grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Stamp */}
            <div className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-mono font-medium text-zinc-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>WORKSHOP STATUS: OPEN BATCH PRODUKSI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
              Produksi Kaos, Kemeja PDH, &amp; Jaket Custom{" "}
              <span className="text-amber-600 underline decoration-amber-300 decoration-4 underline-offset-6">
                Standar Vendor Resmi
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
              Spesialis konveksi apparel instansi, komunitas, dan korporat di Indonesia.
              Mulai dari <strong>MOQ 24 pcs</strong>, gratis <strong>mockup digital 3D</strong> sebelum produksi massal, 
              didukung garansi jahitan rapi serta jaminan kirim tepat waktu (on-time SLA).
            </p>

            {/* Trust Pills */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
              {trustPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 text-left"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-amber-600" />
                    <span className="text-xs font-semibold text-zinc-800 leading-tight">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Dual Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 active:scale-[0.99] transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat WhatsApp Admin</span>
              </a>
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 active:scale-[0.99] transition-all"
              >
                <span>Cek Katalog Produk</span>
                <ArrowDown className="h-4 w-4 text-zinc-500" />
              </a>
            </div>

            {/* Footnote Guarantee */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Respon Admin Cepat (Rata-rata &lt; 5 Menit di Jam Kerja 08.00 - 21.00 WIB)</span>
            </div>
          </div>

          {/* Right Workshop Spec Sheet Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border-2 border-zinc-900 bg-zinc-900 p-1 text-white shadow-xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5 bg-zinc-900 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                  SPEC SHEET // BATCH PRODUKSI
                </span>
                <span className="text-zinc-500">QC GRADE A</span>
              </div>

              {/* Card Body */}
              <div className="bg-zinc-950 p-5 rounded-b-lg space-y-4">
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="border border-zinc-800 rounded p-3 bg-zinc-900/60">
                    <span className="text-zinc-400 block text-[10px] uppercase">Min. Order Qty</span>
                    <span className="text-lg font-bold text-amber-400">24 PCS</span>
                    <span className="text-[10px] text-zinc-500 block">Bisa campur ukuran S-XXL</span>
                  </div>
                  <div className="border border-zinc-800 rounded p-3 bg-zinc-900/60">
                    <span className="text-zinc-400 block text-[10px] uppercase">Estimasi Produksi</span>
                    <span className="text-lg font-bold text-zinc-100">7 - 14 HARI</span>
                    <span className="text-[10px] text-zinc-500 block">Express available (S&amp;K)</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-zinc-800 pt-3">
                  <div className="flex items-center justify-between text-xs py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Standar Jahitan</span>
                    <span className="font-mono text-zinc-200 font-semibold">Rantai Pundak + Overdeck 3 Jarum</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Teknologi Sablon</span>
                    <span className="font-mono text-zinc-200 font-semibold">DTF HD 300DPI / Plastisol Curing</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Mesin Bordir</span>
                    <span className="font-mono text-zinc-200 font-semibold">12-Head Tajima Computer Embroidery</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-zinc-400">Packaging</span>
                    <span className="font-mono text-zinc-200 font-semibold">Plastik Seal Individu + Box Karton</span>
                  </div>
                </div>

                <div className="rounded bg-amber-500/10 border border-amber-500/30 p-3 flex items-start gap-2.5">
                  <Package className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-200/90 leading-snug">
                    <strong className="text-white">Gratis Layout Sample Digital:</strong> Tim desainer kami siap membuat visualisasi mockup sebelum approval naik potong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
