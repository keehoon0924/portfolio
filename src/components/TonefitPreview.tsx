import { Reveal } from "./Reveal";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { tonefitAssets } from "@/data/works";
import styles from "./TonefitPreview.module.css";

export function TonefitPreview() {
  const laptopImg = useAutoScroll();
  const phoneImg = useAutoScroll();

  return (
    <section id="tonefit-pc" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.label}>◇ 반응형 실행 — PC · 모바일 전체</Reveal>
        <Reveal as="h3" delay={0.04} className={styles.heading}>
          한 화면이 아니라, 전 기기 경험을 직접 설계했습니다.
        </Reveal>

        <Reveal delay={0.1} className={styles.grid}>
          {/* LAPTOP (MacBook) */}
          <div className={styles.laptopCol}>
            <div className={styles.laptop}>
              <div className={styles.lid}>
                <div className={styles.camera} />
                <div className={styles.lidScreen}>
                  <div className={styles.lidViewport}>
                    <img
                      ref={laptopImg}
                      src={tonefitAssets.livePreviewPc}
                      alt="TONE:FIT 데스크탑 메인"
                      className={styles.autoImg}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.deck}>
                <div className={styles.hinge} />
                <div className={styles.keyboard}>
                  <div className={styles.keyRow} />
                  <div className={styles.keyRow} />
                  <div className={styles.keyRow} />
                  <div className={styles.keyRow} />
                </div>
                <div className={styles.trackpad} />
              </div>
            </div>
            <span className={styles.caption}>DESKTOP (반응형 뷰) — 자동 스크롤</span>
          </div>

          {/* PHONE */}
          <div className={styles.phoneCol}>
            <div className={styles.phone}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <img
                  ref={phoneImg}
                  src={tonefitAssets.livePreviewMobile}
                  alt="TONE:FIT 모바일 전체 페이지"
                  className={styles.autoImg}
                />
              </div>
            </div>
            <span className={styles.caption}>MOBILE — 자동 스크롤</span>
          </div>
        </Reveal>

        <Reveal delay={0.2} className={styles.cta}>
          <span className={styles.ctaNote}>화면은 자동으로 스크롤됩니다</span>
        </Reveal>
      </div>
    </section>
  );
}
