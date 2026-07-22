import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";
import {
  InkReveal,
  BrushDraw,
  CountStat,
  Petals,
  Orbit,
  CardFan,
  ScrollUnroll,
  Parallax,
  type OrbitItem,
} from "./effects";

/**
 * 청연(靑淵) — 전통 다도 원데이 클래스 케이스 스터디 (풀 12챕터).
 * 실제 배포 사이트(GSAP)의 시그니처 스크롤 효과를 외부 라이브러리 없이 재현한다.
 * 서사: "다도가 뭔지 모르던 사람 → 청연에서 힐링을 경험".
 * 이미지: /assets/cheongyeon/*  (폴더명 공백은 %20)
 */

const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";

/* 06 시그니처 오빗 — 계절의 차 (실제 사이트 4종) */
const ORBIT: OrbitItem[] = [
  {
    img: `${IMG}/11.png`,
    name: "동백꽃차",
    desc: "붉게 피어난 동백을 닮은, 봄의 첫 차입니다.",
  },
  {
    img: `${IMG}/13.png`,
    name: "냉녹차",
    desc: "여름의 열기를 식히는 서늘하고 맑은 한 잔입니다.",
  },
  {
    img: `${IMG}/14.png`,
    name: "국화차",
    desc: "가을 들녘의 국화 향을 그대로 담았습니다.",
  },
  {
    img: `${IMG}/background.png`,
    name: "우롱차",
    desc: "겨울, 오래 우려 깊어진 따뜻한 차입니다.",
  },
];

/* 07 공간 카드-팬 */
const SPACE_CARDS = [
  { img: `${IMG}/space/3.png`, label: "차를 발견하는 공간" },
  { img: `${IMG}/space/4.png`, label: "머무름의 공간" },
  { img: `${IMG}/space/5.png`, label: "배움의 공간" },
  { img: `${IMG}/space/6.png`, label: "차의 깊이를 경험하는 공간" },
];

/* 08 철학 족자 */
const PHILOSOPHY = [
  { ko: "고요함", hanja: "靜", desc: "차를 우리는 동안 만들어지는 조용한 시간을 지켰습니다." },
  { ko: "기다림", hanja: "待", desc: "우러날 때까지 기다리는 마음을, 화면의 속도에도 담았습니다." },
  { ko: "자연", hanja: "自然", desc: "계절의 색과 재료를 그대로 브랜드의 언어로 삼았습니다." },
  { ko: "인연", hanja: "因緣", desc: "한 잔을 사이에 둔 사람과 사람의 만남을 이야기했습니다." },
  { ko: "여운", hanja: "餘韻", desc: "다 마신 뒤에도 남는 감각을, 떠난 화면에 남기려 했습니다." },
];

/* 10 재방문 흐름 */
const FLOW = ["발견", "체험", "몰입", "힐링", "기록", "재방문"];

