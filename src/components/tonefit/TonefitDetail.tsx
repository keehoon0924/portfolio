import { Reveal } from "../Reveal";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 상세 — rom& 스타일 케이스 스터디.
 * 인트로(Cover~System) → UI 쇼케이스(페이지별 플로우 목업+모바일+주석) → Closing.
 * 쇼케이스 이미지는 실제 사이트를 로컬 렌더로 캡처한 것.
 */

const problems = [
  {
    no: "01",
    title: ["기술 전달의", "한계"],
    desc: "무인 AI라는 복잡한 시스템을 기존 채널로는 한눈에 이해시키기 어려웠어요.",
    img: "/assets/images/insta1.png",
  },
  {
    no: "02",
    title: ["창업 설득의", "부재"],
    desc: "창업자가 가장 궁금해하는 ‘수익성·운영 편의성’을 신뢰감 있게 보여줄 구조가 없었어요.",
    img: "/assets/images/insta2.png",
  },
  {
    no: "03",
    title: ["브랜드 경험의", "단절"],
    desc: "촬영 → 공유 → 재방문으로 이어지는 바이럴 경험이 웹에서 끊겨 있었어요.",
    img: "/assets/images/insta3.png",
  },
];

const asIs = ["복잡한 기술 설명", "흩어진 창업 정보", "단절된 경험"];
const toBe = ["3STEP 직관화", "데이터 기반 설득", "바이럴 연결"];

const keywords = [
  { ko: "정교함", en: "Precision", img: "/assets/images/insta1.png" },
  { ko: "프리미엄", en: "Premium", img: "/assets/images/insta2.png" },
  { ko: "신뢰", en: "Trust", img: "/assets/images/insta4.png" },
];

const colors = [
  { hex: "#D4734A", name: "Main", desc: "사진이 가진 따뜻한 분위기와 감성적인 경험을 표현해요.", dark: true },
  { hex: "#F8F5F0", name: "Sub", desc: "부드럽고 편안한 무드를 더해 브랜드의 친근함을 전달해요." },
  { hex: "#F6F6F6", name: "Sub", desc: "사진과 콘텐츠가 돋보이도록 깔끔한 배경 역할을 해요." },
  { hex: "#4C4948", name: "Gray", desc: "안정감 있는 분위기로 브랜드의 신뢰감을 표현해요.", dark: true },
  { hex: "#1E2022", name: "Ink", desc: "중요한 정보와 콘텐츠를 명확하게 전달해요.", dark: true },
];

type Media =
  | { type: "video"; src: string; mo: string }
  | { type: "image"; pc: string; mo: string };

type Showcase = {
  id: string;
  label: string;
  title: [string, string, string];
  media: Media;
  left: string[];
  right: string[];
  mobile: string;
};

