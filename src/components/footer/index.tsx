"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/himtipedia")) {
    return null;
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Division", href: "/division" },
    { label: "Program Kerja", href: "/proker" },
    { label: "Aspirasi (Contact)", href: "/contact-us" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "mdi:instagram",
      href: "https://www.instagram.com/himtiparamadina",
    },
    {
      name: "Email",
      icon: "material-symbols:mail-outline",
      href: "mailto:himti@paramadina.ac.id",
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/company/himti-paramadina/",
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/himti-paramadina",
    },
  ];

  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="glass-surface rounded-[32px] p-8 sm:p-12 md:p-14 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10 border-b border-white/10">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center p-1.5 backdrop-blur-xl">
                <Image
                  src="/images/logo.svg"
                  width={32}
                  height={32}
                  alt="HIMTI"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white tracking-wide text-sm">
                  HIMTI <span className="text-green-500 font-bold">INNOVARA</span>
                </p>
                <p className="text-[11px] text-gray-400">
                  Universitas Paramadina
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300/80 leading-relaxed max-w-sm">
              Himpunan Mahasiswa Teknik Informatika Universitas Paramadina. Wadah
              kolaborasi, inovasi, dan pengembangan teknologi mahasiswa.
            </p>

            <div className="pt-2 text-xs text-gray-400">
              <p className="font-medium text-white/90 mb-1">Our Camp:</p>
              <p className="leading-relaxed">
                Jl. Raya Mabes Hankam No.Kav 9, Setu, Kec. Cipayung, Kota Jakarta
                Timur, DKI Jakarta 13880
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-green-500">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-green-500">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 hover:border-white/30 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                  title={s.name}
                >
                  <Icon icon={s.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-green-600 to-green-800 border border-white/20 shadow-[0_4px_16px_rgba(42,175,21,0.3)] hover:brightness-110 transition"
              >
                <span>Kirim Pesan / Aspirasi</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} HIMTI Universitas Paramadina. All rights reserved.</p>
          <p className="text-gray-300/70">Kabinet Innovara 2024/2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
