"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  actionUrl?: string;
  actionLabel?: string;
  quickReplies?: string[];
}

interface AiChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string | null;
}

// Knowledge Base Q&A Training for Blankshirt Malang
function generateBotReply(userText: string): {
  text: string;
  actionUrl?: string;
  actionLabel?: string;
  quickReplies?: string[];
} {
  const query = userText.toLowerCase();

  // 1. Color / Stok Warna Specific
  if (
    query.includes("warna") ||
    query.includes("hitam") ||
    query.includes("putih") ||
    query.includes("navy") ||
    query.includes("army") ||
    query.includes("mustard") ||
    query.includes("khaki") ||
    query.includes("terracotta") ||
    query.includes("marun") ||
    query.includes("lilac") ||
    query.includes("stok")
  ) {
    let colorMention = "";
    if (query.includes("hitam")) colorMention = "Hitam (Jet Black)";
    else if (query.includes("putih")) colorMention = "Putih (Solid White)";
    else if (query.includes("navy")) colorMention = "Biru Navy (Dongker)";
    else if (query.includes("army")) colorMention = "Hijau Army";
    else if (query.includes("mustard")) colorMention = "Mustard Yellow";
    else if (query.includes("khaki") || query.includes("cokelat")) colorMention = "Cokelat Khaki / Sand";
    else if (query.includes("terracotta")) colorMention = "Terracotta";
    else if (query.includes("marun")) colorMention = "Merah Marun";
    else if (query.includes("lilac")) colorMention = "Lilac Pastel";

    const targetColor = colorMention ? `Warna *${colorMention}*` : "Pilihan warna yang Anda tanyakan";

    return {
      text: `${targetColor} **READY STOCK** di store Blankshirt Malang! Tersedia pilihan bahan Cotton Combed 30s & 24s (Size S, M, L, XL, XXL, hingga 3XL Jumbo). Anda bisa beli eceran satuan polos atau sekalian paket cetak sablon custom DTF / Plastisol.`,
      actionUrl: `https://wa.me/628980080309?text=${encodeURIComponent(
        `Halo Admin Blankshirt Malang, saya ingin order kaos ${colorMention || "warna ready stock"}.`
      )}`,
      actionLabel: "Order / Ambil Stok via WA",
      quickReplies: ["Berapa harga satuannya?", "Bisa sablon satuan?", "Lokasi store di mana?"],
    };
  }

  // 2. Pricing & Grosir
  if (query.includes("harga") || query.includes("pricelist") || query.includes("biaya") || query.includes("grosir") || query.includes("murah") || query.includes("diskon")) {
    return {
      text: `Berikut ringkasan pricelist Blankshirt Malang:\n\n• **Combed 30s (Soft & Adem)**: Ecer Rp 40.000 | Lusinan Rp 35.000 | Grosir (50+) Rp 32.000\n• **Combed 24s (Heavyweight)**: Ecer Rp 48.000 | Lusinan Rp 42.000 | Grosir Rp 39.000\n• **Kaos Oversize 20s (Boxy Cut)**: Ecer Rp 65.000 | Grosir Rp 58.000\n• **Paket Sablon Custom DTF All-in**: Mulai Rp 55.000/pcs\n\n*Semakin banyak jumlah pesanan, harga semakin hemat!*`,
      actionUrl: "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20minta%20pricelist%20lengkap%20grosir.",
      actionLabel: "Minta Pricelist PDF via WA",
      quickReplies: ["Paket sablon sudah termasuk kaos?", "Ada minimal order?", "Size Chart"],
    };
  }

  // 3. Sablon & DTF / Plastisol
  if (query.includes("sablon") || query.includes("dtf") || query.includes("plastisol") || query.includes("cetak") || query.includes("desain") || query.includes("mockup")) {
    return {
      text: `Kami melayani 2 teknik sablon unggulan:\n\n1. **Sablon DTF High-Res 300 DPI**: Bisa pesan **SATUAN (Tanpa Minimal Order)**, bebas cetak foto/gradasi full color tanpa batas warna, elastis dan tahan cuci.\n2. **Sablon Plastisol Curing**: Standar distro internasional, tinta karet pekat awet 100+ cuci, minimal order 24 pcs.\n\n*Gratis pembuatan digital mockup 3D sebelum proses cetak.*`,
      actionUrl: "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20mau%20konsultasi%20desain%20sablon%20kaos.",
      actionLabel: "Kirim File Desain ke WA",
      quickReplies: ["Berapa lama pengerjaannya?", "Format file yang disarankan?", "Harga paket sablon"],
    };
  }

  // 4. Location & Operational Hours
  if (query.includes("lokasi") || query.includes("alamat") || query.includes("store") || query.includes("workshop") || query.includes("malang") || query.includes("buka") || query.includes("jam")) {
    return {
      text: `Store & Workshop Blankshirt Malang berlokasi di:\n📍 **Jl. MT Haryono / Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur** (Kawasan kampus UB, UIN, dan Polinema).\n\n⏰ **Jam Buka**: Senin – Sabtu: 09.00 – 17.00 WIB.\nBisa datang langsung untuk pilih warna kain, cek handfeel, dan konsultasi gratis!`,
      actionUrl: "https://maps.google.com/?q=Jl.+MT+Haryono+Dinoyo+Lowokwaru+Malang+Jawa+Timur",
      actionLabel: "Buka Google Maps Rute",
      quickReplies: ["Bisa kirim via GoSend?", "Katalog warna ready?", "Pricelist"],
    };
  }

  // 5. Size Chart & Ukuran
  if (query.includes("ukuran") || query.includes("size") || query.includes("panjang") || query.includes("lebar") || query.includes("jumbo") || query.includes("berat badan")) {
    return {
      text: `Panduan ukuran standar Blankshirt Malang (Lebar x Panjang):\n• **S**: 47 x 67 cm (BB 45-55 kg)\n• **M**: 49 x 70 cm (BB 55-65 kg)\n• **L**: 52 x 72 cm (BB 65-75 kg)\n• **XL**: 54 x 75 cm (BB 75-85 kg)\n• **XXL**: 57 x 77 cm (BB 85-95 kg)\n• **3XL Jumbo**: 60 x 79 cm (BB >95 kg)\n\nTersedia juga pola **Oversize Boxy Fit Drop Shoulder** (M, L, XL, XXL).`,
      actionUrl: "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20mau%20konsultasi%20ukuran%20kaos.",
      actionLabel: "Konsultasi Size via WA",
      quickReplies: ["Pilihan bahan kain?", "Stok warna ready?", "Harga"],
    };
  }

  // 6. Lead Time / Waktu Pengerjaan & Pengiriman
  if (query.includes("lama") || query.includes("berapa hari") || query.includes("waktu") || query.includes("kirim") || query.includes("gosend") || query.includes("ongkir")) {
    return {
      text: `Estimasi pengerjaan & pengiriman di Blankshirt Malang:\n\n• **Kaos Polos Ready**: Siap kirim hari yang sama (Same Day GoSend/Grab wilayah Malang Raya).\n• **Sablon Satuan DTF**: 1 – 3 hari kerja.\n• **Sablon Partai Lusinan/Ratusan**: 4 – 7 hari kerja.\n\n*Pengiriman luar kota didukung ekspedisi kargo hemat (J&T, JNE, Indah Cargo, Lion Parcel).*`,
      actionUrl: "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20mau%20tanya%20estimasi%20pengerjaan%20dan%20ongkir.",
      actionLabel: "Cek Antrean / Slot Order",
      quickReplies: ["Bisa sablon satuan?", "Pilihan warna", "Pricelist"],
    };
  }

  // Default Fallback Response
  return {
    text: `Halo! Saya AI Assistant Blankshirt Malang. Kami menyediakan **Kaos Polos Cotton Combed 20s/24s/30s & Oversize**, serta jasa **Sablon Custom DTF & Plastisol** di Kota Malang. Anda bisa beli satuan maupun partai grosir.\n\nAda yang bisa kami bantu seputar stok warna, bahan, harga, atau ukuran?`,
    actionUrl: "https://wa.me/628980080309?text=Halo%20Admin%20Blankshirt%20Malang,%20saya%20ingin%20konsultasi%20order.",
    actionLabel: "Hubungi Admin WhatsApp",
    quickReplies: ["Pilihan Warna Ready", "Pricelist Kaos & Sablon", "Lokasi Store di Malang", "Panduan Size Chart"],
  };
}

