import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지 — 이미지 스택 오버레이.
 * WORK 카드 클릭 시 열린다.
 * 순서: kv → style-guide → 1 → 2 → 3 → 4 → 5
 * 이미지 경로: public/assets/cheongyeon/{name}.png
 */
const images = ["kv", "style-guide", "1", "2", "3", "4", "5"];

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
        {images.map((name, i) => (
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
      </div>
    </div>
  );
}
