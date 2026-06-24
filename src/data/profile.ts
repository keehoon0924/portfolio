/**
 * 프로필 정적 데이터.
 * ⚠️ 모든 수치(스킬 %, 통계)와 연락처는 레퍼런스의 예시 placeholder다.
 *    실제 데이터로 교체 필요.
 */

export const profile = {
  name: "이기훈",
  nameEn: "LEE KIHOON",
  role: "MARKETER",
  birth: "1994.07.22",
  phone: "010 · 2468 · 1357",
  email: "kihoon.lee@example.com", // TODO: 실제 이메일로 교체
  social: ["Behance", "Instagram"],
};

export const tools = [
  "Figma",
  "Photoshop",
  "GA4",
  "Meta Ads",
  "CapCut",
  "Notion",
];

export const heroTags = ["브랜드", "퍼포먼스", "기획·실행"];

export type Skill = { name: string; pct: number };
export const skills: Skill[] = [
  { name: "기획 · 전략", pct: 90 },
  { name: "콘텐츠 · 카피", pct: 80 },
  { name: "UI/UX · 상세페이지", pct: 65 },
  { name: "영상 · 모션", pct: 50 },
];

export type Stat = {
  prefix: string;
  value: number;
  unit: string;
  label: string;
};
// TODO: 실제 성과 데이터로 교체
export const stats: Stat[] = [
  { prefix: "+", value: 18, unit: "%", label: "상세페이지 결제율 (가설 목표)" },
  { prefix: "", value: 2, unit: "배", label: "콘텐츠 작성 수 증가" },
  { prefix: "", value: 9, unit: "건", label: "누적 프로젝트" },
];

export type Note = { quote: string; who: string; rot: string };
// TODO: 실제 후기로 교체
export const notes: Note[] = [
  {
    quote: "데이터로 막힌 곳을 정확히 짚고, 빠르게 다음 안을 가져오는 사람.",
    who: "스타트업 마케팅 리드",
    rot: "-1.4deg",
  },
  {
    quote: "예쁘기만 한 게 아니라 왜 이렇게 했는지 늘 설명이 있어요.",
    who: "커머스 PO",
    rot: "1.1deg",
  },
  {
    quote: "마감, 디테일, 커뮤니케이션 셋 다 안심하고 맡길 수 있었습니다.",
    who: "외주 클라이언트",
    rot: "-.6deg",
  },
];
