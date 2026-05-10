"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Copy, Check, BookOpen, SquareTerminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import TerminalMockup from "./TerminalMockup";

const INSTALL_CMD = "npm install -g mentari-cli";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 min-h-screen">
      {/* Floating gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #F05A00 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-16 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFAA00 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="inline-flex items-center gap-1.5 bg-accent/15 text-accent border border-accent/30 font-mono text-[11px] px-2.5 py-0.5">
                <SquareTerminal size={11} strokeWidth={2} />
                AI Command Line Interface
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground"
            >
              LMS Auto-Pilot untuk{" "}
              <span className="whitespace-nowrap">
                Mahasiswa{" "}
                <span className="text-orange-gradient">UNPAM</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md"
            >
              Selesaikan pre-test, forum diskusi, post-test, dan absensi —
              otomatis, cerdas, tanpa ribet.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2.5">
              <Tooltip>
                <TooltipTrigger render={<span />} className="w-full sm:w-auto shrink-0">
                  <Button
                    onClick={handleCopy}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs glow-orange-sm hover:glow-orange transition-all duration-200 cursor-pointer gap-1.5 w-full h-9 px-3"
                  >
                    {copied
                      ? <Check size={13} className="text-green-300 shrink-0" />
                      : <Copy size={13} className="shrink-0" />
                    }
                    <span className="truncate">{INSTALL_CMD}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono text-xs">{copied ? "Disalin!" : "Klik untuk menyalin"}</p>
                </TooltipContent>
              </Tooltip>

              <Button
                size="sm"
                variant="outline"
                nativeButton={false}
                render={
                  <a href="https://www.npmjs.com/package/mentari-cli" target="_blank" rel="noopener noreferrer" />
                }
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent transition-all duration-200 gap-1.5 h-9 px-3 shrink-0"
              >
                <BookOpen size={13} />
                <span className="text-xs">Lihat Dokumentasi</span>
              </Button>
            </motion.div>

            {/* Requirements note */}
            <motion.p variants={itemVariants} className="font-mono text-[11px] text-muted-foreground">
              Node.js v18+ diperlukan · Gemini API Key gratis
            </motion.p>
          </motion.div>

          {/* ── Right: terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            <TerminalMockup
              startDelay={800}
              className="w-full shadow-xl shadow-primary/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
