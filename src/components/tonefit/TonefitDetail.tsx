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

/* ── 05 유저 경험 포인트 (한 포인트 = 한 이미지) ── */
const UX_POINTS = [
  {
    tag: "브랜드 컨셉",
    title: "이름 자체가 브랜드 메시지",
    desc: "TONE(색조·분위기)과 FIT(꼭 맞다)을 합친 이름입니다. ‘유행하는 색’이 아니라 ‘나에게 맞는 색’을 찾아준다는 방향을, 브랜드명과 첫 화면에서 먼저 정리하고 시작했습니다.",
    img: "tonefit-05a-identity",
    alt: "TONE:FIT 브랜드 컨셉 — 색조와 어울림",
  },
  {
    tag: "AI 배경 매칭",
    title: "배경 선택까지 AI에 맡겼다",
    desc: "보통 셀프 스튜디오는 배경과 조명을 사용자가 직접 고릅니다. 실패 확률이 높은 지점입니다. 톤핏은 피부 톤과 분위기를 분석해 어울리는 배경·조명을 자동 세팅하도록 설계해, 고르는 부담을 덜었습니다.",
    img: "tonefit-05b-aibg",
    alt: "AI 퍼스널 배경 매칭",
  },
  {
    tag: "타깃 확장",
    title: "반려동물 촬영까지 포함",
    desc: "1,500만 반려인구는 대부분의 셀프 스튜디오가 비워둔 시장입니다. 반려동물 전용 프레임과 촬영 존을 넣어, 사용자에게는 특별한 추억을, 점주에게는 경쟁 매장과 구분되는 차별점을 만들었습니다.",
    img: "tonefit-05pet",
    alt: "반려동물 촬영",
  },
];
const UX_POINTS_2 = [
  {
    tag: "무인 경험",
    title: "직원 없이도 헤매지 않도록",
    desc: "무인 매장의 가장 큰 허들은 ‘혼자서 잘 할 수 있을까’ 하는 불안입니다. 촬영부터 결제까지 전 과정을 STEP으로 화면에 미리 노출해, 처음 온 사용자도 안내 없이 끝낼 수 있게 구성했습니다.",
    img: "tonefit-05b-kiosk",
    alt: "키오스크 이용 STEP",
  },
];

/* ── 06 유저→창업 포인트 ── */
const OWNER_POINTS = [
  {
    tag: "유저 콘텐츠",
    title: "사용자의 후기가 곧 광고",
    desc: "촬영 후 자발적으로 올라오는 SNS 인증샷을 그대로 브랜드 자산으로 활용했습니다. 만들어낸 광고가 아니라 실제 반응이라, 창업을 검토하는 점주에게 ‘되는 아이템’이라는 근거로 작동합니다.",
    img: "tonefit-06-viral",
    alt: "실제 고객이 공유한 SNS 반응",
  },
  {
    tag: "성장 지표",
    title: "3개월, 누적 15만 건",
    desc: "광고비를 들인 수치가 아니라, 경험이 좋아 자연스럽게 퍼진 결과입니다. 창업을 고민하는 사람에게는 감성적인 설득보다 이 곡선 하나가 더 강하게 작동한다고 보고, 지표를 전면에 배치했습니다.",
    img: "tonefit-06-startup",
    alt: "3개월 누적 15만 건 성장 그래프",
  },
  {
    tag: "창업 전환",
    title: "관심을 상담으로 잇는 마지막 단계",
    desc: "유저 경험에 설득된 점주가 이탈하지 않도록, 같은 흐름 안에 창업 전환 페이지를 뒀습니다. 가맹비·교육비 혜택과 수익 구조를 함께 제시해, ‘괜찮은데’에서 ‘문의해보자’로 넘어가게 구성했습니다.",
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
              <p className={styles.pTag}>재방문 장치</p>
              <h3 className={styles.pTitle}>프레임을 매달 교체하는 구조</h3>
              <p className={styles.pDesc}>
                한 번 찍고 나면 다시 올 이유가 없다는 것이 셀프 스튜디오의
                약점입니다. IP 콜라보 프레임을 매달 교체하는 구조로 만들어,
                사용자에게는 재방문 이유를, 점주에게는 별도 제작 없이 채워지는
                콘텐츠를 확보하도록 설계했습니다.
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
              유저의 만족을 B2B 세일즈로 잇는 것 — 이 사이트를 설계한 진짜
              목적입니다.
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