const showcases: Showcase[] = [
  {
    id: "main",
    label: "Main Page",
    title: ["무인 AI 사진관의 첫인상을 ", "영상", "으로"],
    media: {
      type: "video",
      src: "/assets/vidio/main-kv.webm",
      mo: "/assets/tonefit-case/main-mo.png",
    },
    left: ["메인 키비주얼 영상은 모든 장면을 AI로 생성하고 CapCut으로 편집해 제작했어요."],
    right: [
      "핵심 카피 ‘이제는 AI 기술력으로 압도할 때’를 전면에 배치해 창업 타깃의 시선을 먼저 사로잡았어요.",
      "GNB를 BRAND·FRAME·STORE·FRANCHISE로 정리해 목적별 진입을 빠르게 했어요.",
    ],
    mobile: "모바일에서도 영상·카피의 임팩트가 유지되도록 세로 비율로 재편집했어요.",
  },
  {
    id: "identity",
    label: "Brand Identity",
    title: ["AI가 피부를 분석하는 브랜드, ", "TONE·FIT", "으로 정의"],
    media: {
      type: "image",
      pc: "/assets/tonefit-case/identity-pc.png",
      mo: "/assets/tonefit-case/identity-mo.png",
    },
    left: [
      "TONE(고객 고유의 피부 톤·분위기)과 FIT(기술로 완성하는 최적의 맞춤 세팅)으로 브랜드 철학을 두 축으로 정리했어요.",
      "AI 분석 정확도·18K+ 피부톤 분류 유형 수치로 ‘기술력’을 신뢰로 증명했어요.",
    ],
    right: [
      "‘일반 포토부스가 프레임을 고르는 동안, TONE:FIT은 AI가 피부를 분석해 조명·필터·컬러를 자동 설정한다’는 차별점을 대비 구조로 보여줬어요.",
    ],
    mobile: "비교 구조를 세로 흐름으로 재구성해 차별점이 순서대로 읽히게 했어요.",
  },
  {
    id: "kiosk",
    label: "How It Works",
    title: ["서는 순간부터 완성까지, 모든 과정을 ", "자동", "으로"],
    media: {
      type: "image",
      pc: "/assets/tonefit-case/kiosk-pc.png",
      mo: "/assets/tonefit-case/kiosk-mo.png",
    },
    left: [
      "촬영 전 과정을 STEP 01·02·03으로 단계화해 ‘자동으로 완성된다’는 핵심을 직관적으로 전달했어요.",
    ],
    right: [
      "퍼스널 컬러별 시그니처 프레임과 컷 수(2·4·6 CUT)를 함께 보여줘 선택의 폭을 명확히 했어요.",
      "AI 톤 스캔·진단 정확도·프레임 보유·원격 제어를 지표로 강조해 기술 신뢰도를 높였어요.",
    ],
    mobile: "STEP을 세로 스크롤로 재배치해 손가락 동선만으로 과정을 따라가게 했어요.",
  },
  {
    id: "frame",
    label: "Frame",
    title: ["매달 바뀌는 ", "아티스트·캐릭터·시즌", " 프레임"],
    media: {
      type: "image",
      pc: "/assets/tonefit-case/frame-pc.png",
      mo: "/assets/tonefit-case/frame-mo.png",
    },
    left: [
      "프레임을 아티스트·캐릭터·시즌 3개 카테고리로 분류해 방대한 라인업을 깔끔하게 정리했어요.",
    ],
    right: [
      "콜라보 프레임을 진행 기간과 함께 갤러리로 배치해 한정판 희소성을 강조했어요.",
    ],
    mobile: "가로 스와이프 갤러리로 전환해 프레임을 넘겨보는 재미를 살렸어요.",
  },
  {
    id: "space",
    label: "Space Concept",
    title: ["네 가지 무드로 설계한 ", "프리미엄 공간", ""],
    media: {
      type: "image",
      pc: "/assets/tonefit-case/space-pc.png",
      mo: "/assets/tonefit-case/space-mo.png",
    },
    left: [
      "Pinkish Mood·Point Modern·Pure Modern·Blooming Layer 네 무드로 매장 분위기를 감각적으로 보여줬어요.",
    ],
    right: [
      "미드센추리 모던·미니멀리즘 컨셉으로 ‘무인=프리미엄’ 인식을 만들었어요.",
    ],
    mobile: "무드 이미지를 풀스크린 카드로 전환해 몰입감을 높였어요.",
  },
  {
    id: "startup",
    label: "Franchise",
    title: ["인건비 제로, ", "데이터", "로 증명하는 창업"],
    media: {
      type: "image",
      pc: "/assets/tonefit-case/startup-pc.png",
      mo: "/assets/tonefit-case/startup-mo.png",
    },
    left: [
      "‘인건비 제로, 퀄리티는 무한대’ + 30초 AI 스캔·자동 세팅·100% 무인화 3단계로 운영 부담이 없음을 증명했어요.",
    ],
    right: [
      "‘단 3개월 만에 누적 15만 건 돌파’ 실데이터를 전면 배치해 기대를 확신으로 바꿨어요.",
      "가맹 상담→계약→시공→세팅→교육→오픈 프로세스를 시각화해 창업 여정을 예측 가능하게 했어요.",
    ],
    mobile: "수익 지표·프로세스를 카드로 끊어 이동 중에도 핵심만 빠르게 훑게 했어요.",
  },
];

