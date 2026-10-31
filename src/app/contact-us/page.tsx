"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import ketum from "@/assets/images/mita.png";
import waketum from "@/assets/images/raka.png";
import sekre from "@/assets/images/qilla.png";
import bandar from "@/assets/images/rofiqo.png";
import creative from "@/assets/images/hamid.jpeg";
import ristek from "@/assets/images/arya.png";
import humas from "@/assets/images/galbin.jpeg";
import edu from "@/assets/images/apung.jpeg";

const team = [
  { name: "Miftahul Fitriah", role: "President", image: ketum },
  { name: "Raka Adrian", role: "Vice President", image: waketum },
  { name: "Syaqilla Maulida", role: "Administration", image: sekre },
  { name: "Rofiqo Aldina", role: "Finansial", image: bandar },
  { name: "Abdul Hamid", role: "Creative & Design", image: creative },
  { name: "Naufal Arya", role: "Riset & Teknologi", image: ristek },
  { name: "Galbin Adi", role: "Humas & Media", image: humas },
  { name: "Alfin Masykur", role: "Human Capital", image: edu },
];

const aspirasiTypes = [
  "Saran & Masukan",
  "Kritik Konstruktif",
  "Pertanyaan Umum",
  "Pengajuan Kerja Sama",
  "Lainnya",
];

