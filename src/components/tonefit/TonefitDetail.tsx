import { Reveal } from "../Reveal";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 상세 — rom& 스타일 케이스 스터디 프레젠테이션.
 * 흐름: Cover → Overview → Brand Identity → Background(01·02·03)
 *      → Project Goal(AS-IS→TO-BE) → Keywords → System(폰트·컬러)
 *      → Main Page(노트북 목업+주석) → Mobile(폰 목업+주석) → Closing
 * 문구·수치는 예시 placeholder — 실제 데이터로 교체 필요.
 */

const problems = [
  {
    no: "01",
    title: ["비슷한 촬영", "경험의 반복"],
    desc: "많은 선택지 속에서도 늘 비슷한 결과물을 반복했고, 조명·색감의 아쉬움이 남았어요.",
    img: "/assets/images/insta1.png",
  },
  {
    no: "02",
    title: ["브랜드 간", "차별화 부족"],
    desc: "대부분 비슷한 촬영 환경과 서비스를 제공해, 브랜드 간 차별점을 찾기 어려웠어요.",
    img: "/assets/images/insta2.png",
  },
  {
    no: "03",
    title: ["개인화·감성", "경험의 부재"],
    desc: "‘나에게 맞는’ 촬영과 감성적인 경험에 대한 수요가 채워지지 않았어요.",
    img: "/assets/images/insta3.png",
  },
];

const asIs = ["비슷한 촬영 경험", "차별화 부족", "개인화 부재"];
const toBe = ["AI 퍼스널 컬러 매칭", "무인 프리미엄 공간", "콜라보·바이럴 설계"];

const keywords = [
  { ko: "나다움", en: "My Own Tone", img: "/assets/images/insta1.png" },
  { ko: "정교함", en: "Precision", img: "/assets/images/insta2.png" },
  { ko: "감성", en: "Warmth", img: "/assets/images/insta4.png" },
];

const colors = [
  { hex: "#D4734A", name: "Main", desc: "사진이 가진 따뜻한 분위기와 감성적인 경험을 표현해요.", dark: true },
  { hex: "#F8F5F0", name: "Sub", desc: "부드럽고 편안한 무드를 더해 브랜드의 친근함을 전달해요." },
  { hex: "#F6F6F6", name: "Sub", desc: "사진과 콘텐츠가 돋보이도록 깔끔한 배경 역할을 해요." },
  { hex: "#4C4948", name: "Gray", desc: "안정감 있는 분위기로 브랜드의 신뢰감을 표현해요.", dark: true },
  { hex: "#1E2022", name: "Ink", desc: "중요한 정보와 콘텐츠를 명확하게 전달해요.", dark: true },
];

const pcNotes = [
  "PC 탐색에 최적화된 와이드 레이아웃으로 개선했어요.",
  "핵심 프로모션을 상단에 배치해 브랜드 메시지를 먼저 각인시켰어요.",
  "제품 탐색부터 예약까지 흐름을 단순하게 재구성했어요.",
];
const moNotes = [
  "모바일 환경에 맞춘 세로형 몰입 레이아웃으로 재설계했어요.",
  "엄지 동선을 고려해 주요 액션을 하단에 배치했어요.",
];

