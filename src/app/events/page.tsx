"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

const UnderConstructionPage: FC = () => {
  return (
    <section className="tile-light section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card mx-auto max-w-xl p-8 text-center md:p-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-parchment text-brand-link">
            <Construction className="h-8 w-8" />
          </div>

          <h1 className="heading-md mt-6">Halaman ini sedang disiapkan</h1>
          <p className="body-copy mt-3">
            Kami paham kamu sangat ingin melihat halaman ini. Sayangnya halaman
            ini sedang dalam pengerjaan.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>

          <p className="mt-8 text-fine text-ink-fine">
            Buruh Ketik Rumahan — Web Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderConstructionPage;
