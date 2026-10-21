# Ringkasan Repositori Web HIMTI

Dokumentasi arsitektur dan panduan navigasi codebase untuk pengerjaan proyek `web-himti`.

---

## 📌 Ringkasan Teknis

- **Framework**: Next.js 15 (`canary.6`) — App Router
- **Runtime / UI**: React 18, Tailwind CSS, Radix UI Primitives, Lucide Icons & Iconify
- **Animasi**: Framer Motion
- **Bahasa**: TypeScript & JavaScript (kombinasi `.tsx`, `.jsx`, dan `.js`)
- **Fitur Khusus**: Pengiriman email pesan aspirasi menggunakan Nodemailer (Gmail SMTP)

---

## 📂 Struktur Rute & Halaman (`src/app`)

| Rute / Path | File Utama | Deskripsi / Fungsi |
| :--- | :--- | :--- |
| `/` | [`src/app/page.tsx`](./src/app/page.tsx) | **Landing Page** — Hero section, highlight program kerja, dan banner utama. |
| `/about` | [`src/app/about/page.tsx`](./src/app/about/page.tsx) | **Tentang Kami** — Profil organisasi, latar belakang, visi, dan misi. |
| `/division` | [`src/app/division/page.tsx`](./src/app/division/page.tsx) | **Divisi** — Daftar dan informasi divisi-divisi di HIMTI. |
| `/events` | [`src/app/events/page.tsx`](./src/app/events/page.tsx) | **Event** — Galeri dan publikasi kegiatan yang diselenggarakan. |
| `/proker` | [`src/app/proker/page.jsx`](./src/app/proker/page.jsx) | **Program Kerja** — Rincian agenda kerja kepengurusan. |
| `/himtipedia` | [`src/app/himtipedia/page.tsx`](./src/app/himtipedia/page.tsx) | **Himtipedia** — Direktori pengurus dan profil anggota. |
| `/contact-us` | [`src/app/contact-us/page.js`](./src/app/contact-us/page.js) | **Kontak / Aspirasi** — Form "Perasa" untuk mengirim aspirasi mahasiswa. |
| `/api/send` | [`src/app/api/send/route.js`](./src/app/api/send/route.js) | **API Route** — Endpoint `POST` untuk dispatch email via Nodemailer. |

---

## 🧩 Komponen Utama (`src/components`)

- [`navigation-bar/`](./src/components/navigation-bar) & [`footer/`](./src/components/footer): Komponen layout navigasi global.
- [`filter-divisi/`](./src/components/filter-divisi): Kontrol filter kategori divisi organisasi.
- [`profile-card/`](./src/components/profile-card): Kartu tampilan profil anggota pengurus.
- [`programs/`](./src/components/programs) & [`program-list/`](./src/components/program-list): Katalog daftar program kerja.
- [`article/`](./src/components/article) & [`card/`](./src/components/card): Card layout untuk artikel dan event.
- [`ui/`](./src/components/ui): Reusable UI primitives (Radix UI wrappers).

---

## 🔑 Environment Variables

Jika menguji atau menjalankan fitur kontak/form aspirasi, pastikan file `.env.local` memiliki variabel berikut:

```env
GMAIL_USER=email.kamu@gmail.com
GMAIL_PASS=app_password_gmail
```

---

## 🛠️ Perintah Pengembangan

```bash
# Menjalankan local development server
npm run dev

# Membangun build produksi
npm run build

# Menjalankan build produksi secara lokal
npm start

# Pengecekan linter
npm run lint
```
