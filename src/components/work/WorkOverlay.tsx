import { useEffect } from "react";
import type { Work } from "@/data/works";
import styles from "./WorkOverlay.module.css";

type Props = {
  work: Work | null;
  onClose: () => void;
};

export function WorkOverlay({ work, onClose }: Props) {
  // Escape 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={work.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            <div className={styles.kicker}>{work.kicker}</div>
            <div className={styles.title}>{work.title}</div>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {work.img ? (
            <div className={styles.image}>
              <img src={work.img} alt={work.title} />
            </div>
          ) : (
            <div className={styles.imagePh}>작업 이미지 자리 — 나중에 추가</div>
          )}

          <div className={styles.rows}>
            {work.rows.map((r) => (
              <div key={r.k} className={styles.col}>
                <div className={styles.colKey}>{r.k}</div>
                <div className={styles.colVal}>{r.v}</div>
              </div>
            ))}
          </div>

          <div className={styles.detail}>{work.detail}</div>

          {work.link && (
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className={styles.linkBtn}
            >
              실제 사이트 보기 ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
