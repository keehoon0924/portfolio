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
        {SLIDES.map((n) => (
          <img
            key={n}
            className={styles.slide}
            src={`${IMG}/${n}.png`}
            alt={`TONE:FIT 케이스 스터디 ${n}`}
            loading={n <= 2 ? "eager" : "lazy"}
          />
        ))}

        {/* 실제 배포 사이트 라이브 미리보기 */}
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
