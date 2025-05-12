"use client";

import { container, imageRound, leafLeft, leafRight  } from "./spline-love.css";
import { LeavesArt } from "./svgs";

export default function SplineLove() {
  return (
    <div className={container}>
      {/* <LeavesArt className={leafLeft} /> */}
      <img
        src="/gallery/compressed_photo8.jpg" // 다른 이미지로 바꾸면 됨
        alt="메인 이미지"
        className={imageRound}
      />
      {/* <LeavesArt className={leafRight} /> */}
    </div>
  );
}
