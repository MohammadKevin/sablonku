"use client";

import { useState } from "react";
import { Scissors, Sparkles, Layers, Check, Info, ShieldCheck } from "lucide-react";

interface FabricItem {
  name: string;
  category: string;
  gramasi: string;
  ketebalan: string;
  dayaSerap: string;
  handfeel: string;
  rekomendasi: string;
  kelebihan: string;
}

interface TechniqueItem {
  name: string;
  type: string;
  keawetan: string;
  rating: number;
  tekstur: string;
  resolusi: string;
  minOrder: string;
  deskripsi: string;
  cocokUntuk: string;
}

const fabrics: FabricItem[] = [
  {
    name: "Cotton Combed 30s",
    category: "Kaos & T-Shirt",
    gramasi: "140 - 150 gsm",
    ketebalan: "Sedang (Standard Distro)",
    dayaSerap: "95% (Sangat Tinggi)",
    handfeel: "Sangat lembut, adem, jatuh natural",
    rekomendasi: "Kaos event siang hari, merchandise konser, iklim tropis panas",
    kelebihan: "Paling populer di Indonesia, sirkulasi udara maksimal, tidak gerah saat dipakai outdoor.",
  },
  {
    name: "Cotton Combed 24s",
    category: "Kaos & T-Shirt",
    gramasi: "175 - 185 gsm",
    ketebalan: "Tebal Sedang (Heavyweight feel)",
    dayaSerap: "95% (Sangat Tinggi)",
    handfeel: "Tebal kokoh, permukaan padat halus",
    rekomendasi: "Kaos streetwear premium, seragam panitia tahan lama, oversized tee",
    kelebihan: "Tidak menerawang, bentuk kaos lebih stabil dan awet walau dicuci berkali-kali.",
  },
  {
    name: "Lacoste CVC 24s",
    category: "Polo Shirt",
    gramasi: "220 - 230 gsm",
    ketebalan: "Tebal Berpori Pique",
    dayaSerap: "85% (Tinggi)",
    handfeel: "Tekstur rajut sarang lebah empuk",
    rekomendasi: "Polo kantor semi-formal, seragam corporate gathering, sales apparel",
    kelebihan: "Campuran katun & viscose membuat warna tidak mudah luntur dan minim susut.",
  },
  {
    name: "American Drill 1919",
    category: "Kemeja PDH / PDL",
    gramasi: "210 gsm",
    ketebalan: "Tebal Kaku Terstruktur",
    dayaSerap: "75% (Cukup Baik)",
    handfeel: "Karakteristik serat miring kuat (twill)",
    rekomendasi: "Kemeja organisasi kampus, seragam dinas harian, pakaian kerja lapangan",
    kelebihan: "Struktur kemeja terlihat tegas dan formal, tahan gesekan, harga sangat ekonomis.",
  },
  {
    name: "Japan Drill Taipan",
    category: "Kemeja PDH Eksekutif",
    gramasi: "240 gsm",
    ketebalan: "Tebal Lembut Berbobot",
    dayaSerap: "85% (Tinggi)",
    handfeel: "Serat rapat, halus dan dingin di kulit",
    rekomendasi: "Kemeja instansi resmi, PDH manajerial kantor, korsa premium",
    kelebihan: "Kandungan katun lebih dominan, tidak panas dipakai seharian, kesan mewah.",
  },
  {
    name: "Cotton Fleece 300 gsm",
    category: "Jaket & Hoodie",
    gramasi: "280 - 330 gsm",
    ketebalan: "Sangat Tebal & Hangat",
    dayaSerap: "90% (Tinggi)",
    handfeel: "Luar halus, bagian dalam berbulu lembut",
    rekomendasi: "Hoodie pullover, zipper jacket, crewneck angkatan sekolah/kampus",
    kelebihan: "Menahan hembusan angin dingin dengan sangat baik tanpa terasa kaku di badan.",
  },
  {
    name: "Taslan Milky",
    category: "Outerwear / Windbreaker",
    gramasi: "180 gsm",
    ketebalan: "Ringan - Tahan Percikan Air",
    dayaSerap: "Water Repellent (Anti Air Gerimis)",
    handfeel: "Halus berlapis coating milky bagian dalam",
    rekomendasi: "Coach jacket, jaket touring motor, rompi lapangan",
    kelebihan: "Menolak percikan air & hembusan angin, cepat kering, dan sangat trendy.",
  },
];

