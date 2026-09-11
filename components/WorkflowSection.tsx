import {
  MessageSquare,
  FileCheck,
  Scissors,
  CheckCircle2,
  Truck,
  ArrowRight,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Konsultasi & Brief Desain",
    desc: "Diskusikan jenis pakaian, bahan kain, jumlah pcs, dan kirim file vektor logo/desain (AI, CDR, PDF, PNG resolusi tinggi).",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Approval SPK & Mockup 3D",
    desc: "Tim desain kami menyiapkan digital mockup detail ukuran & penempatan cetak beserta Surat Perintah Kerja (SPK) transparan.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Proses Potong, Sablon & Jahit",
    desc: "Produksi massal dijalankan dengan pola potong presisi, mesin sablon/bordir Tajima komputer, dan penjahit garment profesional.",
    icon: Scissors,
  },
  {
    step: "04",
    title: "Quality Control 3 Tahap",
    desc: "Pembersihan sisa benang, steam ironing uap panas, pengukuran ulang toleransi size chart, dan packing plastik seal rapi per pcs.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Pengiriman Garansi Tepat Waktu",
    desc: "Pesanan dikirim aman ke seluruh Indonesia via cargo terpercaya (JNE Trucking, Dakota, Baraka, Lion Parcel) dengan nomor resi aktif.",
    icon: Truck,
  },
];

export default function WorkflowSection() {
  return (
    <section id="alur-kerja" className="border-b border-zinc-200 bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded bg-amber-100 px-2.5 py-1 text-xs font-mono font-bold uppercase text-amber-800 mb-3">
            Standar SOP Workshop
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
            Alur Kerja &amp; Jaminan Garansi Produksi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
            Sistem manufaktur transparan dengan pembaruan berkala via WhatsApp di setiap fase produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-xs hover:border-amber-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-amber-600">
                      {step.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100 text-zinc-800">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                  <span>STEP {idx + 1} OF 5</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
