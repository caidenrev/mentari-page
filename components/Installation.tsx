"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerminalBlock from "./TerminalBlock";

const STEPS = [
  { number: 1, title: "Pastikan Node.js v18+ terinstall",  code: "node --version" },
  { number: 2, title: "Install MENTARI CLI secara global", code: "npm install -g mentari-cli" },
  { number: 3, title: "Jalankan dan ikuti setup awal",     code: "mentari" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Installation() {
  return (
    <section id="instalasi" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            Instalasi dalam{" "}
            <span className="text-orange-gradient">30 Detik</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col gap-6"
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={itemVariants} className="flex gap-4 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground text-sm shadow-md shadow-primary/30">
                {step.number}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-2 text-sm">{step.title}</p>
                <TerminalBlock code={step.code} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* External links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-1 mt-8 justify-center"
        >
          <Button
            variant="link"
            nativeButton={false}
            render={<a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer" />}
            className="text-primary hover:text-accent text-xs font-medium gap-1"
          >
            <ExternalLink size={12} />
            Download Node.js LTS
          </Button>
          <Button
            variant="link"
            nativeButton={false}
            render={<a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" />}
            className="text-primary hover:text-accent text-xs font-medium gap-1"
          >
            <ExternalLink size={12} />
            Dapatkan Gemini API Key gratis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
