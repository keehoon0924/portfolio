import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 케이스 스터디 슬라이드(kv → style-guide → 1~5)에 이어
 * 실제 메인페이지 전체 화면 캡처(live-full)를 한 장의 이미지로 쭉 이어붙인다.
 * 이미지 경로: public/assets/cheongyeon/{name}.{ext}
 */
const images = [
  "kv.png",
  "style-guide.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "live-full.jpg",
];

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
                src={`/assets/cheongyeon/${name}`}
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
