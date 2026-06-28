import { useRef } from "react";
import { Reveal } from "./Reveal";
import styles from "./TonefitCase.module.css";

export function TonefitCase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="tonefit-case" className={styles.section}>

      {/* ── 01 · 프로젝트 헤더 ── */}
      <div className={styles.caseHeader}>
        <div className={styles.caseHeaderInner}>
          <Reveal>
            <div className={styles.caseLabel}>
              <span className={styles.caseLabelDot} />
              Team Project · Web · 2인 · 2주
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.caseTitle}>TONE:FIT</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.caseSubtitle}>
              AI 퍼스널 컬러 무인 스튜디오 — 유행이 아닌 데이터·기술로 승부하는 클린테크 브랜드
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={styles.caseTags}>
              <span className={styles.caseTag}>UI/UX 디자인</span>
              <span className={styles.caseTag}>브랜드 런칭</span>
              <span className={styles.caseTag}>이미지·영상 생성 AI</span>
              <span className={styles.caseTag}>반응형 웹</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── 02 · 노트북 목업 (Hero Shot) ── */}
      <Reveal className={styles.laptopSection}>
        <div className={styles.laptopWrap}>
          <div className={styles.laptop}>
            <div className={styles.laptopLid}>
              <div className={styles.laptopCamera} />
              <div className={styles.laptopScreen}>
                <img
                  src="/works/tonefit/identity-kv.webp"
                  alt="TONE:FIT 메인 화면"
                  className={styles.laptopImg}
                />
              </div>
            </div>
            <div className={styles.laptopBase}>
              <div className={styles.laptopKeyboard}>
                <div className={styles.kbRow} />
                <div className={styles.kbRow} />
                <div className={styles.kbRow} />
              </div>
              <div className={styles.laptopTrackpad} />
            </div>
          </div>
        </div>
        <p className={styles.laptopCaption}>TONE:FIT — 반응형 웹사이트</p>
      </Reveal>

      {/* ── 03 · Overview & Brand Story ── */}
      <div className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <Reveal className={styles.overviewLeft}>
            <span className={styles.sectionNum}>01</span>
            <h3 className={styles.overviewTitle}>Overview</h3>
            <p className={styles.overviewBody}>
              TONE:FIT은 AI 기반 퍼스널 컬러 분석 기술을 결합한 무인 사진 스튜디오 프랜차이즈 브랜드입니다.
              피부 톤을 30초 만에 분석하고 최적의 조명·배경을 자동으로 세팅해 전문가 없이도 최상의 결과물을 제공합니다.
            </p>
            <div className={styles.overviewMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>역할</span>
                <span className={styles.metaVal}>UI/UX 디자인, 브랜드 기획, AI 이미지·영상 제작</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>기간</span>
                <span className={styles.metaVal}>2주 (2인 팀)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>결과물</span>
                <span className={styles.metaVal}>반응형 웹사이트 (PC·모바일)</span>
              </div>
            </div>
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

      {/* ── 04 · 풀 블리드 이미지 ── */}
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

      {/* ── 05 · 3 모바일 목업 ── */}
      <div className={styles.mobilesSection}>
        <div className={styles.mobilesInner}>
          <Reveal className={styles.mobilesHead}>
            <span className={styles.sectionNum}>02</span>
            <h3 className={styles.mobilesTitle}>Mobile Experience</h3>
            <p className={styles.mobilesDesc}>AI 퍼스널 컬러 분석부터 프레임 선택, 완성 사진까지 — 모바일 친화적 UX</p>
          </Reveal>

          <div className={styles.mobilesGrid}>
            {/* Phone 1 */}
            <Reveal delay={0} className={styles.phoneWrap}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <img src="/works/tonefit/kiosk-background.webp" alt="키오스크 배경 선택" className={styles.phoneImg} />
                </div>
                <div className={styles.phoneButton} />
              </div>
              <p className={styles.phoneCaption}>배경·조명 자동 선택</p>
            </Reveal>

            {/* Phone 2 — center, elevated */}
            <Reveal delay={0.08} className={`${styles.phoneWrap} ${styles.phoneCenter}`}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <img src="/works/tonefit/ai-personal-match-best.webp" alt="AI 퍼스널 컬러 매칭" className={styles.phoneImg} />
                </div>
                <div className={styles.phoneButton} />
              </div>
              <p className={styles.phoneCaption}>AI 퍼스널 컬러 분석</p>
            </Reveal>

            {/* Phone 3 — video */}
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

      {/* ── 06 · 사이트 링크 CTA ── */}
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
