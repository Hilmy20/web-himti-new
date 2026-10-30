import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HIMTI Paramadina | Himpunan Mahasiswa Teknik Informatika Universitas Paramadina",
    template: "%s | HIMTI Paramadina",
  },
  description:
    "Website resmi Himpunan Mahasiswa Teknik Informatika (HIMTI) Universitas Paramadina Kabinet Innovara. Wadah inovasi, riset, dan kolaborasi mahasiswa Teknik Informatika.",
  keywords: [
    "HIMTI",
    "HIMTI Paramadina",
    "Teknik Informatika",
    "Universitas Paramadina",
    "Innovara",
    "Himti Innovara",
  ],
  authors: [{ name: "HIMTI Paramadina" }],
  openGraph: {
    title: "HIMTI Paramadina | Kabinet Innovara",
    description:
      "Website resmi Himpunan Mahasiswa Teknik Informatika Universitas Paramadina. Kolaborasi, inovasi, dan teknologi masa depan.",
    url: "https://himti.paramadina.ac.id",
    siteName: "HIMTI Paramadina",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMTI Paramadina | Kabinet Innovara",
    description:
      "Website resmi Himpunan Mahasiswa Teknik Informatika Universitas Paramadina.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-surface-canvas font-sans text-ink">
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
        <NavigationBar />
        <main className="w-full flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
