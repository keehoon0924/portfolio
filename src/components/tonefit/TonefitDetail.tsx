import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import { CaseImage } from "./CaseImage";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 케이스 스터디 (WORK 카드 클릭 시 오버레이).
 * 비핸스 스타일 세로 스크롤 단일 페이지 — Poppi Donuts 레퍼런스의 깔끔한
 * "번호 기능카드 → 점선 연결선 → 이미지" 레이아웃을 따른다.
 * 이중 페르소나 관점: 유저 경험을 창업주(B2B) 세일즈 근거로 재활용.
 * 이미지 경로: /assets/tonefit/*  (없으면 CaseImage가 파일명 플레이스홀더)
 */

const IMG = "/assets/tonefit";
const LIVE_URL = "https://ad-portfolio-tonefitcom.netlify.app";
const GITHUB_URL = "https://github.com/keehoon0924/tone-fit";

/* ── 01 메타 ── */
const META: [string, string][] = [
  ["Type", "Team Project"],
  ["Period", "TODO — 사용자 확인"],
  ["Role", "웹 기획 · UI 디자인 · 퍼블리싱"],
  ["Tools", "Figma · HTML · CSS · JS(GSAP) · Kakao Map API"],
];

/* ── 02 데이터 카드 ── */
const DATA = [
  {
    num: "46.5%",
    label: "20대 퍼스널컬러 컨설팅 이용 경험 (관심은 55%)",
    cap: "찍고 싶은 수요는 이미 크다",
    note: "엠브레인 트렌드모니터 2024 · 20–39세 1,200명",
  },
  {
    num: "최대 30만 원",
    label: "전문가 대면 퍼스널컬러 진단 1회 비용",
    cap: "높은 가격 장벽 = 무인·AI가 파고들 틈",
    note: "업계 평균 진단가 기준",
  },
];

/* ── 03 두 갈래 저니 ── */
const USER_JOURNEY = [
  { step: "발견", desc: "SNS 인증샷" },
  { step: "탐색", desc: "브랜드·프레임 구경", tag: "Main" },
  { step: "욕구", desc: "“나도 저렇게”" },
  { step: "신뢰", desc: "무인 이용법 확인", tag: "Kiosk" },
  { step: "방문·촬영", desc: "매장 방문", tag: "Store" },
  { step: "공유", desc: "프레임 업로드" },
];
const OWNER_JOURNEY = [
  { step: "관심", desc: "창업 아이템 탐색" },
  { step: "검증", desc: "유저 반응 확인", tag: "Viral" },
  { step: "차별성", desc: "AI·콜라보·반려동물" },
  { step: "신뢰", desc: "운영·원격지원" },
  { step: "상담", desc: "창업 상담 연결", tag: "Startup" },
];

/* ── 04 컬러 ── */
const COLORS = [
  { name: "Terracotta", hex: "#D4734A", note: "Primary · 따뜻한 조명빛" },
  { name: "Ink", hex: "#1E2022", note: "다크 섹션 · 헤드라인" },
  { name: "Charcoal", hex: "#4C4948", note: "본문" },
  { name: "Warm White", hex: "#F8F5F0", note: "기본 배경" },
  { name: "Clay", hex: "#BC8F76", note: "보조" },
  { name: "Light Gray", hex: "#F6F6F6", note: "교차 배경" },
];
const SEASONS = [
  { name: "봄 웜", hex: "#F6A98C" },
  { name: "여름 쿨", hex: "#9FB8D8" },
  { name: "가을 웜", hex: "#B5793C" },
  { name: "겨울 쿨", hex: "#8E3B5A" },
];

