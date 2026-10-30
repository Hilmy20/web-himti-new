import Image from "next/image";
import Hero from "@/assets/images/hero_himti.webp";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import EventImage from "@/components/event";
import Programs from "@/components/programs";
import { featuredData } from "./_data/featured_data";
import { CardCooperation } from "@/components/card/card-cooperation";
import HimtiCommitteeCards, { members } from "@/components/himti-commitee";

const faqs = [
  {
    q: "Apa kepanjangan dari HIMTI Paramadina?",
    a: "HIMTI Paramadina merupakan akronim dari Himpunan Mahasiswa Teknik Informatika Universitas Paramadina.",
  },
  {
    q: "Apa nama kabinet HIMTI Paramadina?",
    a: "Setiap kepengurusan memiliki nama kabinet berbeda. Periode 24/25 bernama kabinet ‘Innovara’, bermakna alam baru dengan filosofi menciptakan dimensi baru yang berfokus pada riset dan pengembangan.",
  },
  {
    q: "Apakah HIMTI Innovara memiliki slogan/tagline?",
    a: "HIMTI Innovara memiliki slogan “A Team Like No Other”, bermakna hadir sebagai tim baru berkarakter inovatif dan dinamis.",
  },
  {
    q: "Bagaimana struktur organisasi HIMTI Innovara?",
    a: "Struktur terdiri dari Ketua Umum, Wakil Ketua, serta 6 Departemen: Administrasi & Keuangan, Riset & Teknologi, Pendidikan & Pelatihan, Kreatif & Desain, Media & Publikasi, serta Humas & Diplomasi.",
  },
  {
    q: "Siapa saja yang boleh menjadi pengurus HIMTI Innovara?",
    a: "Semua mahasiswa aktif Program Studi Teknik Informatika Universitas Paramadina berhak mendaftarkan diri saat open recruitment pengurus.",
  },
  {
    q: "Apakah bisa menjalin kerja sama dengan HIMTI? Bagaimana caranya?",
    a: "HIMTI sangat terbuka untuk kolaborasi. Kamu dapat menghubungi kami melalui Instagram @himtiparamadina atau email himti@paramadina.ac.id.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="tile-light section">
        <div className="container-page text-center">
          <p className="eyebrow"># The Next Level Squad</p>
          <h1 className="heading-hero mx-auto mt-4 max-w-[980px]">
            HIMTI <span className="text-brand-link">INNOVARA</span>
          </h1>
          <p className="lead-copy mx-auto mt-5 max-w-2xl text-ink-muted">
            Selamat datang di perjalanan inovasi, kolaborasi, dan keunggulan
            teknologi di bidang Informatika Universitas Paramadina.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="#tentang" className="btn-primary">
              Jelajahi Profil
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/proker" className="btn-secondary">
              Program Kerja
            </Link>
          </div>

          <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-[1200px] overflow-hidden bg-surface-parchment">
            <Image
              src={Hero}
              alt="Hero HIMTI Paramadina"
              fill
              sizes="(max-width: 1440px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="tile-parchment section scroll-mt-24">
        <div className="container-narrow text-center">
          <p className="eyebrow">Tentang Organisasi</p>
          <h2 className="heading-lg mt-3">
            Selamat Datang di <span className="text-brand-link">HIMTI Paramadina</span>
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-2xl">
            HIMTI Paramadina (Himpunan Mahasiswa Teknik Informatika Universitas
            Paramadina) merupakan organisasi resmi mahasiswa yang menaungi
            mahasiswa Program Studi Teknik Informatika. Organisasi ini berperan
            sebagai wadah untuk mengembangkan kemampuan akademik, organisasi, dan
            keterampilan interpersonal melalui berbagai program dan kegiatan baik
            di dalam maupun di luar kampus.
          </p>
          <div className="mt-6">
            <Link href="/about" className="btn-link">
              Selengkapnya tentang kami
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="tile-dark section">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow-dark">Agenda Mendatang</p>
              <h2 className="heading-lg mt-3">Program yang Akan Datang</h2>
              <p className="body-copy-dark mt-4">
                Beberapa program unggulan yang akan diselenggarakan oleh HIMTI
                Paramadina dalam waktu dekat.
              </p>
            </div>
            <Link href="/proker" className="btn-link-dark shrink-0">
              Semua Program
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <EventImage
              src="/images/itfest_4.jpg"
              href="/proker"
              alt="HIMTI IT Fest Competition 5.0"
              title="HIMTI IT Fest Competition 5.0"
            />
            <EventImage
              src="/images/reformatics_24.jpg"
              href="/proker"
              alt="Reformatics 2025"
              title="Reformatics 2025"
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="tile-light section">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Aktivitas Tahunan</p>
            <h2 className="heading-lg mt-3">Agenda Program Kerja HIMTI</h2>
            <p className="body-copy mt-4">
              HIMTI memiliki beberapa agenda program kerja setiap tahunnya yang
              melibatkan mahasiswa, dosen, alumni, serta mitra eksternal.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {featuredData.map((item) => (
              <Programs key={item.name} title={item.name} href={item.href} />
            ))}
            <Programs
              title="Jelajahi Semua Program Kerja"
              href="/proker"
              backgroundColor="green"
            />
          </div>
        </div>
      </section>

      {/* Committee */}
      <HimtiCommitteeCards members={members} />

      {/* Partnership */}
      <section className="tile-light section">
        <div className="container-page">
          <p className="eyebrow">Partnership &amp; Network</p>
          <h2 className="heading-lg mt-3">In Cooperation With</h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <CardCooperation
              image="/images/logo/paramadina.png"
              alt="Universitas Paramadina"
            />
            <CardCooperation image="/images/logo/fir.png" alt="FIR" />
            <CardCooperation image="/images/logo/ti.png" alt="Teknik Informatika" />
            <CardCooperation image="/images/logo/sema.png" alt="SEMA Paramadina" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tile-parchment section">
        <div className="container-narrow">
          <div className="text-center">
            <p className="eyebrow">Tanya Jawab</p>
            <h2 className="heading-lg mt-3">
              Have Questions About HIMTI? <br className="hidden sm:block" />
              <span className="text-brand-link">We Have Answers!</span>
            </h2>
          </div>

          <div className="mt-10 border-t border-hairline">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-body-strong text-ink">{faq.q}</span>
                  <Plus className="h-5 w-5 shrink-0 text-brand-link transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="body-copy max-w-2xl pb-5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
