"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Code2, Users, Sparkles } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Bukber HIMTI 2026",
    category: "Kebersamaan",
    description:
      "Ruang untuk mempererat silaturahmi dan kebersamaan keluarga besar HIMTI Paramadina.",
    icon: Users,
  },
  {
    number: "02",
    title: "IT FEST 6.0",
    category: "Event Tahunan",
    description:
      "Program HIMTI yang berfokus pada teknologi, literasi, dan inovasi.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Kobit",
    category: "Program HIMTI",
    description:
      "Informasi dan detail kegiatan akan diperbarui setelah data resmi tersedia.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Reformatics 2026",
    category: "Program HIMTI",
    description:
      "Informasi dan detail kegiatan akan diperbarui setelah data resmi tersedia.",
    icon: CalendarDays,
  },
];

export default function ProgramKerjaPage() {
  return (
    <main className="w-full min-h-screen text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-6xl"
        >
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            <span className="h-px w-8 bg-blue-400" />
            HIMTI Paramadina
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Program Kerja
            <span className="block text-blue-500">Kabinet Nexa</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Kenali program dan kegiatan HIMTI Paramadina yang menjadi ruang
            untuk bertumbuh, berkolaborasi, dan berinovasi bersama.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span>Program kerja sementara 2026</span>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-white/[0.07] sm:p-9"
              >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <Icon size={23} />
                  </div>
                  <span className="text-sm font-medium tracking-widest text-slate-500">
                    {program.number}
                  </span>
                </div>
                <div className="relative mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    {program.category}
                  </p>
                  <h2 className="text-2xl font-bold sm:text-3xl">{program.title}</h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                    {program.description}
                  </p>
                </div>
                <div className="relative mt-auto flex items-center justify-between pt-7">
                  <span className="text-xs text-slate-500">HIMTI Paramadina</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-6xl text-sm leading-6 text-slate-500">
          Detail, jadwal, poster, dan informasi pendaftaran akan ditambahkan
          setelah data resmi setiap kegiatan tersedia.
        </p>
      </section>
    </main>
  );
}
