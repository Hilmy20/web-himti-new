"use client";

import React from "react";
import { motion } from "framer-motion";
import OrbitIcons from "@/components/orbit-icons";
import FilterDivisi from "@/components/filter-divisi";
import ProfileCard from "@/components/profile-card";
import { Sparkles, Shield, DollarSign, Megaphone, Cpu, Palette, GraduationCap } from "lucide-react";

export default function Division() {
  const departments = [
    {
      id: "department-administration",
      name: "Department Administration",
      icon: Shield,
      accent: "text-green-500",
      description:
        "Bertanggung jawab atas tata kelola persuratan, inventarisasi organisasi, dokumentasi legalitas, dan ketertiban administrasi harian HIMTI.",
      images: [
        "/images/divisi/DA_1.png",
        "/images/divisi/DA_2.png",
        "/images/divisi/DA_3.png",
      ],
    },
    {
      id: "department-financial",
      name: "Department Financial",
      icon: DollarSign,
      accent: "text-emerald-400",
      description:
        "Mengelola sirkulasi kas, penyusunan anggaran kegiatan, transparansi keuangan himpunan, dan inisiatif pendanaan mandiri (merchandise & sponsorship).",
      images: [
        "/images/divisi/DF_1.png",
        "/images/divisi/DF_2.png",
        "/images/divisi/DF_3.png",
        "/images/divisi/DF_4.png",
      ],
    },
    {
      id: "department-public-relations-and-media",
      name: "Department Public Relations & Media",
      icon: Megaphone,
      accent: "text-green-600",
      description:
        "Membangun hubungan positif dengan pihak internal dan eksternal, mengelola media sosial, publikasi informasi resmi, serta menjalin kolaborasi dengan alumni dan industri.",
      images: [
        "/images/divisi/DPRM_1.png",
        "/images/divisi/DPRM_2.png",
        "/images/divisi/DPRM_3.png",
        "/images/divisi/DPRM_4.png",
        "/images/divisi/DPRM_5.png",
        "/images/divisi/DPRM_6.png",
      ],
    },
    {
      id: "department-research-Technology",
      name: "Department Research & Technology",
      icon: Cpu,
      accent: "text-green-500",
      description:
        "Pusat inovasi dan eksplorasi teknologi, mengelola pengembangan platform web himpunan, riset software, dan persiapan delegasi kompetisi teknologi.",
      images: [
        "/images/divisi/DRT_1.png",
        "/images/divisi/DRT_2.png",
        "/images/divisi/DRT_3.png",
        "/images/divisi/DRT_4.png",
        "/images/divisi/DRT_5.png",
      ],
    },
    {
      id: "department-creative-and-design",
      name: "Department Creative & Design",
      icon: Palette,
      accent: "text-pink-400",
      description:
        "Merancang identitas visual HIMTI, memproduksi aset grafis, merchandise, video dokumentasi, dan meningkatkan estetika setiap publikasi dan acara.",
      images: [
        "/images/divisi/DCD_1.png",
        "/images/divisi/DCD_2.png",
        "/images/divisi/DCD_3.png",
        "/images/divisi/DCD_4.png",
      ],
    },
    {
      id: "department-human-capital-education",
      name: "Department Human Capital & Education",
      icon: GraduationCap,
      accent: "text-amber-400",
      description:
        "Berkomitmen memantau kapasitas anggota, menyelenggarakan bimbingan belajar koding (Kobit), workshop, dan pelatihan soft skills bagi mahasiswa Informatika.",
      images: [
        "/images/divisi/DHCPE_1.png",
        "/images/divisi/DHCPE_2.png",
        "/images/divisi/DHCPE_3.png",
        "/images/divisi/DHCPE_4.png",
      ],
    },
  ];

  return (
    <div className="w-full space-y-16 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="glass-surface relative rounded-[32px] p-8 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-green-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-green-400">
              <Sparkles className="w-3.5 h-3.5 text-green-500" />
              <span>Struktur Kepengurusan 2024/2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-main font-bold tracking-tight text-white leading-tight">
              Departemen & Divisi <br />
              <span className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent">
                Kabinet Innovara
              </span>
            </h1>

            <p className="text-gray-300/85 text-sm sm:text-base leading-relaxed font-light">
              Struktur HIMTI Innovara terbagi menjadi 6 departemen strategis yang bekerja secara sinergis dan terintegrasi untuk mendukung pengembangan potensi seluruh mahasiswa Teknik Informatika Universitas Paramadina.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <OrbitIcons />
          </motion.div>
        </div>
      </section>

      {/* Floating Side Filter */}
      <FilterDivisi />

      {/* Departments List */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          return (
            <motion.section
              key={dept.id}
              id={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-surface glass-surface-hover rounded-[32px] p-6 sm:p-10 space-y-8 scroll-mt-28"
            >
              {/* Header Divisi */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-green-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-semibold tracking-wider text-gray-400">
                      Departemen #{idx + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-main font-bold text-white">
                    {dept.name}
                  </h2>
                  <p className="text-gray-300/80 text-sm max-w-3xl font-light leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>

              {/* Anggota Card Grid */}
              <div className="w-full">
                <ProfileCard images={dept.images} />
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
