"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 z-50 transition-all duration-300 ease-apple ${
          scrolled
            ? "top-3 bg-transparent"
            : "top-0 bg-transparent tablet:bg-surface-dark"
        }`}
      >
        <nav aria-label="Navigasi utama" className="container-page">
          <div
            className={`pointer-events-auto flex items-center justify-between gap-3 text-ink-on-dark transition-all duration-300 ease-apple tablet:grid tablet:grid-cols-[1fr_auto_1fr] ${
              scrolled
                ? "h-14 rounded-full bg-transparent pr-0 tablet:h-16 tablet:rounded-full tablet:bg-surface-dark/95 tablet:pr-2 tablet:shadow-product tablet:backdrop-blur-xl"
                : "h-14 rounded-none bg-transparent pr-0 tablet:bg-transparent"
            }`}
          >
            <Link
              href="/"
              className={`flex h-full shrink-0 items-center transition-all duration-300 ease-apple ${
                scrolled ? "pl-1.5 sm:pl-2" : "gap-2.5"
              }`}
            >
              <span
                className={`flex items-center justify-center transition-all duration-300 ease-apple ${
                  scrolled
                    ? "h-11 w-11 rounded-full bg-surface-canvas sm:h-12 sm:w-12"
                    : "h-auto w-auto rounded-none bg-transparent"
                }`}
              >
                <Image
                  src="/images/logo.svg"
                  alt=""
                  width={80}
                  height={36}
                  priority
                  className={`w-auto transition-all duration-300 ease-apple ${
                    scrolled ? "h-6" : "h-8"
                  }`}
                />
              </span>
              <span className="sr-only">HIMTI Innovara — Home</span>
              <span
                aria-hidden
                className={`hidden text-caption-strong tracking-[0.06em] text-ink-on-dark transition-all duration-300 desktop:inline ${
                  scrolled ? "pointer-events-none w-0 overflow-hidden opacity-0" : "opacity-100"
                }`}
              >
                INNOVARA
              </span>
            </Link>

            <ul className="hidden items-center gap-6 justify-self-center tablet:flex desktop:gap-8">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative transition-colors duration-150 ${
                        scrolled ? "text-caption" : "text-[13px]"
                      } ${
                        active
                          ? `text-ink-on-dark after:absolute after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-ink-on-dark ${
                              scrolled ? "after:-bottom-2" : "after:-bottom-2.5"
                            }`
                          : scrolled
                            ? "text-ink-on-dark/75 hover:text-ink-on-dark"
                            : "text-ink-on-dark/65 hover:text-ink-on-dark"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden justify-self-end tablet:block">
              <Link
                href="/contact-us"
                className={`group inline-flex items-center gap-1.5 rounded-full font-semibold text-ink transition-all duration-300 ease-apple hover:bg-surface-parchment active:scale-95 ${
                  scrolled
                    ? "h-10 bg-surface-canvas px-5 text-[13px] sm:h-11"
                    : "h-9 bg-surface-canvas px-4 text-[13px] hover:bg-surface-parchment"
                }`}
              >
                Kirim Aspirasi
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-10 items-center justify-center gap-2.5 justify-self-end rounded-full bg-brand-subtle px-5 text-[14px] font-semibold text-brand-dark tablet:hidden"
            >
              Menu
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.94, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-5 top-[72px] z-40 w-[min(284px,calc(100vw-40px))] overflow-hidden rounded-[28px] bg-brand-dark px-6 pb-5 pt-7 text-ink-on-dark shadow-product tablet:hidden"
          >
            <ul className="flex flex-col items-center gap-1">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-center text-[18px] font-semibold uppercase tracking-[0.06em] transition-colors duration-150 ${
                        active
                          ? "text-brand-subtle"
                          : "text-ink-on-dark/80 hover:text-ink-on-dark"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex items-center justify-between pl-1">
              <span className="text-[14px] font-medium text-ink-on-dark/70">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-on-dark transition-colors hover:bg-ink-on-dark/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
