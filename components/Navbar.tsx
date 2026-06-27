"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center px-5 md:px-16 py-2 w-full fixed top-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-xl" : "bg-[#0A0A0A]/70 backdrop-blur-xl"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 cursor-pointer active:scale-95 transition-transform">
        <span
          className="material-symbols-outlined text-[#e6c487] text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          architecture
        </span>
        <span className="font-montserrat text-2xl tracking-widest text-[#e6c487] font-semibold">
          ARTIUS AI ACADEMY
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center">
        <a
          href="#lo-trinh"
          className="font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase text-[#d0c5b5] hover:text-[#e6c487] transition-colors duration-300"
        >
          LỘ TRÌNH
        </a>
        <a
          href="#doi-tuong"
          className="font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase text-[#d0c5b5] hover:text-[#e6c487] transition-colors duration-300"
        >
          ĐỐI TƯỢNG
        </a>
        <a
          href="#dang-ky"
          className="bg-[#c9a96e] text-[#412d00] px-6 py-3 font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase hover:brightness-110 transition-all cursor-pointer active:scale-95 rounded-sm"
        >
          ĐĂNG KÝ HỌC
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#e6c487]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 flex flex-col gap-4 p-6 md:hidden"
          >
            <a
              href="#lo-trinh"
              onClick={() => setMenuOpen(false)}
              className="font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase text-[#d0c5b5] hover:text-[#e6c487] transition-colors"
            >
              LỘ TRÌNH
            </a>
            <a
              href="#doi-tuong"
              onClick={() => setMenuOpen(false)}
              className="font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase text-[#d0c5b5] hover:text-[#e6c487] transition-colors"
            >
              ĐỐI TƯỢNG
            </a>
            <a
              href="#dang-ky"
              onClick={() => setMenuOpen(false)}
              className="bg-[#c9a96e] text-[#412d00] px-6 py-3 font-montserrat text-[12px] tracking-[0.15em] font-bold uppercase text-center rounded-sm"
            >
              ĐĂNG KÝ HỌC
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
