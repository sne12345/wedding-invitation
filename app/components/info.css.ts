import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "26px",
  margin: "10px 0 0 0",
});

export const title = style({
  fontSize: 20,
  fontWeight: "bold",
  lineHeight: 1.0,
  margin: "0 20px",
});

export const phrase = style({
  fontSize: 16,
  fontWeight: "400",
  lineHeight: 1.5,
  wordBreak: "keep-all",
  margin: "0 20px",
  color: "#555555",
});

export const wedding = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: 18,
  fontWeight: "400",
  borderLeft: "4px solid #FFBE98",
  paddingLeft: 8,
  margin: "0 20px",
});

export const weddingRow = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
  width: "300px",
});

export const icon = style({
  position: "absolute",
  bottom: 0,
  right: 0,
});
