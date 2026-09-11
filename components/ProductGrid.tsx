"use client";

import { useState } from "react";
import { Check, MessageCircle, Info, X } from "lucide-react";

interface ProductSpec {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceTag: string;
  description: string;
  features: string[];
  specs: {
    material: string;
    weight: string;
    character: string;
    bestFor: string;
  };
}

export default function ProductGrid() {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSpec | null>(null);

  const products: ProductSpec[] = [
    {
      id: "combed-30s",
      name: "Kaos Polos Combed 30s",
      priceTag: "Mulai 35 - 42 rb-an",
      description:
        "Bahan 100% katun combed 30s reaktif super soft. Sangat adem, menyerap keringat, cocok untuk iklim tropis dan kaos harian distro.",
      features: [
        "100% Ring Spun Combed 30s Reaktif",
        "Jahitan Rantai Pundak Standar Distro",
        "Tersedia 30+ Pilihan Warna Ready Stock",
      ],
      specs: {
        material: "100% Cotton Combed 30s Reaktif",
        weight: "Gramasi 140 - 150 GSM",
        character: "Lembut, halus, sangat menyerap keringat, dingin di kulit",
        bestFor: "Daily wear, kaos sablon komunitas, kaos event, gathering",
      },
    },
    {
      id: "combed-24s-heavyweight",
      name: "Combed 24s Heavyweight",
      priceTag: "Mulai 42 - 55 rb-an",
      description:
        "Kain katun 24s dengan gramasi lebih mantap dan berbobot. Tidak menerawang, awet, dan jadi pilihan utama brand clothing profesional.",
      features: [
        "Katun Combed 24s Tebal & Kokoh",
        "Kerah Rib Tebal Tidak Mudah Melar",
        "Handfeel Lembut & Tidak Panas",
      ],
      specs: {
        material: "100% Cotton Combed 24s Premium",
        weight: "Gramasi 175 - 190 GSM",
        character: "Tebal proporsional, struktur kain kokoh, tidak menerawang",
        bestFor: "Clothing brand distro, kaos merchandise eksklusif, seragam",
      },
    },
    {
      id: "kaos-oversize",
      name: "Kaos Oversize",
      priceTag: "Mulai 55 - 70 rb-an",
      description:
        "Potongan loose drop-shoulder bergaya streetwear kekinian. Pola boxy fit proporsional dengan rib leher tebal 2.5 - 3 cm anti melar.",
      features: [
        "Pola Boxy & Drop-Shoulder Modern",
        "Kerah Tebal Eksklusif Streetwear",
        "Bahan Heavyweight Katun Berkualitas",
      ],
      specs: {
        material: "Heavyweight Cotton 20s / 24s Boxy Cut",
        weight: "Gramasi 210 - 230 GSM",
        character: "Karakter jatuh (drape) kokoh, siluet streetwear tegas",
        bestFor: "Streetwear brand, fashion casual, skena merchandise",
      },
    },
    {
      id: "paket-sablon",
      name: "Paket Sablon Kaos Custom",
      badge: "Paling Laris",
      isPopular: true,
      priceTag: "Mulai 55rb/Pcs (All-in)",
      description:
        "Solusi paket hemat terima beres! Sudah termasuk kaos polos combed Blankshirt Malang dan sablon DTF/Plastisol cetak tajam.",
      features: [
        "Bebas Custom Desain Full Color",
        "Tanpa Minimum Order (Bisa Satuan)",
        "Gratis Mockup Digital & Proofing",
      ],
      specs: {
        material: "Kaos Combed Blankshirt + Sablon DTF High-Res / Plastisol",
        weight: "Tersedia pilihan Combed 30s, 24s, atau Oversize",
        character: "Warna cerah solid, gradasi tajam, elastis tahan cuci",
        bestFor: "Kaos kelas, seragam kantor, reuni, event panitia, clothing brand",
      },
    },
  ];

  const getWaLinkForProduct = (productName: string) => {
    return `https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20order%20produk%20*${encodeURIComponent(
      productName
    )}*.%20Boleh%20minta%20info%20pricelist,%20katalog%20warna,%20dan%20stoknya?`;
  };

  return (
    <section id="produk" className="bg-white py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            KATALOG PRODUK BLANKSHIRT MALANG
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Pilihan Kaos Polos Standar Distro &amp; Premium
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Tersedia berbagai pilihan material kaos berkualitas untuk kebutuhan acara, brand clothing,
            ataupun seragam dari Blankshirt Malang.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-md ${
                  product.isPopular
                    ? "border-emerald-400 ring-1 ring-emerald-400/30 shadow-xs"
                    : "border-zinc-200"
                }`}
              >
                {/* Popular Badge */}
                {product.badge && (
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                      {product.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Visual SVG T-Shirt Frame */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-zinc-50/80 border border-zinc-100 py-7 px-4 mb-5">
                    {product.id === "kaos-oversize" ? (
                      <svg
                        className="w-16 h-16 text-zinc-400 stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                        <path d="M7 10h10" />
                      </svg>
                    ) : product.id === "paket-sablon" ? (
                      <svg
                        className="w-16 h-16 text-emerald-600 stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                        <circle cx="12" cy="11" r="2.5" />
                        <path d="m9 15 6-2" />
                      </svg>
                    ) : (
                      <svg
                        className="w-16 h-16 text-zinc-400 stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                      </svg>
                    )}

                    {/* Price Sub-tag */}
                    <span className="mt-3 text-xs font-semibold text-zinc-600">
                      {product.priceTag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-6 pt-2 space-y-2">
                  <a
                    href={getWaLinkForProduct(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 active:scale-95 shadow-xs transition-all text-center"
                  >
                    <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>Order via WhatsApp Blankshirt</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-[11px] font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all"
                  >
                    <Info className="h-3 w-3 text-zinc-400" />
                    <span>Detail &amp; Spesifikasi Bahan</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Spec Detail Modal */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <h4 className="text-base font-bold text-zinc-900">
                    Spesifikasi: {activeModalProduct.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-zinc-600">
                <div className="p-3.5 bg-zinc-50 rounded-xl space-y-2.5">
                  <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                    <span className="font-semibold text-zinc-700">Material Kain:</span>
                    <span className="text-zinc-900 font-medium">
                      {activeModalProduct.specs.material}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                    <span className="font-semibold text-zinc-700">Gramasi / Ketebalan:</span>
                    <span className="text-zinc-900 font-medium">
                      {activeModalProduct.specs.weight}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                    <span className="font-semibold text-zinc-700">Karakter Bahan:</span>
                    <span className="text-zinc-900 font-medium text-right max-w-[240px]">
                      {activeModalProduct.specs.character}
                    </span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="font-semibold text-zinc-700">Rekomendasi:</span>
                    <span className="text-emerald-700 font-semibold text-right max-w-[240px]">
                      {activeModalProduct.specs.bestFor}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 italic">
                  * Blankshirt Malang melayani pembelian eceran satuan hingga partai grosir ribuan pcs.
                  Bisa custom sablon dan label brand.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2.5 pt-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100"
                >
                  Tutup
                </button>
                <a
                  href={getWaLinkForProduct(activeModalProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Order via WhatsApp Blankshirt</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
