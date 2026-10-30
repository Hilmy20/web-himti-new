"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Crown,
  Wallet,
  Paintbrush,
  Megaphone,
  GraduationCap,
  Shield,
  ClipboardList,
  Cpu,
} from "lucide-react";

const icons = [
  { icon: Crown },
  { icon: Paintbrush },
  { icon: Megaphone },
  { icon: GraduationCap },
  { icon: Shield },
  { icon: ClipboardList },
  { icon: Cpu },
  { icon: Wallet },
];

export default function OrbitIcons() {
  return (
    <div
      className="
        relative mx-auto mt-8 h-[220px] w-[220px] select-none
        sm:h-[300px] sm:w-[300px]
        md:h-[380px] md:w-[380px]
        [--radius:110px] sm:[--radius:135px] md:[--radius:180px]
      "
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        <div className="absolute h-full w-full rounded-full border border-brand-secondary/30" />

        {icons.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / icons.length) * 2 * Math.PI;
          const x = Math.cos(angle);
          const y = Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                top: `calc(50% + calc(var(--radius) * ${y}))`,
                left: `calc(50% + calc(var(--radius) * ${x}))`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary sm:h-12 sm:w-12 md:h-14 md:w-14"
              >
                <Icon className="h-5 w-5 text-ink sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-surface-parchment sm:h-28 sm:w-28 md:h-32 md:w-32" />
        <div className="relative z-10">
          <Image
            src="/images/kabinet_innovara.svg"
            width={200}
            height={200}
            alt="Kabinet Innovara"
            className="w-16 sm:w-20 md:w-24"
          />
        </div>
      </div>
    </div>
  );
}
