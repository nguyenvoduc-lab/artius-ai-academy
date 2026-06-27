"use client";

import { motion } from "framer-motion";

const tracks = [
  {
    icon: "bolt",
    title: "Track 1: Dùng AI Trực Tiếp",
    description:
      "Tăng hiệu suất công việc hàng ngày thông qua việc sử dụng các công cụ AI tạo nội dung, hình ảnh và xử lý dữ liệu tức thời.",
    modules: "4 MODULES",
  },
  {
    icon: "settings_input_component",
    title: "Track 2: Tự Động Hóa",
    description:
      "Tối ưu quy trình vận hành phòng ban. Xây dựng các luồng làm việc tự động giúp loại bỏ thao tác thủ công lặp lại.",
    modules: "6 MODULES",
  },
  {
    icon: "psychology",
    title: "Track 3: Xây Dựng Agent",
    description:
      "Phát triển trợ lý ảo chuyên biệt có khả năng hiểu sâu về dữ liệu Artius, hỗ trợ ra quyết định và tra cứu kỹ thuật.",
    modules: "8 MODULES",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function TrainingTracks() {
  return (
    <section
      id="lo-trinh"
      className="px-5 md:px-16 py-24 bg-[#0c0e14]/50"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat text-3xl md:text-[24px] font-semibold text-white mb-4 tracking-[0.02em] uppercase">
            LỘ TRÌNH ĐÀO TẠO
          </h2>
          <div className="w-20 h-1 bg-[#e6c487]" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-8 flex flex-col h-full group cursor-default"
            >
              {/* Icon */}
              <div className="mb-8 w-12 h-12 flex items-center justify-center bg-[#e6c487]/10 border border-[#e6c487]/20 text-[#e6c487]">
                <span className="material-symbols-outlined text-3xl">
                  {track.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-montserrat text-[24px] font-medium text-white mb-4 group-hover:text-[#e6c487] transition-colors tracking-[0.02em]">
                {track.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[16px] text-[#d0c5b5] mb-8 flex-grow leading-[1.5]">
                {track.description}
              </p>

              {/* Footer */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-montserrat text-[10px] tracking-[0.15em] font-bold text-[#e6c487]">
                  {track.modules}
                </span>
                <span className="material-symbols-outlined text-[#e6c487] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
