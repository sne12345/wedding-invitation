import {
  container,
  icon,
  phrase,
  title,
  wedding,
  weddingRow,
} from "./info.css";
import { LeavesArt } from "./svgs";

export default function Info() {
  return (
    <section className={container}>
      <div className={icon}>
        <LeavesArt />
      </div>

      <h2 className={title}>소중한 분들께 전하는 결혼 소식</h2>
      <p className={phrase}>
        <b>두 사람, 그리고 양가 가족이 함께 모여
조용히 마음을 나누는 예식을 올리게 되었습니다.</b>
        <br />
        아쉽게도 이번 결혼식은 가까운 가족분들과 함께하는
비공개 예식으로 진행하게 된 점 너그러이 양해 부탁드립니다.
        <br />
        앞으로 함께 걸어갈 길에
따뜻한 마음으로 축복해주시면 감사하겠습니다.</p>

      <p className={wedding}>
        <time dateTime="2025-05-23">
          <b>2025년 5월 23일</b> 금요일
        </time>
      </p>

      <p className={wedding}>
        <span className={weddingRow}>
          故 김태훈 · 이현숙의 아들 <b>김우재</b>
        </span>
        <span className={weddingRow}>
          송영수 · 양성희의 딸 <b>송나은</b>
        </span>
      </p>
    </section>
  );
}
