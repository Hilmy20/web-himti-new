import Image from "next/image";
import Hero from "@/assets/images/hero_himti.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import EventImage from "@/components/event";
import Link from "next/link";
import Programs from "@/components/programs";
import { featuredData } from "./_data/featured_data";
import { CardCooperation } from "@/components/card/card-cooperation";
import HimtiCommitteeCards, { members } from "@/components/himti-commitee";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GiSafetyPin } from "react-icons/gi";

export default function Home() {
  return (
    <div className="w-full space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[85vh] min-h-[580px] max-h-[820px] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/20 shadow-[0_24px_70px_rgba(0,0,0,0.65),inset_0_1px_1.5px_rgba(255,255,255,0.25)]">
          {/* Background Hero Image */}
          <Image
            src={Hero}
            alt="hero himti"
            fill
            className="object-cover filter brightness-[0.78] contrast-105 scale-100"
            priority
          />

          {/* Liquid Glass Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-10">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
                # The <span className="text-blue-400 font-semibold">Next Level</span> Squad
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-main leading-[1.08] tracking-tight mb-5 text-4xl sm:text-6xl md:text-7xl lg:text-[92px] text-white">
              HIMTI{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm font-bold">
                INNOVARA
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200/90 max-w-2xl leading-relaxed font-light">
              Selamat datang di perjalanan inovasi, kolaborasi, dan keunggulan teknologi di bidang Informatika Universitas Paramadina.
            </p>

            {/* Liquid Glass CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#lihatselengkapnya"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 border border-white/30 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,102,255,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <span>Jelajahi Profil</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/proker"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/90 bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-200"
              >
                <span>Program Kerja</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Liquid Glass Card */}
      <section className="px-4 sm:px-6 lg:px-8" id="lihatselengkapnya">
        <div className="glass-surface relative rounded-[32px] p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Tentang Organisasi</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-main font-bold tracking-tight text-white">
                Selamat Datang di <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Himti Paramadina</span>
              </h2>
              <Link
                href="/about"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-blue-400 hover:text-white transition"
                title="Buka Halaman Tentang Kami"
              >
                <GiSafetyPin className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-gray-300/85 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              HIMTI Paramadina (Himpunan Mahasiswa Teknik Informatika Universitas Paramadina) merupakan organisasi resmi mahasiswa yang menaungi mahasiswa Program Studi Teknik Informatika di Universitas Paramadina. Organisasi ini berperan sebagai wadah bagi mahasiswa untuk mengembangkan kemampuan akademik, organisasi, dan keterampilan interpersonal melalui berbagai program dan kegiatan baik di dalam maupun di luar kampus.
            </p>

            <div className="pt-2 flex justify-center">
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="glass-surface rounded-[32px] p-6 sm:p-10 md:p-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300 mb-2">
                Agenda Mendatang
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-main tracking-tight text-white">
                Program yang Akan Datang
              </h2>
              <p className="text-sm sm:text-base text-gray-300/80 mt-2 max-w-xl">
                Beberapa program unggulan yang akan diselenggarakan oleh HIMTI Paramadina dalam waktu dekat.
              </p>
            </div>

            <Link
              href="/proker"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-white px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 backdrop-blur-xl transition group self-start md:self-auto"
            >
              <span>Semua Program</span>
              <Icon
                icon={"material-symbols:arrow-right-alt"}
                className="w-5 h-5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EventImage
              src={"/images/itfest_4.jpg"}
              href="/proker"
              alt="HIMTI IT Fest Competition 5.0"
              title="HIMTI IT Fest Competition 5.0"
            />
            <EventImage
              src={"/images/reformatics_24.jpg"}
              href="/proker"
              alt="Reformatics 2025"
              title="Reformatics 2025"
            />
          </div>
        </div>
      </section>

      {/* Agenda Proker Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="glass-surface rounded-[32px] p-6 sm:p-10 md:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300 mb-2">
              Aktivitas Tahunan
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-main tracking-tight text-white">
              Agenda Program Kerja HIMTI
            </h3>
            <p className="text-sm sm:text-base text-gray-300/80 pt-3">
              HIMTI memiliki beberapa agenda program kerja (proker) setiap tahunnya yang melibatkan mahasiswa, dosen, alumni, serta mitra eksternal.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {featuredData.map((item, index) => (
              <Programs
                key={index}
                title={item.name}
                href={item.href}
                backgroundColor="white"
              />
            ))}
            <Programs
              title="Jelajahi Semua Program Kerja"
              href="/proker"
              backgroundColor="green"
            />
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <HimtiCommitteeCards members={members} />

      {/* In Cooperation With */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="glass-surface rounded-[32px] p-8 sm:p-10 space-y-8 text-center md:text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Partnership & Network
            </span>
            <h4 className="text-2xl sm:text-3xl font-main font-bold text-white mt-1">
              In Cooperation With
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="glass-surface rounded-[32px] p-6 sm:p-10 md:p-14 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-xs font-medium text-blue-300">
              Tanya Jawab
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-main tracking-tight text-white leading-tight">
              Have Questions About HIMTI? <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                We Have Answers!
              </span>
            </h3>
          </div>

          {/* Liquid Glass FAQ Items Grid */}
          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {[
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
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-surface glass-surface-hover rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:w-1/3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-white font-medium text-base sm:text-lg">
                      {faq.q}
                    </h4>
                  </div>
                  <p className="text-gray-300/85 text-sm sm:text-base md:w-2/3 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
