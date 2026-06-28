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

      {/* ── 05 · Problem (지그재그) ── */}
      <div className={styles.problemSection}>
        <div className={styles.zigzagInner}>

          <Reveal className={styles.zigzagSectionLabel}>
            <span className={styles.zigzagTag}>Problem</span>
            <h3 className={styles.zigzagSectionTitle}>발견한 문제</h3>
          </Reveal>

          {/* 문제 1 — 텍스트 왼쪽, 비주얼 오른쪽 */}
          <div className={styles.zigzagRow}>
            <Reveal className={styles.zigzagText}>
              <span className={styles.zigzagNum}>01</span>
              <h4 className={styles.zigzagTitle}>내 피부톤에 맞는<br/>조명·배경을 알 수 없다</h4>
              <p className={styles.zigzagDesc}>
                일반 무인 사진관은 조명과 배경이 고정되어 있어 피부톤에 따라 결과물 차이가 크다.
                고객은 촬영 전 어떤 설정이 자신에게 맞는지 알 방법이 없다.
              </p>
            </Reveal>
            <Reveal delay={0.08} className={styles.zigzagVisual}>
              <div className={styles.problemCard}>
                <div className={styles.problemCardIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="18" r="10" stroke="#e8895b" strokeWidth="2"/>
                    <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#e8895b" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M36 10l4-4M38 16h4M34 8l2-4" stroke="#e8895b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className={styles.problemCardText}>
                  "내 피부톤이 웜톤인지 쿨톤인지도 모르는데<br/>배경을 어떻게 골라요?"
                </p>
                <span className={styles.problemCardQuote}>— 실제 고객 불만</span>
              </div>
            </Reveal>
          </div>

          {/* 문제 2 — 비주얼 왼쪽, 텍스트 오른쪽 */}
          <div className={`${styles.zigzagRow} ${styles.zigzagRowReverse}`}>
            <Reveal className={styles.zigzagVisual}>
              <div className={styles.problemCard}>
                <div className={styles.problemCardIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="4" stroke="#e8895b" strokeWidth="2"/>
                    <path d="M20 24l-4 4 4 4M28 24l4 4-4 4" stroke="#e8895b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="8" r="3" stroke="#e8895b" strokeWidth="2"/>
                  </svg>
                </div>
                <p className={styles.problemCardText}>
                  "무인이라 도움받기도 어렵고<br/>결과물이 기대보다 훨씬 별로였어요."
                </p>
                <span className={styles.problemCardQuote}>— 실제 고객 불만</span>
              </div>
            </Reveal>
            <Reveal delay={0.08} className={styles.zigzagText}>
              <span className={styles.zigzagNum}>02</span>
              <h4 className={styles.zigzagTitle}>무인 기기지만<br/>퀄리티에 대한 불신</h4>
              <p className={styles.zigzagDesc}>
                전문가 없이 혼자 조작해야 한다는 불안감, 그리고 실제로 낮은 퀄리티의 경험이
                반복되며 무인 사진관 전체에 대한 신뢰가 낮아졌다.
              </p>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── 06 · Solution (지그재그) ── */}
      <div className={styles.solutionSection}>
        <div className={styles.zigzagInner}>

          <Reveal className={styles.zigzagSectionLabel}>
            <span className={`${styles.zigzagTag} ${styles.zigzagTagDark}`}>Solution</span>
            <h3 className={styles.zigzagSectionTitle} style={{color:'#fff'}}>만들어낸 해결책</h3>
          </Reveal>

          {/* 해결 1 — 텍스트 왼쪽, 화면 오른쪽 */}
          <div className={styles.zigzagRow}>
            <Reveal className={styles.zigzagText}>
              <span className={`${styles.zigzagNum} ${styles.zigzagNumLight}`}>01</span>
              <h4 className={`${styles.zigzagTitle} ${styles.zigzagTitleLight}`}>AI 퍼스널컬러 분석</h4>
              <p className={`${styles.zigzagDesc} ${styles.zigzagDescLight}`}>
                키오스크 카메라가 피부톤을 30초 만에 분석하고 웜·쿨·뉴트럴 중
                어떤 톤인지 알려준다. 분석 결과를 바탕으로 최적의 조명과 배경을 자동 추천.
              </p>
            </Reveal>
            <Reveal delay={0.08} className={styles.zigzagScreen}>
              <img src="/works/tonefit/ai-personal-match-best.webp" alt="AI 퍼스널컬러 분석" className={styles.zigzagScreenImg}/>
            </Reveal>
          </div>

          {/* 해결 2 — 화면 왼쪽, 텍스트 오른쪽 */}
          <div className={`${styles.zigzagRow} ${styles.zigzagRowReverse}`}>
            <Reveal className={styles.zigzagScreen}>
              <img src="/works/tonefit/kiosk-background.webp" alt="배경·조명 자동 선택" className={styles.zigzagScreenImg}/>
            </Reveal>
            <Reveal delay={0.08} className={styles.zigzagText}>
              <span className={`${styles.zigzagNum} ${styles.zigzagNumLight}`}>02</span>
              <h4 className={`${styles.zigzagTitle} ${styles.zigzagTitleLight}`}>배경·조명 자동 선택</h4>
              <p className={`${styles.zigzagDesc} ${styles.zigzagDescLight}`}>
                분석된 퍼스널컬러 데이터를 기반으로 어울리는 배경색과 조명 강도를
                자동 세팅. 고객이 직접 고를 필요 없이 전문가 수준의 결과물이 완성된다.
              </p>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── 07 · Result Gallery ── */}
      <div className={styles.gallerySection}>
        <div className={styles.galleryInner}>
          <Reveal className={styles.gallerySectionLabel}>
            <span className={styles.zigzagTag}>Result</span>
            <h3 className={styles.zigzagSectionTitle}>완성된 결과물</h3>
          </Reveal>
          <div className={styles.galleryGrid}>
            {[
              "/works/tonefit/identity-kv.webp",
              "/works/tonefit/ai-personal-match-1.webp",
              "/works/tonefit/ai-personal-match-2.webp",
              "/works/tonefit/kiosk-how01.webp",
              "/works/tonefit/kiosk-how02.webp",
              "/works/tonefit/kiosk-how03.webp",
              "/works/tonefit/kiosk-frame01.webp",
              "/works/tonefit/kiosk-frame02.webp",
              "/works/tonefit/tone-fit-about-brand.webp",
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.04} className={styles.galleryItem}>
                <img src={src} alt="" className={styles.galleryImg}/>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── 08 · CTA ── */}
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
