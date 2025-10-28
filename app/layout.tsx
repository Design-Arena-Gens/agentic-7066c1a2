import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Personal Journal | Stories & Reflections",
  description:
    "A mindful personal journal capturing daily reflections, creative projects, and meaningful memories.",
  metadataBase: new URL("https://agentic-7066c1a2.vercel.app"),
  openGraph: {
    title: "Personal Journal | Stories & Reflections",
    description:
      "A mindful personal journal capturing daily reflections, creative projects, and meaningful memories.",
    url: "https://agentic-7066c1a2.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Journal | Stories & Reflections",
    description:
      "A mindful personal journal capturing daily reflections, creative projects, and meaningful memories."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="page-background" aria-hidden="true" />
        <div className="layout">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