const fieldClass =
  "h-11 w-full rounded-sm border border-hairline bg-surface-canvas px-4 text-[16px] text-ink transition-colors placeholder:text-ink-disabled focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/25";

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
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.55,
      delay: reduce ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

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

  return (
    <div className="relative w-full overflow-hidden bg-surface-canvas">
          {/* Hero */}
          <section className="container-page pb-10 pt-14 text-center sm:pt-20">
            <motion.h1 {...reveal()} className="mx-auto max-w-[900px] font-display text-[clamp(40px,7.5vw,96px)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
              Kami siap mendengar
            </motion.h1>
            <motion.p {...reveal(0.08)} className="mx-auto mt-6 max-w-[600px] text-[18px] leading-relaxed text-ink">
              Dukungan nyata dari pengurus HIMTI Paramadina — kapan pun kamu
              butuh. Sampaikan aspirasi, pertanyaan, atau ide untuk kemajuan
              bersama.
            </motion.p>
          </section>

          {/* Team slider */}
          <section aria-label="Pengurus HIMTI" className="overflow-hidden">
            <div className="animate-team-marquee flex w-max [will-change:transform] motion-reduce:animate-none">
              {[...team, ...team].map((member, i) => (
                <article
                  key={`${member.name}-${i}`}
                  aria-hidden={i >= team.length}
                  className="w-[46vw] shrink-0 px-1.5 sm:w-[30vw] lg:w-[340px]"
                >
                  <div className="overflow-hidden rounded-sm bg-surface-parchment">
                    <div className="group relative aspect-square w-full overflow-hidden bg-surface-parchment">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        loading={i < team.length ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 340px"
                        className="object-cover grayscale transition-transform duration-500 ease-apple group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-brand-secondary/25 mix-blend-multiply" />
                    </div>
                    <div className="flex items-start justify-between gap-1 px-2.5 py-3.5">
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold leading-tight text-ink">
                          {member.name}
                        </p>
                        <p className="mt-0.5 truncate text-[13px] leading-tight text-ink-fine">
                          {member.role}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-0.5 hidden h-3 w-3 shrink-0 text-ink-fine sm:block" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact intro */}
          <section className="container-page py-14 text-center sm:py-16">
            <motion.span {...reveal()} className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark">
              <MessageCircle className="h-5 w-5 text-brand-light" />
            </motion.span>
            <motion.h2 {...reveal(0.06)} className="heading-lg mt-5 text-ink">Hubungi tim HIMTI</motion.h2>
            <motion.p {...reveal(0.1)} className="mx-auto mt-3 max-w-[560px] text-body text-ink">
              Apa pun kebutuhanmu — aspirasi, kolaborasi, atau sekadar
              bertanya — tim kami siap membantu.
            </motion.p>

            <motion.div {...reveal(0.14)} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://wa.me/6281297590093?text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20HIMTI%20Paramadina."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-hairline bg-surface-canvas px-6 text-caption-strong text-ink transition-colors hover:bg-surface-parchment"
              >
                <FaWhatsapp className="h-4 w-4" />
                Chat WhatsApp
              </Link>
              <Link
                href="#form"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-dark px-6 text-caption-strong text-brand-light transition-colors hover:bg-brand-secondary"
              >
                Kirim Aspirasi
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </section>

          {/* Form + info */}
          <section id="form" className="container-page scroll-mt-24 pb-14 sm:pb-20">
            <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
              <motion.div {...reveal()} className="rounded-none bg-surface-parchment p-6 sm:rounded-lg sm:p-8">
                <h3 className="text-tagline text-ink">Kirim pesan</h3>
                <p className="mt-1 text-[16px] leading-relaxed text-ink">
                  Pesanmu langsung diteruskan ke tim pengurus HIMTI secara aman.
                </p>

                {status === "success" && (
                  <div className="mt-5 flex items-center gap-3 rounded-sm border border-brand-secondary/30 bg-brand-subtle p-3.5 text-fine text-brand-link">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-5 flex items-center gap-3 rounded-sm border border-state-error/30 bg-state-error/5 p-3.5 text-fine text-state-error">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[13px] font-semibold text-ink">
                        Nama Lengkap <span className="text-brand-link">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Nama lengkap"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[13px] font-semibold text-ink">
                        WhatsApp <span className="text-ink-fine">(opsional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="08123456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="year" className="text-[13px] font-semibold text-ink">
                        Tahun Angkatan <span className="text-brand-link">*</span>
                      </label>
                      <select
                        id="year"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className={fieldClass}
                      >
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="Alumni">Alumni</option>
                        <option value="Lainnya">Lainnya / Umum</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="type" className="text-[13px] font-semibold text-ink">
                        Kategori <span className="text-brand-link">*</span>
                      </label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className={fieldClass}
                      >
                        {aspirasiTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[13px] font-semibold text-ink">
                      Pesan <span className="text-brand-link">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tuliskan aspirasi, kritik, atau ide kamu untuk HIMTI..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-y rounded-sm border border-hairline bg-surface-canvas px-4 py-3 text-[16px] text-ink transition-colors placeholder:text-ink-disabled focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/25"
                    />
                  </div>

                  <div className="flex justify-start pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-dark px-6 text-caption-strong text-brand-light transition-colors hover:bg-brand-secondary active:scale-95 disabled:pointer-events-none disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Mengirimkan...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Kirim pesan
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>

              <motion.aside {...reveal(0.1)} className="lg:pt-2">
                <h3 className="text-tagline text-ink">Ngobrol langsung dengan kami</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink">
                  Mau berkolaborasi atau punya pertanyaan cepat? Sapa kami lewat
                  kanal di bawah ini.
                </p>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-link" />
                    <div>
                      <p className="text-[13px] text-ink-fine">Email</p>
                      <a
                        href="mailto:himti@paramadina.ac.id"
                        className="text-caption-strong text-ink underline-offset-4 hover:underline"
                      >
                        himti@paramadina.ac.id
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp className="mt-0.5 h-4 w-4 shrink-0 text-brand-link" />
                    <div>
                      <p className="text-[13px] text-ink-fine">WhatsApp</p>
                      <a
                        href="https://wa.me/6281297590093"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caption-strong text-ink underline-offset-4 hover:underline"
                      >
                        +62 812-9759-0093
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-link" />
                    <div>
                      <p className="text-[13px] text-ink-fine">Sekretariat</p>
                      <p className="text-[16px] leading-relaxed text-ink">
                        Universitas Paramadina, Jl. Raya Mabes Hankam No.Kav 9,
                        Cipayung, Jakarta Timur 13880
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-sm bg-surface-parchment px-4 py-4">
                  <p className="text-[13px] text-ink-fine">Jam respons</p>
                  <p className="mt-1 text-[16px] leading-relaxed text-ink">
                    Senin–Jumat, 09.00–17.00 WIB
                  </p>
                </div>
              </motion.aside>
            </div>
          </section>
    </div>
  );
}
