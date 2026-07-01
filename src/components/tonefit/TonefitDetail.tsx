import { Reveal } from "../Reveal";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 상세 소개 페이지 (WORK 카드 클릭 시 오버레이로 열림).
 * 레퍼런스(티엘라 바디크림 상세) 구조를 그대로 따르고 내용은 TONE:FIT으로 작성.
 * 5개 섹션: ① Hero(목업) ② Concept Explain ③ Desk research
 *          ④ User research ⑤ IMC 전략
 * 목업/스크린샷 이미지는 추후 전달 예정 → 현재는 빈 프레임 플레이스홀더.
 */

/** ③ 시장 규모 전망 (만 달러) — 2024~2033 */
const marketSeries = [
  { year: "2024", v: 792 },
  { year: "2025", v: 861 },
  { year: "2026", v: 930 },
  { year: "2027", v: 1005 },
  { year: "2028", v: 1087 },
  { year: "2029", v: 1176 },
  { year: "2030", v: 1271 },
  { year: "2031", v: 1380 },
  { year: "2032", v: 1498 },
  { year: "2033", v: 1653 },
];

/** ④ 사용자 리서치 페르소나 */
const personas = [
  {
    emoji: "🙍‍♀️",
    name: "김수아",
    meta: "18세 · 고등학생",
    quote: "일반 네컷은 다 비슷하게 느껴져요",
    sub: "친구와 함께 즐길 특별한 공간의 부재",
  },
  {
    emoji: "💁‍♀️",
    name: "박예린",
    meta: "22세 · 대학생",
    quote: "내 퍼스널 컬러에 맞는 사진을 남기고 싶어요",
    sub: "퍼스널 컬러 진단은 비싸고 부담스러움",
  },
  {
    emoji: "🧑‍💼",
    name: "이다은",
    meta: "26세 · 직장인",
    quote: "특별한 추억을 남길 공간이 필요해요",
    sub: "매번 비슷한 코스와 기록 방법의 반복",
  },
  {
    emoji: "🙆‍♀️",
    name: "최유나",
    meta: "22세 · 퍼스널컬러 팬",
    quote: "조명이 나빠 피부톤이 칙칙하게 나와요",
    sub: "무보정 화보 퀄리티에 대한 니즈",
  },
];

/** ⑤ IMC 3단계 전략 */
const imc = [
  {
    tag: "IMC Strategy 1",
    emoji: "👀",
    title: "브랜드 인지 단계",
    body: "온·오프라인 채널로 브랜드 접근성을 높이고, 기존 무인 포토부스와의 차별점(AI 퍼스널 컬러)을 명확히 각인시킵니다.",
  },
  {
    tag: "IMC Strategy 2",
    emoji: "💡",
    title: "경험·신뢰 단계",
    body: "30초 AI 스캔과 맞춤 촬영을 직접 경험하게 하여, 데이터·기술 기반 브랜드에 대한 신뢰를 형성합니다.",
  },
  {
    tag: "IMC Strategy 3",
    emoji: "🗣️",
    title: "확산·재방문 단계",
    body: "콜라보 프레임과 SNS 인증 요소로 화제성을 만들어, 고객의 자발적 공유와 재방문을 자연스럽게 유도합니다.",
  },
];

function MarketLineChart() {
  const w = 320;
  const h = 170;
  const pad = { l: 8, r: 8, t: 16, b: 24 };
  const min = 700;
  const max = 1700;
  const n = marketSeries.length;
  const x = (i: number) => pad.l + (i * (w - pad.l - pad.r)) / (n - 1);
  const y = (v: number) =>
    h - pad.b - ((v - min) / (max - min)) * (h - pad.t - pad.b);

  const line = marketSeries.map((d, i) => `${x(i)},${y(d.v)}`).join(" ");
  const area = `${x(0)},${h - pad.b} ${line} ${x(n - 1)},${h - pad.b}`;

  return (
    <svg
      className={styles.chartSvg}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="한국 포토부스 시장 규모 전망"
    >
      <polygon points={area} className={styles.chartArea} />
      <polyline points={line} className={styles.chartLine} />
      {marketSeries.map((d, i) => (
        <circle key={d.year} cx={x(i)} cy={y(d.v)} r="2.6" className={styles.chartDot} />
      ))}
      <circle cx={x(n - 1)} cy={y(marketSeries[n - 1].v)} r="4.4" className={styles.chartDotEnd} />
    </svg>
  );
}

