"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type LineType = "command" | "success" | "menu";

interface Line {
  text: string;
  type: LineType;
}

const ALL_LINES: Line[] = [
  { text: "$ mentari",                 type: "command" },
  { text: "✓ Token terdeteksi",        type: "success" },
  { text: "✓ Model: gemini-2.5-flash", type: "success" },
  { text: "Scan Tugas Pending",        type: "menu"    },
  { text: "Auto-Pilot Eksekusi",       type: "menu"    },
  { text: "Chat Bot Asisten AI",       type: "menu"    },
];

const TYPING_SPEED: Record<LineType, number> = {
  command: 52,
  success: 18,
  menu:    20,
};

const PAUSE_AFTER: Record<LineType, number> = {
  command: 300,
  success: 60,
  menu:    55,
};

function lineColor(type: LineType) {
  if (type === "success") return "text-green-400";
  return "text-[#F0EBE3]";
}

interface TerminalMockupProps {
  startDelay?: number;
  className?: string;
}

export default function TerminalMockup({ startDelay = 800, className }: TerminalMockupProps) {
  const [step, setStep]       = useState(0);
  const [chars, setChars]     = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || step >= ALL_LINES.length) return;
    const line = ALL_LINES[step];

    if (chars < line.text.length) {
      const t = setTimeout(() => setChars(c => c + 1), TYPING_SPEED[line.type]);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setStep(s => s + 1); setChars(0); }, PAUSE_AFTER[line.type]);
    return () => clearTimeout(t);
  }, [started, step, chars]);

  const isDone       = step >= ALL_LINES.length;
  const preLines     = ALL_LINES.filter(l => l.type !== "menu");
  const menuLines    = ALL_LINES.filter(l => l.type === "menu");
  const preCount     = preLines.length;                    // 3
  const showBox      = step >= preCount;
  const menuDone     = Math.max(0, step - preCount);       // completed menu items
  const typingMenu   = showBox && !isDone;
  const currentMenuIdx = step - preCount;                  // which menu item is typing

  return (
    <div className={cn(
      "relative rounded-lg border border-[#2A2420] bg-[#0D0B09] overflow-hidden scanlines",
      className
    )}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2A2420] bg-[#111009]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-[11px] text-[#8A7F75] ml-1.5">mentari-cli — bash</span>
      </div>

      {/* Body */}
      <div className="p-4 min-h-[200px] font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">

        {/* Pre-lines (command + success) */}
        {preLines.map((line, i) => {
          const isComplete = step > i;
          const isTyping   = step === i;
          if (!isComplete && !isTyping) return null;
          return (
            <div key={i} className={cn("whitespace-pre-wrap", lineColor(line.type))}>
              {isComplete ? line.text : line.text.slice(0, chars)}
              {isTyping && (
                <span className="cursor-blink inline-block w-1.5 h-[1em] bg-[#F05A00] align-middle ml-px" />
              )}
            </div>
          );
        })}

        {/* CSS-border menu box — no ASCII art, no alignment issues */}
        {showBox && (
          <div className="mt-2 border border-[#F05A00]/70 rounded overflow-hidden">
            {/* Box header */}
            <div className="px-3 py-1 border-b border-[#F05A00]/30 bg-[#F05A00]/5">
              <span className="text-[#F05A00] text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase">
                Menu Utama
              </span>
            </div>

            {/* Menu items */}
            <div className="px-3 py-2 flex flex-col gap-1">
              {/* Completed items */}
              {menuLines.slice(0, menuDone).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#F0EBE3]">
                  <span className="text-[#F05A00] text-[8px] leading-none">●</span>
                  <span>{item.text}</span>
                </div>
              ))}

              {/* Currently typing item */}
              {typingMenu && currentMenuIdx < menuLines.length && (
                <div className="flex items-center gap-2 text-[#F0EBE3]">
                  <span className="text-[#F05A00] text-[8px] leading-none">●</span>
                  <span>
                    {menuLines[currentMenuIdx].text.slice(0, chars)}
                    <span className="cursor-blink inline-block w-1.5 h-[1em] bg-[#F05A00] align-middle ml-px" />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Idle cursor after everything is done */}
        {isDone && (
          <div className="text-[#F0EBE3] mt-2">
            <span className="text-[#F05A00]">$ </span>
            <span className="cursor-blink inline-block w-1.5 h-[1em] bg-[#F05A00] align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
