import styles from "./OnlyeyeDetail.module.css";

/**
 * 온리아이 랜딩 페이지 상세.
 * 상단: 미리보기 3장(go/1·2·4) — 간격을 둔 갤러리.
 * 하단: 실제 랜딩 페이지 디자인을 섹션 순서(kv → 2 … 12)대로 간격 없이
 *       하나의 연속된 디자인 페이지로 이어 붙임. 모두 그리드 폭 · 가운데 정렬.
 */
const IMG = "/assets/only%20eye";
const PREVIEWS = [1, 5]; // go 폴더 미리보기 — 페르소나(2)·목업(4) 제거, 2번 자리에 5 배치
const SECTIONS: (number | string)[] = [
  "kv",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
]; // 연속 디자인 페이지 순서

export function OnlyeyeDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="랜딩 페이지 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* 미리보기 3장 — 간격을 둔 갤러리 */}
        <div className={styles.previews}>
          {PREVIEWS.map((n) => (
            <img
              key={n}
              className={styles.preview}
              src={`${IMG}/go/${n}.png`}
              alt={`온리아이 랜딩 페이지 미리보기 ${n}`}
              loading={n === 1 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* 연속 디자인 페이지 — 간격 없이 이어 붙임 */}
        <div className={styles.design}>
          {SECTIONS.map((s, i) => (
            <img
              key={s}
              className={styles.section}
              src={`${IMG}/${s}.png`}
              alt={`온리아이 랜딩 페이지 섹션 ${i + 1}`}
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
