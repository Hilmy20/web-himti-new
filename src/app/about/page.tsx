"use client";

import Image from "next/image";
import { Target, Compass, HeartHandshake } from "lucide-react";

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

const marqueeRows = [row1Images, row2Images, row3Images];

export default function About() {
  return (
    <div className="w-full">
      {/* Intro */}
      <section className="tile-light section">
        <div className="container-narrow text-center">
          <p className="eyebrow">Tentang Kabinet Innovara</p>
          <h1 className="heading-hero mt-4">
            Mengenal Lebih Dekat <br className="hidden sm:block" />
            <span className="text-brand-link">HIMTI Universitas Paramadina</span>
          </h1>

          <p className="body-copy mx-auto mt-6 max-w-2xl">
            Nama kabinet <strong className="text-ink">Innovara</strong> adalah
            gabungan dari dua kata: <em>innovation</em> dan <em>vara</em>{" "}
            (Sansekerta) yang berarti hadiah. Nama ini menyiratkan bahwa inovasi
            adalah anugerah bernilai yang dapat dicapai melalui sinergi
            kolaborasi, kerja keras, dan dedikasi bersama. Dengan filosofi ini,
            HIMTI Paramadina mengedepankan semangat untuk terus bertransformasi
            membentuk masa depan teknologi informasi yang inklusif dan solutif.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="tile-parchment section">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {visiMisi.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface-parchment text-brand-link">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-tagline text-ink">{item.title}</h2>
                  <p className="body-copy mt-3">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="tile-light section overflow-hidden">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Dokumentasi &amp; Memori</p>
            <h2 className="heading-lg mt-3">Jejak Kegiatan Kami</h2>
            <p className="body-copy mt-4">
              Momen kebersamaan, kompetisi, dan program pelatihan yang diadakan
              oleh HIMTI.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {marqueeRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
              >
                <div
                  className={`flex w-max items-center gap-4 ${
                    rowIndex % 2 === 0
                      ? "animate-marquee-left"
                      : "animate-marquee-right"
                  } pause-on-hover`}
                >
                  {[...row, ...row, ...row].map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="relative h-40 w-64 shrink-0 overflow-hidden rounded-sm bg-surface-parchment"
                    >
                      <Image
                        src={src}
                        alt={`Dokumentasi HIMTI ${rowIndex + 1}-${i}`}
                        fill
                        sizes="256px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="tile-dark section">
        <div className="container-page space-y-6">
          <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-surface-dark-2 p-8 md:grid-cols-12 md:p-12">
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-surface-dark-3 md:col-span-4">
              <Image
                src="/images/ketum_himti.svg"
                alt="Miftahul Fitriah — Ketua Umum HIMTI"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="md:col-span-8">
              <p className="eyebrow-dark">Ketua Umum HIMTI Paramadina 2024/2025</p>
              <h2 className="heading-md mt-3">Miftahul Fitriah</h2>
              <p className="lead-copy mt-4 text-ink-on-dark-muted">
                &quot;Kabinet Innovara berkomitmen menjadi jembatan bagi
                mahasiswa Informatika Paramadina untuk tidak hanya menguasai
                teori, namun berani mengeksplorasi teknologi terapan, membangun
                produk nyata, dan memberi dampak positif bagi masyarakat.&quot;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-surface-dark-2 p-8 md:grid-cols-12 md:p-12">
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-surface-dark-3 md:order-2 md:col-span-4">
              <Image
                src="/images/waketum_himti.svg"
                alt="Raka Adrian Hartono — Wakil Ketua Umum HIMTI"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="md:order-1 md:col-span-8">
              <p className="eyebrow-dark">Wakil Ketua Umum HIMTI Paramadina 2024/2025</p>
              <h2 className="heading-md mt-3">Raka Adrian Hartono</h2>
              <p className="lead-copy mt-4 text-ink-on-dark-muted">
                &quot;Organisasi yang hebat dibangun dari rasa saling percaya dan
                kolaborasi yang solid. Kami hadir untuk memastikan setiap
                departemen bergerak selaras, mendukung pengembangan potensi tiap
                anggota tanpa terkecuali.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
