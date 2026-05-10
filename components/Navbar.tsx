"use client";

import { useEffect, useState } from "react";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Fitur",      href: "#fitur" },
  { label: "Instalasi",  href: "#instalasi" },
  { label: "Cara Pakai", href: "#cara-pakai" },
  { label: "FAQ",        href: "#faq" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled]    = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <>
      {/* ── Floating capsule wrapper — animates position only ── */}
      <motion.div
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 pointer-events-none"
      >
        {/*
          The blur lives on THIS element — it is NOT animated by Framer Motion,
          so backdrop-filter works reliably across all browsers.
        */}
        <nav
          aria-label="Main navigation"
          className={cn(
            "pointer-events-auto w-full max-w-3xl rounded-full",
            "nav-capsule transition-shadow duration-300",
            scrolled && "nav-capsule--scrolled"
          )}
        >
          <div className="flex items-center justify-between h-12 px-4 sm:px-5">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 font-mono font-bold text-sm text-[#F05A00] hover:text-[#FFAA00] transition-colors shrink-0"
              aria-label="MENTARI CLI — kembali ke atas"
            >
              MENTARI CLI
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link px-3 py-1.5 text-xs font-medium rounded-full cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: theme toggle + CTA + hamburger */}
            <div className="flex items-center gap-1.5">

              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  "transition-all duration-200 cursor-pointer",
                  isDark
                    ? "text-[#8A7F75] hover:text-[#FFAA00] hover:bg-white/8"
                    : "text-[#7A6F65] hover:text-[#E05000] hover:bg-black/6"
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                    exit={{    rotate:  30, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    {isDark ? <Sun size={15} /> : <Moon size={15} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Install CTA — desktop only */}
              <div className="hidden md:block">
                <Button
                  size="sm"
                  onClick={() => handleNavClick("#instalasi")}
                  className="h-7 px-3.5 text-xs bg-[#F05A00] hover:bg-[#FF6A10] text-white font-semibold rounded-full transition-all duration-200 cursor-pointer"
                  style={{ boxShadow: "0 0 12px rgba(240,90,0,0.35)" }}
                >
                  Install
                </Button>
              </div>

              {/* Mobile hamburger */}
              <button
                className={cn(
                  "md:hidden w-8 h-8 rounded-full flex items-center justify-center",
                  "transition-all duration-200 cursor-pointer",
                  isDark
                    ? "text-[#8A7F75] hover:text-[#F0EBE3] hover:bg-white/8"
                    : "text-[#7A6F65] hover:text-[#1C1A17] hover:bg-black/6"
                )}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -20, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  20, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {mobileOpen ? <X size={17} /> : <Menu size={17} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-[68px] left-4 right-4 z-40 md:hidden"
          >
            {/* Blur lives on this non-animated inner div */}
            <div className="nav-mobile-panel rounded-2xl overflow-hidden">
              <nav className="flex flex-col p-2 gap-0.5" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="nav-link text-left px-4 py-2.5 text-sm font-medium rounded-xl cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-1.5 pb-1 px-1">
                  <Button
                    size="sm"
                    onClick={() => handleNavClick("#instalasi")}
                    className="w-full h-9 text-sm bg-[#F05A00] hover:bg-[#FF6A10] text-white font-semibold rounded-xl cursor-pointer"
                  >
                    Install Sekarang
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