/* ── 05 / 06 기능 블록 (번호카드 → 연결선 → 이미지) ── */
const UX_BLOCKS = [
  {
    tag: "05-1 첫인상 · 탐색",
    title: "스크롤 3초 안에, 스튜디오 안에 들어온 느낌을.",
    cards: [
      { title: "영상 KV + 무드 컬러", desc: "공간감을 먼저 전달해 몰입시킵니다." },
      {
        title: "Brand Story",
        desc: "‘왜 퍼스널컬러·왜 무인’을 서사로 풀어 신뢰를 쌓습니다.",
      },
    ],
    images: [
      { src: "tonefit-05a-main-hero", alt: "메인 히어로 + About" },
      { src: "tonefit-05a-identity", alt: "Brand Story 상단" },
    ],
  },
  {
    tag: "05-2 누구와 찍는가 · 욕구",
    title: "혼자가 아니라, ‘누구와’ 찍을지까지 설계했습니다.",
    cards: [
      {
        title: "AI 배경 매칭",
        desc: "피부톤·분위기를 분석해 배경·조명을 자동 세팅. ‘실패 없는 인생샷’.",
      },
      {
        title: "반려동물 촬영",
        desc: "유저에겐 특별한 추억, 창업주에겐 경쟁 매장이 못 주는 차별화 아이템.",
      },
    ],
    images: [
      { src: "tonefit-05pet", alt: "반려동물 촬영 섹션" },
      { src: "tonefit-05b-aibg", alt: "AI 배경 매칭" },
    ],
  },
  {
    tag: "05-4 혼자서도 괜찮은 무인 경험 · 신뢰",
    title: "무인이 불안하지 않도록, 절차를 눈으로 보여줬습니다.",
    cards: [
      {
        title: "키오스크 STEP 01~03",
        desc: "이용 절차를 시각화해 무인 심리 허들을 제거했습니다.",
      },
      {
        title: "Store 페이지",
        desc: "카카오맵 + 지역필터 + 검색으로 ‘가고싶다→어디로?’를 한 화면에.",
      },
    ],
    images: [
      { src: "tonefit-05b-kiosk", alt: "키오스크 STEP 01~03" },
      { src: "tonefit-05b-store", alt: "Store 카카오맵" },
    ],
  },
];
const OWNER_BLOCK = {
  tag: "06-1 유저 경험이 곧 세일즈",
  title: "잘 만든 유저 경험은, 그 자체가 창업 제안서가 됩니다.",
  cards: [
    {
      title: "유저의 공유 = 창업주의 증거",
      desc: "인스타 인증샷·바이럴 섹션을 그대로 창업주 설득 자료로 재활용했습니다.",
    },
    {
      title: "창업 전환 페이지",
      desc: "Startup에서 수익구조·운영지원·계약 프로세스를 제시해 상담으로 연결.",
    },
  ],
  images: [
    { src: "tonefit-06-viral", alt: "실제 고객 공유 반응 · 바이럴" },
    { src: "tonefit-06-startup", alt: "Startup 페이지" },
  ],
};

/* ── 07 인터랙션 ── */
const INTERACTIONS = [
  {
    kind: "timeline",
    title: "스크롤 내러티브",
    body: "Brand Story를 GSAP ScrollTrigger 40여 구간으로 나눠, 스크롤에 따라 브랜드 서사가 순차 전개되도록 설계했습니다.",
  },
  {
    kind: "zoom",
    title: "배경 줌아웃",
    body: "24시간 무인 섹션의 배경을 scale 1.2 → 1.0으로 좁혀, 공간이 눈앞으로 다가오는 몰입감을 만들었습니다.",
  },
  {
    kind: "a11y",
    title: "모두를 위한 모션",
    body: "prefers-reduced-motion 사용자에겐 애니메이션 없이 완성 상태를 즉시 제공합니다. 화려함보다 접근성.",
  },
];

