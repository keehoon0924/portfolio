import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 1) 케이스 스터디 슬라이드(kv → style-guide → 1~5) — 전체 폭
 * 2) 실제 메인페이지 전체 화면 캡처(live-full) — 가운데 적당한 폭의 페이지 프리뷰
 * 이미지 경로: public/assets/cheongyeon/{name}.{ext}
 */
const slides = ["kv", "style-guide", "1", "2", "3", "4", "5"];

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
        {/* 케이스 스터디 슬라이드 — 전체 폭 */}
        {slides.map((name, i) => (
          <section key={name} className={styles.imgSection}>
            <Reveal>
              <img
                className={styles.fullImg}
                src={`/assets/cheongyeon/${name}.png`}
                alt={`청연 상세 이미지 ${i + 1}`}
                loading="lazy"
              />
            </Reveal>
          </section>
        ))}

        {/* 실제 메인페이지 전체 화면 — 가운데 적당한 폭의 페이지 프리뷰 */}
        <section className={styles.shotSection}>
          <Reveal>
            <img
              className={styles.pageShot}
              src="/assets/cheongyeon/live-full.jpg"
              alt="청연 메인페이지 전체 화면"
              loading="lazy"
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
}
