import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 케이스 스터디 상세.
 * 직접 디자인한 슬라이드(1~7)를 그리드 폭으로 순서대로 배치하고,
 * (main-pc 롱 캡처 + 주석은 이미지 push 후 추가), 맨 하단에 실제 배포 사이트 라이브 미리보기.
 */
const IMG = "/assets/tonefit/new";
const LIVE_URL = "https://ad-portfolio-tonefitcom.netlify.app";
const SLIDES = [1, 2, 3, 4, 5, 6, 7];
const MAIN_PC = `${IMG}/main-pc.png`;

/* main-pc 롱 캡처 주석 (세로 위치 %) — 섹션에 맞춰 배치 */
const MAIN_NOTES = [
  {
    top: "16%",
    num: "02",
    head: "Brand Identity",
    text: "TONE FIT은 개인의 고유한 톤(TONE)과 그에 맞는 촬영 환경의 조화(FIT)를 중심에 둡니다. 단순한 촬영 공간을 넘어, 사용자에게 더 자연스럽고 어울리는 결과를 제안합니다.",
  },
  {
    top: "32%",
    num: "03",
    head: "AI Smart Tone Finder",
    text: "기존 포토부스가 사용자의 선택에 의존했다면, TONE FIT은 30초 AI 분석으로 사용자의 톤을 이해하고 맞춤 촬영 경험으로 연결합니다. 브랜드의 차별화된 기술을 가장 직접적으로 보여주는 핵심 기능입니다.",
  },
  {
    top: "41%",
    num: "04",
    head: "Personal Background Matching",
    text: "AI 분석 결과를 실제 촬영 환경에 반영해 사용자의 톤에 맞는 배경 조합을 제안합니다. 이를 통해 보다 자연스럽고 정돈된 결과를 완성합니다.",
  },
  {
    top: "49%",
    num: "05",
    head: "Pet-Friendly Experience",
    text: "반려동물과 함께하는 촬영으로 콘텐츠의 확장 가능성을 보여줍니다. 일반 고객을 넘어 반려인까지 브랜드 접점을 넓히며, 사람과 반려동물이 함께 기록하는 경험을 제안합니다.",
  },
  {
    top: "58%",
    num: "06",
    head: "Limited Collab Frame",
    text: "매달 새롭게 교체되는 IP 콜라보 프레임으로 콘텐츠에 신선함을 더합니다. 방문할 때마다 다른 경험을 제공해, 한 번 온 고객이 다시 찾을 이유를 만듭니다.",
  },
  {
    top: "69%",
    num: "07",
    head: "Organic Virality",
    text: "촬영 경험이 자연스럽게 공유되도록 바이럴 구조를 설계했습니다. 사용자가 직접 남긴 콘텐츠가 브랜드 접점을 넓히고, 신뢰를 자연스럽게 쌓아가도록 구성했습니다.",
  },
];

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
        <div className={styles.slides}>
          {SLIDES.map((n) => (
            <img
              key={n}
              className={styles.slide}
              src={`${IMG}/${n}.png`}
              alt={`TONE:FIT 케이스 스터디 ${n}`}
              loading={n <= 2 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* main-pc 롱 캡처 + 좌측 주석 (청연 방식) */}
        <section className={styles.mainSec}>
          <div className={styles.mainStage}>
            <div className={styles.mainMock}>
              <div className={styles.mainBar}>
                <span />
                <span />
                <span />
              </div>
              <img
                className={styles.mainImg}
                src={MAIN_PC}
                alt="TONE:FIT 메인 페이지"
                loading="lazy"
              />
            </div>
            {MAIN_NOTES.map((note) => (
              <div
                key={note.num}
                className={styles.mainNote}
                style={{ top: note.top }}
              >
                <p className={styles.mainNum}>{note.num}</p>
                <p className={styles.mainNoteHead}>{note.head}</p>
                <p className={styles.mainNoteText}>{note.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 마무리 + 라이브 진입 안내 (섹션 → iframe 전환 브릿지) */}
        <section className={styles.outro}>
          <p className={styles.outroLabel}>END OF CASE STUDY</p>
          <h2 className={styles.outroTitle}>
            기획부터 화면까지,
            <br />
            TONE:FIT을 만든 과정이었습니다.
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
