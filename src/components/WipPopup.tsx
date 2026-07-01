import { useEffect, useState } from "react";
import styles from "./WipPopup.module.css";

/**
 * WipPopup — 사이트 준비중 안내 모달.
 * 진입 0.4초 후 fade-in, sessionStorage("wip-popup-seen")로 세션당 1회.
 * 닫기: X 버튼 / 하단 버튼 / 오버레이 클릭 / ESC.
 * (Vite + CSS Modules 스택에 맞춰 구현)
 */
const SEEN_KEY = "wip-popup-seen";

export function WipPopup() {
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const t = setTimeout(() => {
      setRender(true);
      requestAnimationFrame(() => setShow(true));
    }, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!render) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  function close() {
    sessionStorage.setItem(SEEN_KEY, "1");
    setShow(false);
    setTimeout(() => setRender(false), 300);
  }

  if (!render) return null;

  return (
    <div
      className={`${styles.overlay} ${show ? styles.show : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="사이트 준비중 안내"
      onClick={close}
    >
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>열심히 나르는 중이에요</p>

        <img
          className={styles.gif}
          src="/assets/images/portfolio_wip_motion.gif"
          alt="작업물을 나르는 캐릭터"
        />

        <button className={styles.close} onClick={close} aria-label="닫기">
          ✕
        </button>

        <div className={styles.bottom}>
          <p className={styles.desc}>
            작업물을 하나씩 폴더에 넣고 있어요.
            <br />곧 가득 채워서 보여드릴게요.
          </p>
          <button className={styles.cta} onClick={close}>
            맛보기 구경할래요
          </button>
        </div>
      </div>
    </div>
  );
}