/* ── 08 기여도 (임시값 — 사용자 확인 후 수정) ── */
const CONTRIB = [
  { label: "웹 기획", value: 30, color: "var(--tf-terracotta)" },
  { label: "UI 디자인", value: 30, color: "var(--tf-ink)" },
  { label: "퍼블리싱·인터랙션", value: 30, color: "var(--tf-clay)" },
  { label: "협업·QA", value: 10, color: "var(--tf-charcoal)" },
];
const ROLES = [
  { no: "01", title: "웹 기획", desc: "이중 페르소나 IA·저니 설계" },
  { no: "02", title: "UI 디자인", desc: "메인 + 서브 총 9개 페이지" },
  { no: "03", title: "퍼블리싱", desc: "GSAP 인터랙션 · 반응형" },
  { no: "04", title: "매장찾기", desc: "Kakao Map API 필터·검색" },
];

/** 섹션 라벨 (01 OVERVIEW 형식) */
function Label({ children }: { children: string }) {
  return <p className={styles.label}>{children}</p>;
}

/** 번호 기능카드 → 점선 연결선 → 이미지 (레퍼런스 핵심 레이아웃) */
function FeatureBlock({
  tag,
  title,
  cards,
  images,
}: {
  tag: string;
  title: string;
  cards: { title: string; desc: string }[];
  images: { src: string; alt: string }[];
}) {
  return (
    <div className={styles.feature}>
      <Reveal className={styles.featHead}>
        <p className={styles.featTag}>{tag}</p>
        <h3 className={styles.featTitle}>{title}</h3>
      </Reveal>
      <div className={styles.featBody}>
        <Reveal className={styles.featCards}>
          {cards.map((c, i) => (
            <div key={c.title} className={styles.fCard}>
              <span className={styles.fNum}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className={styles.fTitle}>{c.title}</p>
                <p className={styles.fDesc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className={styles.featMedia}>
          {images.map((im) => (
            <CaseImage key={im.src} src={`${IMG}/${im.src}.png`} alt={im.alt} />
          ))}
        </Reveal>
      </div>
    </div>
  );
}

export function TonefitDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="TONE:FIT 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* ══════════ 01 OVERVIEW ══════════ */}
        <section className={`${styles.section} ${styles.overview}`}>
          <Reveal className={styles.ovLeft}>
            <Label>01 OVERVIEW</Label>
            <h1 className={styles.ovTitle}>
              AI 퍼스널컬러 무인 포토스튜디오
              <br />
              <span className={styles.ovTitleSub}>
                창업 브랜딩 &amp; 웹 경험 디자인
              </span>
            </h1>
            <p className={styles.ovLead}>
              One Site, Two Users — 찍는 사람과 여는 사람을 동시에 설계하다.
            </p>
            <dl className={styles.meta}>
              {META.map(([k, v]) => (
                <div key={k} className={styles.metaRow}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className={styles.ovMock}>
            <div className={styles.desktopMock}>
              <div className={styles.desktopBar}>
                <span />
                <span />
                <span />
              </div>
              <CaseImage
                src={`${IMG}/tonefit-01-hero-pc.png`}
                alt="TONE:FIT 메인 히어로 (PC)"
              />
            </div>
            <CaseImage
              src={`${IMG}/tonefit-01-hero-mo.png`}
              alt="TONE:FIT 메인 히어로 (모바일)"
              phone
              className={styles.ovPhone}
            />
          </Reveal>
        </section>

        {/* ══════════ 02 BACKGROUND & GOAL ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>02 BACKGROUND &amp; GOAL</Label>
            <h2 className={styles.headTitle}>
              퍼스널컬러는 뜨는데, 왜 ‘무인 매장’이어야 할까?
            </h2>
            <p className={styles.headLead}>
              두 사람의 문제를 동시에 풀어야 했습니다. 찍고 싶은 유저, 그리고
              창업하려는 예비 사업주.
            </p>
          </Reveal>

          <div className={styles.dataGrid}>
            {DATA.map((d) => (
              <Reveal key={d.num} className={styles.dataCard}>
                <p className={styles.dataNum}>{d.num}</p>
                <p className={styles.dataLabel}>{d.label}</p>
                <p className={styles.dataCap}>{d.cap}</p>
                <p className={styles.dataNote}>{d.note}</p>
              </Reveal>
            ))}
            <Reveal className={`${styles.dataCard} ${styles.quoteCard}`}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.quoteText}>
                인생네컷은 ‘찍는 곳’이 아니라 ‘공유하는 문화’가 됐다. 톤핏은
                퍼스널컬러를 그 문화 위에 올린다.
              </p>
              <p className={styles.quoteBy}>— 팀 기획 노트</p>
            </Reveal>
          </div>

          <Reveal className={styles.goalBox}>
            <div className={`${styles.goal} ${styles.goalUser}`}>
              <span className={styles.goalTag}>유저에게</span>
              <p className={styles.goalText}>
                ‘내 퍼컬 궁금하다’를 <b>‘가서 찍고 싶다’</b>로
              </p>
            </div>
            <div className={`${styles.goal} ${styles.goalOwner}`}>
              <span className={styles.goalTag}>창업주에게</span>
              <p className={styles.goalText}>
                ‘괜찮은 아이템이네’를 <b>‘나도 이 매장 열고 싶다’</b>로
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════ 03 DUAL PERSONA JOURNEY ══════════ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <Label>03 DUAL PERSONA JOURNEY</Label>
            <h2 className={styles.headTitle}>한 사이트, 두 사람의 여정.</h2>
          </Reveal>

          <Reveal className={styles.tracks}>
            <div className={`${styles.track} ${styles.trackUser}`}>
              <p className={styles.trackName}>USER · 찍으러 오는 사람</p>
              <div className={styles.trackLine}>
                {USER_JOURNEY.map((s) => (
                  <div key={s.step} className={styles.node}>
                    <span className={styles.nodeDot} />
                    <p className={styles.nodeStep}>{s.step}</p>
                    <p className={styles.nodeDesc}>{s.desc}</p>
                    {s.tag && <span className={styles.nodeTag}>{s.tag}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trackBridge} aria-hidden="true">
              <span className={styles.bridgeArrow} />
            </div>

            <div className={`${styles.track} ${styles.trackOwner}`}>
              <p className={styles.trackName}>OWNER · 매장을 여는 사람</p>
              <div className={styles.trackLine}>
                {OWNER_JOURNEY.map((s) => (
                  <div key={s.step} className={styles.node}>
                    <span className={styles.nodeDot} />
                    <p className={styles.nodeStep}>{s.step}</p>
                    <p className={styles.nodeDesc}>{s.desc}</p>
                    {s.tag && <span className={styles.nodeTag}>{s.tag}</span>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.bridgeCap}>
            유저의 ‘공유’가 창업주의 ‘검증’ 근거가 되는 <b>선순환</b>. 유저 경험을
            잘 만들수록 창업 세일즈가 강해집니다.
          </Reveal>
        </section>

        {/* ══════════ 04 BRAND IDENTITY ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>04 BRAND IDENTITY</Label>
            <h2 className={styles.headTitle}>
              ‘내 컬러를 찾는 브랜드’는, 색을 다루는 방식부터 달라야 합니다.
            </h2>
          </Reveal>

          <Reveal className={styles.subLabel}>COLOR GUIDE</Reveal>
          <Reveal className={styles.colorGrid}>
            {COLORS.map((c) => (
              <div key={c.name} className={styles.colorChip}>
                <span className={styles.swatch} style={{ background: c.hex }} />
                <p className={styles.colorName}>{c.name}</p>
                <p className={styles.colorHex}>{c.hex}</p>
                <p className={styles.colorNote}>{c.note}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className={styles.seasonRow}>
            {SEASONS.map((s) => (
              <div key={s.name} className={styles.seasonChip}>
                <span
                  className={styles.seasonSwatch}
                  style={{ background: s.hex }}
                />
                <span>{s.name}</span>
              </div>
            ))}
            <p className={styles.seasonCap}>
              콘텐츠 컬러는 4계절 톤으로 분리 운용해 브랜드 컬러와 충돌시키지
              않습니다.
            </p>
          </Reveal>

          <Reveal className={styles.subLabel}>TYPOGRAPHY</Reveal>
          <Reveal className={styles.fontGrid}>
            <div className={styles.fontCard}>
              <p className={styles.fontSample}>내 컬러를 찾다</p>
              <p className={styles.fontName}>잘난고딕</p>
              <p className={styles.fontDesc}>헤드라인 · 발랄한 목소리</p>
            </div>
            <div className={styles.fontCard}>
              <p className={`${styles.fontSample} ${styles.fontBody}`}>
                Pretendard 본문
              </p>
              <p className={styles.fontName}>Pretendard</p>
              <p className={styles.fontDesc}>본문 · 정보의 안정감</p>
            </div>
          </Reveal>
        </section>

        {/* ══════════ 05 USER EXPERIENCE DESIGN ══════════ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <Label>05 USER EXPERIENCE DESIGN</Label>
            <h2 className={styles.headTitle}>먼저 유저가 찍고 싶게 만든다.</h2>
            <p className={styles.headLead}>
              이 경험 하나하나가 뒤에서 창업주를 설득하는 세일즈 근거가 됩니다.
            </p>
          </Reveal>

          {UX_BLOCKS.slice(0, 2).map((b) => (
            <FeatureBlock key={b.tag} {...b} />
          ))}

          {/* 05-3 콜라보 프레임 — 전체 폭 갤러리 */}
          <div className={styles.gallery}>
            <Reveal className={styles.featHead}>
              <p className={styles.featTag}>05-3 다시 오게 만드는 장치 · 재방문</p>
              <h3 className={styles.featTitle}>매달 바뀌는 프레임 = 다시 올 이유.</h3>
            </Reveal>
            <Reveal delay={0.08} className={styles.frameStrip}>
              {[1, 2, 3].map((n) => (
                <CaseImage
                  key={n}
                  src={`${IMG}/tonefit-05c-frame-${n}.png`}
                  alt={`콜라보 프레임 ${n}`}
                />
              ))}
            </Reveal>
            <Reveal className={styles.galleryCap}>
              트렌디 IP × 퍼스널컬러 콜라보를 매달 교체 → 유저 재방문 훅 +
              창업주에겐 ‘콘텐츠가 계속 공급되는 매장’이라는 세일즈 포인트.
            </Reveal>
          </div>

          {UX_BLOCKS.slice(2).map((b) => (
            <FeatureBlock key={b.tag} {...b} />
          ))}
        </section>

        {/* ══════════ 06 FROM USER TO OWNER ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>06 FROM USER TO OWNER</Label>
            <h2 className={styles.headTitle}>
              잘 만든 유저 경험은, 그 자체가 창업 제안서가 됩니다.
            </h2>
            <p className={styles.headLead}>
              유저 경험과 B2B 세일즈를 하나의 흐름으로 연결한 것이, 이 사이트의
              진짜 설계 의도입니다.
            </p>
          </Reveal>
          <FeatureBlock {...OWNER_BLOCK} />
        </section>

        {/* ══════════ 07 INTERACTION & RESPONSIVE ══════════ */}
        <section className={`${styles.section} ${styles.dark}`}>
          <Reveal className={styles.head}>
            <Label>07 INTERACTION &amp; RESPONSIVE</Label>
            <h2 className={styles.headTitle}>움직임에도 근거가 있습니다.</h2>
          </Reveal>

          <div className={styles.interGrid}>
            {INTERACTIONS.map((it) => (
              <Reveal key={it.title} className={styles.interCard}>
                <div className={styles.interViz} aria-hidden="true">
                  {it.kind === "timeline" && (
                    <div className={styles.vizTimeline}>
                      {[0, 1, 2, 3].map((i) => (
                        <span key={i} className={styles.tlDot} />
                      ))}
                    </div>
                  )}
                  {it.kind === "zoom" && (
                    <div className={styles.vizZoom}>
                      <span className={styles.zoomOuter} />
                      <span className={styles.zoomInner} />
                    </div>
                  )}
                  {it.kind === "a11y" && (
                    <div className={styles.vizA11y}>
                      <span>reduced-motion</span>
                    </div>
                  )}
                </div>
                <h3 className={styles.interTitle}>{it.title}</h3>
                <p className={styles.interBody}>{it.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.subLabel} style={{ color: "#cfcfcf" }}>
            RESPONSIVE
          </Reveal>
          <div className={styles.respGrid}>
            <Reveal className={styles.respRow}>
              <CaseImage
                src={`${IMG}/tonefit-05b-store.png`}
                alt="Store PC — 지도+리스트 병렬"
              />
              <CaseImage
                src={`${IMG}/tonefit-01-hero-mo.png`}
                alt="Store 모바일 — 지도 우선"
                phone
                className={styles.respPhone}
              />
              <p className={styles.respCap}>
                <b>Store</b> — PC는 지도+리스트 병렬, 모바일은 지도 우선 + 시트형.
              </p>
            </Reveal>
            <Reveal delay={0.08} className={styles.respRow}>
              <CaseImage
                src={`${IMG}/tonefit-01-hero-pc.png`}
                alt="Main PC — 12단 그리드"
              />
              <CaseImage
                src={`${IMG}/tonefit-01-hero-mo.png`}
                alt="Main 모바일 — 재배열"
                phone
                className={styles.respPhone}
              />
              <p className={styles.respCap}>
                <b>Main</b> — 12단 그리드, 1024px 이하에서 재배열.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══════════ 08 ROLE & CONTRIBUTION ══════════ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <Label>08 ROLE &amp; CONTRIBUTION</Label>
            <h2 className={styles.headTitle}>
              기획부터 퍼블리싱까지, TONE:FIT 경험 전반에 참여했습니다.
            </h2>
          </Reveal>

          <div className={styles.roleWrap}>
            <Reveal className={styles.contrib}>
              <div className={styles.contribBar}>
                {CONTRIB.map((c) => (
                  <span
                    key={c.label}
                    className={styles.contribSeg}
                    style={{ width: `${c.value}%`, background: c.color }}
                  />
                ))}
              </div>
              <ul className={styles.contribLegend}>
                {CONTRIB.map((c) => (
                  <li key={c.label}>
                    <span
                      className={styles.legendDot}
                      style={{ background: c.color }}
                    />
                    {c.label} <b>{c.value}%</b>
                  </li>
                ))}
              </ul>
              <p className={styles.todoNote}>
                ※ 실제 기여도·업무는 사용자 확인 후 수정 (임시값)
              </p>
            </Reveal>

            <Reveal delay={0.1} className={styles.roleList}>
              {ROLES.map((r) => (
                <div key={r.no} className={styles.roleItem}>
                  <span className={styles.roleNo}>{r.no}</span>
                  <div>
                    <p className={styles.roleTitle}>{r.title}</p>
                    <p className={styles.roleDesc}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ══════════ 09 CTA ══════════ */}
        <section className={styles.cta}>
          <Reveal className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              기획한 브랜드 경험을 실제 반응형 웹사이트로 구현했습니다.
            </h2>
            <div className={styles.ctaBtns}>
              <a
                className={styles.ctaPrimary}
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
              >
                View Live Site ↗
              </a>
              <a
                className={styles.ctaGhost}
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </section>

        {/* 실제 사이트 라이브 미리보기 (그대로 유지) */}
        <LiveSitePreview url={LIVE_URL} />
      </div>
    </div>
  );
}
