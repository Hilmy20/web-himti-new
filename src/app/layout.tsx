import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.className} bg-[#003300] text-white min-h-screen relative overflow-x-hidden selection:bg-[#33CC00]/40 selection:text-white`}
      >
        {/* Ambient Liquid Glass Lighting Orbs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-br from-[#2AAF15]/20 via-[#33CC00]/15 to-[#003300]/10 blur-[130px] rounded-full" />
          <div className="absolute top-[35%] -left-36 w-[560px] h-[560px] bg-[#2AAF15]/10 blur-[150px] rounded-full" />
          <div className="absolute top-[65%] -right-36 w-[600px] h-[600px] bg-[#003300]/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#2AAF15]/10 blur-[140px] rounded-full" />
        </div>

        <SpeedInsights />
        <NavigationBar />
        <main className="w-full max-w-[1400px] flex flex-col mx-auto pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
