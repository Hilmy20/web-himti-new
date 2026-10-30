import Image from "next/image";
import Hero from "@/assets/images/hero.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const entries = [
  {
    title: "Profil Organisasi",
    description:
      "Sejarah, visi, misi, dan struktur HIMTI Paramadina dari masa ke masa.",
    link: "/himtipedia/profile",
  },
  {
    title: "Kepengurusan",
    description:
      "Daftar pengurus dan susunan departemen Kabinet Innovara 2024/2025.",
    link: "/himtipedia/kepengurusan",
  },
  {
    title: "Program Kerja",
    description:
      "Agenda dan program unggulan yang dijalankan sepanjang periode kepengurusan.",
    link: "/proker",
  },
  {
    title: "Kegiatan dan Acara",
    description:
      "Dokumentasi kegiatan, kompetisi, dan acara yang diselenggarakan HIMTI.",
    link: "/events",
  },
  {
    title: "Artikel dan Berita",
    description:
      "Tulisan, kabar terbaru, dan publikasi seputar HIMTI Paramadina.",
    link: "/himtipedia",
  },
  {
    title: "Dokumen dan Berkas",
    description:
      "Arsip dokumen organisasi yang dapat diakses oleh pengurus dan anggota.",
    link: "/himtipedia",
  },
];

export default function Himtipedia() {
  return (
    <div className="w-full">
      <section className="tile-light section">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface-parchment">
            <Image
              src={Hero}
              alt="HIMTI Paramadina"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Himtipedia</p>
            <h1 className="heading-lg mt-3">
              Explore the world of <span className="text-brand-link">HIMTI Paramadina</span>
            </h1>
            <p className="body-copy mt-4 max-w-lg">
              Satu tempat untuk menjelajahi profil, kepengurusan, program kerja,
              dan dokumentasi organisasi.
            </p>

            <div className="relative mt-8 max-w-lg">
              <input
                type="search"
                placeholder="Cari apa pun tentang HIMTI"
                aria-label="Cari di Himtipedia"
                className="input pl-11"
              />
              <Icon
                icon="material-symbols:search"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-fine"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tile-parchment section">
        <div className="container-page">
          <h2 className="heading-md">What are you looking for</h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="card card-hover group flex flex-col justify-between p-6"
              >
                <div>
                  <h3 className="text-body-strong text-ink">{item.title}</h3>
                  <p className="body-copy mt-2 text-caption">{item.description}</p>
                </div>
                <span className="mt-6 flex items-center gap-1.5 text-caption text-brand-link">
                  Buka
                  <Icon
                    icon="material-symbols:arrow-right-alt"
                    className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
