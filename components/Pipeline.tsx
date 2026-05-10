"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  LogIn, Search, FileText, MessageSquare,
  CheckSquare, ClipboardList, CheckCircle,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const PIPELINE_NODES = [
  { icon: LogIn,         label: "Login",      desc: "Buka browser, tangkap token login secara otomatis",    color: "orange" },
  { icon: Search,        label: "Scan Tugas", desc: "Deteksi semua matkul & pertemuan yang belum selesai",  color: "orange" },
  { icon: FileText,      label: "Pre-Test",   desc: "Jawab pre-test otomatis menggunakan Gemini AI",        color: "orange" },
  { icon: MessageSquare, label: "Forum",      desc: "Generate & kirim 2x balasan forum diskusi",            color: "orange" },
  { icon: CheckSquare,   label: "Post-Test",  desc: "Kerjakan post-test secara otomatis dan akurat",        color: "orange" },
  { icon: ClipboardList, label: "Kuesioner",  desc: "Submit kuesioner absensi tanpa intervensi manual",     color: "orange" },
  { icon: CheckCircle,   label: "Selesai",    desc: "Semua tugas selesai! Tinggal santai.",                 color: "green"  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Pipeline() {
  return (
    <section id="cara-pakai" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
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
            Alur Kerja <span className="text-orange-gradient">Otomatis</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Gunakan{" "}
            <span className="text-foreground font-semibold">
              &apos;Eksekusi Semua Tahap Sekaligus&apos;
            </span>{" "}
            untuk menjalankan semua langkah dalam satu klik.
          </p>
        </motion.div>

        {/* ── Desktop: single row ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="hidden sm:flex items-start justify-center"
        >
          {PIPELINE_NODES.map((node, i) => {
            const Icon = node.icon;
            const isLast  = i === PIPELINE_NODES.length - 1;
            const isGreen = node.color === "green";
            return (
              <div key={node.label} className="flex items-center">
                <PipelineNode node={node} Icon={Icon} isGreen={isGreen} />
                {!isLast && <Connector />}
              </div>
            );
          })}
        </motion.div>

        {/* ── Mobile: 2-column grid with connectors going right then down ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="sm:hidden"
        >
          {/* Row 1: nodes 0-3 */}
          <div className="flex items-start justify-center">
            {PIPELINE_NODES.slice(0, 4).map((node, i) => {
              const Icon = node.icon;
              const isGreen = node.color === "green";
              return (
                <div key={node.label} className="flex items-center">
                  <PipelineNode node={node} Icon={Icon} isGreen={isGreen} small />
                  {i < 3 && <Connector small />}
                </div>
              );
            })}
          </div>

          {/* Down arrow between rows */}
          <div className="flex justify-end pr-[calc(25%-22px)] my-1">
            <DownConnector />
          </div>

          {/* Row 2: nodes 4-6, reversed so the flow reads right-to-left continuing from node 3 */}
          <div className="flex items-start justify-center flex-row-reverse">
            {PIPELINE_NODES.slice(4).map((node, i, arr) => {
              const Icon = node.icon;
              const isGreen = node.color === "green";
              const isLast  = i === arr.length - 1;
              return (
                <div key={node.label} className="flex items-center flex-row-reverse">
                  <PipelineNode node={node} Icon={Icon} isGreen={isGreen} small />
                  {!isLast && <Connector small />}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Shared node component ── */
function PipelineNode({
  node, Icon, isGreen, small = false,
}: {
  node: { label: string; desc: string };
  Icon: React.ElementType;
  isGreen: boolean;
  small?: boolean;
}) {
  const size = small ? "w-10 h-10" : "w-11 h-11";
  const iconSize = small ? 16 : 18;
  const labelClass = small ? "text-[8px] w-12" : "text-[9px] w-14";

  return (
    <motion.div variants={nodeVariants} className="flex flex-col items-center gap-1.5">
      <Tooltip>
        <TooltipTrigger
          render={<button />}
          aria-label={node.label}
          className={cn(
            size,
            "rounded-full flex items-center justify-center",
            "border-2 transition-all duration-200 cursor-default hover:scale-110",
            isGreen
              ? "bg-green-500/15 border-green-500/50 hover:bg-green-500/25 hover:border-green-500"
              : "bg-primary/10 border-primary/50 hover:bg-primary/20 hover:border-primary"
          )}
        >
          <Icon
            size={iconSize}
            className={isGreen ? "text-green-500" : "text-primary"}
            strokeWidth={1.75}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-[140px] text-center">
          <p className="text-xs">{node.desc}</p>
        </TooltipContent>
      </Tooltip>

      <span className={cn(
        "font-mono uppercase tracking-wide text-center",
        labelClass,
        isGreen ? "text-green-500 font-semibold" : "text-muted-foreground"
      )}>
        {isGreen ? "✓ " : ""}{node.label}
      </span>
    </motion.div>
  );
}

/* ── Horizontal dashed connector ── */
function Connector({ small = false }: { small?: boolean }) {
  return (
    <div
      className="pipeline-line mb-4 mx-0.5 shrink-0"
      style={{ width: small ? 20 : 28, height: 2 }}
      aria-hidden="true"
    />
  );
}

/* ── Vertical down connector (mobile snake turn) ── */
function DownConnector() {
  return (
    <div className="flex flex-col items-center gap-0" aria-hidden="true">
      <div
        className="pipeline-line-v"
        style={{ width: 2, height: 20 }}
      />
    </div>
  );
}
