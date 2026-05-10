import { Zap, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const NpmIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M0 0v24h24V0H0zm19.2 19.2H4.8V4.8h14.4v14.4zm-2.4-2.4V7.2H7.2v9.6h4.8V9.6h2.4v7.2h2.4z" />
  </svg>
);

const STATS = [
  { icon: Terminal, label: "CLI Tool",    value: "v2.0"    },
  { icon: Cpu,      label: "Powered by",  value: "Gemini"  },
  { icon: Zap,      label: "Platform",    value: "UNPAM"   },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">

      {/* Background glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #F05A00 0%, transparent 70%)" }}
      />

      {/* Top separator line */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #F05A00 40%, #FFAA00 60%, transparent)" }}
      />

      <div className="relative bg-background px-4 sm:px-6 lg:px-8 pt-12 pb-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          {/* ── Main content ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 mb-10">

            {/* Left: brand block */}
            <div className="flex flex-col gap-5 max-w-sm">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg text-foreground tracking-tight">
                  MENTARI CLI
                </span>
                <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/25 px-1.5 py-0.5 rounded-full">
                  v2.0
                </span>
              </div>

              {/* Tagline */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                LMS Auto-Pilot untuk Mahasiswa UNPAM — otomatis, cerdas, tanpa ribet.
                Didukung <span className="text-foreground font-medium">Gemini AI</span>.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-2">
                {STATS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-card text-xs"
                  >
                    <Icon size={11} className="text-primary" strokeWidth={2} />
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: links */}
            <div className="flex flex-col gap-4 lg:items-end justify-start">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                Links
              </p>
              <div className="flex flex-row lg:flex-col gap-2">
                <Button
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href="https://www.npmjs.com/package/mentari-cli"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-8 px-3 gap-2 text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg cursor-pointer"
                >
                  <NpmIcon />
                  npm install
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href="https://github.com/ekarevandi/mentari-cli"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-8 px-3 gap-2 text-xs border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-transparent rounded-lg cursor-pointer"
                >
                  <GithubIcon />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-border mb-6" />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="font-mono text-[11px]">Dibuat oleh</span>
              <span className="font-mono text-[11px] font-bold text-primary">Eka Revandi</span>
              <span className="text-border mx-1">·</span>
              <span className="font-mono text-[11px]">© 2026</span>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground/40 text-center sm:text-right max-w-xs leading-relaxed">
              Dilarang mendistribusikan atau menggunakan untuk keperluan komersial tanpa izin tertulis.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
