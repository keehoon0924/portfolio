/**
 * Selected Work 데이터 — 카테고리 그룹 + 항목.
 * 레퍼런스 works()/groupsData() 값을 그대로 옮겼다.
 * ⚠️ 성과 수치는 예시 placeholder. 실제 데이터/이미지로 교체 필요.
 */

export type MockKind = "phone" | "laptop";

export type WorkRow = { k: string; v: string };

export type Work = {
  id: string;
  kicker: string;
  title: string;
  mock: MockKind;
  /** grid-template-columns (텍스트/목업 비율) */
  cols: string;
  /** 지그재그 배치: 텍스트와 목업의 order */
  textOrder: 1 | 2;
  mockOrder: 1 | 2;
  meta: string;
  rows: WorkRow[];
  detail: string;
  /** 실제 작업 이미지(있으면 목업 대신 사용) */
  img?: string;
  /** 외부 링크(있으면 오버레이에 "실제 사이트 보기") */
  link?: string;
};

export type WorkGroup = {
  label: string;
  tag: string;
  items: Work[];
};

export const groups: WorkGroup[] = [
  {
    label: "웹 프로젝트",
    tag: "1건",
    items: [
      {
        id: "web-dado",
        kicker: "웹 · 예약서비스",
        title: "다도 클래스 예약 서비스",
        mock: "phone",
        cols: "1fr 380px",
        textOrder: 1,
        mockOrder: 2,
        meta: "역할 기획·디자인 · 기간 3주",
        rows: [
          { k: "문제", v: "예약 과정이 복잡해 중간 이탈이 많던 클래스 서비스." },
          { k: "실행", v: "예약 흐름을 3단계로 단순화하고 신뢰 요소 강화." },
          {
            k: "성과",
            v: "예약 전환율 ↑ — 예약 완료율 개선 핵심 페이지로, 빈 자리 전환 동선 구축.",
          },
        ],
        detail:
          "사용자가 멈추는 지점을 데이터로 찾아 단계를 줄이고, 결제 직전 신뢰 요소(후기·환불정책)를 배치해 완주율을 끌어올렸습니다.",
      },
    ],
  },
  {
    label: "상세페이지",
    tag: "기획 · UX 포함",
    items: [
      {
        id: "detail-health",
        kicker: "상세페이지 · 건기식",
        title: "건강기능식품 상세페이지",
        mock: "phone",
        cols: "1fr 320px",
        textOrder: 1,
        mockOrder: 2,
        meta: "역할 디자인·카피 · 기간 2주",
        rows: [
          { k: "문제", v: "첫 화면에서 이탈이 많아 결과까지 안 가던 구성." },
          {
            k: "실행",
            v: "핵심 베네핏을 상단 3초 안에 전달하도록 정보 위계 재설계.",
          },
          { k: "성과", v: "전환율 +10% — 전환율 +10%(가설 목표) 스크롤 완독 추적." },
        ],
        detail:
          "상단 3초에서 핵심 가치를 전달하고, 근거→후기→구매 순으로 설득 흐름을 재배열했습니다.",
      },
      {
        id: "detail-fashion",
        kicker: "상세페이지 · 패션",
        title: "패션 카테고리 상세페이지",
        mock: "phone",
        cols: "320px 1fr",
        textOrder: 2,
        mockOrder: 1,
        meta: "역할 디자인·카피 · 기간 1주",
        rows: [
          { k: "문제", v: "사이즈·후기 불안으로 반품 문의 잦음." },
          { k: "실행", v: "불안 요소를 상단에서 먼저 해소하는 구성." },
          {
            k: "성과",
            v: "반품 문의 감소 — 반품·문의 감소를 목표로 제품 정보 구조 개선.",
          },
        ],
        detail:
          "구매 전 불안(사이즈·실물 차이)을 먼저 해소하는 정보 순서로 재배치했습니다.",
      },
    ],
  },
  {
    label: "랜딩페이지",
    tag: "캠페인",
    items: [
      {
        id: "landing-launch",
        kicker: "랜딩 · 런칭",
        title: "신제품 런칭 랜딩",
        mock: "laptop",
        cols: "1fr 380px",
        textOrder: 1,
        mockOrder: 2,
        meta: "역할 기획·디자인 · 기간 2주",
        rows: [
          { k: "문제", v: "인지도 0인 신제품 사전예약." },
          { k: "실행", v: "핵심 혜택 단일 CTA로 행동을 하나로 집중." },
          { k: "성과", v: "사전예약 전환율 — 사전예약 전환율을 핵심 KPI로 설계." },
        ],
        detail:
          "메시지를 하나로 좁히고 단일 CTA에 집중해, 사전예약이라는 단일 행동으로 트래픽을 모았습니다.",
      },
    ],
  },
  {
    label: "영상",
    tag: "편집 · 숏폼",
    items: [
      {
        id: "video-shortform",
        kicker: "영상 · 숏폼",
        title: "숏폼 광고 편집",
        mock: "phone",
        cols: "380px 1fr",
        textOrder: 2,
        mockOrder: 1,
        meta: "역할 편집·기획 · 길이 ~6초",
        rows: [
          { k: "목표", v: "3초 이내 후킹 구조." },
          { k: "실행", v: "3초 후킹 구조 + 자막 리듬 설계." },
          { k: "성과", v: "평균 시청 시간 — 평균 시청 시간 향상을 목표로 편집." },
        ],
        detail:
          "첫 3초 후킹과 자막 리듬으로 평균 시청 시간을 끌어올리는 데 집중했습니다.",
      },
    ],
  },
  {
    label: "카드뉴스",
    tag: "시리즈",
    items: [
      {
        id: "card-instagram",
        kicker: "카드뉴스 · 시리즈",
        title: "인스타 카드뉴스 시리즈",
        mock: "phone",
        cols: "1fr 380px",
        textOrder: 1,
        mockOrder: 2,
        meta: "역할 기획·디자인 · 길이 8컷",
        rows: [
          { k: "목표", v: "정보형 콘텐츠의 저장 유도." },
          { k: "실행", v: "한 컷=한 메시지 원칙으로 8컷 재편." },
          { k: "성과", v: "저장 수 증가 — 저장 수 증가(예시) 핵심 정보 압축." },
        ],
        detail:
          "한 컷에 하나의 메시지만 담아 가독성과 저장율을 높이는 구조로 재편했습니다.",
      },
    ],
  },
];

/** TONE:FIT 지그재그 밴드 / 자동스크롤에 쓰는 에셋 경로 */
export const tonefitAssets = {
  gridImages: [
    "/assets/frame-mo.png",
    "/assets/news-mo.png",
    "/assets/brand-smart-mo.png",
    "/assets/brand-iden-mo.png",
    "/assets/mobile-main.png",
  ],
  // PC·모바일 자동 스크롤용 풀페이지 캡처 (노트북=PC, 폰=모바일)
  livePreviewPc: "/assets/main-pc.png",
  livePreviewMobile: "/assets/mobile-main.png",
  liveUrl: "https://ad-portfolio-tonefitcom.netlify.app",
};
