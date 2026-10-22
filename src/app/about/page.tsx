"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Target, Compass, HeartHandshake } from "lucide-react";

export default function About() {
  const row1Images = [
    "/images/img1_1.png",
    "/images/img1_2.png",
    "/images/img1_3.png",
    "/images/img1_4.png",
  ];

  const row2Images = [
    "/images/img2_1.png",
    "/images/img2_2.png",
    "/images/img2_3.png",
    "/images/img2_4.png",
    "/images/img2_5.png",
  ];

  const row3Images = [
    "/images/img3_1.png",
    "/images/img3_2.png",
    "/images/img3_3.png",
    "/images/img3_4.png",
  ];

  const visiMisi = [
    {
      icon: Target,
      title: "Visi Kami",
      desc: "Menjadikan HIMTI Paramadina sebagai organisasi yang progresif, adaptif, dan berdaya saing global dalam riset dan inovasi teknologi.",
    },
    {
      icon: Compass,
      title: "Misi Kolaboratif",
      desc: "Membangun ekosistem belajar yang suportif bagi mahasiswa Teknik Informatika melalui pelatihan intensif, seminar, dan hands-on project.",
    },
    {
      icon: HeartHandshake,
      title: "Kemitraan & Dampak",
      desc: "Menjalin kemitraan strategis dengan industri, perguruan tinggi, dan komunitas teknologi untuk memperluas jejaring karier mahasiswa.",
    },
  ];

  return (
    <div className="w-full space-y-24 py-8 px-4 sm:px-6 lg:px-8">
      {/* Intro & Filosofi Kabinet */}
      <section className="glass-surface relative rounded-[32px] p-8 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-green-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-green-400">
            <Sparkles className="w-3.5 h-3.5 text-green-500" />
            <span>Tentang Kabinet Innovara</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-main font-bold tracking-tight text-white leading-tight">
            Mengenal Lebih Dekat <br />
            <span className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent">
              HIMTI Universitas Paramadina
            </span>
          </h1>

          <p className="text-gray-300/85 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Nama kabinet <strong>Innovara</strong> adalah gabungan dari dua kata:{" "}
            <em>innovation</em> dan <em>vara</em> (Sansekerta) yang berarti hadiah. Nama ini menyiratkan bahwa inovasi adalah anugerah bernilai yang dapat dicapai melalui sinergi kolaborasi, kerja keras, dan dedikasi bersama. Dengan filosofi ini, HIMTI Paramadina mengedepankan semangat untuk terus bertransformasi membentuk masa depan teknologi informasi yang inklusif dan solutif.
          </p>

          <div className="pt-2 flex justify-center">
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-green-600 to-green-700 opacity-80" />
          </div>
        </div>
      </section>

      {/* Visi & Misi Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visiMisi.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-surface glass-surface-hover rounded-3xl p-8 space-y-4 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-600/10 border border-green-500/20 flex items-center justify-center text-green-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-main text-white">
                {item.title}
              </h3>
              <p className="text-gray-300/80 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Galeri Aktivitas - Seamless Liquid Glass Marquee */}
      <section className="glass-surface rounded-[32px] p-6 sm:p-10 space-y-8 overflow-hidden">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-500">
            Dokumentasi & Memori
          </span>
          <h2 className="text-2xl sm:text-3xl font-main font-bold text-white">
            Jejak Kegiatan Kami
          </h2>
          <p className="text-gray-300/80 text-xs sm:text-sm">
            Momen kebersamaan, kompetisi, dan program pelatihan yang diadakan oleh HIMTI.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          {/* Marquee Row 1 */}
          <div className="overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-left-marquee group-hover:[animation-play-state:paused] gap-5 items-center">
              {[...row1Images, ...row1Images, ...row1Images].map((src, i) => (
                <div
                  key={i}
                  className="relative h-40 w-64 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-white/[0.03]"
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi HIMTI 1-${i}`}
                    fill
                    className="object-cover filter brightness-90 hover:brightness-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-right-marquee group-hover:[animation-play-state:paused] gap-5 items-center">
              {[...row2Images, ...row2Images, ...row2Images].map((src, i) => (
                <div
                  key={i}
                  className="relative h-40 w-64 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-white/[0.03]"
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi HIMTI 2-${i}`}
                    fill
                    className="object-cover filter brightness-90 hover:brightness-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 3 */}
          <div className="overflow-hidden relative group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-left-marquee group-hover:[animation-play-state:paused] gap-5 items-center">
              {[...row3Images, ...row3Images, ...row3Images].map((src, i) => (
                <div
                  key={i}
                  className="relative h-40 w-64 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-white/[0.03]"
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi HIMTI 3-${i}`}
                    fill
                    className="object-cover filter brightness-90 hover:brightness-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes left-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }

          @keyframes right-marquee {
            0% {
              transform: translateX(-33.33%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-left-marquee {
            animation: left-marquee 35s linear infinite;
          }

          .animate-right-marquee {
            animation: right-marquee 35s linear infinite;
          }
        `}</style>
      </section>

      {/* Leadership Profile Section */}
      <section className="space-y-10 max-w-5xl mx-auto">
        {/* Ketua Umum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-surface glass-surface-hover rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-4 shrink-0 flex items-center justify-center">
            <Image
              src="/images/ketum_himti.svg"
              alt="Miftahul Fitriah - Ketua Umum HIMTI"
              width={260}
              height={260}
              className="object-contain filter drop-shadow-xl"
              priority
            />
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-green-400 bg-green-600/10 border border-green-500/20">
              Ketua Umum HIMTI Paramadina 2024/2025
            </div>
            <h2 className="text-3xl sm:text-4xl font-main font-bold text-white">
              Miftahul Fitriah
            </h2>
            <p className="text-gray-300/85 text-sm sm:text-base leading-relaxed font-light">
              &quot;Kabinet Innovara berkomitmen menjadi jembatan bagi mahasiswa Informatika Paramadina untuk tidak hanya menguasai teori, namun berani mengeksplorasi teknologi terapan, membangun produk nyata, dan memberi dampak positif bagi masyarakat.&quot;
            </p>
          </div>
        </motion.div>

        {/* Wakil Ketua Umum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-surface glass-surface-hover rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row-reverse items-center gap-10"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-4 shrink-0 flex items-center justify-center">
            <Image
              src="/images/waketum_himti.svg"
              alt="Raka Adrian Hartono - Wakil Ketua Umum HIMTI"
              width={260}
              height={260}
              className="object-contain filter drop-shadow-xl"
              priority
            />
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-green-500 bg-green-700/10 border border-green-600/20">
              Wakil Ketua Umum HIMTI Paramadina 2024/2025
            </div>
            <h2 className="text-3xl sm:text-4xl font-main font-bold text-white">
              Raka Adrian Hartono
            </h2>
            <p className="text-gray-300/85 text-sm sm:text-base leading-relaxed font-light">
              &quot;Organisasi yang hebat dibangun dari rasa saling percaya dan kolaborasi yang solid. Kami hadir untuk memastikan setiap departemen bergerak selaras, mendukung pengembangan potensi tiap anggota tanpa terkecuali.&quot;
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
