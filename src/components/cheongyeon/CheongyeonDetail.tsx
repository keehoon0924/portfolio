import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";
import { InkReveal } from "./effects";

/**
 * 청연(靑淵) — 전통 다도 원데이 클래스 · UI 디자인 케이스 스터디.
 * "무엇을 느꼈고 → 왜 문제라 봤고 → 그래서 이렇게 기획/디자인했다"를 보여주는
 * 에디토리얼 구성. 큰 이미지 + 옆 주석(디자인 의사결정). 라이브는 맨 하단 1개.
 * 이미지: /assets/cheongyeon/*  (폴더 공백은 %20)
 */

const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";

/* 04 메인 — 전체를 길게, 지점별 결정 주석 */
const MAIN_IMAGES = [
  `${IMG}/main/메인%20kv.png`,
  `${IMG}/main/2.png`,
  `${IMG}/main/4.png`,
  `${IMG}/main/5.png`,
  `${IMG}/main/6.png`,
  `${IMG}/main/7.png`,
  `${IMG}/main/8.png`,
  `${IMG}/main/9.png`,
  `${IMG}/main/10.png`,
];
const MAIN_NOTES = [
  {
    head: "KV를 영상으로 두었습니다",
    text: "다도가 ‘멈춰서 차를 우리는 시간’이라는 걸, 첫 화면의 느린 움직임으로 먼저 체감시키고 싶었습니다.",
  },
  {
    head: "사계절을 스크롤 스토리로",
    text: "봄부터 겨울까지 장면을 순서대로 이어, 처음 온 사람도 흐름을 타며 읽게 했습니다.",
  },
  {
    head: "계절 차는 궤도로 돌립니다",
    text: "네 계절의 차를 하나씩 중앙으로 데려와, 한 번에 하나씩 집중해 보도록 설계했습니다.",
  },
];

const SPACE_IMAGES = [
  `${IMG}/space/kv.png`,
  `${IMG}/space/2.png`,
  `${IMG}/space/3.png`,
  `${IMG}/space/4.png`,
  `${IMG}/space/5.png`,
  `${IMG}/space/6.png`,
  `${IMG}/space/7.png`,
];
const SPACE_NOTES = [
  {
    head: "발견과 배움을 나눴습니다",
    text: "차를 고르는 자리(차정)와 배우는 자리(다실)를 분리해, 방문 전에도 동선을 그릴 수 있게 했습니다.",
  },
  {
    head: "카드를 부채꼴로 펼칩니다",
    text: "공간을 한눈에 훑은 뒤 하나씩 들여다보도록, 쌓인 카드가 펼쳐지는 전개로 구성했습니다.",
  },
];

const STORY_IMAGES = [
  `${IMG}/brand%20story/kv.png`,
  `${IMG}/brand%20story/2.png`,
  `${IMG}/brand%20story/3.png`,
  `${IMG}/brand%20story/4.png`,
  `${IMG}/brand%20story/5.png`,
];
const STORY_NOTES = [
  {
    head: "철학을 두루마리에 담았습니다",
    text: "고요함·기다림·자연·인연·여운 — 다섯 마음을 두루마리가 펼쳐지듯 보여줬습니다.",
  },
  {
    head: "읽는 속도까지 설계했습니다",
    text: "천천히 펼쳐지는 리듬으로, 화면을 읽는 호흡 자체가 다도의 결을 닮게 했습니다.",
  },
];

const PRINCIPLES = [
  { ko: "장면 먼저", en: "SHOW, DON’T TELL", desc: "설명 대신 계절의 장면을 먼저 보여준다." },
  { ko: "계절의 결", en: "FOUR SEASONS", desc: "사계절을 축으로 콘텐츠와 색을 나눈다." },
  { ko: "여백의 속도", en: "SLOW PACE", desc: "급하지 않게, 천천히 읽히도록 비운다." },
];

/* 이미지 로드 실패 시 조용히 숨김 (레이아웃 유지) */
function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.opacity = "0";
      }}
    />
  );
}

function ChapLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p className={[styles.chap, light ? styles.chapLight : ""].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}

