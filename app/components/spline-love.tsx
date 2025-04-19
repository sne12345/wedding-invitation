
"use client";

import { container, loading } from "./spline-love.css";

export default function SplineLove() {
  return (
    <div className={container}>
      <img
        src="/gallery/main-photo10.png" // 이미지 경로
        alt="메인 이미지"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",            // 세로 비율 유지
          objectFit: "fill",      // 넘치지 않게
        }}
      />
    </div>
  );
}