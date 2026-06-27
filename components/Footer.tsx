export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0A]">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 py-5 w-full max-w-[1280px] mx-auto">
        {/* Left: Brand */}
        <div className="mb-6 md:mb-0">
          <span className="font-montserrat text-[12px] tracking-[0.15em] font-bold text-[#e6c487]">
            ARTIUS AI ACADEMY
          </span>
          <p className="font-inter text-[12px] text-[#d0c5b5] mt-2 max-w-xs leading-relaxed">
            Kiến tạo tương lai thông qua sự giao thoa giữa trí tuệ nhân tạo và
            nghệ thuật xây dựng.
          </p>
        </div>

        {/* Right: Links + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-8 mb-4">
            <a
              href="#"
              className="font-montserrat text-[10px] tracking-widest font-bold text-[#d0c5b5] hover:text-white transition-colors uppercase"
            >
              QUY TRÌNH ĐÀO TẠO
            </a>
            <a
              href="#"
              className="font-montserrat text-[10px] tracking-widest font-bold text-[#d0c5b5] hover:text-white transition-colors uppercase"
            >
              CHÍNH SÁCH BẢO MẬT
            </a>
            <a
              href="#"
              className="font-montserrat text-[10px] tracking-widest font-bold text-[#d0c5b5] hover:text-white transition-colors uppercase"
            >
              LIÊN HỆ
            </a>
          </div>
          <p className="font-inter text-[10px] text-[#d0c5b5]/50">
            © 2024 ARTIUS Design &amp; Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
