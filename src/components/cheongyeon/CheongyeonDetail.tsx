import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 구성
 *  1) 케이스 스터디 슬라이드 이미지 스택 (kv → style-guide → 1~5)
 *  2) 실제 배포된 청연 메인페이지 전체 캡처 — 브라우저 창에 크게·가운데로
 *
 * 이미지 경로: public/assets/cheongyeon/{name}.png
 */
const images = ["kv", "style-guide", "1", "2", "3", "4", "5"];

/** 실제 배포 사이트 주소 */
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";

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
        {/* ① 케이스 스터디 슬라이드 */}
        {images.map((name, i) => (
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

        {/* ② 실제 배포된 청연 메인페이지 — 브라우저 창에 크게·가운데 */}
        <section className={styles.live}>
          <Reveal className={styles.liveHead}>
            <p className={styles.liveEyebrow}>Live Site</p>
            <h3 className={styles.liveTitle}>
              직접 디자인·개발한 청연 메인페이지
            </h3>
            <p className={styles.liveDesc}>
              브랜딩부터 퍼블리싱·SEO까지 직접 완성해 실제 배포한 사이트입니다.
              아래는 메인페이지 전체 화면이에요. 실제 사이트에서는 스크롤
              인터랙션과 애니메이션이 살아 움직입니다.
            </p>
            <a
              className={styles.liveBtn}
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              실제 사이트 열기 ↗
            </a>
          </Reveal>

          <Reveal className={styles.browserWrap}>
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <div className={styles.addr}>cheongyeon-amber.vercel.app</div>
              </div>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.shotLink}
                aria-label="청연 사이트 새 탭에서 열기"
              >
                <img
                  className={styles.liveShot}
                  src="/assets/cheongyeon/live-full.jpg"
                  alt="청연 메인페이지 전체 화면"
                  loading="lazy"
                />
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
