"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  Layers,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type ProductKey = "kaos" | "polo" | "pdh" | "jaket";
type QtyTier = "24-50" | "51-100" | "100+";
type TechniqueKey = "dtf" | "plastisol" | "bordir" | "polos";
type PositionKey = "1-posisi" | "2-posisi" | "3-posisi";

interface ProductConfig {
  name: string;
  fabrics: { id: string; name: string; rates: Record<QtyTier, number> }[];
}

const productConfigs: Record<ProductKey, ProductConfig> = {
  kaos: {
    name: "Kaos Oblong & Raglan",
    fabrics: [
      {
        id: "combed-30s",
        name: "Cotton Combed 30s (Soft & Adem)",
        rates: { "24-50": 45000, "51-100": 42000, "100+": 39000 },
      },
      {
        id: "combed-24s",
        name: "Cotton Combed 24s (Heavyweight Distro)",
        rates: { "24-50": 48000, "51-100": 45000, "100+": 42000 },
      },
      {
        id: "bamboo-30s",
        name: "Cotton Bamboo 30s (Anti-Bakteri Premium)",
        rates: { "24-50": 58000, "51-100": 55000, "100+": 52000 },
      },
    ],
  },
  polo: {
    name: "Polo Shirt Custom",
    fabrics: [
      {
        id: "lacoste-cvc",
        name: "Lacoste CVC 24s (Standard Corporate)",
        rates: { "24-50": 65000, "51-100": 60000, "100+": 56000 },
      },
      {
        id: "lacoste-pique",
        name: "Lacoste Cotton Pique (Mewah & Tebal)",
        rates: { "24-50": 72000, "51-100": 67000, "100+": 62000 },
      },
    ],
  },
  pdh: {
    name: "Kemeja PDH / Korsa",
    fabrics: [
      {
        id: "drill-american",
        name: "American Drill 1919 (Standar Organisasi)",
        rates: { "24-50": 95000, "51-100": 88000, "100+": 82000 },
      },
      {
        id: "drill-japan",
        name: "Japan Drill Taipan (Lembut & Berbobot)",
        rates: { "24-50": 115000, "51-100": 108000, "100+": 100000 },
      },
    ],
  },
  jaket: {
    name: "Jaket & Hoodie",
    fabrics: [
      {
        id: "fleece-cotton",
        name: "Cotton Fleece 300 gsm (Tebal & Hangat)",
        rates: { "24-50": 135000, "51-100": 125000, "100+": 115000 },
      },
      {
        id: "taslan-milky",
        name: "Taslan Milky (Waterproof Windbreaker)",
        rates: { "24-50": 125000, "51-100": 118000, "100+": 108000 },
      },
    ],
  },
};

const techniqueCosts: Record<
  TechniqueKey,
  { name: string; rates: Record<PositionKey, number> }
> = {
  dtf: {
    name: "Sablon DTF High-Res (Full Color HD)",
    rates: { "1-posisi": 12000, "2-posisi": 22000, "3-posisi": 28000 },
  },
  plastisol: {
    name: "Sablon Plastisol Curing (Karet Distro)",
    rates: { "1-posisi": 10000, "2-posisi": 18000, "3-posisi": 24000 },
  },
  bordir: {
    name: "Bordir Komputer Tajima",
    rates: { "1-posisi": 10000, "2-posisi": 20000, "3-posisi": 26000 },
  },
  polos: {
    name: "Polos (Tanpa Sablon / Bordir)",
    rates: { "1-posisi": 0, "2-posisi": 0, "3-posisi": 0 },
  },
};

