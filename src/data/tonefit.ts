/**
 * TONE:FIT 케이스 스토리 데이터 (6막).
 * ⚠️ 카피·성과는 예시 placeholder. 실제 내용으로 검수·교체 필요.
 *
 * 워크스루 5화면은 클린 단일화면 이미지로 교체 예정:
 *   tf-step-1-hero / tf-step-2-match / tf-step-3-frame /
 *   tf-step-4-community / tf-step-5-brand  (9:19.5, ≥800px)
 * 아직 없으면 기존 풀페이지 캡처를 임시로 크롭해 사용한다.
 */

export const tonefitMeta = {
  title: "TONE:FIT",
  positioning: "AI 퍼스널 컬러로 ‘나에게 맞는 색’을 찾아주는 무인 스튜디오",
  /** 좌측 상단 한 줄 */
  projectType: "팀 프로젝트로 진행",
  /** KV 좌측 메타 — 각 항목의 v는 줄 단위 배열 */
  facts: [
    { k: "작업 기간", v: ["2주"] },
    { k: "기여도", v: ["디자인 · 개발 · 이미지 · 영상 생성"] },
    {
      k: "산출물",
      v: ["PC · 태블릿 · 모바일 버전 디자인", "웹사이트(반응형) 구현"],
    },
  ],
  liveUrl: "https://ad-portfolio-tonefitcom.netlify.app",
};

/**
 * KV 폰 목업 — 화면·각도·그림자가 모두 구워진 투명 PNG 한 장(910×921).
 * 코드에선 위치/크기만 잡는다.
 */
export const tonefitKv = {
  mockup: "/assets/images/phone1.webp",
};

/** 2막 — 문제·배경 (발표 대본 13~15p 기반). \n = 의도된 줄바꿈 */
export const tonefitProblem = {
  headline: "포토부스는 많아졌지만,\n어디서 찍어도 똑같았습니다.",
  body: "최근 5년 사이 포토부스 브랜드는 약 7배 늘었지만, 대부분 비슷한 촬영 환경과 서비스를 제공했습니다.\n사용자는 많은 선택지 속에서도 늘 비슷한 결과물을 반복했고, 조명·색감의 아쉬움과 ‘나에게 맞는’ 촬영 경험에 대한 수요는 채워지지 않았습니다.",
  points: [
    "5년 새 7배 늘어난 브랜드, 비슷한 촬영 환경",
    "조명·색감에 늘 남는 아쉬움",
    "퍼스널 컬러·맞춤 조명은 부재",
  ],
};

/** 3막 — 접근·전략 (3스텝 다이어그램) */
export type ApproachStep = { no: string; title: string; body: string };
export const tonefitApproach: ApproachStep[] = [
  {
    no: "01",
    title: "문제 정의",
    body: "‘왜 멈추는가’를 데이터로 정의 — 신뢰·차별화가 핵심 과제.",
  },
  {
    no: "02",
    title: "컨셉 설정",
    body: "유행이 아닌 데이터·기술. ‘클린-테크’ 톤앤매너를 정립.",
  },
  {
    no: "03",
    title: "실행",
    body: "PC·모바일 반응형 전체와 이미지·영상까지 직접 디자인.",
  },
];

/** 4막 — 솔루션 워크스루 (폰 필름스트립 + 캡션) */
export type Screen = {
  id: string;
  /** 클린 단일화면(있으면) */
  img: string;
  /** 임시: 기존 캡처에서 크롭할 때의 object-position */
  objPos: string;
  kicker: string;
  title: string;
  caption: string;
};

export const tonefitScreens: Screen[] = [
  {
    id: "hero",
    img: "/assets/images/mobile-main.webp", // → tf-step-1-hero.png
    objPos: "center 2%",
    kicker: "01 · 메인",
    title: "첫 화면 3초에 ‘왜 TONE:FIT인가’",
    caption: "키오스크 메인에서 기술력과 브랜드 메시지를 동시에 각인시켰습니다.",
  },
  {
    id: "match",
    img: "/assets/images/brand-iden-mo.webp", // → tf-step-2-match.png
    objPos: "center 22%",
    kicker: "02 · AI 매칭",
    title: "퍼스널 컬러를 데이터로 시각화",
    caption: "추상적인 ‘톤’을 비교 화면으로 보여줘 결과에 대한 신뢰를 만들었습니다.",
  },
  {
    id: "frame",
    img: "/assets/images/frame-mo.webp", // → tf-step-3-frame.png
    objPos: "center 8%",
    kicker: "03 · FRAME",
    title: "상품(프레임) 선택을 직관적으로",
    caption: "고를 게 많아도 헷갈리지 않도록 카테고리와 위계를 정리했습니다.",
  },
  {
    id: "community",
    img: "/assets/images/news-mo.webp", // → tf-step-4-community.png
    objPos: "center 10%",
    kicker: "04 · 커뮤니티",
    title: "고객이 직접 공유하는 바이럴 구조",
    caption: "촬영 결과를 자랑하고 싶게 만들어 자연스러운 확산을 유도했습니다.",
  },
  {
    id: "brand",
    img: "/assets/images/brand-smart-mo.webp", // → tf-step-5-brand.png
    objPos: "center 4%",
    kicker: "05 · 브랜드 스토리",
    title: "HOW IT WORKS로 사용 흐름 설명",
    caption: "처음 온 사람도 한 번에 이해하도록 단계별 사용법을 풀었습니다.",
  },
];

/** 6막 — 결과·마무리 */
export const tonefitResult = {
  headline: "데이터·기술을 ‘믿을 수 있는 브랜드 경험’으로.",
  body: "PC·모바일 반응형 전체와 브랜드 톤을 직접 설계해, 무인 부스를 하나의 브랜드로 보이게 만들었습니다.",
  // TODO: 실제/가설 성과 수치로 교체
  stats: [
    { value: "100%", label: "반응형 화면 직접 디자인" },
    { value: "2주", label: "런칭까지 소요(2인)" },
  ],
};
