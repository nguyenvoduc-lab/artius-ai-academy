"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[751px] flex items-center justify-center overflow-hidden px-5 md:px-16 py-16">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e6c487]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1 border border-[#e6c487]/30 rounded-full">
          <span className="font-montserrat text-[10px] tracking-[0.2em] text-[#e6c487] uppercase font-bold">
            Elite Interior &amp; Construction AI Training
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-montserrat text-4xl md:text-[48px] font-semibold text-white mb-6 leading-tight tracking-[0.03em] md:tracking-[0.05em]"
        >
          <span className="text-[#e6c487] text-glow-gold">Làm Chủ AI</span>{" "}
          — Làm Chủ Công Việc
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-[18px] text-[#d0c5b5] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Chương trình đào tạo AI nội bộ dành riêng cho đội ngũ Artius Design
          &amp; Construction. Nâng tầm tư duy thiết kế và tối ưu hóa quy trình
          thi công bằng công nghệ tiên phong.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#dang-ky"
            className="w-full md:w-auto bg-[#e6c487] text-[#412d00] px-10 py-5 font-montserrat text-[12px] tracking-widest font-bold uppercase hover:scale-105 transition-transform active:scale-95 rounded-sm"
          >
            ĐĂNG KÝ HỌC
          </a>
          <a
            href="#lo-trinh"
            className="w-full md:w-auto border border-[#e6c487] text-[#e6c487] px-10 py-5 font-montserrat text-[12px] tracking-widest font-bold uppercase hover:bg-[#e6c487]/10 transition-colors rounded-sm"
          >
            KHÁM PHÁ LỘ TRÌNH
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
