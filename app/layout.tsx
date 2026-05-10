import type { Metadata } from "next";
import { Space_Mono, Sora } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MENTARI CLI — LMS Auto-Pilot untuk Mahasiswa UNPAM",
  description:
    "Selesaikan pre-test, forum diskusi, post-test, dan absensi — otomatis, cerdas, tanpa ribet. Didukung Gemini AI.",
  keywords: ["MENTARI CLI", "LMS", "UNPAM", "otomatis", "Gemini AI", "npm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Start with `dark` class — ThemeProvider will correct it client-side
    <html
      lang="id"
      className={`dark ${spaceMono.variable} ${sora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col noise-bg">
        <ThemeProvider>
          <TooltipProvider delay={200}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