function ShowcaseBlock({ s }: { s: Showcase }) {
  return (
    <section className={styles.show}>
      <Reveal className={styles.showHead}>
        <p className={styles.eyebrow}>{s.label}</p>
        <h2 className={styles.koTitle}>
          {s.title[0]}
          <span className={styles.hl}>{s.title[1]}</span>
          {s.title[2]}
        </h2>
      </Reveal>

      <div className={styles.stageWrap}>
        <div className={`${styles.annCol} ${styles.annLeft}`}>
          {s.left.map((n) => (
            <Reveal key={n} className={styles.ann}>
              <span className={styles.annDot} />
              {n}
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.stage}>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span className={styles.bdot} />
              <span className={styles.bdot} />
              <span className={styles.bdot} />
            </div>
            <div className={styles.flowClip}>
              {s.media.type === "video" ? (
                <video
                  className={styles.flowMedia}
                  src={s.media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  className={styles.flowMedia}
                  src={s.media.pc}
                  alt={`${s.label} 데스크탑`}
                  loading="lazy"
                />
              )}
            </div>
          </div>

          <div className={styles.phone}>
            <span className={styles.phoneNotch} />
            <img src={s.media.mo} alt={`${s.label} 모바일`} loading="lazy" />
          </div>
        </Reveal>

        <div className={`${styles.annCol} ${styles.annRight}`}>
          {s.right.map((n) => (
            <Reveal key={n} className={styles.ann}>
              <span className={styles.annDot} />
              {n}
            </Reveal>
          ))}
          <Reveal className={`${styles.ann} ${styles.annMo}`}>
            <span className={styles.annDotMo} />
            {s.mobile}
          </Reveal>
        </div>
      </div>
    </section>
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

      {/* Cover */}
      <section className={styles.cover}>
        <div className={styles.inner}>
          <Reveal>
            <p className={styles.coverCat}>UI/UX · Web / Contents Design</p>
            <h1 className={styles.coverTitle}>TONE:FIT</h1>
            <p className={styles.coverSub}>
              AI 퍼스널 컬러로 ‘나에게 맞는 색’을 찾는
              <br />
              무인 프리미엄 포토 스튜디오 — 브랜드 웹사이트 디자인
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <h2 className={styles.enTitle}>Overview</h2>
            <p className={styles.centerDesc}>
              TONE:FIT은 전문가 없이도 매일 매출을 갱신하는 무인 AI 포토
              스튜디오입니다. 브랜드가 가진 <b>‘기술력’과 ‘감성’</b> 두 축을
              웹에서 동시에 설득해, 예비 창업자에게는 확신을, 방문 고객에게는
              설렘을 주는 경험을 설계했습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Background */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={styles.enTitle}>Background</h2>
            <p className={styles.headSub}>왜 새로운 웹이 필요했을까?</p>
          </Reveal>
          <div className={styles.probGrid}>
            {problems.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.08} className={styles.probCard}>
                <div
                  className={styles.probImg}
                  style={{ backgroundImage: `url("${p.img}")` }}
                />
                <div className={styles.probBody}>
                  <h3 className={styles.probTitle}>
                    {p.title[0]}
                    <br />
                    {p.title[1]}
                  </h3>
                  <p className={styles.probDesc}>{p.desc}</p>
                </div>
                <span className={styles.probNo}>{p.no}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Goal */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <h2 className={styles.enTitle}>Project Goal</h2>
            <p className={styles.centerDesc}>
              기술은 <b>직관적으로</b>, 창업은 <b>신뢰감 있게</b>, 브랜드는{" "}
              <b>감각적으로</b> 전달해 방문 고객의 설렘과 예비 창업자의 확신을
              동시에 끌어내는 것.
            </p>
          </Reveal>
          <div className={styles.venn}>
            <div className={styles.vennRow}>
              <span className={styles.vennLabel}>AS IS</span>
              {asIs.map((t) => (
                <Reveal key={t} className={`${styles.circle} ${styles.circleOutline}`}>
                  <span>{t}</span>
                </Reveal>
              ))}
            </div>
            <div className={`${styles.vennRow} ${styles.vennRowTobe}`}>
              {toBe.map((t, i) => (
                <Reveal key={t} delay={i * 0.06} className={`${styles.circle} ${styles.circleFill}`}>
                  <span>{t}</span>
                </Reveal>
              ))}
              <span className={`${styles.vennLabel} ${styles.vennLabelTobe}`}>
                TO BE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className={`${styles.section} ${styles.kwBand}`}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={`${styles.enTitle} ${styles.enTitleLight}`}>Keywords</h2>
            <p className={styles.headSubLight}>
              프로젝트의 정체성을 확립하기 위해 세 개의 핵심 키워드를 설정해 디자인
              방향성을 구체화했어요.
            </p>
          </Reveal>
          <div className={styles.kwRow}>
            {keywords.map((k, i) => (
              <Reveal
                key={k.ko}
                delay={i * 0.08}
                className={`${styles.kwCard} ${i === 1 ? styles.kwTilt : ""}`}
              >
                <div
                  className={styles.kwImg}
                  style={{ backgroundImage: `url("${k.img}")` }}
                />
                <div className={styles.kwLabel}>
                  <span className={styles.kwKo}>{k.ko}</span>
                  <span className={styles.kwEn}>{k.en}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* System */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={styles.enTitle}>System</h2>
            <p className={styles.headSub}>
              브랜드 톤앤매너를 강화하기 위해 기존 로고와 조화로운 타이포와 브랜드
              이미지에 부합하는 컬러를 설정했어요.
            </p>
          </Reveal>
          <div className={styles.sysGrid}>
            <Reveal className={styles.fontBlock}>
              <div className={styles.fontTop}>
                <div>
                  <p className={styles.fontLabel}>Main Font</p>
                  <p className={styles.fontName}>Poppins · Pretendard</p>
                </div>
                <div className={styles.fontWeights}>
                  <span>Regular</span>
                  <span>Medium</span>
                  <b>Bold</b>
                </div>
              </div>
              <span className={styles.fontAa}>Aa</span>
            </Reveal>
            <div className={styles.colorBlock}>
              {colors.map((c) => (
                <Reveal
                  key={c.hex + c.name}
                  className={`${styles.swatch} ${c.dark ? styles.swatchDark : ""}`}
                  style={{ background: c.hex }}
                >
                  <div className={styles.swatchHead}>
                    <span className={styles.swatchName}>{c.name}</span>
                    <span className={styles.swatchHex}>{c.hex}</span>
                  </div>
                  <p className={styles.swatchDesc}>{c.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UI 쇼케이스 */}
      <section className={styles.showIntro}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <p className={styles.eyebrow}>UI Design</p>
            <h2 className={styles.enTitle}>화면으로 보는 디자인</h2>
            <p className={styles.centerDesc}>
              각 페이지를 어떤 의도로 설계했는지, 데스크탑과 모바일 화면과 함께
              풀어냈습니다.
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.inner}>
        {showcases.map((s) => (
          <ShowcaseBlock key={s.id} s={s} />
        ))}
      </div>

      {/* Closing */}
      <section className={styles.closing}>
        <Reveal>
          <p className={styles.closingSmall}>Thank you</p>
          <h2 className={styles.closingTitle}>TOGETHER DO BETTER</h2>
          <span className={styles.closingMark}>TONE:FIT</span>
        </Reveal>
        <div className={styles.thanksBar} aria-hidden="true">
          <span>
            THANK YOU FOR READING&nbsp;&nbsp;·&nbsp;&nbsp;THANK YOU FOR
            READING&nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
        </div>
      </section>
    </div>
  );
}
