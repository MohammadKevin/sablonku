"use client";

import { useState } from "react";
import { Ruler, Info, CheckCircle2 } from "lucide-react";

interface SizeRow {
  size: string;
  lebarDada: number;
  panjangBaju: number;
  panjangLengan: number;
  rekomendasiTinggi: string;
  rekomendasiBerat: string;
}

const regularFitData: SizeRow[] = [
  { size: "S", lebarDada: 48, panjangBaju: 68, panjangLengan: 21, rekomendasiTinggi: "155 - 165 cm", rekomendasiBerat: "45 - 55 kg" },
  { size: "M", lebarDada: 50, panjangBaju: 70, panjangLengan: 22, rekomendasiTinggi: "160 - 170 cm", rekomendasiBerat: "55 - 65 kg" },
  { size: "L", lebarDada: 53, panjangBaju: 72, panjangLengan: 23, rekomendasiTinggi: "170 - 178 cm", rekomendasiBerat: "65 - 75 kg" },
  { size: "XL", lebarDada: 56, panjangBaju: 75, panjangLengan: 24, rekomendasiTinggi: "175 - 183 cm", rekomendasiBerat: "75 - 85 kg" },
  { size: "XXL", lebarDada: 59, panjangBaju: 78, panjangLengan: 25, rekomendasiTinggi: "180 - 190 cm", rekomendasiBerat: "85 - 95 kg" },
  { size: "3XL", lebarDada: 62, panjangBaju: 80, panjangLengan: 26, rekomendasiTinggi: "185+ cm", rekomendasiBerat: "95+ kg" },
];

const oversizedFitData: SizeRow[] = [
  { size: "S (Oversized)", lebarDada: 54, panjangBaju: 70, panjangLengan: 24, rekomendasiTinggi: "155 - 168 cm", rekomendasiBerat: "50 - 60 kg" },
  { size: "M (Oversized)", lebarDada: 57, panjangBaju: 73, panjangLengan: 25, rekomendasiTinggi: "165 - 175 cm", rekomendasiBerat: "60 - 72 kg" },
  { size: "L (Oversized)", lebarDada: 60, panjangBaju: 76, panjangLengan: 26, rekomendasiTinggi: "172 - 182 cm", rekomendasiBerat: "72 - 82 kg" },
  { size: "XL (Oversized)", lebarDada: 64, panjangBaju: 79, panjangLengan: 27, rekomendasiTinggi: "178 - 188 cm", rekomendasiBerat: "82 - 95 kg" },
  { size: "XXL (Oversized)", lebarDada: 68, panjangBaju: 82, panjangLengan: 28, rekomendasiTinggi: "185+ cm", rekomendasiBerat: "95+ kg" },
];

export default function SizeChartMatrix() {
  const [fitType, setFitType] = useState<"regular" | "oversized">("regular");

  const currentData = fitType === "regular" ? regularFitData : oversizedFitData;

  return (
    <section id="size-chart" className="border-b border-zinc-200 bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-amber-100 px-2.5 py-1 text-xs font-mono font-bold uppercase text-amber-800 mb-3">
              <Ruler className="h-3.5 w-3.5" />
              Standardized Dimension Guide
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
              Size Chart &amp; Panduan Ukuran
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Pola potong standar Indonesia (Asian Fit) yang telah disesuaikan untuk kenyamanan postur tubuh saat aktivitas harian maupun kerja formal.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="flex items-center rounded-lg bg-zinc-200/80 p-1 border border-zinc-300 shrink-0">
            <button
              type="button"
              onClick={() => setFitType("regular")}
              className={`rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                fitType === "regular"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Regular Fit (Standard)
            </button>
            <button
              type="button"
              onClick={() => setFitType("oversized")}
              className={`rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                fitType === "oversized"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Oversized Fit (Drop Shoulder)
            </button>
          </div>
        </div>

        {/* Main Grid: Table & Measurement Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table */}
          <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-100 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                  <th className="py-3 px-4 sm:px-6">Size</th>
                  <th className="py-3 px-4">Lebar Dada (A)</th>
                  <th className="py-3 px-4">Panjang Baju (B)</th>
                  <th className="py-3 px-4">Panjang Lengan (C)</th>
                  <th className="py-3 px-4">Rekomendasi Postur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 font-mono">
                {currentData.map((row) => (
                  <tr key={row.size} className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-zinc-900 text-sm">
                      <span className="inline-block rounded bg-zinc-900 text-amber-400 px-2.5 py-1 text-xs">
                        {row.size}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-zinc-800">
                      {row.lebarDada} cm
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-zinc-800">
                      {row.panjangBaju} cm
                    </td>
                    <td className="py-3.5 px-4 text-zinc-600">
                      {row.panjangLengan} cm
                    </td>
                    <td className="py-3.5 px-4 font-sans text-xs text-zinc-600">
                      <div>{row.rekomendasiTinggi}</div>
                      <div className="text-[11px] text-zinc-400">{row.rekomendasiBerat}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>* Toleransi jahit pola potong garment: ± 1.0 - 1.5 cm</span>
              <span className="text-amber-800 font-semibold">Tersedia Custom Pola Khusus</span>
            </div>
          </div>

          {/* How to Measure Sidebar */}
          <div className="lg:col-span-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-zinc-900 text-base flex items-center gap-2">
              <Ruler className="h-4 w-4 text-amber-600" />
              Panduan Cara Mengukur
            </h3>
            
            <div className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <div className="border border-zinc-200 rounded-lg p-3 bg-zinc-50">
                <strong className="text-zinc-900 block font-mono text-[11px] uppercase mb-1">
                  (A) Lebar Dada:
                </strong>
                Bentangkan baju sampel Anda secara mendatar di permukaan datar. Ukur dari ujung jahitan ketiak kiri lurus ke ketiak kanan.
              </div>

              <div className="border border-zinc-200 rounded-lg p-3 bg-zinc-50">
                <strong className="text-zinc-900 block font-mono text-[11px] uppercase mb-1">
                  (B) Panjang Baju:
                </strong>
                Ukur dari titik tertinggi kerah bahu sebelah leher lurus ke bawah hingga ujung keliman bawah baju.
              </div>

              <div className="border border-zinc-200 rounded-lg p-3 bg-zinc-50">
                <strong className="text-zinc-900 block font-mono text-[11px] uppercase mb-1">
                  (C) Panjang Lengan:
                </strong>
                Ukur dari jahitan pangkal bahu terluar lurus ke ujung manset lengan.
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700 mt-0.5 shrink-0" />
                <p className="text-[11px] text-amber-900 leading-snug">
                  <strong>Punya standar size chart sendiri?</strong> Tim konveksi kami bisa mengikuti sampel fisik (spec chart) yang dikirim dari klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
