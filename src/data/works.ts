export type WorkType = "team" | "detail" | "landing" | "video" | "card";

export type Work = {
  id: string;
  type: WorkType;
  label: string;
  category: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  resultHighlight: string;
  role: string;
  team: string;
  period: string;
  images: string[];
};

export const works: Work[] = [
  {
    id: "team-dado-class",
    type: "team",
    label: "팀 프로젝트",
    category: "반응형",
    title: "다도 클래스 예약 서비스",
    problem: "예약 과정이 복잡해 중간 이탈이 많았던 클래스 서비스.",
    action: "예약 플로우를 3단계로 단순화하고 브랜드 톤을 정립.",
    result: "예약 완료율 개선을 핵심 지표로, 전 기기 반응형 구축.",
    resultHighlight: "예약 완료율",
    role: "기획·디자인 시스템",
    team: "팀 5인",
    period: "6주",
    images: [],
  },
  {
    id: "team-brand-renewal",
    type: "team",
    label: "팀 프로젝트",
    category: "반응형",
    title: "브랜드 리뉴얼 캠페인",
    problem: "타깃이 흐릿해 메시지가 분산된 브랜드.",
    action: "타깃 재정의 후 채널별 메시지 일관성 확보.",
    result: "PC·태블릿·모바일 일관 경험으로 인지 통일.",
    resultHighlight: "일관 경험",
    role: "기획·카피 리드",
    team: "팀 4인",
    period: "4주",
    images: [],
  },
  {
    id: "detail-health-supplement",
    type: "detail",
    label: "상세페이지",
    category: "기기 내 스크롤",
    title: "건강기능식품 상세페이지",
    problem: "첫 화면에서 이탈이 많을 것이라는 가설.",
    action: "핵심 베네핏을 상단 3초 안에 전달하도록 정보 위계 재설계.",
    result: "전환율 +18% (가설 목표) · 스크롤 완독률 추적.",
    resultHighlight: "전환율 +18%",
    role: "기획·카피·디자인",
    team: "단독",
    period: "1주",
    images: [],
  },
  {
    id: "detail-fashion",
    type: "detail",
    label: "상세페이지",
    category: "기기 내 스크롤",
    title: "패션 카테고리 상세페이지",
    problem: "사이즈·후기 불안으로 인한 반품 문의 다수.",
    action: "불안 요소를 상단에서 먼저 해소하는 구성.",
    result: "반품 문의율 감소를 목표로 체류시간 추적.",
    resultHighlight: "반품 문의율 감소",
    role: "기획·디자인",
    team: "단독",
    period: "1주",
    images: [],
  },
  {
    id: "landing-product-launch",
    type: "landing",
    label: "랜딩페이지",
    category: "데스크탑",
    title: "신제품 런칭 랜딩",
    problem: "인지도 0의 신제품 사전예약.",
    action: "희소성과 단일 CTA로 행동을 하나로 집중.",
    result: "사전예약 전환율을 핵심 KPI로 설계.",
    resultHighlight: "사전예약 전환율",
    role: "기획·디자인",
    team: "단독",
    period: "2주",
    images: [],
  },
  {
    id: "video-shortform-ad",
    type: "video",
    label: "영상",
    category: "자동 재생",
    title: "숏폼 광고 편집",
    problem: "초반 이탈이 큰 숏폼 환경.",
    action: "3초 후킹 구조 + 자막 리듬 설계.",
    result: "평균 시청 시간 향상을 목표로 편집.",
    resultHighlight: "평균 시청 시간",
    role: "편집·자막",
    team: "단독",
    period: "3일",
    images: [],
  },
  {
    id: "card-instagram-series",
    type: "card",
    label: "카드뉴스",
    category: "그리드",
    title: "인스타 카드뉴스 시리즈",
    problem: "정보형 콘텐츠의 저장 유도.",
    action: "한 장당 메시지 하나 원칙으로 8종 제작.",
    result: "저장 수 2배 증가 (예시) · 도달 추적.",
    resultHighlight: "저장 수 2배",
    role: "기획·카피·디자인",
    team: "단독",
    period: "2주",
    images: [],
  },
];
