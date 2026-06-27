"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tracks = [
  { id: "track1", label: "Track 1" },
  { id: "track2", label: "Track 2" },
  { id: "track3", label: "Track 3" },
];

const departments = [
  "Thiết kế",
  "Thi công",
  "Kế toán / Hành chính",
  "Mua hàng / QS",
  "Quản lý dự án",
];

export default function RegisterForm() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="dang-ky" className="px-5 md:px-16 py-24 mb-16">
      <motion.div
        className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* Decorative icon */}
        <div className="absolute top-0 right-0 p-8 pointer-events-none select-none">
          <span
            className="material-symbols-outlined text-[#e6c487]/10 text-8xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            edit_note
          </span>
        </div>

        <h2 className="font-montserrat text-[32px] font-semibold text-white mb-4 text-center tracking-[0.03em]">
          GHI DANH NGAY
        </h2>
        <p className="font-inter text-[16px] text-[#d0c5b5] text-center mb-12">
          Hành trình làm chủ tương lai bắt đầu từ một bước đăng ký.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-12"
          >
            <span
              className="material-symbols-outlined text-[#e6c487] text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <p className="font-montserrat text-[18px] font-semibold text-white tracking-wide">
              Đăng ký thành công!
            </p>
            <p className="font-inter text-[14px] text-[#d0c5b5]">
              Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
          </motion.div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name + Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-montserrat text-[10px] tracking-widest text-zinc-400 font-bold block uppercase">
                  HỌ TÊN
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên..."
                  className="w-full bg-[#18181B] border border-zinc-700 text-white p-4 focus:ring-2 focus:ring-[#e6c487]/20 focus:border-[#e6c487] transition-all outline-none rounded-sm font-inter text-[16px]"
                />
              </div>
              <div className="space-y-2">
                <label className="font-montserrat text-[10px] tracking-widest text-zinc-400 font-bold block uppercase">
                  BỘ PHẬN
                </label>
                <select
                  required
                  className="w-full bg-[#18181B] border border-zinc-700 text-white p-4 focus:ring-2 focus:ring-[#e6c487]/20 focus:border-[#e6c487] transition-all outline-none rounded-sm font-inter text-[16px]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn bộ phận của bạn...
                  </option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Track selection */}
            <div className="space-y-4">
              <label className="font-montserrat text-[10px] tracking-widest text-zinc-400 font-bold block uppercase">
                TRACK MUỐN HỌC
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tracks.map((track) => (
                  <label
                    key={track.id}
                    className={`relative flex items-center p-4 border cursor-pointer hover:border-[#e6c487] transition-colors rounded-sm ${
                      selectedTrack === track.id
                        ? "border-[#e6c487] bg-[#e6c487]/5"
                        : "border-zinc-700 bg-[#18181B]"
                    }`}
                    onClick={() => setSelectedTrack(track.id)}
                  >
                    <input
                      type="radio"
                      name="track"
                      value={track.id}
                      className="hidden"
                      onChange={() => setSelectedTrack(track.id)}
                    />
                    <div
                      className={`w-4 h-4 border border-[#e6c487] rounded-full mr-3 transition-colors flex-shrink-0 ${
                        selectedTrack === track.id ? "bg-[#e6c487]" : ""
                      }`}
                    />
                    <span
                      className={`font-inter text-[16px] transition-colors ${
                        selectedTrack === track.id
                          ? "text-white"
                          : "text-zinc-400"
                      }`}
                    >
                      {track.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#e6c487] text-[#412d00] py-5 font-montserrat text-[12px] tracking-[0.2em] font-bold uppercase hover:brightness-110 active:scale-[0.98] transition-all rounded-sm"
            >
              GỬI ĐĂNG KÝ
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
