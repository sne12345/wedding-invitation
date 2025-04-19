import type { Metadata } from "next";
import { gowunBatang } from "./style/fonts/gowunBatang";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={gowunBatang.className}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "김우재, 송나은 결혼합니다";
  const description = "25년 5월 23일";
  const images = "/gallery/photo1.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: "날짜",
      ["twitter:data1"]: "2025.05.23"
    },
  };
}
