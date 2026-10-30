"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SekretarisIcon,
  BendaharaIcon,
  RistekIcon,
  HumasIcon,
  KreatifIcon,
  EduIcon,
} from "../icons";

const divisions = [
  { name: "Administration", id: "department-administration", icon: SekretarisIcon },
  { name: "Financial", id: "department-financial", icon: BendaharaIcon },
  { name: "Public Relations & Media", id: "department-public-relations-and-media", icon: HumasIcon },
  { name: "Research & Technology", id: "department-research-Technology", icon: RistekIcon },
  { name: "Creative & Design", id: "department-creative-and-design", icon: KreatifIcon },
  { name: "Human Capital & Education", id: "department-human-capital-education", icon: EduIcon },
];

export default function FilterDivisi() {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  const textRefs = useRef({});

  return (
    <aside className="fixed left-0 top-[124px] z-40 hidden flex-col gap-2 tablet:flex" aria-label="Navigasi divisi">
      {divisions.map((item, i) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        const baseWidth = 48;
        const targetWidth =
          baseWidth + (textRefs.current[item.id]?.offsetWidth || 0) + 20;

        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.id);
              setHovered(null);
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="group relative"
          >
            <motion.div
              className={`flex cursor-pointer items-center gap-3 overflow-hidden rounded-r-full border px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "border-transparent bg-brand-primary text-ink"
                  : "border-hairline bg-surface-canvas text-ink-muted"
              }`}
              animate={{ width: hovered === item.id ? targetWidth : baseWidth }}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
            >
              <Icon
                className={`h-5 w-5 flex-shrink-0 ${
                  isActive ? "text-ink" : "text-brand-link"
                }`}
              />
              <span
                ref={(el) => (textRefs.current[item.id] = el)}
                className={`whitespace-nowrap text-caption transition-opacity duration-200 ${
                  hovered === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </aside>
  );
}
