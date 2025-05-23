import { style } from "@vanilla-extract/css";

// export const container = style({
//   width: "100%",
//   height: "100%",
//   aspectRatio: "auto 658 / 333",
//   background: "RGB(241, 206, 186)",
//   position: "relative",
// });
// export const container = style({
//   width: "100%",
//   aspectRatio: "658 / 333", // 비율 고정
//   // background: "RGB(241, 206, 186)",
//   position: "relative",
//   // overflow: "hidden",       // 필요 시
// });


// ✅ 반응형 이미지 스타일
export const image = style({
  width: "80%",
  height: "100%",
  objectFit: "fill",
  display: "block",
  margin: "0 auto", // 가운데 정렬

  "@media": {
    "screen and (min-width: 600px)": {
      width: "50%", // PC일 때 이미지 너비 줄임
      height: "auto", // 자동으로 맞춤
    },
  },
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  color: "white",
  position: "absolute",
  top: "45%",
  left: "45%",
});


export const icon = style({
  position: "absolute",
  top: 0,
  left: 0,
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  background: "radial-gradient(circle at center, #f0f4ff, white)", // 부드러운 배경
});

// spline-love.css.ts
export const leafLeft = style({
  marginRight: "20px",
});

export const leafRight = style({
  marginLeft: "20px",
  transform: "scaleX(-1)", // 좌우 반전
});

export const imageRound = style({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "5px solid #eaeaea",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
});