export default function PriceEstimator() {
  const [productKey, setProductKey] = useState<ProductKey>("kaos");
  const [fabricId, setFabricId] = useState<string>("combed-30s");
  const [qtyTier, setQtyTier] = useState<QtyTier>("24-50");
  const [qtyNumber, setQtyNumber] = useState<number>(30);
  const [techniqueKey, setTechniqueKey] = useState<TechniqueKey>("dtf");
  const [positionKey, setPositionKey] = useState<PositionKey>("2-posisi");
  const [copied, setCopied] = useState(false);

  // Sync fabric selection when product changes
  const handleProductChange = (newProduct: ProductKey) => {
    setProductKey(newProduct);
    const defaultFabric = productConfigs[newProduct].fabrics[0].id;
    setFabricId(defaultFabric);
  };

  const currentProduct = productConfigs[productKey];
  const selectedFabricObj =
    currentProduct.fabrics.find((f) => f.id === fabricId) ||
    currentProduct.fabrics[0];

  const baseFabricRate = selectedFabricObj.rates[qtyTier];
  const techniqueRate =
    techniqueKey === "polos"
      ? 0
      : techniqueCosts[techniqueKey].rates[positionKey];

  const unitPrice = baseFabricRate + techniqueRate;
  const totalPrice = unitPrice * qtyNumber;

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const positionLabelMap: Record<PositionKey, string> = {
    "1-posisi": "1 Titik (Dada Depan / Logo Kecil)",
    "2-posisi": "2 Titik (Dada + Punggung Belakang)",
    "3-posisi": "3 Titik (Dada + Punggung + Lengan)",
  };

  const qtyTierLabelMap: Record<QtyTier, string> = {
    "24-50": "24 - 50 pcs (Batch Reguler)",
    "51-100": "51 - 100 pcs (Batch Medium)",
    "100+": "100+ pcs (Batch Partai Besar)",
  };

  // Build WhatsApp URL
  const waUrl = useMemo(() => {
    const rawMessage = `Halo Admin Atelier Garment, saya ingin konsultasi order konveksi:

*Estimasi Spesifikasi Order:*
• Produk: ${currentProduct.name}
• Bahan: ${selectedFabricObj.name}
• Jumlah: ${qtyNumber} pcs (${qtyTierLabelMap[qtyTier]})
• Finishing: ${techniqueCosts[techniqueKey].name}
• Titik Penempatan: ${
      techniqueKey === "polos" ? "Tanpa Cetak" : positionLabelMap[positionKey]
    }
• Estimasi Biaya: ${formatRupiah(unitPrice)} / pcs
• Estimasi Total: ${formatRupiah(totalPrice)}

Mohon info ketersediaan slot antrean dan bantuan pembuatan mockup digitalnya. Terima kasih!`;

    return `https://wa.me/628980080309?text=${encodeURIComponent(rawMessage)}`;
  }, [
    currentProduct.name,
    selectedFabricObj.name,
    qtyNumber,
    qtyTier,
    techniqueKey,
    positionKey,
    unitPrice,
    totalPrice,
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hitung-biaya" className="border-b border-zinc-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded bg-amber-100 px-2.5 py-1 text-xs font-mono font-bold uppercase text-amber-800 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            Kalkulator Estimasi Cepat Transparan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
            Hitung Estimasi Biaya &amp; Konsultasi WhatsApp
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600">
            Pilih spesifikasi garmen Anda di bawah ini untuk mendapatkan simulasi harga langsung serta pesan otomatis siap kirim ke WhatsApp Admin.
          </p>
        </div>

        {/* Two-Column Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            {/* 1. Pilih Produk */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-2">
                1. Pilih Jenis Apparel
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(productConfigs) as ProductKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleProductChange(key)}
                    className={`rounded-lg p-3 text-left border text-xs font-semibold transition-all ${
                      productKey === key
                        ? "border-amber-600 bg-amber-500/10 text-amber-900 ring-2 ring-amber-600/30"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    <div className="font-mono text-[10px] text-zinc-400 uppercase">
                      Kat. {key.toUpperCase()}
                    </div>
                    <div className="mt-0.5 truncate">{productConfigs[key].name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pilih Bahan */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-2">
                2. Pilihan Bahan Kain ({currentProduct.name})
              </label>
              <div className="space-y-2">
                {currentProduct.fabrics.map((f) => (
                  <label
                    key={f.id}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      fabricId === f.id
                        ? "border-zinc-900 bg-white shadow-xs font-semibold text-zinc-900"
                        : "border-zinc-200 bg-white/70 text-zinc-700 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="fabricChoice"
                        checked={fabricId === f.id}
                        onChange={() => setFabricId(f.id)}
                        className="text-amber-600 focus:ring-amber-500 h-4 w-4"
                      />
                      <span>{f.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-500">
                      Mulai {formatRupiah(f.rates["100+"])}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Rentang Jumlah & Input Qty */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                  3. Jumlah Pemesanan (Min. 24 Pcs)
                </label>
                <span className="font-mono text-xs font-bold text-amber-700">
                  {qtyNumber} PCS TERPILIH
                </span>
              </div>

              {/* Tier selector tabs */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {(["24-50", "51-100", "100+"] as QtyTier[]).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => {
                      setQtyTier(tier);
                      if (tier === "24-50" && (qtyNumber < 24 || qtyNumber > 50))
                        setQtyNumber(30);
                      if (tier === "51-100" && (qtyNumber < 51 || qtyNumber > 100))
                        setQtyNumber(60);
                      if (tier === "100+" && qtyNumber < 101) setQtyNumber(150);
                    }}
                    className={`rounded-lg py-2 px-3 text-center border text-xs font-mono font-bold uppercase transition-all ${
                      qtyTier === tier
                        ? "border-zinc-900 bg-zinc-900 text-amber-400"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                    }`}
                  >
                    {tier} pcs
                  </button>
                ))}
              </div>

              {/* Precise Stepper Slider / Number Input */}
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-zinc-200">
                <input
                  type="range"
                  min={24}
                  max={300}
                  step={1}
                  value={qtyNumber}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setQtyNumber(val);
                    if (val <= 50) setQtyTier("24-50");
                    else if (val <= 100) setQtyTier("51-100");
                    else setQtyTier("100+");
                  }}
                  className="w-full accent-amber-600 h-2 bg-zinc-200 rounded-lg cursor-pointer"
                />
                <div className="flex items-center gap-1 shrink-0 font-mono text-xs font-bold text-zinc-800 bg-zinc-100 px-3 py-1 rounded border border-zinc-300">
                  <span>{qtyNumber}</span>
                  <span className="text-zinc-500 font-normal">Pcs</span>
                </div>
              </div>
            </div>

            {/* 4. Pilihan Teknik Cetak & Penempatan */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-2">
                4. Teknik Cetak / Sablon / Bordir
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {(Object.keys(techniqueCosts) as TechniqueKey[]).map((tKey) => (
                  <button
                    key={tKey}
                    type="button"
                    onClick={() => setTechniqueKey(tKey)}
                    className={`rounded-lg p-2.5 text-left border text-xs transition-all ${
                      techniqueKey === tKey
                        ? "border-amber-600 bg-amber-50/50 font-semibold text-zinc-900 ring-1 ring-amber-600"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    <div className="font-bold">{techniqueCosts[tKey].name}</div>
                  </button>
                ))}
              </div>

              {techniqueKey !== "polos" && (
                <div className="mt-3 pt-3 border-t border-zinc-200">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase mb-1.5 font-semibold">
                    Titik Penempatan Logo / Sablon:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(["1-posisi", "2-posisi", "3-posisi"] as PositionKey[]).map(
                      (pos) => (
                        <button
                          key={pos}
                          type="button"
                          onClick={() => setPositionKey(pos)}
                          className={`rounded-md py-1.5 px-2 text-center border text-[11px] font-medium transition-all ${
                            positionKey === pos
                              ? "border-zinc-900 bg-zinc-900 text-white"
                              : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
                          }`}
                        >
                          {pos === "1-posisi" && "1 Posisi"}
                          {pos === "2-posisi" && "2 Posisi (Depan+Blkg)"}
                          {pos === "3-posisi" && "3 Posisi (+Lengan)"}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Live Estimation & WhatsApp Action Card */}
          <div className="lg:col-span-5 sticky top-20">
            <div className="rounded-xl border-2 border-zinc-900 bg-zinc-900 text-white p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Calculator className="h-4 w-4" />
                  RINGKASAN ESTIMASI
                </span>
                <span className="text-zinc-500">KODE: EST-{qtyNumber}PCS</span>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Produk</span>
                  <span className="text-zinc-100 font-semibold">{currentProduct.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Kain</span>
                  <span className="text-zinc-100 text-right truncate max-w-[200px]">
                    {selectedFabricObj.name.split("(")[0]}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Jumlah Batch</span>
                  <span className="text-amber-400 font-bold">{qtyNumber} Pcs</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Teknik Cetak</span>
                  <span className="text-zinc-100 text-right truncate max-w-[180px]">
                    {techniqueKey === "polos"
                      ? "Polos"
                      : `${techniqueCosts[techniqueKey].name.split("(")[0]} (${positionKey})`}
                  </span>
                </div>
              </div>

              {/* Final Calculated Figures */}
              <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-zinc-400 uppercase font-mono">
                    Estimasi / Pcs:
                  </span>
                  <span className="text-xl font-bold font-mono text-amber-400">
                    {formatRupiah(unitPrice)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-t border-zinc-800/80 pt-2">
                  <span className="text-xs text-zinc-400 uppercase font-mono">
                    Total Estimasi ({qtyNumber} pcs):
                  </span>
                  <span className="text-2xl font-extrabold font-mono text-white">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Pre-filled Button */}
              <div className="space-y-2 pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-amber-700 active:scale-[0.99] transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Kirim Estimasi ke WhatsApp Admin</span>
                </a>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 px-4 text-xs font-mono text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Order Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Salin Rincian Pesanan</span>
                    </>
                  )}
                </button>
              </div>

              {/* Technical Disclaimer Note */}
              <div className="border-t border-zinc-800/80 pt-3 text-[11px] text-zinc-400 leading-snug flex items-start gap-2">
                <Info className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  *Estimasi di atas merupakan simulasi dasar. Harga final dapat menyesuaikan tingkat kerumitan pola, luas area sablon, atau penambahan saku &amp; aksesoris custom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
