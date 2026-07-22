import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";
import {
  InkReveal,
  BrushDraw,
  CountStat,
  Petals,
  Parallax,
  LiveFrame,
} from "./effects";

/**
 * 청연(靑淵) — 전통 다도 원데이 클래스 케이스 스터디 (풀 12챕터).
 * 실제 배포 사이트(GSAP)의 시그니처 스크롤 효과를 외부 라이브러리 없이 재현한다.
 * 서사: "다도가 뭔지 모르던 사람 → 청연에서 힐링을 경험".
 * 이미지: /assets/cheongyeon/*  (폴더명 공백은 %20)
 */

const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";
/* 실제 사이트 각 효과 페이지 (PC 라이브 임베드) */
const LIVE_ORBIT = "https://cheongyeon-amber.vercel.app/class/season";
const LIVE_SPACE = "https://cheongyeon-amber.vercel.app/space";
const LIVE_ABOUT = "https://cheongyeon-amber.vercel.app/about";

/* 10 재방문 흐름 */
const FLOW = ["발견", "체험", "몰입", "힐링", "기록", "재방문"];

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
              다도라는 말은 익숙한데, 막상 무엇을 하는 시간인지는 몰랐습니다.
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

        {/* ══ 06 시그니처 · 찻사발 오빗 (실제 사이트 라이브) ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.head}>
            <ChapLabel>06 SIGNATURE</ChapLabel>
            <h2 className={styles.h}>스크롤에 따라, 계절의 차가 궤도를 돕니다.</h2>
            <p className={styles.p}>
              보이지 않는 원형 궤도 위의 찻사발이 스크롤에 맞춰 회전하며 계절의
              차를 하나씩 중앙으로 데려옵니다. 아래에서 실제 화면을 직접
              스크롤해 볼 수 있습니다.
            </p>
          </Reveal>
          <LiveFrame url={LIVE_ORBIT} />
        </section>

        {/* ══ 07 공간 (실제 사이트 라이브) ══ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <ChapLabel>07 SPACE</ChapLabel>
            <h2 className={styles.h}>머무는 공간 — 차정과 다실.</h2>
            <p className={styles.p}>
              쌓여 있던 카드가 중앙에서 부채꼴로 펼쳐지며 공간을 소개합니다.
              아래 실제 화면을 스크롤하면 그대로 확인할 수 있습니다.
            </p>
          </Reveal>
          <LiveFrame url={LIVE_SPACE} />
        </section>

        {/* ══ 08 철학 (실제 사이트 라이브) ══ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.head}>
            <ChapLabel>08 PHILOSOPHY</ChapLabel>
            <h2 className={styles.h}>청연이 담은 다섯 가지 마음.</h2>
            <p className={styles.p}>
              스크롤이 닿으면 두루마리가 하나씩 펼쳐지며 청연의 철학을
              전합니다. 아래 실제 화면에서 직접 확인해 보세요.
            </p>
          </Reveal>
          <LiveFrame url={LIVE_ABOUT} />
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
        </section>

        {/* ══ 12 라이브 (전체 사이트) ══ */}
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
