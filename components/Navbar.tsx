"use client";

import { useState } from "react";
import { Scissors, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Katalog Produk", href: "#katalog" },
    { label: "Pilihan Bahan & Sablon", href: "#bahan" },
    { label: "Size Chart", href: "#size-chart" },
    { label: "Hitung Biaya", href: "#hitung-biaya" },
    { label: "Alur Kerja", href: "#alur-kerja" },
  ];

  const waLink =
    "https://wa.me/628980080309?text=Halo%20Admin%20Atelier%20Garment,%20saya%20ingin%20konsultasi%20order%20konveksi%20apparel%20custom.";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Scissors className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-zinc-900 text-base uppercase">
                Atelier Garment
              </span>
              <span className="hidden sm:inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-amber-800">
                PROD-HUB
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              Konveksi & Workshop Sablon
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-amber-700 active:scale-[0.98] transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Konsultasi Order</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 pt-2 pb-5 md:hidden space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Konsultasi Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
