"use client";

import React from "react";
import { motion } from "framer-motion";
import OrbitIcons from "@/components/orbit-icons";
import FilterDivisi from "@/components/filter-divisi";
import ProfileCard from "@/components/profile-card";
import {
  Shield,
  DollarSign,
  Megaphone,
  Cpu,
  Palette,
  GraduationCap,
} from "lucide-react";

const departments = [
  {
    id: "department-administration",
    name: "Department Administration",
    icon: Shield,
    description:
      "Bertanggung jawab atas tata kelola persuratan, inventarisasi organisasi, dokumentasi legalitas, dan ketertiban administrasi harian HIMTI.",
    images: ["/images/divisi/DA_1.png", "/images/divisi/DA_2.png", "/images/divisi/DA_3.png"],
  },
  {
    id: "department-financial",
    name: "Department Financial",
    icon: DollarSign,
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
    description:
      "Membangun hubungan positif dengan pihak internal dan eksternal, mengelola media sosial, publikasi informasi resmi, serta menjalin kolaborasi dengan alumni dan industri.",
    images: [
      "/images/divisi/DPRM_1.png",
      "/images/divisi/DPRM_2.png",
      "/images/divisi/DPRM_3.png",
      "/images/divisi/DPRM_4.png",
      "/images/divisi/DPRM_5.png",
      "/images/divisi/DPRM_6.png",
      "/images/divisi/DPRM_7.png",
    ],
  },
  {
    id: "department-research-Technology",
    name: "Department Research & Technology",
    icon: Cpu,
    description:
      "Pusat inovasi dan eksplorasi teknologi, mengelola pengembangan platform web himpunan, riset software, dan persiapan delegasi kompetisi teknologi.",
    images: [
      "/images/divisi/DRT_1.png",
      "/images/divisi/DRT_2.png",
      "/images/divisi/DRT_3.png",
      "/images/divisi/DRT_4.png",
      "/images/divisi/DRT_6.png",
    ],
  },
  {
    id: "department-creative-and-design",
    name: "Department Creative & Design",
    icon: Palette,
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

export default function Division() {
  return (
    <div className="w-full">
      <FilterDivisi />

      <section className="tile-light section">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow">Struktur Kepengurusan 2024/2025</p>
            <h1 className="heading-hero mt-4">
              Departemen &amp; Divisi <br className="hidden sm:block" />
              <span className="text-brand-link">Kabinet Innovara</span>
            </h1>
            <p className="lead-copy mt-5 max-w-2xl text-ink-muted">
              Struktur HIMTI Innovara terbagi menjadi 6 departemen strategis yang
              bekerja secara sinergis dan terintegrasi untuk mendukung
              pengembangan potensi seluruh mahasiswa Teknik Informatika
              Universitas Paramadina.
            </p>
          </motion.div>

          <div className="lg:col-span-5">
            <OrbitIcons />
          </div>
        </div>
      </section>

      <section className="tile-parchment section">
        <div className="container-page space-y-8">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <motion.article
                key={dept.id}
                id={dept.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="card scroll-mt-28 p-6 sm:p-10"
              >
                <div className="border-b border-hairline pb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-parchment text-brand-link">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-caption-strong uppercase tracking-[0.08em] text-ink-fine">
                      Departemen #{idx + 1}
                    </span>
                  </div>
                  <h2 className="heading-md mt-4">{dept.name}</h2>
                  <p className="body-copy mt-3 max-w-3xl">{dept.description}</p>
                </div>

                <div className="mt-8">
                  <ProfileCard images={dept.images} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
