"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Pilihan Produk", href: "#produk" },
    { label: "Pilihan Warna", href: "#warna" },
    { label: "Size Chart", href: "#sizechart" },
    { label: "Layanan Sablon", href: "#layanan" },
    { label: "Lokasi Workshop", href: "#lokasi" },
  ];

  const waLink =
    "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20kaos%20polos%20dan%20sablon%20custom.";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 overflow-hidden shadow-xs group-hover:border-emerald-500 transition-all p-1">
            <Image
              src="/icon.png"
              alt="Blankshirt Malang Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-raleway font-black tracking-wider text-zinc-900 text-sm sm:text-base leading-tight">
              BLANKSHIRT MALANG
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 pt-3 pb-6 lg:hidden space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-100">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
