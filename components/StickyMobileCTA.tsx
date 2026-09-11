import { MessageSquare, Calculator } from "lucide-react";

export default function StickyMobileCTA() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Atelier%20Garment,%20saya%20ingin%20konsultasi%20order%20konveksi%20apparel.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-zinc-300 bg-white/95 p-3 backdrop-blur-md shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="#hitung-biaya"
          className="flex h-11 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 px-3.5 text-xs font-mono font-bold text-zinc-800 hover:bg-zinc-200 transition-colors shrink-0"
          aria-label="Kalkulator Biaya"
        >
          <Calculator className="h-4 w-4" />
        </a>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-[0.98] transition-all hover:bg-amber-700"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