export function TonefitDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="TONE:FIT 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      {/* ① Cover */}
      <section className={styles.cover}>
        <div className={styles.inner}>
          <Reveal>
            <p className={styles.coverCat}>UI/UX · Web / Contents Design</p>
            <h1 className={styles.coverTitle}>TONE:FIT</h1>
            <p className={styles.coverSub}>
              AI 퍼스널 컬러로 ‘나에게 맞는 색’을 찾는
              <br />
              무인 프리미엄 포토 스튜디오 브랜드 웹·콘텐츠
            </p>
          </Reveal>
        </div>
      </section>

      {/* ② Overview */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <h2 className={styles.enTitle}>Overview</h2>
            <p className={styles.centerDesc}>
              유행이 아닌 <b>데이터와 기술</b>로 차별화하여, 고객에게는 무결점
              화보 경험을, 예비 창업자에게는 무인 고수익 모델을 제안합니다. 시장·
              사용자 리서치부터 브랜드 아이덴티티, 웹·콘텐츠 디자인까지의 과정을
              담았습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ③ Brand Identity — TONE + FIT */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <p className={styles.eyebrow}>TONE:FIT</p>
            <h2 className={styles.enTitle}>Brand Identity</h2>
          </Reveal>
          <div className={styles.identityCard}>
            <Reveal className={styles.idRow}>
              <div className={styles.idText}>
                <span className={styles.idBig}>
                  TONE <em>색조</em>
                </span>
                <p>고객 고유의 피부 톤과 분위기</p>
              </div>
              <span className={styles.idDots} aria-hidden="true">
                ○ ○ ○
              </span>
            </Reveal>
            <span className={styles.idPlus} aria-hidden="true">
              +
            </span>
            <Reveal delay={0.08} className={styles.idRow}>
              <div className={styles.idText}>
                <span className={styles.idBig}>
                  FIT <em>맞춤</em>
                </span>
                <p>기술로 완성하는 최적의 맞춤 세팅</p>
              </div>
              <span className={styles.idFrame} aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ④ Background — 01 · 02 · 03 */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={styles.enTitle}>Background</h2>
          </Reveal>
          <div className={styles.probGrid}>
            {problems.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.08} className={styles.probCard}>
                <div
                  className={styles.probImg}
                  style={{ backgroundImage: `url("${p.img}")` }}
                />
                <div className={styles.probBody}>
                  <h3 className={styles.probTitle}>
                    {p.title[0]}
                    <br />
                    {p.title[1]}
                  </h3>
                  <p className={styles.probDesc}>{p.desc}</p>
                </div>
                <span className={styles.probNo}>{p.no}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Project Goal — AS-IS → TO-BE */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <h2 className={styles.enTitle}>Project Goal</h2>
            <p className={styles.centerDesc}>
              브랜드 아이덴티티를 강화하면서 개선된 구조와 디자인을 통해 사용자
              만족도를 높이고 <b>예약 전환을 극대화</b>해야 해요.
            </p>
          </Reveal>

          <div className={styles.venn}>
            <div className={styles.vennRow}>
              <span className={styles.vennLabel}>AS IS</span>
              {asIs.map((t) => (
                <Reveal key={t} className={`${styles.circle} ${styles.circleOutline}`}>
                  <span>{t}</span>
                </Reveal>
              ))}
            </div>
            <div className={`${styles.vennRow} ${styles.vennRowTobe}`}>
              {toBe.map((t, i) => (
                <Reveal key={t} delay={i * 0.06} className={`${styles.circle} ${styles.circleFill}`}>
                  <span>{t}</span>
                </Reveal>
              ))}
              <span className={`${styles.vennLabel} ${styles.vennLabelTobe}`}>
                TO BE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Keywords */}
      <section className={`${styles.section} ${styles.kwBand}`}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={`${styles.enTitle} ${styles.enTitleLight}`}>Keywords</h2>
            <p className={styles.headSubLight}>
              프로젝트의 정체성을 확립하기 위해 세 개의 핵심 키워드를 설정해 디자인
              방향성을 구체화했어요.
            </p>
          </Reveal>
          <div className={styles.kwRow}>
            {keywords.map((k, i) => (
              <Reveal
                key={k.ko}
                delay={i * 0.08}
                className={`${styles.kwCard} ${i === 1 ? styles.kwTilt : ""}`}
              >
                <div
                  className={styles.kwImg}
                  style={{ backgroundImage: `url("${k.img}")` }}
                />
                <div className={styles.kwLabel}>
                  <span className={styles.kwKo}>{k.ko}</span>
                  <span className={styles.kwEn}>{k.en}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ System — 폰트 + 컬러 */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.leftHead}>
            <h2 className={styles.enTitle}>System</h2>
            <p className={styles.headSub}>
              브랜드 톤앤매너를 강화하기 위해 기존 로고와 조화로운 타이포와 브랜드
              이미지에 부합하는 컬러를 설정했어요.
            </p>
          </Reveal>

          <div className={styles.sysGrid}>
            <Reveal className={styles.fontBlock}>
              <div className={styles.fontTop}>
                <div>
                  <p className={styles.fontLabel}>Main Font</p>
                  <p className={styles.fontName}>Poppins · Pretendard</p>
                </div>
                <div className={styles.fontWeights}>
                  <span>Regular</span>
                  <span>Medium</span>
                  <b>Bold</b>
                </div>
              </div>
              <span className={styles.fontAa}>Aa</span>
            </Reveal>

            <div className={styles.colorBlock}>
              {colors.map((c) => (
                <Reveal
                  key={c.hex + c.name}
                  className={`${styles.swatch} ${c.dark ? styles.swatchDark : ""}`}
                  style={{ background: c.hex }}
                >
                  <div className={styles.swatchHead}>
                    <span className={styles.swatchName}>{c.name}</span>
                    <span className={styles.swatchHex}>{c.hex}</span>
                  </div>
                  <p className={styles.swatchDesc}>{c.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ Main Page — 노트북 목업 + 주석 */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <p className={styles.eyebrow}>Main Page</p>
            <h2 className={styles.koTitle}>
              몰입감 있는 <span className={styles.hl}>레이아웃</span>과 전체적인
              <span className={styles.hl}> 정보 구조</span> 변화
            </h2>
          </Reveal>

          <div className={styles.showcase}>
            <div className={`${styles.annCol} ${styles.annLeft}`}>
              {pcNotes.slice(0, 2).map((n) => (
                <Reveal key={n} className={styles.ann}>
                  <span className={styles.annDot} />
                  {n}
                </Reveal>
              ))}
            </div>

            <Reveal className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <img src="/assets/images/main-pc.png" alt="TONE:FIT 데스크탑 화면" loading="lazy" />
              </div>
              <div className={styles.laptopBase} />
            </Reveal>

            <div className={`${styles.annCol} ${styles.annRight}`}>
              {pcNotes.slice(2).map((n) => (
                <Reveal key={n} className={styles.ann}>
                  <span className={styles.annDot} />
                  {n}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑨ Mobile — 폰 목업 + 주석 */}
      <section className={`${styles.section} ${styles.bandSoft}`}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead}>
            <p className={styles.eyebrow}>Mobile</p>
            <h2 className={`${styles.koTitle} ${styles.koTitleLight}`}>
              모바일 환경에 맞춘 <span className={styles.hl}>몰입형</span> 재설계
            </h2>
          </Reveal>

          <div className={styles.showcaseMo}>
            <Reveal className={styles.phone}>
              <span className={styles.phoneNotch} />
              <img src="/assets/images/momain.png" alt="TONE:FIT 모바일 화면" loading="lazy" />
            </Reveal>
            <div className={styles.moNotes}>
              {moNotes.map((n) => (
                <Reveal key={n} className={styles.annLight}>
                  <span className={styles.annDot} />
                  {n}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑩ Closing */}
      <section className={styles.closing}>
        <Reveal>
          <p className={styles.closingSmall}>Thank you</p>
          <h2 className={styles.closingTitle}>TOGETHER DO BETTER</h2>
          <span className={styles.closingMark}>TONE:FIT</span>
        </Reveal>
        <div className={styles.thanksBar} aria-hidden="true">
          <span>THANK YOU FOR READING&nbsp;&nbsp;·&nbsp;&nbsp;THANK YOU FOR READING&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
      </section>
    </div>
  );
}
