"use client";

import { useState } from "react";
import { ArrowRight, Check, Palette } from "lucide-react";

interface ColorItem {
  name: string;
  subName: string;
  hex: string;
  textColor?: string;
  hasBorder?: boolean;
}

interface ColorCategory {
  title: string;
  badge: string;
  colors: ColorItem[];
}

export default function ColorSection() {
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null);

  const categories: ColorCategory[] = [
    {
      title: "1. WARNA BASIC / NETRAL",
      badge: "Paling Diminati",
      colors: [
        { name: "Hitam", subName: "Jet Black", hex: "#171717" },
        { name: "Putih", subName: "Solid White", hex: "#FFFFFF", hasBorder: true },
        { name: "Abu Misty", subName: "Misty 71", hex: "#CBD5E1" },
        { name: "Biru Navy", subName: "Dongker", hex: "#1E293B" },
      ],
    },
    {
      title: "2. WARNA EARTH TONE / PASTEL",
      badge: "Tren Terkini Distro",
      colors: [
        { name: "Hijau Army", subName: "Olive Green", hex: "#4D5638" },
        { name: "Mustard Yellow", subName: "Kuning Kunyit", hex: "#D97706" },
        { name: "Cokelat Susu", subName: "Khaki / Sand", hex: "#BFA588" },
        { name: "Terracotta", subName: "Merah Bata", hex: "#BE5A38" },
      ],
    },
    {
      title: "3. WARNA BOLD / CERAH",
      badge: "Favorit Event & Komunitas",
      colors: [
        { name: "Royal Blue", subName: "Biru Benhur", hex: "#1D4ED8" },
        { name: "Merah Marun", subName: "Red Wine", hex: "#831843" },
        { name: "Hijau Botol", subName: "Forest Green", hex: "#14532D" },
        { name: "Lilac", subName: "Ungu Pastel", hex: "#C084FC" },
      ],
    },
  ];

  const waColorLink = (colorName?: string) => {
    const text = colorName
      ? `Halo Admin Blankshirt Malang, saya tertarik dengan stok kaos warna *${colorName}*. Apakah ready stock?`
      : "Halo Admin Blankshirt Malang, saya ingin melihat katalog lengkap 30+ pilihan warna kain kaos.";
    return `https://wa.me/628980080309?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="warna" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            PILIHAN WARNA TERLENGKAP
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Tersedia Lebih Dari 30+ Warna Pilihan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Pilihan warna favorit dan selalu ready stock untuk melengkapi kebutuhan produk Anda.
          </p>
        </div>

        {/* Main Swatch Card Container */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-9 shadow-xs">
          <div className="space-y-8">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="space-y-3.5">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <h3 className="text-xs sm:text-sm font-bold tracking-wide text-zinc-900 uppercase">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                    {category.badge}
                  </span>
                </div>

                {/* 4 Swatches in Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {category.colors.map((color, colorIdx) => {
                    const isSelected = selectedColor?.name === color.name;
                    return (
                      <button
                        key={colorIdx}
                        type="button"
                        onClick={() => setSelectedColor(isSelected ? null : color)}
                        className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50/40 ring-1 ring-emerald-500 shadow-xs"
                            : "border-zinc-200/90 bg-white hover:border-zinc-300 hover:bg-zinc-50/70"
                        }`}
                      >
                        {/* Color Circle */}
                        <div
                          className={`relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full shadow-xs transition-transform group-hover:scale-105 ${
                            color.hasBorder ? "border border-zinc-300" : ""
                          }`}
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && (
                            <Check
                              className={`h-4 w-4 ${
                                color.hex === "#FFFFFF" || color.hex === "#CBD5E1"
                                  ? "text-zinc-900"
                                  : "text-white"
                              }`}
                            />
                          )}
                        </div>

                        {/* Name & Subtext */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                            {color.name}
                          </p>
                          <p className="truncate text-[11px] text-zinc-600 leading-tight mt-0.5">
                            {color.subName}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Color Notification Bar if clicked */}
          {selectedColor && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 p-3.5 sm:px-5">
              <div className="flex items-center gap-3">
                <div
                  className="h-6 w-6 rounded-full border border-zinc-300 shadow-xs shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                ></div>
                <span className="text-xs font-semibold text-emerald-950">
                  Warna terpilih: <strong>{selectedColor.name} ({selectedColor.subName})</strong>
                </span>
              </div>
              <a
                href={waColorLink(selectedColor.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
              >
                <span>Cek Stok Warna Ini di WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {/* Card Footer Banner */}
          <div className="mt-8 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-zinc-600">
              Mau warna lain? Kami menyediakan puluhan pilihan warna kain roll lainnya.
            </p>
            <a
              href={waColorLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 group transition-colors"
            >
              <span>Lihat Katalog Warna Lengkap di WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
