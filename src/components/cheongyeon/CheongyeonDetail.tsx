import { useState } from "react";
import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 1) 케이스 스터디 슬라이드(kv → style-guide → 1~5) — 전체 폭
 * 2) PC/모바일 토글 미리보기 — 고정 창 안에서 스크롤(아임웹 방식)
 *    · PC   → /assets/cheongyeon/live-full.jpg
 *    · 모바일 → /assets/cheongyeon/live-mobile.jpg  (없으면 자리표시)
 */
const slides = ["kv", "style-guide", "1", "2", "3", "4", "5"];

const PC_SRC = "/assets/cheongyeon/live-full.jpg";
/** 모바일 캡처를 넣기 전까진 null → 자리표시 노출 */
const MOBILE_SRC: string | null = null;

type Device = "pc" | "mobile";

export function CheongyeonDetail({ onClose }: { onClose: () => void }) {
  const [device, setDevice] = useState<Device>("pc");

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

        {/* PC / 모바일 토글 미리보기 */}
        <section className={styles.preview}>
          <Reveal>
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
          </Reveal>

          <Reveal className={styles.stage}>
            {device === "pc" ? (
              <div className={styles.pcFrame}>
                <div className={styles.pcBar}>
                  <span className={styles.pcDot} />
                  <span className={styles.pcDot} />
                  <span className={styles.pcDot} />
                </div>
                <div className={styles.pcScroll}>
                  <img
                    className={styles.shot}
                    src={PC_SRC}
                    alt="청연 PC 버전 화면"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScroll}>
                  {MOBILE_SRC ? (
                    <img
                      className={styles.shot}
                      src={MOBILE_SRC}
                      alt="청연 모바일 버전 화면"
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.phonePlaceholder}>
                      <span className={styles.phEmoji}>📱</span>
                      모바일 화면 이미지를
                      <br />
                      여기에 넣을 예정
                    </div>
                  )}
                </div>
              </div>
            )}
          </Reveal>
        </section>
      </div>
    </div>
  );
}
