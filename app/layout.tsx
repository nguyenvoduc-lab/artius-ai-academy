import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artius AI Academy | Elite Training for Design & Construction",
  description:
    "Chương trình đào tạo AI nội bộ dành riêng cho đội ngũ Artius Design & Construction. Nâng tầm tư duy thiết kế và tối ưu hóa quy trình thi công bằng công nghệ tiên phong.",
  keywords: ["AI", "đào tạo", "Artius", "thiết kế", "xây dựng", "nội thất"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} bg-[#0A0A0A] text-[#e2e1eb] font-inter overflow-x-hidden architectural-bg`}
      >
        {children}
      </body>
    </html>
  );
}
