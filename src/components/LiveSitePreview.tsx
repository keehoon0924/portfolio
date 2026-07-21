import { useEffect, useRef, useState } from "react";
import styles from "./LiveSitePreview.module.css";

/**
 * 실제 배포 사이트 라이브 미리보기 (아임웹 방식).
 * 딤 처리된 어두운 배경 + PC/모바일 토글 + 실제 사이트 iframe.
 * 데스크탑/모바일 논리 폭으로 렌더한 뒤 창에 맞게 축소해 보여준다.
 *
 * @param url  실제 배포 사이트 주소
 */
const DESIGN_W = { pc: 1440, mobile: 390 } as const;
type Device = keyof typeof DESIGN_W;

export function LiveSitePreview({ url }: { url: string }) {
  const [device, setDevice] = useState<Device>("pc");
  const vpRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ scale: 0.7, h: 900 });
  const designW = DESIGN_W[device];

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      const scale = cw / designW;
      setDims({ scale, h: scale ? ch / scale : ch });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designW]);

  const frameStyle = {
    width: `${designW}px`,
    height: `${dims.h}px`,
    transform: `scale(${dims.scale})`,
    transformOrigin: "top left",
  } as const;

  const addr = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section className={styles.live}>
      <div className={styles.toggle} role="tablist" aria-label="디바이스 미리보기">
        <button
          type="button"
          role="tab"
          aria-selected={device === "pc"}
          className={`${styles.toggleBtn} ${device === "pc" ? styles.toggleOn : ""}`}
          onClick={() => setDevice("pc")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="2.5"
              y="4"
              width="19"
              height="12.5"
              rx="1.6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M9 20h6M12 16.5V20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span>PC</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={device === "mobile"}
          className={`${styles.toggleBtn} ${device === "mobile" ? styles.toggleOn : ""}`}
          onClick={() => setDevice("mobile")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="7"
              y="2.5"
              width="10"
              height="19"
              rx="2.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M11 18.5h2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span>모바일</span>
        </button>
      </div>

      <div className={styles.stage}>
        {device === "pc" ? (
          <div className={styles.pcWindow}>
            <div className={styles.winBar}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <div className={styles.addr}>{addr}</div>
            </div>
            <div className={styles.viewport} ref={vpRef}>
              <iframe
                key="pc"
                className={styles.frame}
                src={url}
                style={frameStyle}
                title="실제 사이트 (PC)"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className={styles.phone}>
            <span className={styles.notch} />
            <div className={styles.viewport} ref={vpRef}>
              <iframe
                key="mobile"
                className={styles.frame}
                src={url}
                style={frameStyle}
                title="실제 사이트 (모바일)"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
