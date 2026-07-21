import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import { CaseImage } from "./CaseImage";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 케이스 스터디 (WORK 카드 클릭 시 오버레이).
 * 비핸스 스타일 세로 스크롤 — 한 포인트 = 한 이미지로 명확히 분리.
 * 이중 페르소나: 유저 경험을 창업주(B2B) 세일즈 근거로 재활용한 설계.
 * 이미지 경로: /assets/tonefit/*  (없으면 CaseImage가 파일명 플레이스홀더)
 */

const IMG = "/assets/tonefit";
const CASE = "/assets/tonefit-case";
const LIVE_URL = "https://ad-portfolio-tonefitcom.netlify.app";
const GITHUB_URL = "https://github.com/keehoon0924/tone-fit";

/* ── 01 메타 ── */
const META: [string, string][] = [
  ["Type", "Team Project"],
  ["Period", "TODO — 사용자 확인"],
  ["Role", "웹 기획 · UI 디자인 · 퍼블리싱"],
  ["Tools", "Figma · HTML · CSS · JS(GSAP) · Kakao Map API"],
];

/* ── 02 데이터 카드 ── */
const DATA = [
  {
    num: "46.5%",
    label: "20대의 절반 가까이가 이미 퍼스널컬러를 받아봤다",
    cap: "찍고 싶은 마음은 이미 충분한데,",
    note: "엠브레인 트렌드모니터 2024 · 20–39세 1,200명",
  },
  {
    num: "30만 원",
    label: "전문가에게 직접 받으면 한 번에 이 정도",
    cap: "가격이 문 앞을 막고 있었습니다. 그 틈을 AI·무인으로 파고들었습니다.",
    note: "업계 평균 진단가 기준",
  },
];

/* ── 03 두 갈래 저니 ── */
const USER_JOURNEY = [
  { step: "발견", desc: "SNS 인증샷" },
  { step: "탐색", desc: "브랜드·프레임 구경", tag: "Main" },
  { step: "욕구", desc: "“나도 저렇게”" },
  { step: "신뢰", desc: "무인 이용법 확인", tag: "Kiosk" },
  { step: "방문·촬영", desc: "매장 방문", tag: "Store" },
  { step: "공유", desc: "프레임 업로드" },
];
const OWNER_JOURNEY = [
  { step: "관심", desc: "창업 아이템 탐색" },
  { step: "검증", desc: "유저 반응 확인", tag: "Viral" },
  { step: "차별성", desc: "AI·콜라보·반려동물" },
  { step: "신뢰", desc: "운영·원격지원" },
  { step: "상담", desc: "창업 상담", tag: "Startup" },
];

/* ── 04 컬러 ── */
const COLORS = [
  { name: "Terracotta", hex: "#D4734A", note: "Primary · 따뜻한 조명빛" },
  { name: "Ink", hex: "#1E2022", note: "다크 섹션 · 헤드라인" },
  { name: "Charcoal", hex: "#4C4948", note: "본문" },
  { name: "Warm White", hex: "#F8F5F0", note: "기본 배경" },
  { name: "Clay", hex: "#BC8F76", note: "보조" },
  { name: "Light Gray", hex: "#F6F6F6", note: "교차 배경" },
];
const SEASONS = [
  { name: "봄 웜", hex: "#F6A98C" },
  { name: "여름 쿨", hex: "#9FB8D8" },
  { name: "가을 웜", hex: "#B5793C" },
  { name: "겨울 쿨", hex: "#8E3B5A" },
];

/* ── 05 유저 경험 포인트 (본문만 · 한 포인트 = 한 이미지) ── */
const UX_POINTS = [
  {
    desc: "TONE(색조·분위기)과 FIT(꼭 맞다)을 합친 이름입니다. ‘유행하는 색’이 아니라 ‘나에게 맞는 색’을 찾아준다는 방향을, 브랜드명과 첫 화면에서 먼저 정리하고 시작했습니다.",
    img: `${IMG}/tonefit-05a-identity.png`,
    alt: "TONE:FIT 브랜드 컨셉 — 색조와 어울림",
  },
  {
    desc: "인디핑크·로즈골드를 기본으로 Pinkish / Point Modern / Pure Modern 세 가지 무드로 공간을 구성했습니다. 어디서 찍어도 사진이 나오는 배경을 만들어, 사용자에게는 촬영 만족도를, 점주에게는 그대로 쓸 수 있는 인테리어 가이드를 함께 담았습니다.",
    img: `${CASE}/space-pc.png`,
    alt: "TONE:FIT 공간 컨셉 — 세 가지 무드",
  },
  {
    desc: "한 번 찍으면 다시 올 이유가 없다는 것이 셀프 스튜디오의 약점입니다. IP 콜라보 프레임을 매달 교체하는 구조로 만들어, 사용자에게는 다시 올 이유를, 점주에게는 별도 제작 없이 채워지는 콘텐츠를 확보하도록 설계했습니다.",
    img: `${IMG}/tonefit-05c-frame-1.png`,
    alt: "IP 콜라보 프레임",
  },
  {
    desc: "촬영은 세 단계입니다. 원하는 프레임과 배경을 고르고, 화면 안내에 따라 촬영하고, 결제와 출력까지 끝냅니다. 직원 없이 화면 안내만 따라가면 되도록 이용 흐름을 짰습니다.",
    img: `${IMG}/tonefit-05b-kiosk.png`,
    alt: "키오스크 이용 STEP",
  },
];

