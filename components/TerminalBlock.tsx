"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TerminalBlockProps {
  code: string;
  className?: string;
}

export default function TerminalBlock({ code, className }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative rounded-md border border-[#2A2420] bg-[#0D0B09] overflow-hidden",
      className
    )}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#2A2420]">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <Tooltip>
          <TooltipTrigger
            onClick={handleCopy}
            aria-label="Salin kode"
            render={<button />}
            className="text-[#8A7F75] hover:text-[#F05A00] transition-colors cursor-pointer p-1 rounded bg-transparent border-0"
          >
            {copied
              ? <Check size={12} className="text-green-400" />
              : <Copy size={12} />
            }
          </TooltipTrigger>
          <TooltipContent side="left">
            <p className="font-mono text-xs">{copied ? "Disalin!" : "Salin"}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Code */}
      <div className="px-3 py-2.5">
        <pre className="font-mono text-xs sm:text-sm text-[#F0EBE3] leading-relaxed overflow-x-auto">
          <span className="text-[#F05A00] select-none">$ </span>
          <span>{code}</span>
        </pre>
      </div>
    </div>
  );
}
