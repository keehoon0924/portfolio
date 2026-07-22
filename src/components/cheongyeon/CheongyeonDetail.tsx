import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(靑淵) 케이스 스터디 상세.
 * 직접 디자인한 케이스 스터디 슬라이드(1~9)를 순서대로 풀폭으로 이어붙여 보여주고,
 * 맨 하단에 실제 배포 사이트 라이브 미리보기를 둔다.
 */
const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";
const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {SLIDES.map((n) => (
          <img
            key={n}
            className={styles.slide}
            src={`${IMG}/${n}.png`}
            alt={`청연 케이스 스터디 ${n}`}
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
