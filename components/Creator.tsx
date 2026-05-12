"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Code2, AlertTriangle, Cpu, Briefcase } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const PAIN_POINTS = [
  { icon: AlertTriangle, text: "Halaman LMS butuh waktu lama untuk load — setiap klik terasa seperti menunggu server bangun dari tidur." },
  { icon: AlertTriangle, text: "UI sering crash dan backend API error fetch saat ingin mengerjakan aktivitas perkuliahan online." },
  { icon: Zap,           text: "Revan menemukan solusi: tembak langsung endpoint API dari raw server LMS Mentari, bypass UI yang lambat." },
  { icon: Code2,         text: "Tools scraping otomatis mendeteksi pertemuan yang belum diselesaikan — syarat absensi terpenuhi tanpa drama." },
];

const EXPERIENCES = [
  {
    logoLight: "/AWS.svg",
    logoDark:  "/AWS-Dark.svg",
    role:    "Cloud Ops Engineer",
    company: "Amazon Web Services",
    sub:     "Indonesia",
    bg:      "rgba(255,153,0,0.08)",
    border:  "rgba(255,153,0,0.20)",
  },
  {
    logoLight: "/google-cloud.svg",
    logoDark:  "/google-cloud.svg",
    role:    "Google Cloud Innovator",
    company: "Google Cloud",
    sub:     "2025 Cohort",
    bg:      "rgba(66,133,244,0.08)",
    border:  "rgba(66,133,244,0.20)",
  },
];

export default function Creator() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #F05A00 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[11px] text-primary uppercase tracking-[0.25em] mb-3">
            — Tentang Pencipta —
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Kenapa{" "}
            <span className="text-orange-gradient">MENTARI CLI</span>{" "}
            Dibuat?
          </h2>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── Col 1: Name + Experience ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <h3 className="font-bold text-foreground text-2xl sm:text-3xl leading-tight">
                Revan
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Cloud Engineering {" "} <br/>
                <span className="text-primary font-semibold font-mono">Amazon Web Services</span>
              </p>
            </div>

            {/* Experience label */}
            <div className="flex items-center gap-2">
              <Briefcase size={13} className="text-primary" />
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
                Experience
              </p>
            </div>

            {/* Experience cards */}
            <div className="flex flex-col gap-3">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.role}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: exp.bg, border: `1px solid ${exp.border}` }}
                >
                  <div
                    className="w-14 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white px-2"
                    style={{ border: `1px solid ${exp.border}` }}
                  >
                    <Image
                      src={isDark ? exp.logoDark : exp.logoLight}
                      alt={exp.company}
                      width={48}
                      height={28}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground text-xs font-semibold leading-tight truncate">{exp.role}</p>
                    <p className="text-muted-foreground text-[11px] truncate">{exp.company} · {exp.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-primary/40 pl-3.5">
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                &ldquo;Kalau sistemnya lambat, kita yang harus lebih cepat.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ── Col 2: Story ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3.5"
          >
            <div className="flex items-center gap-2">
              <Cpu size={13} className="text-primary" />
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
                Latar Belakang
              </p>
            </div>

            {PAIN_POINTS.map((point, i) => {
              const Icon = point.icon;
              const isPositive = Icon === Zap || Icon === Code2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex gap-3 items-start"
                >
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                    isPositive
                      ? "bg-primary/15 border border-primary/30"
                      : "bg-yellow-500/10 border border-yellow-500/25"
                  }`}>
                    <Icon
                      size={11}
                      className={isPositive ? "text-primary" : "text-yellow-500"}
                      strokeWidth={2}
                    />
                  </div>
                  <p className={`text-sm leading-relaxed ${isPositive ? "text-foreground" : "text-muted-foreground"}`}>
                    {point.text}
                  </p>
                </motion.div>
              );
            })}

            <div className="mt-1 rounded-xl border border-border bg-card px-3.5 py-3 flex gap-2.5 items-start">
              <Code2 size={13} className="text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                MENTARI CLI bekerja dengan{" "}
                <span className="text-foreground font-medium">mengintersep traffic jaringan</span>{" "}
                untuk menemukan endpoint API raw server LMS, lalu mengeksekusi request langsung —
                tanpa perlu menunggu UI render.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
