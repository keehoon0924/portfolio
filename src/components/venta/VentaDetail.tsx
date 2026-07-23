import styles from "./VentaDetail.module.css";

/**
 * VENTA — 직접 디자인한 전체 페이지를 이미지로만 이어 붙여 보여주는 상세.
 * 지정된 순서대로 그리드 폭 · 가운데 정렬 · 간격 없이 하나의 연속 페이지로 렌더.
 */
const DIR = "/assets/venta/full%20page";
const ORDER = [
  "main",
  "all",
  "air",
  "one",
  "login",
  "join membership",
  "enter membership information",
  "membership registration completed",
];

export function VentaDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="VENTA 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        <div className={styles.design}>
          {ORDER.map((name, i) => (
            <img
              key={name}
              className={styles.section}
              src={`${DIR}/${encodeURIComponent(name)}.png`}
              alt={`VENTA ${name}`}
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