/** 큰 이미지 + 옆 주석(디자인 의사결정 타임라인) */
function AnnotatedShot({
  label,
  title,
  intro,
  images,
  notes,
  paper,
}: {
  label: string;
  title: string;
  intro?: string;
  images: string[];
  notes: { head: string; text: string }[];
  paper?: boolean;
}) {
  return (
    <section
      className={[styles.section, paper ? styles.paper : "", styles.annoSec]
        .filter(Boolean)
        .join(" ")}
    >
      <Reveal className={styles.annoHead}>
        <ChapLabel>{label}</ChapLabel>
        <h2 className={styles.h}>{title}</h2>
        {intro && <p className={styles.pCenter}>{intro}</p>}
      </Reveal>
      <div className={styles.anno}>
        <InkReveal className={styles.annoImg}>
          {images.map((src, i) => (
            <Img key={i} className={styles.annoImgEl} src={src} alt={title} />
          ))}
        </InkReveal>
        <div className={styles.annoCol}>
          {notes.map((n, i) => (
            <Reveal key={i} delay={i * 0.06} className={styles.annoCard}>
              <span className={styles.annoDot} />
              <p className={styles.annoNum}>{`0${i + 1}`}</p>
              <p className={styles.annoCardHead}>{n.head}</p>
              <p className={styles.annoCardText}>{n.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CheongyeonDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="청연 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* ══ COVER ══ */}
        <section className={styles.hero}>
          <Reveal className={styles.heroInner}>
            <p className={styles.heroTag}>UI DESIGN CASE STUDY</p>
            <InkReveal className={styles.heroShot}>
              <Img
                className={styles.heroImg}
                src={`${IMG}/first.png`}
                alt="청연 靑淵 — 메인 화면"
              />
            </InkReveal>
            <p className={styles.heroIntent}>
              다도를 처음 만나는 사람의 눈높이에서, <b>무엇을 하는 시간인지</b>를
              먼저 보여주는 웹을 설계했습니다.
            </p>
            <div className={styles.heroMeta}>
              <span>기획</span>
              <span>UI 디자인</span>
              <span>프론트엔드</span>
              <span className={styles.heroMetaDim}>기획 · 디자인 40% · 개발 40%</span>
            </div>
          </Reveal>
        </section>

        {/* ══ 01 WHY ══ */}
        <section
          className={`${styles.bleed} ${styles.stmtDark}`}
          style={{ backgroundImage: `url(${IMG}/background.png)` }}
        >
          <span className={styles.dim} aria-hidden="true" />
          <Reveal className={styles.stmtInner}>
            <ChapLabel light>01 WHY</ChapLabel>
            <h2 className={`${styles.stmtTitle} ${styles.hLight}`}>
              다도는 익숙한데, 뭘 하는지는 아무도 알려주지 않았습니다.
            </h2>
            <p className={`${styles.stmtBody} ${styles.pLight}`}>
              다도 클래스를 찾다가 이상했습니다. 어느 사이트를 봐도 이름·시간·금액
              뿐이었고, 정작 ‘무엇을 하는 자리인지’는 없었습니다. 관심이 없어서가
              아니라 <b>알 수가 없어서</b> 멀게 느껴지는 거였습니다.
            </p>
          </Reveal>
        </section>

        {/* ══ 02 PRINCIPLE ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.stmtHead}>
            <ChapLabel>02 PRINCIPLE</ChapLabel>
            <h2 className={styles.stmtTitle}>
              그래서 정한 첫 원칙 — 설명하지 말고, 보여주기.
            </h2>
            <p className={styles.pCenter}>
              글로 소개하기 전에 계절의 장면과 공간을 먼저 눈에 담게 했습니다.
              무엇을 하는지 알고 나면 부담이 줄고, 그때부터 편하게 즐길 수 있으니까요.
            </p>
          </Reveal>
          <div className={styles.principles}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.ko} delay={i * 0.08} className={styles.principle}>
                <p className={styles.prNum}>{`0${i + 1}`}</p>
                <p className={styles.prKo}>{p.ko}</p>
                <p className={styles.prEn}>{p.en}</p>
                <p className={styles.prDesc}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══ 03 DESIGN SYSTEM ══ */}
        <section className={styles.section}>
          <Reveal className={styles.stmtHead}>
            <ChapLabel>03 DESIGN SYSTEM</ChapLabel>
            <h2 className={styles.stmtTitle}>전통을 무겁지 않게.</h2>
            <p className={styles.pCenter}>
              전통 소재를 쓰되 딱딱해 보이지 않도록, 수묵의 여백과 한글 타이포를
              기준으로 색·서체·간격을 하나의 규칙으로 정리했습니다.
            </p>
          </Reveal>
          <InkReveal className={styles.bigShot}>
            <Img
              className={styles.bigImg}
              src={`${IMG}/style-guide.png`}
              alt="청연 스타일 가이드"
            />
          </InkReveal>
        </section>

        {/* ══ 04 MAIN ══ */}
        <AnnotatedShot
          label="04 MAIN"
          title="첫 화면부터, 무엇을 하는 곳인지 느끼도록."
          intro="메인은 ‘보여주기’ 원칙이 가장 진하게 적용된 화면입니다. 스크롤을 따라 계절과 차를 순서대로 만나게 했습니다."
          images={MAIN_IMAGES}
          notes={MAIN_NOTES}
          paper
        />

        {/* ══ 05 SPACE ══ */}
        <AnnotatedShot
          label="05 SPACE"
          title="머무는 시간을, 공간으로."
          images={SPACE_IMAGES}
          notes={SPACE_NOTES}
        />

        {/* ══ 06 STORY ══ */}
        <AnnotatedShot
          label="06 STORY"
          title="브랜드의 마음을, 두루마리에 담아."
          images={STORY_IMAGES}
          notes={STORY_NOTES}
          paper
        />

        {/* ══ 07 MOTION ══ */}
        <section className={styles.section}>
          <Reveal className={styles.stmtHead}>
            <ChapLabel>07 MOTION</ChapLabel>
            <h2 className={styles.stmtTitle}>움직임도, 브랜드의 언어로.</h2>
            <p className={styles.pCenter}>
              화려함보다 ‘여백의 속도’를 택했습니다. 잉크가 번지듯 떠오르는 등장,
              스스로 그려지는 붓선처럼 — 급하지 않은 움직임으로 다도의 결을 살렸습니다.
              화면을 읽는 속도가 곧 브랜드의 인상이 된다고 봤습니다.
            </p>
          </Reveal>
        </section>

        {/* ══ 08 CLOSING ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.stmtHead}>
            <ChapLabel>08 CLOSING</ChapLabel>
            <h2 className={styles.stmtTitle}>
              기획으로 시작해, 디자인과 개발로 끝냈습니다.
            </h2>
            <p className={styles.pCenter}>
              무엇을 하는지 모르던 사람이 ‘가서 해보고 싶다’로 바뀌는 것 — 그 한
              걸음을 만드는 게 이 프로젝트의 목표였습니다.
            </p>
          </Reveal>
          <div className={styles.roleGrid}>
            <Reveal className={styles.roleCard}>
              <p className={styles.roleTag}>PLAN</p>
              <p className={styles.roleMain}>기획</p>
              <p className={styles.roleSub}>컨셉 · 정보 구조 · 콘텐츠 설계</p>
            </Reveal>
            <Reveal className={styles.roleCard} delay={0.06}>
              <p className={styles.roleTag}>DESIGN</p>
              <p className={styles.roleMain}>40%</p>
              <p className={styles.roleSub}>UI · 브랜드 · 모션</p>
            </Reveal>
            <Reveal className={styles.roleCard} delay={0.12}>
              <p className={styles.roleTag}>DEVELOP</p>
              <p className={styles.roleMain}>40%</p>
              <p className={styles.roleSub}>React · GSAP · 반응형</p>
            </Reveal>
          </div>
        </section>

        {/* ══ LIVE (전체 사이트) ══ */}
        <section className={styles.section}>
          <Reveal className={styles.stmtHead}>
            <ChapLabel>LIVE SITE</ChapLabel>
            <h2 className={styles.stmtTitle}>실제 화면을 직접 둘러보세요.</h2>
            <p className={styles.pCenter}>
              PC·모바일을 전환하며 실제 움직임과 반응형을 확인할 수 있습니다.
            </p>
          </Reveal>
        </section>
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
