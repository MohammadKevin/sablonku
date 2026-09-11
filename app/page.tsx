"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Check,
  Info,
  X,
  Ruler,
  Printer,
  Tag,
  BadgePercent,
  Clock,
  Navigation,
  ExternalLink,
  Truck,
  PhoneCall,
  Phone,
  Calculator,
  Copy,
  ChevronDown,
  HelpCircle,
  FileCheck,
  Scissors,
  CheckCircle2,
} from "lucide-react";

// ==========================================
// DATA: PRODUCTS & SPECS
// ==========================================
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

// ==========================================
// DATA: COLORS
// ==========================================
interface ColorItem {
  name: string;
  subName: string;
  hex: string;
  hasBorder?: boolean;
}

interface ColorCategory {
  title: string;
  badge: string;
  colors: ColorItem[];
}

const colorCategories: ColorCategory[] = [
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

// ==========================================
// DATA: SIZE CHART
// ==========================================
interface SizeRow {
  size: string;
  width: string;
  length: string;
  weight: string;
  isJumbo?: boolean;
}

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

// ==========================================
// DATA: FABRIC & PRINTING COMPARISON
// ==========================================
const fabricComparison = [
  {
    name: "Cotton Combed 30s",
    gramasi: "140 - 150 GSM",
    handfeel: "Super Soft & Adem",
    karakter: "Kain katun paling digemari di Indonesia. Sirkulasi udara sangat baik, tidak bikin gerah.",
    cocok: "Kaos harian distro, event santai, kaos kelas",
  },
  {
    name: "Cotton Combed 24s",
    gramasi: "175 - 190 GSM",
    handfeel: "Tebal Sedang & Kokoh",
    karakter: "Struktur kain lebih tebal dibanding 30s, tidak menerawang, sangat awet walau sering dicuci.",
    cocok: "Clothing brand distro profesional, seragam komunitas",
  },
  {
    name: "Cotton Combed 20s / Heavyweight",
    gramasi: "210 - 240 GSM",
    handfeel: "Tebal, Padat & Berbobot",
    karakter: "Material khas streetwear vintage. Potongan baju terlihat sangat tegas (box shape).",
    cocok: "Oversized t-shirt, streetwear merchandise",
  },
];

const printTechniques = [
  {
    name: "Sablon DTF (Direct Transfer Film) High-Res",
    durability: "Sangat Tahan Cuci",
    resolution: "Hingga 300 DPI (Foto & Gradasi)",
    moq: "Bisa Satuan (No MOQ)",
    desc: "Metode cetak digital modern dengan lem hotmelt elastis. Warna sangat cerah, detail gradasi foto tertransfer sempurna tanpa batasan warna.",
  },
  {
    name: "Sablon Plastisol Curing",
    durability: "Standar Distro Terkuat",
    resolution: "Warna Solid Tajam & Pekat",
    moq: "Mulai 24 Pcs",
    desc: "Tinta berbasis minyak (oil based) yang dikeringkan dengan mesin curing suhu 160°C. Sangat awet bertahun-tahun, elastis, dan tidak mudah pecah.",
  },
];

// ==========================================
// DATA: PRICE ESTIMATOR CONFIG
// ==========================================
type FabricType = "combed-30s" | "combed-24s" | "oversize";
type SablonType = "polos" | "dtf-a4" | "dtf-a3" | "plastisol";

const basePrices: Record<FabricType, { single: number; dozen: number; bulk: number }> = {
  "combed-30s": { single: 40000, dozen: 35000, bulk: 32000 },
  "combed-24s": { single: 48000, dozen: 42000, bulk: 39000 },
  oversize: { single: 65000, dozen: 58000, bulk: 54000 },
};

const sablonRates: Record<SablonType, number> = {
  polos: 0,
  "dtf-a4": 15000,
  "dtf-a3": 25000,
  plastisol: 20000,
};

// ==========================================
// DATA: WORKFLOW & FAQ
// ==========================================
const workflowSteps = [
  {
    step: "01",
    title: "Konsultasi & Kirim Desain",
    desc: "Pilih jenis kain kaos, warna, jumlah pesanan, dan kirim file desain sablon via WhatsApp.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Approval Mockup Digital",
    desc: "Tim kami membuat preview digital visual mockup kaos untuk persetujuan sebelum proses produksi.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Proses Cetak & Jahit",
    desc: "Pesanan diproduksi dengan mesin DTF/Plastisol modern dan standar jahitan rantai distro.",
    icon: Scissors,
  },
  {
    step: "04",
    title: "Quality Control & Packing",
    desc: "Pengecekan detail ukuran, pembersihan sisa benang, setrika uap, dan pengemasan rapi per pcs.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Kirim / Ambil di Store",
    desc: "Bisa diambil langsung ke store di Lowokwaru Malang, kirim via GoSend/Grab, atau ekspedisi kargo.",
    icon: Truck,
  },
];

const faqs = [
  {
    q: "Apakah di Blankshirt Malang bisa pesan kaos polos atau sablon satuan?",
    a: "Bisa sekali! Kami melayani pembelian kaos polos eceran mulai dari 1 pcs, serta jasa sablon custom satuan menggunakan teknologi DTF (Direct Transfer Film) High-Res.",
  },
  {
    q: "Berapa lama waktu pengerjaan sablon kaos?",
    a: "Untuk pesanan satuan atau kuantiti kecil, pengerjaan berkisar 1 - 3 hari kerja. Untuk pesanan partai puluhan hingga ratusan pcs, estimasi pengerjaan berkisar 4 - 7 hari kerja.",
  },
  {
    q: "Apakah bisa datang langsung ke store Blankshirt di Malang?",
    a: "Tentu saja! Anda bisa datang langsung ke store & workshop kami di Lowokwaru, Kota Malang untuk merasakan handfeel kain, melihat katalog warna, serta melihat sample hasil sablon.",
  },
  {
    q: "Format file desain apa yang paling bagus untuk sablon?",
    a: "Kami merekomendasikan file vektor seperti PDF, AI, CDR, SVG, atau file raster PNG beresolusi tinggi (minimal 300 DPI) dengan latar belakang transparan.",
  },
  {
    q: "Apakah ada diskon atau harga grosir untuk pesanan banyak?",
    a: "Ya, kami memberikan potongan harga grosir berjenjang untuk pemesanan mulai dari 12 pcs, 50 pcs, hingga ratusan pcs. Semakin banyak kuantiti Anda, semakin hemat harganya.",
  },
];

// ==========================================
// MAIN COMPONENT: HOME PAGE
// ==========================================
export default function Home() {
  // States
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSpec | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null);
  const [activeTab, setActiveTab] = useState<"reguler" | "oversized">("reguler");
  const [userWeight, setUserWeight] = useState<string>("");
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  // Estimator states
  const [estFabric, setEstFabric] = useState<FabricType>("combed-30s");
  const [estSablon, setEstSablon] = useState<SablonType>("dtf-a4");
  const [estQty, setEstQty] = useState<number>(24);
  const [copied, setCopied] = useState<boolean>(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculations
  const calculatedPrice = useMemo(() => {
    const tier = estQty < 12 ? "single" : estQty < 50 ? "dozen" : "bulk";
    const base = basePrices[estFabric][tier];
    const print = sablonRates[estSablon];
    const unitPrice = base + print;
    const totalPrice = unitPrice * estQty;
    return { unitPrice, totalPrice };
  }, [estFabric, estSablon, estQty]);

  // Handlers
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

  const getWaLinkForProduct = (productName: string) => {
    return `https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20order%20produk%20*${encodeURIComponent(
      productName
    )}*.%20Boleh%20minta%20info%20pricelist,%20katalog%20warna,%20dan%20stoknya?`;
  };

  const getWaEstimatorLink = () => {
    const text = `Halo Admin Blankshirt Malang, saya ingin konsultasi estimasi order:\n- Produk: ${estFabric.toUpperCase()}\n- Layanan: ${estSablon.toUpperCase()}\n- Jumlah: ${estQty} pcs\n- Estimasi Total: Rp ${calculatedPrice.totalPrice.toLocaleString("id-ID")}\n\nMohon info ketersediaan stok & prosesnya. Terima kasih!`;
    return `https://wa.me/628980080309?text=${encodeURIComponent(text)}`;
  };

  const copyEstimatorText = () => {
    const text = `Estimasi Order Blankshirt Malang:\n- Bahan: ${estFabric}\n- Sablon: ${estSablon}\n- Jumlah: ${estQty} pcs\n- Total: Rp ${calculatedPrice.totalPrice.toLocaleString("id-ID")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waColorLink = (colorName?: string) => {
    const text = colorName
      ? `Halo Admin Blankshirt Malang, saya tertarik dengan stok kaos warna *${colorName}*. Apakah ready stock?`
      : "Halo Admin Blankshirt Malang, saya ingin melihat katalog lengkap 30+ pilihan warna kain kaos.";
    return `https://wa.me/628980080309?text=${encodeURIComponent(text)}`;
  };

  const currentSizes = activeTab === "reguler" ? regularSizes : oversizedSizes;

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-20 border-b border-zinc-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

            <h1 className="font-raleway text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-[1.15] max-w-4xl mx-auto pt-5">
              Pusat Kaos Polos &amp; Sablon Custom Terlengkap di Malang - Blankshirt Malang
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
              Pusat grosir &amp; eceran Cotton Combed (20s/24s/30s), kaos polos distro, dan jasa
              sablon custom di Kota Malang. Kualitas premium, jahitan rapi standar distro, tanpa
              minimum order hingga ribuan pcs dengan garansi kepuasan.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <a
                href="https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20order%20kaos%20polos%20dan%20sablon%20custom."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Pesan Sekarang via WA</span>
              </a>

              <a
                href="#produk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-zinc-800 bg-white px-6 py-3.5 text-sm font-bold text-zinc-900 hover:bg-zinc-50 active:scale-95 transition-all"
              >
                <span>Order Custom / Cek Pricelist</span>
              </a>
            </div>

            {/* 3 Trust Cards Highlight Bar */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-3 sm:p-5 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
                <div className="flex items-center justify-center gap-3 py-2 sm:py-1 px-3 text-left">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                      100% Katun Combed Asli
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                      Combed 20s/24s/30s adem &amp; lembut
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 py-2 sm:py-1 px-3 text-left">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                      Grosir &amp; Eceran Satuan/Partai
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                      Tanpa batas order hingga ribuan pcs
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 py-2 sm:py-1 px-3 text-left">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                      Workshop &amp; Store di Malang
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                      Pilih bahan &amp; sample langsung di store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. PRODUCT GRID */}
        {/* ========================================== */}
        <section id="produk" className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                KATALOG PRODUK BLANKSHIRT MALANG
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Pilihan Kaos Polos Standar Distro &amp; Premium
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Tersedia berbagai pilihan material kaos berkualitas untuk kebutuhan acara, brand
                clothing, ataupun seragam dari Blankshirt Malang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`relative flex flex-col justify-between rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-md ${
                    product.isPopular
                      ? "border-emerald-400 ring-1 ring-emerald-400/30 shadow-xs"
                      : "border-zinc-200"
                  }`}
                >
                  {product.badge && (
                    <div className="absolute -top-3 right-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* SVG Frame */}
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

                      <span className="mt-3 text-xs font-semibold text-zinc-600">
                        {product.priceTag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

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
              ))}
            </div>

            {/* Spec Modal */}
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
                      * Blankshirt Malang melayani pembelian eceran satuan hingga partai grosir
                      ribuan pcs. Bisa custom sablon dan label brand.
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

        {/* ========================================== */}
        {/* 4. COLOR SWATCHES */}
        {/* ========================================== */}
        <section id="warna" className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                PILIHAN WARNA TERLENGKAP
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Tersedia Lebih Dari 30+ Warna Pilihan
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Pilihan warna favorit dan selalu ready stock untuk melengkapi kebutuhan produk Anda di
                Blankshirt Malang.
              </p>
            </div>

            <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-9 shadow-xs">
              <div className="space-y-8">
                {colorCategories.map((category, catIdx) => (
                  <div key={catIdx} className="space-y-3.5">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                      <h3 className="text-xs sm:text-sm font-bold tracking-wide text-zinc-900 uppercase">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                        {category.badge}
                      </span>
                    </div>

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

              {selectedColor && (
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 p-3.5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-6 w-6 rounded-full border border-zinc-300 shadow-xs shrink-0"
                      style={{ backgroundColor: selectedColor.hex }}
                    ></div>
                    <span className="text-xs font-semibold text-emerald-950">
                      Warna terpilih:{" "}
                      <strong>
                        {selectedColor.name} ({selectedColor.subName})
                      </strong>
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

              <div className="mt-8 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-xs text-zinc-600">
                  Mau warna lain? Blankshirt Malang menyediakan puluhan pilihan warna kain roll
                  lainnya.
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

        {/* ========================================== */}
        {/* 5. SIZE CHART & FABRIC MATRIX */}
        {/* ========================================== */}
        <section id="sizechart" className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                PANDUAN UKURAN &amp; MATERIAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Size Chart Kaos Polos Reguler &amp; Karakter Bahan
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Panduan ukuran standar lokal/internasional untuk memastikan kaos pas dan nyaman saat
                dikenakan.
              </p>

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

            {/* Table */}
            <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200/90 bg-white p-4 sm:p-8 shadow-xs mb-12">
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
                          <td className="py-3.5 px-3 sm:px-6 text-zinc-700 font-mono">
                            {row.width}
                          </td>
                          <td className="py-3.5 px-3 sm:px-6 text-zinc-700 font-mono">
                            {row.length}
                          </td>
                          <td className="py-3.5 px-3 sm:px-6 text-zinc-700">{row.weight}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Size Finder Assistant */}
              <div className="mt-6 rounded-2xl bg-zinc-50 border border-zinc-200/70 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                  <Ruler className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Cari rekomendasi ukuran cepat: masukkan berat badan Anda:</span>
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

              <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-zinc-500">
                <p>* Toleransi ukuran 1 - 2 cm karena proses potong dan jahit massal.</p>
                <a
                  href="https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20panduan%20ukuran%20size%20chart%20kaos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Butuh ukuran custom atau konsultasi size? Chat Kami</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Fabric Material Comparison */}
            <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-5">
              {fabricComparison.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                      {f.gramasi}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 mt-2">{f.name}</h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">{f.karakter}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200/60 text-[11px] text-zinc-500">
                    <strong>Cocok:</strong> {f.cocok}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. PRICE ESTIMATOR (KALKULATOR BIAYA) */}
        {/* ========================================== */}
        <section id="hitung-biaya" className="bg-zinc-50/50 py-16 md:py-24 border-b border-zinc-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                ESTIMASI HARGA REAL-TIME
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Simulasi Hitung Biaya Kaos &amp; Sablon
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Hitung estimasi budget kaos polos atau paket sablon custom Blankshirt Malang sesuai
                jumlah pesanan Anda.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Config Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Pilih Bahan */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2.5">
                    1. Pilih Material Kaos
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "combed-30s", label: "Combed 30s", desc: "Adem & Ringan" },
                      { id: "combed-24s", label: "Combed 24s", desc: "Tebal Sedang" },
                      { id: "oversize", label: "Oversize 20s", desc: "Heavyweight Boxy" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEstFabric(item.id as FabricType)}
                        className={`rounded-xl border p-3 text-left transition-all ${
                          estFabric === item.id
                            ? "border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600 text-emerald-950 font-bold"
                            : "border-zinc-200 hover:border-zinc-300 text-zinc-700"
                        }`}
                      >
                        <span className="block text-xs font-bold">{item.label}</span>
                        <span className="block text-[10px] text-zinc-500 mt-0.5">
                          {item.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Pilih Sablon */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2.5">
                    2. Jenis Sablon / Cetak
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: "polos", label: "Kaos Polos Saja", rate: "Tanpa Sablon" },
                      { id: "dtf-a4", label: "Sablon DTF A4", rate: "Depan/Belakang" },
                      { id: "dtf-a3", label: "Sablon DTF A3", rate: "Area Cetak Besar" },
                      { id: "plastisol", label: "Plastisol Curing", rate: "Standar Distro (24+)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEstSablon(item.id as SablonType)}
                        className={`rounded-xl border p-3 text-left transition-all ${
                          estSablon === item.id
                            ? "border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600 text-emerald-950 font-bold"
                            : "border-zinc-200 hover:border-zinc-300 text-zinc-700"
                        }`}
                      >
                        <span className="block text-xs font-bold">{item.label}</span>
                        <span className="block text-[10px] text-zinc-500 mt-0.5">
                          {item.rate}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Jumlah Qty Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      3. Jumlah Pesanan (Qty)
                    </label>
                    <span className="rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-0.5">
                      {estQty} Pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="300"
                    value={estQty}
                    onChange={(e) => setEstQty(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                    <span>1 Pcs (Satuan)</span>
                    <span>12 Pcs (Lusin)</span>
                    <span>50 Pcs (Grosir)</span>
                    <span>300+ Pcs</span>
                  </div>
                </div>
              </div>

              {/* Right Output Summary Card */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-zinc-900 text-white p-6 shadow-md">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                        Rincian Estimasi
                      </span>
                    </div>
                    <span className="text-[10px] rounded bg-emerald-500/20 text-emerald-400 px-2 py-0.5 font-mono">
                      Blankshirt Estimator
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Pilihan Bahan:</span>
                      <span className="font-semibold text-white uppercase">{estFabric}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Metode Sablon:</span>
                      <span className="font-semibold text-white uppercase">{estSablon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Total Kuantiti:</span>
                      <span className="font-semibold text-white">{estQty} Pcs</span>
                    </div>
                    <div className="flex justify-between border-t border-zinc-800 pt-2 text-zinc-400">
                      <span>Estimasi / Pcs:</span>
                      <span className="font-mono text-emerald-400 font-bold">
                        Rp {calculatedPrice.unitPrice.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-zinc-800/80 p-4 border border-zinc-700">
                    <span className="block text-[11px] text-zinc-400">Total Biaya Estimasi:</span>
                    <span className="block text-2xl font-black text-white mt-1 font-mono tracking-tight">
                      Rp {calculatedPrice.totalPrice.toLocaleString("id-ID")}
                    </span>
                    <span className="block text-[10px] text-zinc-400 mt-1">
                      * Harga final dapat disesuaikan dengan detail desain &amp; ukuran sablon.
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2.5">
                  <a
                    href={getWaEstimatorLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Konsultasi Estimasi via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEstimatorText}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-[11px] font-semibold text-zinc-300 hover:bg-zinc-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Salin Rincian Estimasi</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. SERVICES & ADVANTAGES */}
        {/* ========================================== */}
        <section id="layanan" className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                LAYANAN &amp; KEUNGGULAN KAMI
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Siap Cetak Kaos Brand, Event &amp; Komunitas
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Solusi terpercaya dari Blankshirt Malang untuk memproduksi apparel promosi,
                merchandise event, hingga clothing brand dengan standar kualitas terjamin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-md">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                    <Printer className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    Sablon Berkualitas &amp; Tahan Lama
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Menggunakan mesin &amp; tinta premium seperti DTF (Direct Transfer Film) dan
                    Plastisol Curing, warna tajam dan tahan cuci berkali-kali.
                  </p>
                </div>
                <div className="mt-6 space-y-2 border-t border-zinc-100 pt-4">
                  {[
                    "DTF High-Res 300 DPI / Plastisol Premium",
                    "Warna solid, gradasi tajam & cerah",
                    "Tidak mudah retak & luntur saat dicuci",
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-md">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                    <Tag className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    Custom Brand &amp; Makloon Lengkap
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Bagi Anda yang merintis clothing brand sendiri, kami sediakan jasa sablon
                    lengkap dengan aksesoris brand eksklusif.
                  </p>
                </div>
                <div className="mt-6 space-y-2 border-t border-zinc-100 pt-4">
                  {[
                    "Custom label woven leher & label satin",
                    "Hangtag tebal & packaging plastik rapi",
                    "Pilihan pola potong (regular, boxy, oversized)",
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-md">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                    <BadgePercent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    Harga Grosir &amp; Fleksibel
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Mendukung pesanan mulai dari kuantiti kecil untuk sampel hingga pesanan ribuan
                    pcs untuk skala korporat dengan harga terbaik.
                  </p>
                </div>
                <div className="mt-6 space-y-2 border-t border-zinc-100 pt-4">
                  {[
                    "Tanpa minimum order ketat (bisa satuan)",
                    "Harga grosir berjenjang semakin hemat",
                    "Garansi tepat waktu & jaminan garansi reject",
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. WORKFLOW SECTION (ALUR KERJA) */}
        {/* ========================================== */}
        <section id="alur-kerja" className="bg-zinc-50/50 py-16 md:py-24 border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                PROSES PRODUKSI TRANSPARAN
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Alur Kerja Mudah &amp; Cepat di Blankshirt
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                5 langkah praktis mewujudkan kaos polos dan sablon custom impian Anda tanpa ribet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-black text-emerald-600 font-mono">
                          {step.step}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[11px] text-zinc-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. FAQ SECTION */}
        {/* ========================================== */}
        <section className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold uppercase text-emerald-800 mb-3">
                <HelpCircle className="h-3.5 w-3.5 text-emerald-600" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Pertanyaan Umum Seputar Blankshirt Malang
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Punya pertanyaan seputar minimal order, waktu pengerjaan, atau lokasi store? Simak di
                bawah.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/50 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-zinc-900 hover:text-emerald-700"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-200/50 pt-3 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 10. WORKSHOP & STORE LOCATION MALANG */}
        {/* ========================================== */}
        <section id="lokasi" className="bg-white py-16 md:py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  WORKSHOP &amp; STORE KAOS POLOS DI MALANG
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                  Bisa Datang Langsung ke Store Blankshirt Malang &amp; Pilih Bahan Sepuasnya
                </h2>

                <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                  Anda berdomisili di Malang dan sekitarnya? Kunjungi store &amp; workshop Blankshirt
                  Malang untuk merasakan langsung handfeel bahan katun combed, melihat sample hasil
                  sablon, dan konsultasi gratis dengan tim kami.
                </p>

                <div className="mt-8 space-y-5 w-full">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Alamat Workshop &amp; Store</h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Jl. MT Haryono / Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur (Dekat kawasan
                        kampus UB, UIN &amp; Polinema)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Jam Operasional</h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Senin – Sabtu: 09.00 – 17.00 WIB (Minggu &amp; Tanggal Merah harap konfirmasi
                        via WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5">
                      <Navigation className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Akses &amp; Parkir Nyaman</h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Lokasi strategis di Kota Malang, mudah diakses motor maupun mobil dengan area
                        parkir luas dan aman.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Jl.+MT+Haryono+Dinoyo+Lowokwaru+Malang+Jawa+Timur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-800 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 active:scale-95 transition-all"
                  >
                    <span>Buka Lokasi di Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Google Maps Preview Card */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-md flex flex-col">
                  {/* Map Header */}
                  <div className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-bold tracking-wide truncate">
                        Blankshirt Workshop &amp; Store Malang
                      </span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jl.+MT+Haryono+Dinoyo+Lowokwaru+Malang+Jawa+Timur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline shrink-0"
                    >
                      <span>Petunjuk Arah</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Embed Iframe */}
                  <div className="relative w-full h-[320px] sm:h-[360px] bg-zinc-100">
                    <iframe
                      title="Google Maps Preview Blankshirt Malang"
                      src="https://maps.google.com/maps?q=Jl.+MT+Haryono%2C+Dinoyo%2C+Kec.+Lowokwaru%2C+Kota+Malang%2C+Jawa+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Delivery Info */}
                  <div className="p-4 bg-zinc-50 border-t border-zinc-200/80 flex items-center justify-between gap-3 text-xs text-zinc-600">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>
                        Siap kirim <strong>GoSend / GrabExpress</strong> (Malang Raya) &amp; Kargo
                      </span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jl.+MT+Haryono+Dinoyo+Lowokwaru+Malang+Jawa+Timur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0"
                    >
                      Buka Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. CTA BANNER */}
        {/* ========================================== */}
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-zinc-200/90 bg-zinc-50/50 p-8 sm:p-14 text-center shadow-xs">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                KONSULTASI SEKARANG • BLANKSHIRT MALANG
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight max-w-2xl mx-auto leading-snug">
                Butuh Kaos Polos Cepat atau Mau Bikin Sablon Custom Komunitas?
              </h2>

              <p className="mt-4 text-xs sm:text-base text-zinc-600 leading-relaxed max-w-xl mx-auto">
                Diskusikan ide desain &amp; kebutuhan kaos Anda dengan tim Blankshirt Malang sekarang.
                Fast response via WhatsApp dan dapatkan penawaran harga grosir terbaik!
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20pembuatan%20kaos%20polos%20dan%20sablon%20custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order via WhatsApp Blankshirt</span>
                </a>

                <a
                  href="tel:+628980080309"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-900 px-3 py-2"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Atau telepon: +62 898-0080-309</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* 13. FLOATING WHATSAPP & STICKY MOBILE CTA */}
      <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute bottom-full right-0 mb-3 hidden sm:group-hover:flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-none">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>Chat CS Blankshirt Malang (Online)</span>
        </div>

        <a
          href="https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20tanya%20stok%20kaos%20polos%20dan%20sablon%20custom."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi kami melalui WhatsApp"
          className="whatsapp-pulse-btn flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />
        </a>
      </aside>
    </div>
  );
}
