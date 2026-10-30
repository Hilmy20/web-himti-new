"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brush,
  ClipboardList,
  Cpu,
  Megaphone,
  Wallet,
  GraduationCap,
} from "lucide-react";

interface Division {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  description: string;
}

const divisions: Division[] = [
  {
    id: 1,
    name: "Creative and Design",
    icon: Brush,
    image: "/images/creative.png",
    description:
      "Department Creative and Design bertanggung jawab dalam pembuatan konten visual, branding, UI/UX, serta kebutuhan desain untuk mendukung identitas organisasi.",
  },
  {
    id: 2,
    name: "Administration",
    icon: ClipboardList,
    image: "/images/admin.png",
    description:
      "Department Administration mengelola seluruh data, surat-menyurat, dokumentasi, dan pengarsipan untuk memastikan tata kelola organisasi rapi.",
  },
  {
    id: 3,
    name: "Research & Technology",
    icon: Cpu,
    image: "/images/ristek.png",
    description:
      "Department Research & Technology mengembangkan inovasi software, riset, dan project digital untuk meningkatkan kemampuan mahasiswa.",
  },
  {
    id: 4,
    name: "Public Relations and Media",
    icon: Megaphone,
    image: "/images/humas.png",
    description:
      "Department PR & Media mengatur komunikasi publik, media sosial, publikasi kegiatan, dan hubungan eksternal.",
  },
  {
    id: 5,
    name: "Financial",
    icon: Wallet,
    image: "/images/financial.png",
    description:
      "Department Financial mengelola anggaran, pencatatan keuangan, serta memastikan transparansi pendanaan organisasi.",
  },
  {
    id: 6,
    name: "Human Capital & Education",
    icon: GraduationCap,
    image: "/images/hc.png",
    description:
      "Department Human Capital & Education fokus pada pengembangan SDM melalui program pelatihan, edukasi, dan kaderisasi.",
  },
];

export default function DivisionsFilter() {
  const [selected, setSelected] = useState<Division | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (division: Division) => {
    setSelected(division);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth" }), 150);
  };

  return (
    <div className="mt-16 flex w-full flex-col items-center">
      <div className="w-full overflow-x-auto">
        <div className="mx-auto flex w-max items-center gap-2 rounded-full border border-hairline bg-surface-canvas p-2">
          {divisions.map((d) => {
            const IconComponent = d.icon;
            const isSelected = selected?.id === d.id;

            return (
              <button
                key={d.id}
                type="button"
                onClick={() => handleSelect(d)}
                className={`chip whitespace-nowrap ${isSelected ? "chip-selected" : ""}`}
              >
                <IconComponent className="h-4 w-4 text-brand-link" />
                <span>{d.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div ref={detailRef} className="mt-16 flex w-full justify-center">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="card w-full max-w-3xl p-8 text-center"
            >
              <Image
                src={selected.image}
                width={220}
                height={220}
                alt={selected.name}
                className="mx-auto mb-6 rounded-sm"
              />
              <h2 className="text-tagline text-ink">{selected.name}</h2>
              <p className="body-copy mt-3">{selected.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
