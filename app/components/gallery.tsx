
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
  "photo9.jpeg",
  "photo2.jpeg",
  "photo18.jpeg",
  "compressed_photo12.jpg",
  "photo15.jpeg",
  "photo16.jpeg",
  "photo10.jpeg",
  "photo5.jpeg",
];

export default function Gallery() {
  return (
    <section className={container}>
      <SectionTitle title="사진첩" />

      <span className={description}>
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
