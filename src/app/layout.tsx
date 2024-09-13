import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Team - Collaboration Tool for Remote Teams",
  description:
    "Remake by: Fazle Mawla Fachreza. Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
  authors: [{ name: "Fazle Mawla Fachreza" }],
  openGraph: {
    title: "Team - Collaboration Tool for Remote Teams",
    description:
      "Remake by: Fazle Mawla Fachreza. Team is a powerful collaboration tool designed for remote teams to work together efficiently and effectively.",
    url: "https://teamdots.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Team",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased scroll-smooth bg-secondary`}
      >
        <Navbar />
        <div className="min-h-dvh bg-white">{children}</div>
        <Footer />
        <ToTop />
        <Analytics />
      </body>
    </html>
  );
}
