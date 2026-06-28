import { useRef } from "react";
import { Reveal } from "./Reveal";
import styles from "./TonefitCase.module.css";

export function TonefitCase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="tonefit-case" className={styles.section}>

      {/* ── 01 · Jobpang 스타일 Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>

          {/* 왼쪽 텍스트 */}
          <Reveal className={styles.heroLeft}>
            <div className={styles.brandRow}>
              <span className={styles.brandDot} />
              <span className={styles.brandName}>TONE:FIT</span>
            </div>
            <div className={styles.category}>UI/UX Design · Brand Launch</div>
            <h2 className={styles.heroTitle}>
              AI 퍼스널 컬러<br />무인 사진 스튜디오
            </h2>
            <table className={styles.metaTable}>
              <tbody>
                <tr>
                  <td className={styles.metaKey}>진행 방식</td>
                  <td className={styles.metaVal}>팀프로젝트로 진행</td>
                </tr>
                <tr>
                  <td className={styles.metaKey}>기간</td>
                  <td className={styles.metaVal}>2주</td>
                </tr>
                <tr>
                  <td className={styles.metaKey}>역할</td>
                  <td className={styles.metaVal}>UI/UX 디자인, 브랜드 기획, AI 이미지·영상 제작</td>
                </tr>
                <tr>
                  <td className={styles.metaKey}>기여도</td>
                  <td className={styles.metaVal}>디자인 파트 참여 / 브랜드·UI 화면·AI 이미지·영상 제작 담당</td>
                </tr>
                <tr>
                  <td className={styles.metaKey}>사용 툴</td>
                  <td className={styles.metaVal}>Figma, ChatGPT, AI 이미지 툴, AI 영상 툴</td>
                </tr>
              </tbody>
            </table>
          </Reveal>

          {/* 오른쪽 모니터 목업 */}
          <Reveal delay={0.1} className={styles.heroRight}>
            <div className={styles.monitor}>
              <div className={styles.monitorFrame}>
                <div className={styles.monitorBar}>
                  <span className={styles.dot} style={{ background: "#ff5f57" }} />
                  <span className={styles.dot} style={{ background: "#ffbd2e" }} />
                  <span className={styles.dot} style={{ background: "#28c840" }} />
                </div>
                <div className={styles.monitorScreen}>
                  <img
                    src="/works/tonefit/identity-kv.webp"
                    alt="TONE:FIT 키오스크 화면"
                    className={styles.monitorImg}
                  />
                </div>
              </div>
              <div className={styles.monitorNeck} />
              <div className={styles.monitorBase} />
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── 02 · Overview & Brand Story ── */}
      <div className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <Reveal className={styles.overviewLeft}>
            <span className={styles.sectionNum}>01</span>
            <h3 className={styles.overviewTitle}>Overview</h3>
            <p className={styles.overviewBody}>
              TONE:FIT은 AI 기반 퍼스널 컬러 분석 기술을 결합한 무인 사진 스튜디오 프랜차이즈 브랜드입니다.
              피부 톤을 30초 만에 분석하고 최적의 조명·배경을 자동으로 세팅해 전문가 없이도 최상의 결과물을 제공합니다.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.overviewRight}>
            <div className={styles.brandStoryCard}>
              <span className={styles.brandStoryLabel}>Brand Story</span>
              <p className={styles.brandStoryBody}>
                <strong>TONE</strong>은 피부 고유의 색, <strong>FIT</strong>은 그 사람에게 완벽히 맞는 조화.
                창업자의 불편함에서 시작해 '데이터로 증명하는 개인화 뷰티 경험'을 만들었습니다.
              </p>
              <img
                src="/works/tonefit/tone-fit-about-brand.webp"
                alt="TONE:FIT 브랜드 스토리"
                className={styles.brandStoryImg}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── 03 · 풀 블리드 이미지 ── */}
      <Reveal className={styles.fullBleed}>
        <img
          src="/works/tonefit/identity-space01.webp"
          alt="TONE:FIT 스튜디오 공간"
          className={styles.fullBleedImg}
        />
        <div className={styles.fullBleedCaption}>
          <span>AI 무인 스튜디오 — 24시간 운영 공간</span>
        </div>
      </Reveal>

      {/* ── 04 · 3 모바일 목업 ── */}
      <div className={styles.mobilesSection}>
        <div className={styles.mobilesInner}>
          <Reveal className={styles.mobilesHead}>
            <span className={styles.sectionNum}>02</span>
            <h3 className={styles.mobilesTitle}>Mobile Experience</h3>
            <p className={styles.mobilesDesc}>AI 퍼스널 컬러 분석부터 프레임 선택, 완성 사진까지 — 모바일 친화적 UX</p>
          </Reveal>

          <div className={styles.mobilesGrid}>
            <Reveal delay={0} className={styles.phoneWrap}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <img src="/works/tonefit/kiosk-background.webp" alt="배경 선택" className={styles.phoneImg} />
                </div>
                <div className={styles.phoneButton} />
              </div>
              <p className={styles.phoneCaption}>배경·조명 자동 선택</p>
            </Reveal>

            <Reveal delay={0.08} className={`${styles.phoneWrap} ${styles.phoneCenter}`}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <img src="/works/tonefit/ai-personal-match-best.webp" alt="AI 퍼스널 컬러" className={styles.phoneImg} />
                </div>
                <div className={styles.phoneButton} />
              </div>
              <p className={styles.phoneCaption}>AI 퍼스널 컬러 분석</p>
            </Reveal>

            <Reveal delay={0.16} className={styles.phoneWrap}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <video
                    ref={videoRef}
                    src="/works/tonefit/soon.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.phoneVideo}
                  />
                </div>
                <div className={styles.phoneButton} />
              </div>
              <p className={styles.phoneCaption}>브랜드 필름 · 자동재생</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── 05 · CTA ── */}
      <Reveal className={styles.ctaSection}>
        <a
          href="https://ad-portfolio-tonefitcom.netlify.app"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
        >
          실제 사이트 방문 ↗
        </a>
      </Reveal>

    </section>
  );
}
