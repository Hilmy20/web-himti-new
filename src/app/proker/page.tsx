"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  Users,
  Sparkles,
  Clock,
  MapPin,
  X,
  LucideIcon,
} from "lucide-react";

interface ProgramItem {
  number: string;
  title: string;
  category: string;
  status: "Upcoming" | "Active" | "Scheduled" | "Completed";
  description: string;
  detailedInfo: string;
  dateEstimate: string;
  location: string;
  icon: LucideIcon;
}

const programs: ProgramItem[] = [
  {
    number: "01",
    title: "Bukber HIMTI 2026",
    category: "Internal & Kebersamaan",
    status: "Scheduled",
    dateEstimate: "Maret 2026",
    location: "Kampus Cipayung, Univ Paramadina",
    description:
      "Ruang untuk mempererat silaturahmi, kekeluargaan, dan kebersamaan seluruh keluarga besar Teknik Informatika Paramadina.",
    detailedInfo:
      "Kegiatan buka puasa bersama tahunan yang menghadirkan mahasiswa lintas angkatan, dosen, serta alumni HIMTI untuk bertukar pengalaman dan mempererat networking.",
    icon: Users,
  },
  {
    number: "02",
    title: "IT FEST 6.0",
    category: "Kompetisi & Expo Nasional",
    status: "Upcoming",
    dateEstimate: "Mei 2026",
    location: "Auditorium & Hybrid",
    description:
      "Festival teknologi terbesar HIMTI yang berfokus pada kompetisi coding, UI/UX, webinar nasional, dan pameran inovasi.",
    detailedInfo:
      "IT FEST 6.0 membawa kompetisi tingkat perguruan tinggi se-Indonesia, didukung oleh keynote speaker praktisi industri tech ternama, serta showcase portofolio mahasiswa.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Kobit (Koding Bareng Informatika)",
    category: "Pendidikan & Pelatihan",
    status: "Active",
    dateEstimate: "Setiap Bulan",
    location: "Lab Komputer / Google Meet",
    description:
      "Sesi bimbingan belajar santai dan peer-learning untuk mata kuliah pemrograman inti serta eksplorasi framework modern.",
    detailedInfo:
      "Program mentoring coding mingguan yang dipandu oleh mahasiswa senior dan alumni untuk membantu mahasiswa memahami materi perkuliahan, algoritma, serta web development.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Reformatics 2026",
    category: "Pengabdian & Riset",
    status: "Upcoming",
    dateEstimate: "November 2026",
    location: "Universitas Paramadina",
    description:
      "Konferensi dan sharing hasil riset teknologi terapan mahasiswa bersama dosen dan institusi mitra.",
    detailedInfo:
      "Pentas riset dan publikasi ilmiah mahasiswa Informatika untuk memperkenalkan riset artificial intelligence, cyber security, dan software engineering ke khalayak luas.",
    icon: CalendarDays,
  },
];

function statusClass(status: ProgramItem["status"]) {
  switch (status) {
    case "Active":
      return "bg-brand-subtle text-brand-link";
    case "Upcoming":
      return "bg-surface-parchment text-brand-link";
    case "Scheduled":
      return "bg-surface-parchment text-ink-muted";
    default:
      return "bg-surface-parchment text-ink-fine";
  }
}

export default function ProgramKerjaPage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <div className="w-full">
      <section className="tile-light section">
        <div className="container-narrow text-center">
          <p className="eyebrow justify-center">Kabinet Innovara 2024/2025</p>
          <h1 className="heading-hero mt-4">
            Program Kerja <span className="text-brand-link">HIMTI Paramadina</span>
          </h1>
          <p className="lead-copy mx-auto mt-5 max-w-2xl text-ink-muted">
            Kenali program dan agenda unggulan HIMTI yang menjadi ruang untuk
            bertumbuh, mengasah kapabilitas teknis, dan berkolaborasi menciptakan
            dampak nyata.
          </p>
        </div>
      </section>

      <section className="tile-parchment section">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.article
                  key={program.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onClick={() => setSelectedProgram(program)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProgram(program);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="card card-hover flex cursor-pointer flex-col justify-between p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:p-9"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-surface-parchment text-brand-link">
                        <Icon size={24} />
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-caption ${statusClass(
                            program.status
                          )}`}
                        >
                          {program.status}
                        </span>
                        <span className="text-caption text-ink-fine">
                          {program.number}
                        </span>
                      </div>
                    </div>

                    <p className="eyebrow mt-6">{program.category}</p>
                    <h2 className="mt-2 text-tagline text-ink">{program.title}</h2>
                    <p className="body-copy mt-3">{program.description}</p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-hairline pt-5 text-caption text-ink-fine">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-link" />
                      {program.dateEstimate}
                    </span>
                    <span className="btn-link text-caption">
                      Lihat Detail
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProgram && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProgram.title}
          >
            <button
              type="button"
              aria-label="Tutup detail"
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="card relative z-10 w-full max-w-lg space-y-6 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-caption ${statusClass(
                      selectedProgram.status
                    )}`}
                  >
                    {selectedProgram.status}
                  </span>
                  <h3 className="mt-3 text-tagline text-ink">{selectedProgram.title}</h3>
                  <p className="mt-1 text-caption text-brand-link">{selectedProgram.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  aria-label="Tutup"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-ink/25 hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="body-copy">{selectedProgram.detailedInfo}</p>

              <div className="space-y-2 rounded-md bg-surface-parchment p-4 text-caption text-ink-muted">
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-link" />
                  Waktu: {selectedProgram.dateEstimate}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-link" />
                  Lokasi: {selectedProgram.location}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="btn-secondary"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
