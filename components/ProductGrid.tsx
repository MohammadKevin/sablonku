import {
  Shirt,
  Clock,
  CheckCircle2,
  Layers,
  ArrowRight,
  Shield,
  Tag,
} from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  fabrics: string[];
  moq: string;
  leadTime: string;
  priceStart: string;
  useCases: string[];
  highlights: string[];
  badge: string;
}

const products: ProductItem[] = [
  {
    id: "kaos",
    title: "Kaos Oblong & Raglan",
    subtitle: "Apparel harian standar distro & merchandise event",
    fabrics: ["Cotton Combed 30s Soft", "Cotton Combed 24s Heavy", "Cotton Bamboo 30s"],
    moq: "Min. 24 Pcs",
    leadTime: "7 - 10 Hari Kerja",
    priceStart: "Rp 45.000 / pcs",
    useCases: [
      "Kaos Komunitas & Gathering",
      "Merchandise Konser & Event Kampus",
      "Seragam Panitia & Reuni",
      "Clothing Brand Distro",
    ],
    highlights: [
      "Jahitan rantai pundak anti-melar",
      "Rib leher 2cm presisi double stitch",
      "Sablon DTF High-Res / Plastisol Karet",
    ],
    badge: "BESTSELLER",
  },
  {
    id: "polo",
    title: "Polo Shirt Custom",
    subtitle: "Polo semi-formal elegan berkerah rajut premium",
    fabrics: ["Lacoste CVC 24s", "Lacoste Cotton Pique", "Lacoste PE Super"],
    moq: "Min. 24 Pcs",
    leadTime: "8 - 12 Hari Kerja",
    priceStart: "Rp 65.000 / pcs",
    useCases: [
      "Seragam Kerja Casual Kantor",
      "Baju Gathering Perusahaan & BUMN",
      "Apparel Staff Event Formal",
      "Seragam Sales & Frontliner",
    ],
    highlights: [
      "Kerah & manset rajut tebal tidak mudah kriting",
      "Placket 2/3 kancing jahitan rapi",
      "Bordir komputer presisi logo dada & punggung",
    ],
    badge: "POPULAR CORPORATE",
  },
  {
    id: "pdh",
    title: "Kemeja PDH / Korsa / Tactical",
    subtitle: "Kemeja dinas resmi, organisasi kampus & proyek",
    fabrics: ["American Drill 1919", "Japan Drill Taipan", "Nagata Drill"],
    moq: "Min. 24 Pcs",
    leadTime: "10 - 14 Hari Kerja",
    priceStart: "Rp 95.000 / pcs",
    useCases: [
      "Kemeja BEM & Himpunan Mahasiswa",
      "Seragam Dinas Harian (PDH / PDL)",
      "Kemeja Lapangan Proyek & Komunitas",
      "Kemeja Tactical Multi-Pocket",
    ],
    highlights: [
      "Jahitan make-up dobel stik ekstra kuat",
      "Fitur ventilasi punggung air-flow jala adem",
      "Bordir komputer hingga 4 titik posisi",
    ],
    badge: "FAVORIT ORGANISASI",
  },
  {
    id: "jaket",
    title: "Jaket, Hoodie & Coach Jacket",
    subtitle: "Outerwear premium pelindung angin dan cuaca dingin",
    fabrics: ["Cotton Fleece 280-330 gsm", "Taslan Milky Waterproof", "Baby Terry 280 gsm"],
    moq: "Min. 24 Pcs",
    leadTime: "10 - 14 Hari Kerja",
    priceStart: "Rp 125.000 / pcs",
    useCases: [
      "Jaket Angkatan & Varsity Sekolah",
      "Hoodie Merchandise Premium",
      "Coach Jacket Komunitas Motor & Streetwear",
      "Windbreaker Outdoor & Touring",
    ],
    highlights: [
      "Ritsleting YKK / Metal Zipper kualitas tinggi",
      "Rib elastis kencang pada manset & pinggang",
      "Pilihan furing: Jala sport atau quilting satin",
    ],
    badge: "PREMIUM FINISH",
  },
];

export default function ProductGrid() {
  return (
    <section id="katalog" className="border-b border-zinc-200 bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-amber-100 px-2.5 py-1 text-xs font-mono font-bold uppercase text-amber-800 mb-3">
              <Shirt className="h-3.5 w-3.5" />
              Katalog Kategori Produksi
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
              Pilihan Produk Apparel Garment
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Diproduksi langsung di workshop sendiri dengan kontrol pola potong presisi, benang jahit grade A, serta pilihan teknik sablon/bordir terlengkap.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white border border-zinc-200 px-3 py-2 rounded-md">
            <Tag className="h-3.5 w-3.5 text-amber-600" />
            <span>STANDAR VENDOR // 4 KATEGORI UTAMA</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-400 hover:shadow-md transition-all"
            >
              <div>
                {/* Card Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-mono font-bold uppercase text-amber-900">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1 font-semibold text-zinc-700">
                      <Layers className="h-3.5 w-3.5 text-amber-600" />
                      {item.moq}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-zinc-400" />
                      {item.leadTime}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 mb-5">
                  {item.subtitle}
                </p>

                {/* Fabric Options Chips */}
                <div className="border-t border-b border-zinc-100 py-3 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-zinc-400 block mb-1.5">
                    Opsi Bahan Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.fabrics.map((f) => (
                      <span
                        key={f}
                        className="rounded bg-zinc-100 border border-zinc-200 px-2 py-1 text-xs font-medium text-zinc-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs & Highlights */}
                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                      Spesifikasi Jahitan:
                    </span>
                    <ul className="space-y-1">
                      {item.highlights.map((hl, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-zinc-700"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                      Rekomendasi Penggunaan:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.useCases.map((uc, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-zinc-600 bg-zinc-50 border border-zinc-200/80 rounded px-1.5 py-0.5"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4 mt-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Mulai Dari
                  </span>
                  <span className="text-base font-extrabold text-zinc-900 font-mono">
                    {item.priceStart}
                  </span>
                </div>
                <a
                  href="#hitung-biaya"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-600 transition-colors"
                >
                  <span>Hitung Biaya</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
