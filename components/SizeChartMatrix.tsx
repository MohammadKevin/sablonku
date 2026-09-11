"use client";

import { useState } from "react";
import { MessageCircle, Ruler, Sparkles } from "lucide-react";

interface SizeRow {
  size: string;
  width: string;
  length: string;
  weight: string;
  isJumbo?: boolean;
}

export default function SizeChartMatrix() {
  const [activeTab, setActiveTab] = useState<"reguler" | "oversized">("reguler");
  const [userWeight, setUserWeight] = useState<string>("");
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const regularSizes: SizeRow[] = [
    { size: "S", width: "47 cm", length: "67 cm", weight: "45 - 55 kg" },
    { size: "M", width: "49 cm", length: "70 cm", weight: "55 - 65 kg" },
    { size: "L", width: "52 cm", length: "72 cm", weight: "65 - 75 kg" },
    { size: "XL", width: "54 cm", length: "75 cm", weight: "75 - 85 kg" },
    { size: "XXL", width: "57 cm", length: "77 cm", weight: "85 - 95 kg" },
    { size: "3XL (Jumbo)", width: "60 cm", length: "79 cm", weight: "> 95 kg", isJumbo: true },
  ];

  const oversizedSizes: SizeRow[] = [
    { size: "M (Oversize)", width: "54 cm", length: "72 cm", weight: "50 - 65 kg" },
    { size: "L (Oversize)", width: "57 cm", length: "75 cm", weight: "65 - 80 kg" },
    { size: "XL (Oversize)", width: "61 cm", length: "78 cm", weight: "80 - 95 kg" },
    { size: "XXL (Oversize)", width: "65 cm", length: "81 cm", weight: "> 95 kg", isJumbo: true },
  ];

  const currentSizes = activeTab === "reguler" ? regularSizes : oversizedSizes;

  const calculateRecommendation = (wStr: string) => {
    setUserWeight(wStr);
    const w = parseFloat(wStr);
    if (!w || isNaN(w)) {
      setRecommendedSize(null);
      return;
    }

    if (activeTab === "reguler") {
      if (w < 55) setRecommendedSize("S");
      else if (w < 65) setRecommendedSize("M");
      else if (w < 75) setRecommendedSize("L");
      else if (w < 85) setRecommendedSize("XL");
      else if (w < 95) setRecommendedSize("XXL");
      else setRecommendedSize("3XL (Jumbo)");
    } else {
      if (w < 65) setRecommendedSize("M (Oversize)");
      else if (w < 80) setRecommendedSize("L (Oversize)");
      else if (w < 95) setRecommendedSize("XL (Oversize)");
      else setRecommendedSize("XXL (Oversize)");
    }
  };

  const waSizeLink =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20panduan%20ukuran%20size%20chart%20kaos.";

  return (
    <section id="sizechart" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            PANDUAN UKURAN LENGKAP
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Size Chart Kaos Polos Reguler
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Panduan ukuran standar lokal/internasional untuk memastikan kaos pas dan nyaman saat
            dikenakan.
          </p>

          {/* Model Toggle: Reguler vs Oversize */}
          <div className="mt-6 inline-flex items-center rounded-full bg-zinc-100 p-1 border border-zinc-200">
            <button
              type="button"
              onClick={() => {
                setActiveTab("reguler");
                if (userWeight) calculateRecommendation(userWeight);
              }}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                activeTab === "reguler"
                  ? "bg-white text-zinc-900 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Pola Standar Reguler
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("oversized");
                if (userWeight) calculateRecommendation(userWeight);
              }}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                activeTab === "oversized"
                  ? "bg-white text-zinc-900 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Pola Streetwear Oversized
            </button>
          </div>
        </div>

        {/* Size Chart Card Container matching Reference Design */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200/90 bg-white p-4 sm:p-8 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-600">
                  <th className="pb-4 px-3 sm:px-6">Ukuran</th>
                  <th className="pb-4 px-3 sm:px-6">Lebar Dada</th>
                  <th className="pb-4 px-3 sm:px-6">Panjang Kaos</th>
                  <th className="pb-4 px-3 sm:px-6">Rekomendasi BB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm font-medium text-zinc-700">
                {currentSizes.map((row, idx) => {
                  const isHighlighted = recommendedSize === row.size;
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors hover:bg-zinc-50/70 ${
                        isHighlighted ? "bg-emerald-50/80 font-bold text-emerald-900" : ""
                      }`}
                    >
                      <td className="py-3.5 px-3 sm:px-6 font-bold text-zinc-900 flex items-center gap-2">
                        <span>{row.size}</span>
                        {isHighlighted && (
                          <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                            Cocok
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 sm:px-6 text-zinc-700 font-mono">{row.width}</td>
                      <td className="py-3.5 px-3 sm:px-6 text-zinc-700 font-mono">{row.length}</td>
                      <td className="py-3.5 px-3 sm:px-6 text-zinc-700">{row.weight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick interactive Size Finder Assistant */}
          <div className="mt-6 rounded-2xl bg-zinc-50 border border-zinc-200/70 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs text-zinc-700">
              <Ruler className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>
                Cari rekomendasi ukuran cepat: masukkan berat badan Anda:
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Contoh: 68"
                value={userWeight}
                onChange={(e) => calculateRecommendation(e.target.value)}
                className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 focus:border-emerald-500 focus:outline-none"
              />
              <span className="text-xs font-medium text-zinc-500">kg</span>
              {recommendedSize && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                  <Sparkles className="h-3 w-3" />
                  <span>Size {recommendedSize}</span>
                </span>
              )}
            </div>
          </div>

          {/* Bottom Footnote matching screenshot */}
          <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-zinc-500">
            <p>* Toleransi ukuran 1 - 2 cm karena proses potong dan jahit massal.</p>
            <a
              href={waSizeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
            >
              <span>Butuh ukuran custom atau konsultasi size? Chat Kami</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
