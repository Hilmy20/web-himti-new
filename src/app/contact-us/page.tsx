"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function KontakKami() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "2024",
    type: "Saran & Masukan",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
        setStatusMessage("Terima kasih! Aspirasi kamu telah berhasil dikirimkan ke HIMTI.");
        setFormData({
          name: "",
          phone: "",
          year: "2024",
          type: "Saran & Masukan",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(
          "Pesan tidak dapat terkirim saat ini (konfigurasi mail server belum aktif). Silakan hubungi langsung via WhatsApp!"
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Terjadi kendala jaringan. Silakan coba lagi atau hubungi via WhatsApp.");
    }
  };

  const aspirasiTypes = [
    "Saran & Masukan",
    "Kritik Konstruktif",
    "Pertanyaan Umum",
    "Pengajuan Kerja Sama",
    "Lainnya",
  ];

  return (
    <div className="w-full space-y-16 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Contact */}
      <section className="glass-surface relative rounded-[32px] p-8 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Layanan Aspirasi Mahasiswa</span>
            </div>

            <h1 className="font-main text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Innovara HIMTI Paramadina <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Siap Mendengar dan Membantu
              </span>
            </h1>

            <p className="text-gray-300/85 text-sm sm:text-base leading-relaxed font-light">
              Kami membuka ruang selebar-lebarnya bagi seluruh mahasiswa Universitas Paramadina untuk menyampaikan pertanyaan, masukan, kritik, ataupun aspirasi demi perkembangan HIMTI ke arah yang lebih baik.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="https://wa.me/6281297590093?text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20HIMTI%20Paramadina."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#25D366]/90 hover:bg-[#25D366] border border-white/20 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:brightness-105 active:scale-95 transition"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] backdrop-blur-xl p-6 flex items-center justify-center">
              <Image
                src="/images/discuss.svg"
                alt="Diskusi HIMTI"
                width={320}
                height={320}
                className="object-contain filter drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form PERASA */}
      <section className="glass-surface rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs text-blue-300 font-medium">
            Form PERASA (Pesan & Aspirasi)
          </div>
          <h2 className="text-2xl sm:text-3xl font-main font-bold text-white">
            Kirimkan Pesan atau Aspirasi Kamu
          </h2>
          <p className="text-gray-300/80 text-sm max-w-lg mx-auto">
            Pesan kamu akan langsung diteruskan ke tim pengurus HIMTI Paramadina secara aman.
          </p>
        </div>

        {status === "success" && (
          <div className="rounded-2xl p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl p-4 bg-rose-500/15 border border-rose-500/30 text-rose-200 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300">
                Nama Lengkap / Inisial <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
              />
            </div>

            {/* No Telepon */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300">
                Nomor Telepon / WhatsApp <span className="text-gray-500">(Opsional)</span>
              </label>
              <input
                type="tel"
                placeholder="08123456789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tahun Angkatan */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300">
                Tahun Angkatan <span className="text-blue-400">*</span>
              </label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#12141c] border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 transition"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="Alumni">Alumni</option>
                <option value="Lainnya">Lainnya / Umum</option>
              </select>
            </div>

            {/* Jenis Perasa */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300">
                Kategori Aspirasi <span className="text-blue-400">*</span>
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#12141c] border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 transition"
              >
                {aspirasiTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pesan */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-300">
              Isi Pesan / Aspirasi <span className="text-blue-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tuliskan aspirasi, kritik, atau ide kamu untuk HIMTI..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] resize-y"
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 border border-white/20 shadow-[0_8px_25px_rgba(0,102,255,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-95 disabled:opacity-50 transition"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Mengirimkan...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Aspirasi</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Map Location */}
      <section className="glass-surface rounded-[32px] overflow-hidden p-2 sm:p-3">
        <div className="p-4 sm:p-6 pb-4">
          <p className="text-xs uppercase font-semibold text-blue-400 tracking-wider">
            Lokasi Kampus
          </p>
          <h3 className="text-xl font-bold text-white font-main mt-0.5">
            Universitas Paramadina — Kampus Cipayung
          </h3>
        </div>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6181827941696!2d106.90414257421631!3d-6.314974993674382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c398b48d51%3A0x2a232e58c9357e8f!2sUniversitas%20Paramadina!5e1!3m2!1sid!2sid!4v1745765573804!5m2!1sid!2sid"
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
