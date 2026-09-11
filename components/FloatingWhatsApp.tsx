"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20tanya%20stok%20kaos%20polos%20dan%20sablon%20custom.";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 hidden sm:group-hover:flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>Chat CS Blankshirt Malang (Online)</span>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp"
        className="whatsapp-pulse-btn flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