const techniques: TechniqueItem[] = [
  {
    name: "Sablon Plastisol Curing",
    type: "Screen Printing Manual / Mesin",
    keawetan: "100+ Kali Cuci (Standar Distro Global)",
    rating: 5,
    tekstur: "Karet lentur tebal, warna solid pekat",
    resolusi: "Detail tajam garis vektor hingga 0.5mm",
    minOrder: "Min. 24 pcs / desain",
    deskripsi:
      "Tinta berbasis minyak (PVC oil-based) yang dimatangkan dengan mesin pemanas conveyor curing suhu 160°C. Hasil sablon tidak luntur, tidak pecah, dan memiliki daya rekat luar biasa pada serat kain katun.",
    cocokUntuk: "Kaos streetwear, logo grafis besar 1-6 warna solid, sablon blok punggung.",
  },
  {
    name: "Sablon DTF High-Res (Direct To Film)",
    type: "Digital Inkjet Transfer HD",
    keawetan: "60-80+ Kali Cuci",
    rating: 4.5,
    tekstur: "Flat, elastis tipis, mengikuti serat",
    resolusi: "Full Color 300 DPI (Foto & Gradasi Kompleks)",
    minOrder: "Min. 24 pcs",
    deskripsi:
      "Teknologi cetak digital modern menggunakan tinta pigment khusus & hotmelt powder berkualitas. Mampu mencetak jutaan warna, gradasi halus, hingga ilustrasi foto tanpa biaya pembuatan film per warna.",
    cocokUntuk: "Desain warna-warni banyak gradasi, ilustrasi lukisan, logo full color banyak detail kecil.",
  },
  {
    name: "Bordir Komputer Tajima",
    type: "Industrial Multi-Head Embroidery",
    keawetan: "Permanen Seumur Hidup Kain",
    rating: 5,
    tekstur: "Benang timbul 3D berkilau eksklusif",
    resolusi: "Kerapatan stik (density) tinggi presisi digital",
    minOrder: "Min. 24 pcs",
    deskripsi:
      "Bordir otomatis berkecepatan tinggi dikontrol software komputer. Menggunakan benang poliester tahan luntur deterjen dan kaporit. Memberikan tampilan mewah dan terpercaya untuk seragam profesional.",
    cocokUntuk: "Logo dada kemeja PDH, emblem instansi, patch lengan polo shirt, jaket angkatan.",
  },
  {
    name: "Sablon Discharge (Cabut Warna)",
    type: "Screen Printing Reaktif",
    keawetan: "Menyatu Dengan Kain (Zero Handfeel)",
    rating: 5,
    tekstur: "Sama sekali tanpa rasa rabaan cat",
    resolusi: "Halus natural bernapas (breathable)",
    minOrder: "Min. 50 pcs (Kain Cotton 100% Reaktif)",
    deskripsi:
      "Formula kimia khusus yang mencabut zat warna asli kain dan menggantikannya dengan pigmen baru. Pori-pori kain tetap terbuka sehingga kaos tetap sejuk dan bisa disetrika langsung di atas sablon.",
    cocokUntuk: "Kaos hitam/gelap premium bergaya vintage, desain blok besar yang tetap ingin adem.",
  },
];

export default function FabricTechniqueMatrix() {
  const [activeTab, setActiveTab] = useState<"kain" | "sablon">("kain");

  return (
    <section id="bahan" className="border-b border-zinc-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-zinc-100 border border-zinc-300 px-2.5 py-1 text-xs font-mono font-bold uppercase text-zinc-800 mb-3">
              <Layers className="h-3.5 w-3.5 text-amber-600" />
              Matriks Material &amp; Finishing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
              Katalog Pilihan Bahan &amp; Teknik Cetak
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Transparansi spesifikasi teknis. Kami hanya menggunakan bahan kain original grade pabrik dan mesin cetak berstandar industri garmen.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center rounded-lg bg-zinc-100 p-1 border border-zinc-200 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("kain")}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "kain"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Scissors className="h-3.5 w-3.5" />
              <span>1. Pilihan Kain</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("sablon")}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "sablon"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>2. Sablon &amp; Bordir</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Kain / Fabrics Table View */}
        {activeTab === "kain" && (
          <div className="space-y-6">
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-100 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    <th className="py-3 px-4 sm:px-6">Jenis Kain</th>
                    <th className="py-3 px-4">Kategori Produk</th>
                    <th className="py-3 px-4">Gramasi &amp; Tebal</th>
                    <th className="py-3 px-4">Daya Serap</th>
                    <th className="py-3 px-4">Handfeel</th>
                    <th className="py-3 px-4 sm:px-6">Rekomendasi Acara</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {fabrics.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-amber-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-zinc-900">
                        <div className="flex flex-col">
                          <span>{item.name}</span>
                          <span className="text-[11px] font-normal text-zinc-500 mt-0.5 max-w-xs">
                            {item.kelebihan}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-amber-700 font-medium">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-zinc-700">
                        <div className="font-semibold">{item.gramasi}</div>
                        <div className="text-[11px] text-zinc-500">{item.ketebalan}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-emerald-700">
                        {item.dayaSerap}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-zinc-600">
                        {item.handfeel}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-zinc-700">
                        <span className="inline-block rounded bg-zinc-100 px-2 py-1 text-zinc-800 border border-zinc-200">
                          {item.rekomendasi}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-50 p-3 rounded-lg border border-zinc-200 font-mono">
              <Info className="h-4 w-4 text-amber-600 shrink-0" />
              <span>
                Catatan Workshop: Tersedia katalog swatch kain fisik asli (swatch book) untuk konsultasi order partai di atas 100 pcs.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Sablon & Bordir View */}
        {activeTab === "sablon" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techniques.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-6 hover:border-amber-400 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded uppercase">
                      {tech.type}
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Durabilitas: {tech.keawetan}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                    {tech.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    {tech.deskripsi}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-zinc-200 pt-3 text-xs font-mono">
                    <div className="bg-white p-2 rounded border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase">Tekstur Rabaan</span>
                      <span className="text-zinc-800 font-semibold">{tech.tekstur}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase">Resolusi / Detail</span>
                      <span className="text-zinc-800 font-semibold">{tech.resolusi}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200 flex items-start gap-2 text-xs">
                  <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-zinc-700">
                    <strong className="text-zinc-900">Paling Direkomendasikan:</strong>{" "}
                    {tech.cocokUntuk}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