export function TonefitDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="TONE:FIT 프로젝트 상세">
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* ① Hero — 카테고리·개요 + 폰 목업 */}
        <section className={styles.hero}>
          <Reveal className={styles.heroText}>
            <p className={styles.category}>UI/UX · Web / Contents Design</p>
            <h2 className={styles.heroTitle}>
              TONE:FIT
              <br />
              브랜드 웹 · 콘텐츠
            </h2>

            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Overview</h4>
              <p className={styles.blockBody}>
                TONE:FIT은 AI 퍼스널 컬러 기술로 ‘나에게 맞는 색’을 찾아주는 무인
                프리미엄 포토 스튜디오입니다. 유행이 아닌 데이터와 기술로
                차별화하여, 고객에게는 무결점 화보 경험을, 예비 창업자에게는 무인
                고수익 모델을 제안합니다. 시장·사용자 리서치부터 브랜드
                아이덴티티, 웹·콘텐츠 디자인까지의 과정을 담았습니다.
              </p>
            </div>

            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Participation</h4>
              <p className={styles.blockBody}>브랜드 기획 · UI/UX 디자인 · 콘텐츠 제작</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={styles.phones}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`${styles.phone} ${styles[`phone${i}`]}`}>
                <span className={styles.phoneNotch} />
                <span className={styles.phoneHint}>이미지 준비 중</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ② Concept Explain — 좌측 설명 + PC 화면 갤러리 */}
        <section className={styles.concept}>
          <Reveal className={styles.conceptText}>
            <h4 className={styles.blockLabel}>Concept Explain</h4>
            <p className={styles.blockBody}>
              ‘클린-테크(Clean-Tech)’를 핵심 무드로, 오프화이트와 포인트
              오렌지를 활용해 갤러리 같은 신뢰감을 설계했습니다. 1px 헤어라인
              그리드와 글래스모피즘으로 정교한 기술 이미지를 전달하고, 사진과
              콘텐츠가 돋보이도록 여백과 위계를 정리해 가독성을 높였습니다.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.conceptGallery}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.shotPh}>
                <span>화면 {i + 1}</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ③ Desk research — 시장·소비자 리서치 */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <p className={styles.headLabel}>Desk research</p>
            <h3 className={styles.headTitle}>
              성장하는 포토부스 시장, 그러나 깊어지는 경쟁
            </h3>
            <p className={styles.headDesc}>
              포토부스 시장은 빠르게 성장하고 있지만, 브랜드 수가 급증하며 유사한
              촬영 경험이 반복되고 있습니다. 소비자는 조명·색감·개인화 경험에서
              뚜렷한 불만을 느끼고 있었습니다.
            </p>
          </Reveal>

          <div className={styles.cards2}>
            <Reveal className={styles.dataCard}>
              <div className={styles.dataTitle}>현재 포토부스 이용 시 불편한 점</div>
              {[
                { k: "조명·배경 불만족", v: 67 },
                { k: "색감 불만족", v: 82 },
                { k: "반려동물 동반 촬영 어려움", v: 91 },
              ].map((b) => (
                <div key={b.k} className={styles.barRow}>
                  <div className={styles.barTop}>
                    <span>{b.k}</span>
                    <span className={styles.barVal}>{b.v}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.08} className={styles.dataCard}>
              <div className={styles.dataTitle}>
                한국 포토부스 시장 규모 전망
                <span className={styles.dataUnit}>단위: 만 달러</span>
              </div>
              <div className={styles.cagr}>CAGR 8.36%</div>
              <MarketLineChart />
              <div className={styles.chartFoot}>
                <div>
                  <span className={styles.chartFootV}>792</span>
                  <span className={styles.chartFootL}>2024</span>
                </div>
                <div>
                  <span className={styles.chartFootV}>1,653</span>
                  <span className={styles.chartFootL}>2033</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ④ User research — 페르소나 4종 */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <p className={styles.headLabel}>User research</p>
            <h3 className={styles.headTitle}>
              왜 기존 포토부스는 ‘나만의 만족’을 주지 못했을까?
            </h3>
            <p className={styles.headDesc}>
              10-20대를 중심으로 심층 인터뷰를 진행한 결과, 대부분의 포토부스는
              비슷한 환경과 결과물을 반복할 뿐 ‘나에게 맞는’ 경험을 주지 못하고
              있었습니다.
            </p>
          </Reveal>

          <div className={styles.personaGrid}>
            {personas.map((p) => (
              <Reveal key={p.name} className={styles.personaCard}>
                <div className={styles.personaTop}>
                  <span className={styles.avatar}>{p.emoji}</span>
                  <div>
                    <div className={styles.personaName}>{p.name}</div>
                    <div className={styles.personaMeta}>{p.meta}</div>
                  </div>
                </div>
                <p className={styles.personaQuote}>“{p.quote}”</p>
                <p className={styles.personaSub}>{p.sub}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ⑤ IMC 전략 — 3단계 */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <h3 className={styles.headTitle}>
              브랜드 경험을 확산하는 TONE:FIT IMC 전략
            </h3>
            <p className={styles.headDesc}>
              온·오프라인의 경계를 넘어 일관되고 설득력 있는 브랜드 메시지를
              전달하고, 고객의 자발적 공유를 이끌어내기 위해 3단계 IMC 전략을
              설계했습니다.
            </p>
          </Reveal>

          <div className={styles.cards3}>
            {imc.map((c) => (
              <Reveal key={c.tag} className={styles.imcCard}>
                <span className={styles.imcTag}>{c.tag}</span>
                <span className={styles.imcEmoji}>{c.emoji}</span>
                <div className={styles.imcTitle}>{c.title}</div>
                <p className={styles.imcBody}>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