/* ── 06 유저→창업 리드 ── */
const OWNER_LEAD =
  "톤핏은 찍으러 오는 유저만큼, 매장을 여는 점주도 고객으로 봤습니다. 앞선 유저 경험을 근거로 — 인건비 없는 무인 운영, 3개월 누적 15만 건의 성장, 상권별 매출, 가맹 경쟁력, 계약 프로세스까지 — 한 흐름으로 정리해, 관심을 실제 창업 문의로 잇도록 구성했습니다.";

/** 섹션 라벨 (01 OVERVIEW 형식) */
function Label({ children }: { children: string }) {
  return <p className={styles.label}>{children}</p>;
}

/** 한 포인트 = 본문 + 점선 연결선 + 한 이미지 (제목·뱃지 없음) */
function Point({ desc, img, alt }: { desc: string; img: string; alt: string }) {
  return (
    <div className={styles.point}>
      <Reveal className={styles.pText}>
        <p className={styles.pDesc}>{desc}</p>
      </Reveal>
      <Reveal delay={0.08} className={styles.pMedia}>
        <CaseImage src={img} alt={alt} />
      </Reveal>
    </div>
  );
}

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

      <div className={styles.page}>
        {/* ══════════ 01 OVERVIEW ══════════ */}
        <section className={`${styles.section} ${styles.overview}`}>
          <Reveal className={styles.ovLeft}>
            <Label>01 OVERVIEW</Label>
            <h1 className={styles.ovTitle}>
              AI 퍼스널컬러 무인 포토스튜디오
              <br />
              <span className={styles.ovTitleSub}>
                창업 브랜딩 &amp; 웹 경험 디자인
              </span>
            </h1>
            <p className={styles.ovLead}>
              한 사이트, 두 사람 — 찍으러 오는 유저와 매장을 여는 창업주를 동시에
              설계했습니다.
            </p>
            <dl className={styles.meta}>
              {META.map(([k, v]) => (
                <div key={k} className={styles.metaRow}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className={styles.ovMock}>
            <div className={styles.desktopMock}>
              <div className={styles.desktopBar}>
                <span />
                <span />
                <span />
              </div>
              <CaseImage
                src={`${IMG}/tonefit-01-hero-pc.png`}
                alt="TONE:FIT 메인 히어로 (PC)"
              />
            </div>
            <CaseImage
              src={`${IMG}/tonefit-01-hero-mo.png`}
              alt="TONE:FIT 메인 히어로 (모바일)"
              phone
              className={styles.ovPhone}
            />
          </Reveal>
        </section>

        {/* ══════════ 02 BACKGROUND & GOAL ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>02 BACKGROUND &amp; GOAL</Label>
            <h2 className={styles.headTitle}>
              퍼스널컬러는 뜨는데, 왜 하필 ‘무인 매장’일까?
            </h2>
            <p className={styles.headLead}>
              찍고 싶은 유저와, 창업하려는 사업주. 두 사람의 고민을 한 번에
              풀어야 했습니다.
            </p>
          </Reveal>

          <div className={styles.dataGrid}>
            {DATA.map((d) => (
              <Reveal key={d.num} className={styles.dataCard}>
                <p className={styles.dataNum}>{d.num}</p>
                <p className={styles.dataLabel}>{d.label}</p>
                <p className={styles.dataCap}>{d.cap}</p>
                <p className={styles.dataNote}>{d.note}</p>
              </Reveal>
            ))}
            <Reveal className={`${styles.dataCard} ${styles.quoteCard}`}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.quoteText}>
                인생네컷은 이제 ‘찍는 곳’이 아니라 ‘공유하는 문화’가 됐습니다.
                톤핏은 퍼스널컬러를 그 문화 위에 얹는 방향으로 잡았습니다.
              </p>
              <p className={styles.quoteBy}>— 팀 기획 노트</p>
            </Reveal>
          </div>

          <Reveal className={styles.goalBox}>
            <div className={`${styles.goal} ${styles.goalUser}`}>
              <span className={styles.goalTag}>유저에게</span>
              <p className={styles.goalText}>
                ‘내 퍼컬 궁금한데’를 <b>‘가서 찍어보고 싶다’</b>로
              </p>
            </div>
            <div className={`${styles.goal} ${styles.goalOwner}`}>
              <span className={styles.goalTag}>창업주에게</span>
              <p className={styles.goalText}>
                ‘아이템 괜찮네’를 <b>‘나도 열어볼까’</b>로
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════ 03 DUAL PERSONA JOURNEY ══════════ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <Label>03 DUAL PERSONA JOURNEY</Label>
            <h2 className={styles.headTitle}>한 사이트를 걷는, 두 사람의 길.</h2>
          </Reveal>

          <Reveal className={styles.tracks}>
            <div className={`${styles.track} ${styles.trackUser}`}>
              <p className={styles.trackName}>USER · 찍으러 오는 사람</p>
              <div className={styles.trackLine}>
                {USER_JOURNEY.map((s) => (
                  <div key={s.step} className={styles.node}>
                    <span className={styles.nodeDot} />
                    <p className={styles.nodeStep}>{s.step}</p>
                    <p className={styles.nodeDesc}>{s.desc}</p>
                    {s.tag && <span className={styles.nodeTag}>{s.tag}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trackBridge} aria-hidden="true">
              <span className={styles.bridgeArrow} />
            </div>

            <div className={`${styles.track} ${styles.trackOwner}`}>
              <p className={styles.trackName}>OWNER · 매장을 여는 사람</p>
              <div className={styles.trackLine}>
                {OWNER_JOURNEY.map((s) => (
                  <div key={s.step} className={styles.node}>
                    <span className={styles.nodeDot} />
                    <p className={styles.nodeStep}>{s.step}</p>
                    <p className={styles.nodeDesc}>{s.desc}</p>
                    {s.tag && <span className={styles.nodeTag}>{s.tag}</span>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.bridgeCap}>
            유저가 남긴 ‘공유’가 그대로 점주의 ‘검증’ 근거가 됩니다. 유저 경험을
            제대로 설계할수록 창업 세일즈도 강해지는 구조로 잡았습니다.
          </Reveal>
        </section>

        {/* ══════════ 04 BRAND IDENTITY ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>04 BRAND IDENTITY</Label>
            <h2 className={styles.headTitle}>
              내 색을 찾아주는 브랜드라면, 색부터 달라야 한다고 봤습니다.
            </h2>
          </Reveal>

          <Reveal className={styles.subLabel}>COLOR GUIDE</Reveal>
          <Reveal className={styles.colorGrid}>
            {COLORS.map((c) => (
              <div key={c.name} className={styles.colorChip}>
                <span className={styles.swatch} style={{ background: c.hex }} />
                <p className={styles.colorName}>{c.name}</p>
                <p className={styles.colorHex}>{c.hex}</p>
                <p className={styles.colorNote}>{c.note}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className={styles.seasonRow}>
            {SEASONS.map((s) => (
              <div key={s.name} className={styles.seasonChip}>
                <span
                  className={styles.seasonSwatch}
                  style={{ background: s.hex }}
                />
                <span>{s.name}</span>
              </div>
            ))}
            <p className={styles.seasonCap}>
              콘텐츠 색은 4계절 톤으로 분리해, 브랜드 컬러와 부딪히지 않도록
              운용했습니다.
            </p>
          </Reveal>

          <Reveal className={styles.subLabel}>TYPOGRAPHY</Reveal>
          <Reveal className={styles.fontGrid}>
            <div className={styles.fontCard}>
              <p className={styles.fontSample}>내 컬러를 찾다</p>
              <p className={styles.fontName}>잘난고딕</p>
              <p className={styles.fontDesc}>헤드라인 · 발랄한 목소리</p>
            </div>
            <div className={styles.fontCard}>
              <p className={`${styles.fontSample} ${styles.fontBody}`}>
                Pretendard 본문
              </p>
              <p className={styles.fontName}>Pretendard</p>
              <p className={styles.fontDesc}>본문 · 정보의 안정감</p>
            </div>
          </Reveal>
        </section>

        {/* ══════════ 05 USER EXPERIENCE ══════════ */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <Label>05 USER EXPERIENCE</Label>
          </Reveal>

          <div className={styles.points}>
            {UX_POINTS.map((p) => (
              <Point key={p.img} {...p} />
            ))}
          </div>
        </section>

        {/* ══════════ 06 FROM USER TO OWNER ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>06 FROM USER TO OWNER</Label>
            <p className={styles.ownerLead}>{OWNER_LEAD}</p>
          </Reveal>

          {/* 창업 섹션 전체 캡처 — 브라우저 창(내부 스크롤)으로 통째 노출 */}
          <Reveal className={styles.startupWindow}>
            <div className={styles.winBar}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.winScroll}>
              <CaseImage
                src={`${CASE}/startup-pc.png`}
                alt="TONE:FIT 창업 안내 — 무인 운영 · 성장 지표 · 상권별 매출 · 가맹 경쟁력 · 계약 프로세스"
              />
            </div>
          </Reveal>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className={styles.cta}>
          <Reveal className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              기획한 브랜드 경험을, 실제 반응형 웹사이트로 완성했습니다.
            </h2>
            <div className={styles.ctaBtns}>
              <a
                className={styles.ctaPrimary}
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
              >
                View Live Site ↗
              </a>
              <a
                className={styles.ctaGhost}
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </section>

        {/* 실제 사이트 라이브 미리보기 (그대로 유지) */}
        <LiveSitePreview url={LIVE_URL} />
      </div>
    </div>
  );
}
