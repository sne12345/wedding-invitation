
import {
  container,
  description,
  icon,
  image,
  imageContainer,
} from "./gallery.css";
import SectionTitle from "./section-title";
import { SmallLeavesArt } from "./svgs";

// ✅ 더 이상 외부 URL 필요 없음
// export const r2 = "https://r2.wedding.beomyeong.miryang.dev";

export const images = [
  "photo1.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo2.jpg",
  "photo5.jpg",
  "photo6.jpg"
  // 추가된 사진 이름들
];

export default function Gallery() {
  return (
    <section className={container}>
      <SectionTitle title="사진첩" />

      <span className={description}>
        {/* 여행을 좋아하는 저희는 스튜디오 대신 제주도에서 사진을 찍었어요. */}
      </span>

      <div className={imageContainer}>
        {images.map((img) => (
          <img
            className={image}
            key={img}
            src={`/gallery/${img}`} // ✅ public/gallery 경로로 바꿈
            alt="웨딩 사진"
            loading="lazy"
          />
        ))}
      </div>

      <div className={icon}>
        <SmallLeavesArt />
      </div>
    </section>
  );
}
