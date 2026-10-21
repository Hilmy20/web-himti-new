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
  title:
    "Himpunan Mahasiswa Teknik Informatika - Universitas Negeri Paramadina",
  description: "HIMTI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.className} bg-[#0b0d13] text-white min-h-screen relative overflow-x-hidden selection:bg-brand-main/40 selection:text-white`}
      >
        {/* Ambient Liquid Glass Lighting Orbs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-purple-600/10 blur-[130px] rounded-full" />
          <div className="absolute top-[35%] -left-36 w-[560px] h-[560px] bg-blue-500/10 blur-[150px] rounded-full" />
          <div className="absolute top-[65%] -right-36 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        </div>

        <SpeedInsights />
        <NavigationBar />
        <main className="w-full max-w-[1400px] flex flex-col mx-auto pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