export default function AiChatPopup({
  isOpen,
  onClose,
  initialTopic,
}: AiChatPopupProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Halo! Selamat datang di **Blankshirt Malang**. Saya asisten virtual siap membantu cek stok warna kaos, bahan, harga grosir, atau info sablon custom. Ada yang ingin ditanyakan?",
      time: "Baru saja",
      quickReplies: [
        "Pilihan Warna Ready Stock",
        "Pricelist Kaos & Sablon",
        "Bisa Pesan Sablon Satuan?",
        "Lokasi Store di Malang",
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedTopicRef = useRef<string | null>(null);
  const msgCounterRef = useRef<number>(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Handle initial topic injection when opened via color click
  useEffect(() => {
    if (isOpen && initialTopic && initialTopic !== initializedTopicRef.current) {
      initializedTopicRef.current = initialTopic;
      const userMsg: ChatMessage = {
        id: `user-${msgCounterRef.current++}`,
        sender: "user",
        text: `Halo, saya tertarik dengan stok kaos warna ${initialTopic}. Apakah ready stock?`,
        time: "Sekarang",
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      const timer = setTimeout(() => {
        const reply = generateBotReply(`warna ${initialTopic}`);
        const botMsg: ChatMessage = {
          id: `bot-${msgCounterRef.current++}`,
          sender: "bot",
          text: reply.text,
          time: "Sekarang",
          actionUrl: reply.actionUrl,
          actionLabel: reply.actionLabel,
          quickReplies: reply.quickReplies,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, initialTopic]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${msgCounterRef.current++}`,
      sender: "user",
      text: query,
      time: "Sekarang",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: ChatMessage = {
        id: `bot-${msgCounterRef.current++}`,
        sender: "bot",
        text: reply.text,
        time: "Sekarang",
        actionUrl: reply.actionUrl,
        actionLabel: reply.actionLabel,
        quickReplies: reply.quickReplies,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Percakapan telah direset. Silakan tanyakan ketersediaan warna, harga grosir, atau konsultasi sablon custom!",
        time: "Baru saja",
        quickReplies: [
          "Pilihan Warna Ready Stock",
          "Pricelist Kaos & Sablon",
          "Lokasi Store di Malang",
        ],
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-lg h-[90vh] sm:h-[620px] max-h-[92vh] rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl border border-zinc-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-2 duration-200">
        
        {/* Chat Header */}
        <div className="px-5 py-4 bg-zinc-900 text-white flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white overflow-hidden shadow-xs border border-emerald-400/30">
              <Image
                src="/icon.png"
                alt="Blankshirt Assistant"
                width={36}
                height={36}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">
                  Blankshirt AI Assistant
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                CS Virtual • Stok Kaos &amp; Sablon Malang
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleResetChat}
              title="Reset Percakapan"
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
              aria-label="Tutup Chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-zinc-50/70 text-xs sm:text-sm">
          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  isBot ? "justify-start" : "justify-end"
                }`}
              >
                {isBot && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs mt-1 shadow-xs">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[84%] sm:max-w-[78%] rounded-2xl p-3.5 sm:p-4 shadow-xs ${
                    isBot
                      ? "bg-white border border-zinc-200 text-zinc-800 rounded-tl-xs"
                      : "bg-emerald-600 text-white rounded-tr-xs"
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Optional Direct Action Link */}
                  {msg.actionUrl && (
                    <div className="mt-3 pt-2.5 border-t border-zinc-100">
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                        <span>{msg.actionLabel || "Lanjutkan ke WhatsApp"}</span>
                        <ExternalLink className="h-3 w-3 opacity-70" />
                      </a>
                    </div>
                  )}

                  {/* Optional Quick Reply Chips */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-zinc-100 flex flex-wrap gap-1.5">
                      {msg.quickReplies.map((qr, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSendMessage(qr)}
                          className="rounded-full bg-zinc-100 border border-zinc-200 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all text-left"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`mt-1.5 text-[10px] text-right ${
                      isBot ? "text-zinc-400" : "text-emerald-100"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>

                {!isBot && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white text-xs mt-1 shadow-xs">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-white border border-zinc-200 rounded-2xl rounded-tl-xs px-4 py-3 w-fit shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-spin" />
              <span className="font-medium">Blankshirt AI sedang mengetik...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills Bar */}
        <div className="px-4 py-2 bg-white border-t border-zinc-100 overflow-x-auto flex gap-1.5 shrink-0 no-scrollbar">
          {[
            "Stok Kaos Hitam & Putih",
            "Pricelist Grosir",
            "Bisa Sablon Satuan?",
            "Lokasi Store Malang",
            "Panduan Size Chart",
          ].map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(prompt)}
              className="rounded-full bg-zinc-50 border border-zinc-200 px-3 py-1 text-[11px] font-medium text-zinc-700 whitespace-nowrap hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 sm:p-4 bg-white border-t border-zinc-200 flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ketik pertanyaan (warna, harga, sablon, lokasi)..."
            className="flex-1 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-xs sm:text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white disabled:opacity-40 hover:bg-emerald-700 active:scale-95 transition-all shadow-xs"
            aria-label="Kirim Pesan"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
