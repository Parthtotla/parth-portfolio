import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "@/components/ui/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const title = "Parth Totla — AI-Native Product Builder";
const description = "Portfolio of Parth Totla — a BBA with AI student and product builder exploring AI, business and technology. I build with AI, not just talk about it.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title, description,
  openGraph: { title, description, type: "website", siteName: "Parth Totla" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
