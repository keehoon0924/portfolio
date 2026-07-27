import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(靑淵) 케이스 스터디 상세.
 * 직접 디자인한 슬라이드(1~7, 9)는 그리드 폭 이미지로, 공간(Solution 02) 섹션은
 * 텍스트가 깨지지 않도록 코드로 재현(브라우저 목업 + space full.png + 주석).
 * 맨 하단에 실제 배포 사이트 라이브 미리보기.
 */
const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";
const SPACE_FULL = `${IMG}/space/space%20full.png`;
const SPACE_1 = `${IMG}/space/space%201.png`; // 호버 전
const SPACE_2 = `${IMG}/space/space%202.png`; // 호버 후
const SPACE_3 = `${IMG}/space/space%203.png`; // 평면도 클릭 후

/* 공간 섹션 주석 (목업 세로 위치 %) — 섹션 기준 배치 */
const SPACE_NOTES = [
  {
    // B — 차는 마시는 것이 아니라, 머무는 것입니다 (철학 메시지)
    top: "11%",
    head: "공간의 철학을 먼저 전달",
    text: "시설 정보를 나열하기 전, ‘머무름’이라는 메시지로 청연이 제안하는 공간 경험을 먼저 이해하도록 구성했습니다.",
  },
  {
    // D — 머무름의 공간 (차향이 스미는 시간 + 갤러리)
    top: "40%",
    head: "스크롤로 펼쳐지는 공간 경험",
    text: "한 장의 대표 이미지가 네 개의 공간 카드로 펼쳐지며, 머무름과 배움의 공간을 순차적으로 탐색하도록 설계했습니다.",
  },
  {
    // E — 배움의 공간 (차와 함께하는 쉼 + 갤러리)
    top: "70%",
    head: "",
    text: "기본 상태에서는 공간의 분위기를 보여주고, 호버 시에는 위치와 특징 정보를 추가로 제공합니다.",
    pair: [SPACE_1, SPACE_2] as [string, string],
  },
  {
    // G — 청연 본점 공간 안내 (평면도)
    top: "92%",
    head: "공간을 선택하며 이해하는 인터랙션",
    text: "평면도 안의 번호를 선택하면 해당 공간의 이미지와 설명이 즉시 변경되어 청연 본점의 구성과 분위기를 자연스럽게 이해할 수 있도록 설계했습니다.",
    after: SPACE_3,
  },
];

function Slide({ n }: { n: number }) {
  return (
    <section className={styles.slideSec}>
      <img
        className={styles.slide}
        src={`${IMG}/${n}.png`}
        alt={`청연 케이스 스터디 ${n}`}
        loading={n <= 2 ? "eager" : "lazy"}
      />
    </section>
  );
}

/** 공간 섹션 — 8.png를 코드로 재현 (텍스트 크리스프) */
function SpaceSection() {
  return (
    <section className={styles.spaceSec}>
      <div className={styles.spaceHead}>
        <p className={styles.spaceLabel}>Solution 02</p>
        <h2 className={styles.spaceTitle}>
          차를 발견하고 배우며 머무는
          <br />
          청연의 공간을 담았어요
        </h2>
      </div>

      <div className={styles.spaceStage}>
        <div className={styles.spaceMock}>
          <div className={styles.spaceBar}>
            <span />
            <span />
            <span />
          </div>
          <img
            className={styles.spaceImg}
            src={SPACE_FULL}
            alt="청연 공간 소개 페이지"
            loading="lazy"
          />
        </div>

        {SPACE_NOTES.map((note, i) => (
          <div key={i} className={styles.spaceNote} style={{ top: note.top }}>
            {"pair" in note && note.pair && (
              <figure className={styles.hoverPair}>
                <img src={note.pair[0]} alt="기본 상태" loading="lazy" />
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
                <img src={note.pair[1]} alt="호버 상태" loading="lazy" />
              </figure>
            )}
            {note.head && <p className={styles.noteHead}>{note.head}</p>}
            <p className={styles.noteText}>{note.text}</p>
            {"after" in note && note.after && (
              <figure className={styles.afterShot}>
                <img src={note.after} alt="선택(클릭) 후 상태" loading="lazy" />
              </figure>
            )}
          </div>
        ))}
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
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <Slide key={n} n={n} />
        ))}

        {/* 8번 공간 섹션 — 코드 재현 */}
        <SpaceSection />

        <Slide n={9} />

        {/* 마무리 + 라이브 진입 안내 (슬라이드 → iframe 전환 브릿지) */}
        <section className={styles.outro}>
          <p className={styles.outroLabel}>END OF CASE STUDY</p>
          <h2 className={styles.outroTitle}>
            기획부터 화면까지,
            <br />
            청연을 만든 과정이었습니다.
          </h2>
          <div className={styles.outroLive}>
            <span className={styles.outroTag}>LIVE SITE</span>
            <p className={styles.outroLine}>
              이제, 실제로 움직이는 화면을 직접 둘러보세요.
            </p>
            <p className={styles.outroSub}>PC · 모바일 지원</p>
          </div>
          <svg
            className={styles.scrollCue}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>

        {/* 실제 배포 사이트 라이브 미리보기 */}
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
