import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  position: "relative",
});

export const description = style({
  fontSize: 14,
  lineHeight: 1.5,
  margin: "0 20px",
  textAlign: "center",
  color: "#555555",
});

export const imageContainer = style({
  columnCount: 2,         // ✅ 2열 구성 (반응형이면 media query로 조절 가능)
  columnGap: "5px",       // 열 사이 여백
});

export const image = style({
  width: "100%",          // ✅ column에 맞춰 자동 조정
  height: "auto",         // ✅ 비율 유지
  marginBottom: "5px",    // 아래 여백
  breakInside: "avoid",   // ✅ 열 중간에 이미지 잘리는 현상 방지
});
export const icon = style({
  position: "absolute",
  top: 0,
  right: 0,
});
