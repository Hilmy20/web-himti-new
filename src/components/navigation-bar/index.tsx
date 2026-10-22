"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const nav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Division", href: "/division" },
  { name: "Program Kerja", href: "/proker" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [showFirst, setShowFirst] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:pt-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-w-5xl mx-auto rounded-full px-4 sm:px-6 py-2 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)]"
            : "bg-white/[0.05] backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_1px_rgba(255,255,255,0.18)]"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden flex items-center justify-center rounded-full bg-white/10 border border-white/15">
            <AnimatePresence mode="wait">
              {showFirst ? (
                <motion.div
                  key="logo1"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-1"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="HIMTI"
                    width={32}
                    height={32}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="logo2"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-1"
                >
                  <Image
                    src="/images/logo_kabinet.png"
                    alt="Innovara"
                    width={32}
                    height={32}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-wide text-white/90 group-hover:text-white transition">
            HIMTI <span className="text-green-500 font-bold">INNOVARA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item, i) => {
            const active = isActive(item.href);
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    active
                      ? "text-white bg-white/15 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact-us"
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white border border-white/30 shadow-[0_4px_16px_rgba(42,175,21,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-95 transition"
          >
            Aspirasi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-white/90 hover:text-white bg-white/10 border border-white/15 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            <Icon
              icon={isOpen ? "material-symbols:close" : "material-symbols:menu"}
              className="w-5 h-5"
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-5xl mx-auto rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <li key={i}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2.5 rounded-2xl text-sm font-medium transition ${
                        active
                          ? "bg-white/15 text-white border border-white/20"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
