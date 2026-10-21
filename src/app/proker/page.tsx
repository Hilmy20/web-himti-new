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
  icon: React.ComponentType<{ className?: string; size?: number }>;
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

export default function ProgramKerjaPage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getStatusColor = (status: ProgramItem["status"]) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-400/30";
      case "Upcoming":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30";
      case "Scheduled":
        return "bg-purple-500/20 text-purple-300 border-purple-400/30";
      default:
        return "bg-white/10 text-gray-300 border-white/20";
    }
  };

  return (
    <div className="w-full space-y-16 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <section className="glass-surface relative rounded-[32px] p-8 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Kabinet Innovara 2024/2025</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-main font-bold tracking-tight text-white leading-tight">
            Program Kerja{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              HIMTI Paramadina
            </span>
          </h1>

          <p className="text-gray-300/85 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Kenali program dan agenda unggulan HIMTI yang menjadi ruang untuk bertumbuh, mengasah kapabilitas teknis, dan berkolaborasi menciptakan dampak nyata.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedProgram(program)}
                className="glass-surface glass-surface-hover rounded-3xl p-7 sm:p-9 cursor-pointer group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                      <Icon size={24} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          program.status
                        )}`}
                      >
                        {program.status}
                      </span>
                      <span className="text-xs font-mono text-gray-500 font-semibold">
                        {program.number}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                      {program.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-main text-white group-hover:text-blue-300 transition">
                      {program.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-300/80 leading-relaxed font-light">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-8 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-3.5 h-3.5 text-blue-400" />
                    <span>{program.dateEstimate}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-medium text-blue-400 group-hover:text-white transition">
                    <span>Lihat Detail</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-surface relative w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/20 overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      selectedProgram.status
                    )}`}
                  >
                    {selectedProgram.status}
                  </span>
                  <h3 className="text-2xl font-bold font-main text-white pt-2">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
                    {selectedProgram.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-gray-300/90 leading-relaxed font-light">
                <p>{selectedProgram.detailedInfo}</p>

                <div className="rounded-2xl p-4 bg-white/[0.04] border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Waktu: {selectedProgram.dateEstimate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Lokasi: {selectedProgram.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
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
