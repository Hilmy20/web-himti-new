"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section className="section tile-parchment">
      <div className="container-page">
        <div className="max-w-[980px]">
          <p className="eyebrow">Kabinet Innovara</p>
          <h2 className="heading-lg mt-3">
            Pengurus <span className="text-brand-link">HIMTI</span>
          </h2>
          <p className="body-copy mt-4 max-w-2xl">
            Pengurus inti HIMTI terdiri dari ketua, wakil ketua, serta koordinator
            departemen yang memimpin berbagai bidang untuk memastikan keberjalanan
            organisasi secara profesional dan kolaboratif.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <article
              key={m.id}
              className="card card-hover overflow-hidden"
              onMouseEnter={() => setHoverId(m.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-parchment">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-500 ease-apple ${
                    hoverId === m.id ? "scale-[1.03]" : "scale-100"
                  }`}
                />
              </div>
              <div className="p-4">
                <p className="truncate text-body-strong text-ink">{m.name}</p>
                <p className="mt-0.5 truncate text-caption text-brand-link">{m.role}</p>
                <p className="mt-0.5 truncate text-fine text-ink-fine">{m.major}</p>
              </div>
            </article>
          ))}
        </div>
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
