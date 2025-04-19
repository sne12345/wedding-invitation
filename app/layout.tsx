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
  const siteUrl = "https://wedding-invitation-liart-nine.vercel.app";
  const title = "김우재, 송나은 결혼합니다";
  const description = "25년 5월 23일, 따뜻한 시작을 함께합니다.";
  const images = `${siteUrl}/gallery/photo8.jpg`;
  
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
