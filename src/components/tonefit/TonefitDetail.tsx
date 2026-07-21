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
    cap: "가격이 문 앞을 막고 있었어요. 그 틈을 AI·무인이 파고듭니다.",
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

/* ── 05 유저 경험 포인트 (한 포인트 = 한 이미지) ── */
const UX_POINTS = [
  {
    tag: "브랜드 첫인상",
    title: "이름 세 글자에, 브랜드를 다 담았다.",
    desc: "TONE(색조·분위기) 그리고 FIT(꼭 맞다). ‘유행 말고 나한테 맞는 색’이라는 한마디를, 들어오자마자 느끼게 했어요.",
    img: "tonefit-05a-identity",
    alt: "TONE:FIT 브랜드 컨셉 — 색조와 어울림",
  },
  {
    tag: "실패 없는 한 장",
    title: "배경까지 AI가 골라주니까.",
    desc: "피부 톤과 분위기를 읽어서 어울리는 배경과 조명을 자동으로 맞춰줘요. ‘무슨 색이 나랑 맞지?’ 고민할 필요가 없죠.",
    img: "tonefit-05b-aibg",
    alt: "AI 퍼스널 배경 매칭",
  },
  {
    tag: "혼자 말고, 함께",
    title: "댕냥이랑도 인생네컷.",
    desc: "1,500만 반려인구를 겨냥한 반려동물 촬영. 유저에겐 특별한 추억이고, 매장 입장에선 옆 가게가 못 따라오는 무기예요.",
    img: "tonefit-05pet",
    alt: "반려동물 촬영",
  },
];
const UX_POINTS_2 = [
  {
    tag: "처음이어도 괜찮게",
    title: "무인인데, 헤맬 일이 없다.",
    desc: "촬영부터 결제까지 STEP으로 눈앞에 보여줘요. 직원이 없어도 불안하지 않게, 화면이 절차를 대신 안내합니다.",
    img: "tonefit-05b-kiosk",
    alt: "키오스크 이용 STEP",
  },
  {
    tag: "가고 싶어졌다면",
    title: "그래서, 어디로 가면 돼?",
    desc: "카카오맵에 지역 필터와 검색을 얹어서 ‘가고 싶다 → 여기다’까지 한 화면에서 끝냈어요.",
    img: "tonefit-05b-store",
    alt: "매장 찾기 — 카카오맵",
  },
];

/* ── 06 유저→창업 포인트 ── */
const OWNER_POINTS = [
  {
    tag: "가장 강력한 광고",
    title: "유저가 올린 인증샷이, 곧 영업 자료.",
    desc: "찍고 나서 알아서 올리는 SNS 후기. 이 진짜 반응이 예비 창업주에겐 ‘되는 아이템’이라는 증거가 됩니다.",
    img: "tonefit-06-viral",
    alt: "실제 고객이 공유한 SNS 반응",
  },
  {
    tag: "숫자로 증명",
    title: "광고 없이, 3개월 만에 15만 건.",
    desc: "MZ세대가 먼저 알아본 성장 곡선이에요. 억지로 밀어붙인 게 아니라 경험이 좋아서 퍼졌다는 걸, 그래프 하나로 보여줍니다.",
    img: "tonefit-06-startup",
    alt: "3개월 누적 15만 건 성장 그래프",
  },
  {
    tag: "관심 → 창업",
    title: "그 관심을, 창업 상담까지.",
    desc: "가맹비·교육비 혜택과 선착순 프로모션으로 ‘괜찮은데?’ 하던 마음을 ‘나도 한번 열어볼까’로 넘깁니다.",
    img: "tonefit-05a-main-hero",
    alt: "TONE:FIT 창업 프로모션",
  },
];

/** 섹션 라벨 (01 OVERVIEW 형식) */
function Label({ children }: { children: string }) {
  return <p className={styles.label}>{children}</p>;
}

/** 한 포인트 = 텍스트 + 점선 연결선 + 한 이미지 */
function Point({
  tag,
  title,
  desc,
  img,
  alt,
}: {
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
}) {
  return (
    <div className={styles.point}>
      <Reveal className={styles.pText}>
        <p className={styles.pTag}>{tag}</p>
        <h3 className={styles.pTitle}>{title}</h3>
        <p className={styles.pDesc}>{desc}</p>
      </Reveal>
      <Reveal delay={0.08} className={styles.pMedia}>
        <CaseImage src={`${IMG}/${img}.png`} alt={alt} />
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
                인생네컷은 이제 ‘찍는 곳’이 아니라 ‘같이 공유하는 문화’예요.
                톤핏은 퍼스널컬러를 그 문화 위에 얹었습니다.
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
            유저가 남긴 ‘공유’가, 그대로 창업주의 ‘검증’ 근거가 됩니다. 그래서 유저
            경험을 잘 만들수록 창업 세일즈도 세져요.
          </Reveal>
        </section>

        {/* ══════════ 04 BRAND IDENTITY ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>04 BRAND IDENTITY</Label>
            <h2 className={styles.headTitle}>
              내 색을 찾아주는 브랜드는, 색부터 남달라야 하니까.
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
              콘텐츠 색은 4계절 톤으로 따로 굴려서, 브랜드 컬러와 부딪히지 않게
              했어요.
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
            <h2 className={styles.headTitle}>먼저, 찍고 싶게 만든다.</h2>
            <p className={styles.headLead}>
              이 경험 하나하나가, 뒤에서 창업주를 설득하는 근거가 됩니다.
            </p>
          </Reveal>

          <div className={styles.points}>
            {UX_POINTS.map((p) => (
              <Point key={p.img} {...p} />
            ))}
          </div>

          {/* 콜라보 프레임 — 전체 폭 갤러리 */}
          <div className={styles.gallery}>
            <Reveal className={styles.galleryHead}>
              <p className={styles.pTag}>다시 올 이유</p>
              <h3 className={styles.pTitle}>프레임이, 매달 바뀐다.</h3>
              <p className={styles.pDesc}>
                트렌디한 IP 콜라보 프레임을 매달 새로 열어요. 유저는 ‘이번 달은
                뭐지?’ 하고 다시 오고, 매장은 콘텐츠가 알아서 채워집니다.
              </p>
            </Reveal>
            <Reveal delay={0.08} className={styles.frameStrip}>
              {[1, 2, 3].map((n) => (
                <CaseImage
                  key={n}
                  src={`${IMG}/tonefit-05c-frame-${n}.png`}
                  alt={`콜라보 프레임 ${n}`}
                />
              ))}
            </Reveal>
          </div>

          <div className={styles.points}>
            {UX_POINTS_2.map((p) => (
              <Point key={p.img} {...p} />
            ))}
          </div>
        </section>

        {/* ══════════ 06 FROM USER TO OWNER ══════════ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <Reveal className={styles.head}>
            <Label>06 FROM USER TO OWNER</Label>
            <h2 className={styles.headTitle}>
              잘 만든 유저 경험은, 그대로 창업 제안서가 된다.
            </h2>
            <p className={styles.headLead}>
              유저의 만족을 B2B 세일즈로 잇는 것 — 이게 이 사이트의 진짜
              목적이에요.
            </p>
          </Reveal>

          <div className={styles.points}>
            {OWNER_POINTS.map((p) => (
              <Point key={p.img} {...p} />
            ))}
          </div>
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
