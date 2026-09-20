import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { SpaceBackdrop } from "@/components/space/SpaceBackdrop";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farrukh Saif — Space optics & imaging",
  description:
    "Optical Engineering Specialist at Honeywell Aerospace and MASc researcher at UW, working on spaceborne optical systems, quantum communications, and biomedical imaging.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#02010a] font-sans text-white">
        <SpaceBackdrop />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
