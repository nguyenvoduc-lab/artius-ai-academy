"use client";

import { motion } from "framer-motion";

const roles = [
  { icon: "business_center", label: "PM" },
  { icon: "calculate", label: "QS" },
  { icon: "account_balance_wallet", label: "KẾ TOÁN" },
  { icon: "shopping_cart", label: "MUA HÀNG" },
  { icon: "architecture", label: "THIẾT KẾ" },
  { icon: "foundation", label: "THI CÔNG" },
];

export default function WhoJoins() {
  return (
    <section
      id="doi-tuong"
      className="px-5 md:px-16 py-24 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text + Role Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-montserrat text-[32px] font-semibold text-white mb-8 tracking-[0.03em]">
              ĐỐI TƯỢNG THAM GIA
            </h2>
            <p className="font-inter text-[18px] text-[#d0c5b5] mb-12 leading-[1.6]">
              AI không chỉ dành cho lập trình viên. Tại Artius, chúng tôi tin
              rằng mọi bộ phận đều có thể nâng cao năng lực chuyên môn thông
              qua AI Mastery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {roles.map((role, i) => (
                <motion.div
                  key={role.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center p-6 glass-card text-center group cursor-default"
                >
                  <span
                    className="material-symbols-outlined text-[#e6c487] mb-4 text-3xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {role.icon}
                  </span>
                  <span className="font-montserrat text-[12px] tracking-[0.15em] font-bold text-white group-hover:text-[#e6c487] transition-colors">
                    {role.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-[#e6c487]/10 blur-3xl rounded-full" />
            <div className="glass-card overflow-hidden p-2 aspect-square relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW5HDOL003Xg0tGHU7LwqxR4KsnYbFQbeGKf6V5EYBiovrDADPdDZTLPEsUiXmCJ3XaW-ENmEgtEk9sGdnG5WvB2CCBRe6p7uYLQaQkw-BO8sHcQBiSyo3lKozPMZFE8xsAI0mLVm9oJFQs0puAO47tXoA12qBLEmoUW1ky9LVHyec-KkrRTCLUgd_HISrSZUikgjds6k7DeS_0WT_OaofMYr42l_YLDUr9SHOt2enL4uEepfn7O8NpTOEQzF8DAV8T5tXTkiRt8Im"
                alt="A professional architectural design studio at night featuring high-end workstations displaying AI-generated structural models"
                className="w-full h-full object-cover grayscale-[0.2] brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
