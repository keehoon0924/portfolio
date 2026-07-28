import styles from "./VentaDetail.module.css";

/**
 * VENTA — 직접 디자인한 전체 페이지를 이미지로만 이어 붙여 보여주는 상세.
 * KV(main) 위쪽에 인트로 슬라이드(1.1 → 3 → 4)를 쌓고,
 * 이어서 full page 전체 디자인을 순서대로 그리드 폭·가운데 정렬·연속으로 렌더.
 */
const ROOT = "/assets/venta";
const DIR = "/assets/venta/full%20page";
const INTRO = ["1.1", "3", "4"]; // venta 루트 — kv 위에 쌓는 인트로
// 메인 페이지(main)는 아래 bg 쇼케이스로 별도 표현. 나머지는 순서대로 이어 붙임.
const ORDER = [
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
        </div>

        {/* 메인 페이지 — 하늘 배경(bg) 위에 가운데 정렬 쇼케이스 */}
        <section className={styles.showcase}>
          <div className={styles.showcaseHead}>
            <p className={styles.showcaseLabel}>DESIGN 01</p>
            <h3 className={styles.showcaseTitle}>NEW MAIN HOMEPAGE</h3>
            <p className={styles.showcaseSub}>메인 홈페이지</p>
            <p className={styles.showcaseDesc}>
              브랜드의 첫인상을 결정하는 메인 페이지입니다. 히어로 비주얼부터
              베스트셀러, 신제품, 멤버십까지 하나의 흐름으로 연결해 방문자가
              자연스럽게 브랜드를 탐색하고 구매까지 이어지도록 구성했습니다.
            </p>
          </div>
          <img
            className={styles.showcasePage}
            src={`${DIR}/main.png`}
            alt="VENTA 메인 페이지"
            loading="lazy"
          />
        </section>

        <div className={styles.design}>
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
