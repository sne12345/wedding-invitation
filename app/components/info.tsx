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

      <h2 className={title}>저희, 결혼합니다.</h2>
      <p className={phrase}>
        
사랑하는 사람과 평생을 함께하기로 약속하고,
서로의 가족과 마음을 모아 조용한 예식을 올리게 되었습니다.<br /><br />
        
        아쉽게도 이번 결혼식은 가까운 가족분들과 함께하는
비공개 예식으로 진행하게 된 점 너그러이 양해 부탁드립니다.
        <br /><br />
        <b>
        저희는 이제 부부로서 한 걸음을 내딛습니다.
앞으로도 서로를 아끼며, 밝고 따뜻한 삶을 함께 그려가겠습니다.</b>
        <br /><br />
        두 사람의 새로운 시작을
        기쁜 마음으로 함께 축복해주시면 감사하겠습니다.
        </p>

      <p className={wedding}>
        <span className={weddingRow}>
          故 김태훈 · 이현숙의 아들 <b>김우재</b>
        </span>
        <span className={weddingRow}>
          송영수 · 양성희의 딸 <b>송나은</b>
        </span>
      </p>

      <p className={wedding}>
        <time dateTime="2025-05-23">
          <b>2025년 5월 23일</b> 금요일
        </time>
      </p>
    </section>
  );
}
