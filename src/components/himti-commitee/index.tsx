"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ketum from "@/assets/images/mita.png";
import waketum from "@/assets/images/raka.png";
import sekre from "@/assets/images/qilla.png";
import bandar from "@/assets/images/rofiqo.png";
import creative from "@/assets/images/hamid.jpeg";
import ristek from "@/assets/images/arya.png";
import humas from "@/assets/images/galbin.jpeg";
import edu from "@/assets/images/apung.jpeg";

export type Member = {
  id: string;
  name: string;
  role: string;
  image?: any;
  bio?: string;
  major?: string;
  socials?: { twitter?: string; instagram?: string; linkedin?: string };
};
type Props = { members: Member[] };
export default function HimtiCommitteeCards({ members }: Props) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 mt-32">
      <div className="flex flex-col items-start md:items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs text-green-400 font-medium mb-3">
          Kabinet Innovara
        </div>
        <h3 className="font-main text-3xl md:text-5xl tracking-tight text-white">
          Pengurus <span className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent">HIMTI</span>
        </h3>
        <p className="text-gray-300/80 pt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          Pengurus inti HIMTI terdiri dari ketua, wakil ketua, serta koordinator
          departemen yang memimpin berbagai bidang untuk memastikan keberjalanan
          organisasi secara profesional dan kolaboratif.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {members.map((m) => (
          <div
            key={m.id}
            className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
            onMouseEnter={() => setHoverId(m.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            {/* Bottom Card Info Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-2xl p-3 bg-black/50 backdrop-blur-xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <p className="font-semibold text-white text-base truncate">{m.name}</p>
                <p className="text-xs font-medium text-green-500">{m.role}</p>
                <p className="text-[11px] text-gray-300 truncate mt-0.5">{m.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const members: Member[] = [
  {
    id: "1",
    name: "Miftahul Fitriah",
    role: "President",
    major: "Teknik Informatika",
    image: ketum,
  },
  {
    id: "2",
    name: "Raka Adrian Hartono",
    role: "Vice President",
    major: "Teknik Informatika",
    image: waketum,
  },
  {
    id: "3",
    name: "Syaqilla Maulida",
    role: "Department Administration",
    major: "Teknik Informatika",
    image: sekre,
  },
  {
    id: "7",
    name: "Rofiqo Aldina",
    role: "Department Finansial",
    major: "Teknik Informatika",
    image: bandar,
  },
  {
    id: "4",
    name: "Abdul Hamid",
    role: "Creative & Design",
    major: "Teknik Informatika",
    image: creative,
  },
  {
    id: "5",
    name: "Naufal Arya",
    role: "Riset & Teknologi",
    major: "Teknik Informatika",
    image: ristek,
  },
  {
    id: "6",
    name: "Galbin Adi",
    role: "Humas & Media",
    major: "Teknik Informatika",
    image: humas,
  },
  {
    id: "8",
    name: "Alfin Masykur",
    role: "Human Capital & Education",
    major: "Teknik Informatika",
    image: edu,
  },
];