/* 11 적용 효과 */
const EFFECTS = [
  { t: "잉크 번짐 리빌", d: "이미지가 3초에 걸쳐 번지듯 떠오릅니다." },
  { t: "스스로 그려지는 붓선", d: "SVG 마스크를 스크롤에 맞춰 그려냈습니다." },
  { t: "찻사발 오빗", d: "핀 고정 후 링이 회전해 계절 차가 중앙으로 옵니다." },
  { t: "카드-팬 전개", d: "쌓인 카드가 중앙에서 부채꼴로 펼쳐집니다." },
  { t: "족자 언롤", d: "다섯 철학이 두루마리처럼 펼쳐집니다." },
  { t: "가로 핀 스크롤", d: "클래스 소개를 가로로 밀며 읽게 했습니다." },
  { t: "무한 마퀴", d: "제품·리뷰를 requestAnimationFrame으로 끊김 없이 흘렸습니다." },
  { t: "방향 인식 헤더", d: "스크롤 방향에 따라 헤더가 숨고 나타납니다." },
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
        {/* ══ 00 KV 표지 ══ */}
        <section
          className={styles.cover}
          style={{ backgroundImage: `url(${IMG}/11.png)` }}
        >
          <span className={styles.coverGrad} aria-hidden="true" />
          <Petals count={12} />
          <Reveal className={styles.coverText}>
            <p className={styles.coverBrand}>
              청연 <span className={styles.coverHanja}>靑淵</span>
            </p>
            <p className={styles.coverSub}>전통 다도 원데이 클래스 · 브랜드 웹사이트</p>
            <p className={styles.coverSub}>
              기획 · UI 디자인 · 프론트엔드 — 다도를 처음 만나는 사람의 시선에서
            </p>
          </Reveal>
        </section>

        {/* ══ 01 질문 (훅) ══ */}
        <section className={styles.hook}>
          <Parallax
            src={`${IMG}/brand%20story/kv.png`}
            alt="다실 풍경"
            className={styles.hookBg}
          >
            <span className={styles.dim} aria-hidden="true" />
          </Parallax>
          <Reveal className={styles.hookText}>
            <ChapLabel light>01 QUESTION</ChapLabel>
            <h2 className={`${styles.h} ${styles.hLight}`}>
              다도라는 말은 익숙한데,
              <br />막상 무엇을 하는 시간인지는 몰랐습니다.
            </h2>
          </Reveal>
        </section>

        {/* ══ 02 인사이트 (기획, 가볍게) ══ */}
        <section className={`${styles.section} ${styles.paper} ${styles.insight}`}>
          <Reveal className={styles.insightText}>
            <ChapLabel>02 INSIGHT</ChapLabel>
            <h2 className={styles.h}>
              2030에게 차는 이미 새로운 <b className={styles.forest}>힐링</b>이
              됐습니다.
            </h2>
            <p className={styles.p}>
              관심이 없어서가 아니라, 무엇을 하는지 몰라서 멀게 느껴질 뿐이었습니다.
              청연은 그 거리를 좁히는 것에서 시작했습니다.
            </p>
          </Reveal>
          <div className={styles.statRow}>
            <CountStat to={72} suffix="%" label="2030 '차 = 힐링' 인식 (트렌드 조사)" />
            <CountStat to={1} suffix="시간" label="일상을 바꾸는 원데이 클래스" />
          </div>
        </section>

        {/* ══ 03 컨셉/방향 ══ */}
        <section
          className={`${styles.bleed} ${styles.bleedTall}`}
          style={{ backgroundImage: `url(${IMG}/background.png)` }}
        >
          <span className={styles.dim} aria-hidden="true" />
          <Reveal className={`${styles.bleedText} ${styles.bleedCenter}`}>
            <ChapLabel light>03 CONCEPT</ChapLabel>
            <h2 className={`${styles.h} ${styles.hLight}`}>
              그래서 청연은, 다도를 먼저{" "}
              <span className={styles.gold}>보여주기</span>로 했습니다.
            </h2>
            <p className={`${styles.p} ${styles.pLight}`}>
              무엇을 하는지, 어떤 계절의 차인지, 어떤 시간을 보내게 되는지 —
              설명보다 장면으로 먼저 전했습니다.
            </p>
            <div className={styles.brushWrap}>
              <BrushDraw />
            </div>
          </Reveal>
        </section>

        {/* ══ 04 디자인 시스템 ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.head}>
            <ChapLabel>04 DESIGN SYSTEM</ChapLabel>
            <h2 className={styles.h}>전통을 무겁지 않게.</h2>
            <p className={styles.p}>
              수묵의 여백과 한글 타이포를 기준으로 정리해, 처음 온 사람도 편하게
              읽히도록 만들었습니다.
            </p>
          </Reveal>
          <InkReveal className={styles.guideWrap}>
            <Img
              className={styles.guideImg}
              src={`${IMG}/style-guide.png`}
              alt="청연 스타일 가이드"
            />
          </InkReveal>
        </section>

        {/* ══ 05 쇼케이스 A · 사계절 (잉크 번짐 + 붓선 재현) ══ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <ChapLabel>05 FOUR SEASONS</ChapLabel>
            <h2 className={styles.h}>계절의 흐름을 따라, 차와 함께.</h2>
            <p className={styles.p}>
              봄·여름·가을·겨울, 계절마다 다른 차와 시간을 담았습니다. 아래 화면은
              스크롤에 따라 잉크가 번지듯 떠오르고, 붓선이 스스로 그려집니다.
            </p>
            <div className={styles.brushWrap}>
              <BrushDraw />
            </div>
          </Reveal>
          <InkReveal className={styles.tallFrame}>
            <Img
              className={styles.tallImg}
              src={`${IMG}/season-tea/2.png`}
              alt="사계절 다도 — 봄·여름·가을·겨울"
            />
          </InkReveal>
          <p className={styles.fx}>적용 효과 · 잉크 번짐 리빌 + 스스로 그려지는 붓선(SVG mask)</p>
        </section>

        {/* ══ 06 시그니처 · 찻사발 오빗 (재현) ══ */}
        <section className={`${styles.section} ${styles.paper} ${styles.orbitChap}`}>
          <Reveal className={styles.head}>
            <ChapLabel>06 SIGNATURE</ChapLabel>
            <h2 className={styles.h}>
              스크롤을 내리면, 계절의 차가 하나씩 중앙으로 돌아옵니다.
            </h2>
            <p className={styles.p}>
              실제 사이트의 시그니처 연출 — 보이지 않는 원형 링 위의 찻사발이
              스크롤에 맞춰 회전하는 <b>오빗</b>을 그대로 재현했습니다.
            </p>
          </Reveal>
          <Orbit items={ORBIT} />
          <p className={styles.fx}>적용 효과 · 핀 고정 + 스냅 회전 오빗 + 꽃잎 파티클</p>
        </section>

        {/* ══ 07 쇼케이스 C · 공간 (카드-팬 재현) ══ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <ChapLabel>07 SPACE</ChapLabel>
            <h2 className={styles.h}>머무는 공간 — 차정과 다실.</h2>
            <p className={styles.p}>
              쌓여 있던 카드가 중앙에서 부채꼴로 펼쳐지며 공간을 소개합니다.
            </p>
          </Reveal>
          <CardFan images={SPACE_CARDS} />
          <p className={styles.fx}>적용 효과 · 핀 고정 카드-팬 전개 + clipPath 자막 와이프</p>
        </section>

        {/* ══ 08 쇼케이스 D · 철학 (족자 언롤 재현) ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.head}>
            <ChapLabel>08 PHILOSOPHY</ChapLabel>
            <h2 className={styles.h}>청연이 담은 다섯 가지 마음.</h2>
            <p className={styles.p}>
              스크롤이 닿으면 두루마리가 하나씩 펼쳐지도록 만들었습니다.
            </p>
          </Reveal>
          <ScrollUnroll title="靑淵" items={PHILOSOPHY} />
          <p className={styles.fx}>적용 효과 · 족자(두루마리) 언롤 — 순차 펼침</p>
        </section>

        {/* ══ 09 클래스 & 티 컬렉션 ══ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <ChapLabel>09 CLASS & COLLECTION</ChapLabel>
            <h2 className={styles.h}>클래스와 찻잎, 계절로 잇다.</h2>
          </Reveal>
          <InkReveal className={styles.tallFrame}>
            <Img
              className={styles.tallImg}
              src={`${IMG}/tea-collection/3.png`}
              alt="계절 찻잎 컬렉션"
            />
          </InkReveal>
          <div className={styles.two2}>
            <InkReveal className={styles.miniShot}>
              <Img src={`${IMG}/tea-class/2.png`} alt="다도 클래스 소개" />
            </InkReveal>
            <InkReveal className={styles.miniShot} delay={0.1}>
              <Img src={`${IMG}/tea-class/3.png`} alt="클래스 상세" />
            </InkReveal>
          </div>
          <p className={styles.fx}>적용 효과 · 가로 핀 스크롤 + 무한 마퀴 캐러셀</p>
        </section>

        {/* ══ 10 재방문 흐름 ══ */}
        <section
          className={styles.flowSec}
          style={{ backgroundImage: `url(${IMG}/bg.png)` }}
        >
          <span className={styles.flowWash} aria-hidden="true" />
          <div className={styles.flowInner}>
            <Reveal className={styles.flowHead}>
              <ChapLabel>10 RETURN</ChapLabel>
              <h2 className={styles.h}>한 번의 경험이, 다시 찾는 이유가 되도록.</h2>
              <p className={styles.p}>
                발견에서 재방문까지, 스탬프로 다시 오실 이유를 남겼습니다.
              </p>
            </Reveal>
            <Reveal className={styles.flow}>
              <ol className={styles.flowSteps}>
                {FLOW.map((label, i) => (
                  <li key={label} className={styles.step}>
                    <span className={styles.dot} />
                    <span className={styles.stepNum}>{`0${i + 1}`}</span>
                    <span className={styles.stepLabel}>{label}</span>
                  </li>
                ))}
              </ol>
              <svg
                className={styles.loop}
                viewBox="0 0 1000 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className={styles.loopPath}
                  d="M975 6 C 995 46, 900 52, 500 52 C 100 52, 25 46, 25 12"
                  fill="none"
                />
                <path className={styles.loopHead} d="M16 20 L25 8 L34 20" fill="none" />
              </svg>
            </Reveal>
          </div>
        </section>

        {/* ══ 11 역할 & 적용 효과 ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.head}>
            <ChapLabel>11 ROLE & CRAFT</ChapLabel>
            <h2 className={styles.h}>기획으로 시작해, 디자인과 개발로 완성했습니다.</h2>
          </Reveal>
          <div className={styles.roleGrid}>
            <Reveal className={styles.roleCard}>
              <p className={styles.roleTag}>ROLE</p>
              <p className={styles.roleMain}>기획자</p>
              <p className={styles.roleSub}>컨셉 기획 · 정보 구조 · 콘텐츠 설계</p>
            </Reveal>
            <Reveal className={styles.roleCard} delay={0.06}>
              <p className={styles.roleTag}>DESIGN</p>
              <p className={styles.roleMain}>40%</p>
              <p className={styles.roleSub}>UI · 브랜드 · 모션 설계</p>
            </Reveal>
            <Reveal className={styles.roleCard} delay={0.12}>
              <p className={styles.roleTag}>DEVELOP</p>
              <p className={styles.roleMain}>40%</p>
              <p className={styles.roleSub}>React · GSAP ScrollTrigger · 반응형</p>
            </Reveal>
          </div>
          <Reveal className={styles.subLabel}>적용한 인터랙션 효과</Reveal>
          <div className={styles.fxGrid}>
            {EFFECTS.map((e) => (
              <Reveal key={e.t} className={styles.fxCard}>
                <p className={styles.fxTitle}>{e.t}</p>
                <p className={styles.fxDesc}>{e.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══ 12 전환 배너 + 라이브 ══ */}
        <section
          className={`${styles.bleed} ${styles.banner}`}
          style={{ backgroundImage: `url(${IMG}/13.png)` }}
        >
          <span className={styles.dim} aria-hidden="true" />
          <Reveal className={`${styles.bleedText} ${styles.bleedCenter}`}>
            <p className={styles.bannerText}>이제, 실제 화면입니다</p>
          </Reveal>
        </section>

        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
