"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Zap, Search, FileText, MessageSquare,
  CheckSquare, ClipboardList, Bot, RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  { icon: Zap,           name: "Login Otomatis",     desc: "Browser terbuka, token ditangkap sendiri, bypass Cloudflare" },
  { icon: Search,        name: "Scan Tugas Pending", desc: "Cek semua matkul & pertemuan yang belum tuntas" },
  { icon: FileText,      name: "Auto Pre-Test",      desc: "Jawab pre-test otomatis dengan jawaban dari AI Gemini" },
  { icon: MessageSquare, name: "Auto Forum Diskusi", desc: "Generate & kirim 2x balasan forum diskusi via AI" },
  { icon: CheckSquare,   name: "Auto Post-Test",     desc: "Kerjakan post-test secara otomatis dan akurat" },
  { icon: ClipboardList, name: "Auto Kuesioner",     desc: "Submit kuesioner absensi otomatis tanpa drama" },
  { icon: Bot,           name: "Chat Bot AI",        desc: "Tanya langsung ke Gemini dari dalam CLI" },
  { icon: RefreshCw,     name: "Auto-Reauth",        desc: "Token expired? Login ulang otomatis tanpa restart" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Features() {
  return (
    <section id="fitur" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            Semua yang Kamu Butuhkan,{" "}
            <span className="text-orange-gradient">Otomatis</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Dari login hingga kuesioner — MENTARI CLI menangani semuanya.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.name} variants={cardVariants} className="group">
                <div className={cn(
                  "feature-card relative h-full rounded-xl p-4 sm:p-5",
                  "flex flex-col gap-3",
                  "cursor-default select-none",
                  "transition-all duration-300",
                  "hover:-translate-y-1.5",
                )}>
                  {/* Top-edge glow line */}
                  <div className="feature-card-glow" aria-hidden="true" />

                  {/* Icon badge */}
                  <div className="feature-icon-wrap w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon size={20} className="text-[#F05A00] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-foreground text-xs sm:text-sm leading-snug">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover radial spotlight */}
                  <div className="feature-card-spotlight" aria-hidden="true" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
