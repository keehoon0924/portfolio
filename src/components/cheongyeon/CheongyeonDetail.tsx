import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 1) 케이스 스터디 슬라이드(kv → style-guide → 1~5) — 전체 폭
 * 2) 실제 배포 사이트 라이브 미리보기 — 아임웹 방식
 *    · 딤 처리된 어두운 배경 + PC/모바일 토글
 *    · 실제 사이트(반응형)를 창에 임베드, 데스크탑 폭으로 렌더 후 창에 맞게 축소
 */
const slides = ["kv", "style-guide", "1", "2", "3", "4", "5"];

/** 실제 배포 사이트 주소 */
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";

/** 각 디바이스에서 사이트를 렌더할 논리적 가로폭(px) */
const DESIGN_W = { pc: 1440, mobile: 390 } as const;

type Device = keyof typeof DESIGN_W;

export function CheongyeonDetail({ onClose }: { onClose: () => void }) {
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

        {/* 실제 사이트 라이브 미리보기 — 딤 배경 + PC/모바일 토글 */}
        <section className={styles.live}>
          <div
            className={styles.toggle}
            role="tablist"
            aria-label="디바이스 미리보기"
          >
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
                  <div className={styles.addr}>cheongyeon-amber.vercel.app</div>
                </div>
                <div className={styles.viewport} ref={vpRef}>
                  <iframe
                    key="pc"
                    className={styles.frame}
                    src={LIVE_URL}
                    style={frameStyle}
                    title="청연 실제 사이트 (PC)"
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
                    src={LIVE_URL}
                    style={frameStyle}
                    title="청연 실제 사이트 (모바일)"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
