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
        {/* High-Performance Ambient Lighting Mesh (Zero Blur GPU Overhead) */}
        <div
          className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle 500px at 50% -8%, rgba(42, 175, 21, 0.18), transparent 70%),
              radial-gradient(circle 450px at 0% 35%, rgba(51, 204, 0, 0.12), transparent 70%),
              radial-gradient(circle 500px at 100% 65%, rgba(42, 175, 21, 0.10), transparent 70%),
              radial-gradient(circle 450px at 30% 95%, rgba(51, 204, 0, 0.10), transparent 70%)
            `,
          }}
        />

        <SpeedInsights />
        <NavigationBar />
        <main className="w-full max-w-[1400px] flex flex-col mx-auto pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
