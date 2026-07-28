import styles from "./VentaDetail.module.css";

/**
 * VENTA — 직접 디자인한 전체 페이지를 이미지로만 이어 붙여 보여주는 상세.
 * KV(main) 위쪽에 인트로 슬라이드(1.1 → 3 → 4)를 쌓고,
 * 이어서 full page 전체 디자인을 순서대로 그리드 폭·가운데 정렬·연속으로 렌더.
 */
const ROOT = "/assets/venta";
const DIR = "/assets/venta/full%20page";
const INTRO = ["1.1", "3", "4"]; // venta 루트 — kv(main) 위에 쌓는 인트로
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
          {INTRO.map((name, i) => (
            <img
              key={`intro-${name}`}
              className={styles.section}
              src={`${ROOT}/${name}.png`}
              alt={`VENTA 인트로 ${name}`}
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
          {ORDER.map((name) => (
            <img
              key={name}
              className={styles.section}
              src={`${DIR}/${encodeURIComponent(name)}.png`}
              alt={`VENTA ${name}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
