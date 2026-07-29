import styles from "./VentaDetail.module.css";

/**
 * VENTA — 직접 디자인한 전체 페이지를 이미지로만 이어 붙여 보여주는 상세.
 * KV(main) 위쪽에 인트로 슬라이드(1.1 → 3 → 4)를 쌓고,
 * 이어서 full page 전체 디자인을 순서대로 그리드 폭·가운데 정렬·연속으로 렌더.
 */
const ROOT = "/assets/venta";
const DIR = "/assets/venta/full%20page";
const INTRO = ["1.1", "3", "4"]; // venta 루트 — kv 위에 쌓는 인트로

/* 메인 페이지(main.png) 좌우 교차 주석 — top은 이미지 세로 위치 % */
const MAIN_NOTES = [
  {
    top: "5%",
    side: "right",
    title: "히어로",
    body: "첫 화면에서 상품을 바로 나열하기보다, 역동적인 로우 앵글 이미지와 브랜드 메시지를 크게 배치해 VENTA가 추구하는 움직임과 에너지를 먼저 전달했습니다.",
  },
  {
    top: "16%",
    side: "left",
    title: "카테고리 경험",
    body: "각각의 사용 환경과 분위기가 담긴 이미지로 보여주어 사용자가 자신에게 맞는 제품군을 직관적으로 탐색하도록 구성했습니다.",
  },
  {
    top: "24%",
    side: "right",
    title: "베스트셀러",
    body: "상품의 형태와 컬러를 먼저 비교할 수 있도록 기본 화면에는 제품 이미지만 노출했습니다. 이미지에 마우스를 올리면 실제 착화 모습과 ‘바로 담기’ 버튼이 나타나, 착용 이미지를 확인한 뒤 상세 페이지를 거치지 않고 장바구니로 이어지도록 구성했습니다.",
  },
  {
    top: "36%",
    side: "left",
    title: "데일리 스타일",
    body: "제품 이미지만 반복하지 않고 실제 착화 장면을 함께 배치해, 신발의 형태와 컬러가 일상적인 스타일 안에서 어떻게 활용되는지 자연스럽게 상상하도록 설계했습니다.",
  },
  {
    top: "49%",
    side: "right",
    title: "VENTA COLLECTION",
    body: "서로 다른 사용 목적을 가진 세 가지 제품군을 한 구간에 모아 러닝·데일리·트레일의 차이를 빠르게 비교하고, 관심 있는 카테고리로 바로 이동할 수 있도록 구성했습니다.",
  },
  {
    top: "61%",
    side: "left",
    title: "기능과 구조",
    body: "제품의 기능을 문장으로만 나열하지 않고, 신발의 구조와 주요 디테일을 분해된 이미지로 시각화해 착화 전에도 제품의 특징을 쉽게 이해하도록 구성했습니다.",
  },
  {
    top: "74%",
    side: "right",
    title: "스타일 매거진",
    body: "다양한 인물과 착용 장면을 매거진 형식으로 보여주어, VENTA의 스타일이 일상과 러닝, 아웃도어까지 확장되는 모습을 전달했습니다. 사용자가 상품을 넘어 자신에게 어울리는 움직임과 스타일을 발견하도록 구성했습니다.",
  },
  {
    top: "85%",
    side: "left",
    title: "KEEP MOVING",
    body: "페이지의 마지막에는 함께 달리는 사람들의 장면을 배치해 개별 상품의 소개를 넘어 지속적인 움직임이라는 VENTA의 브랜드 메시지를 다시 한번 강조했습니다.",
  },
];
// 메인 페이지(main)는 bg 쇼케이스로 별도 표현. all은 헤더 있는 페이지.
type Page = { name: string; title?: string; desc?: string };
const PAGES: Page[] = [
  {
    name: "all",
    title: "전체 상품 페이지",
    desc: "러닝·데일리·트레일 제품을 동일한 각도와 규칙적인 그리드로 배치해 형태와 컬러를 한눈에 비교하고, 카테고리와 정렬 기능을 통해 원하는 상품을 빠르게 탐색할 수 있도록 구성했습니다.",
  },
];
// 회원가입 4스텝 — 2x2 그리드, 전체 페이지 원본 이미지 그대로 크게
const FLOW = [
  {
    no: "01",
    name: "로그인",
    file: "login",
    desc: "소셜 로그인으로 진입 장벽을 낮췄습니다.",
  },
  {
    no: "02",
    name: "회원가입",
    file: "join membership",
    desc: "가입 방식을 한 화면에서 선택하도록 구성했습니다.",
  },
  {
    no: "03",
    name: "정보 입력",
    file: "enter membership information",
    desc: "단계 표시로 남은 과정을 알려 이탈을 줄였습니다.",
  },
  {
    no: "04",
    name: "가입 완료",
    file: "membership registration completed",
    desc: "완료 후 추천 상품으로 쇼핑까지 연결했습니다.",
  },
];

/* ── PRODUCT DETAIL — 대표 상세페이지(air, 크롭) + 우측 주석 3개 + 3제품 시스템 ── */
const DETAIL = "/assets/venta/detail";
const PD_ANNOS = [
  {
    top: "12%",
    title: "01. 제품 이미지 영역",
    body: "다양한 각도와 컬러 옵션을 통해 제품의 디테일과 특징을 직관적으로 전달합니다.",
  },
  {
    top: "46%",
    title: "02. 라이프스타일 착화 영역",
    body: "실제 착용 컷을 통해 제품의 착화감과 스타일을 자연스럽게 보여줍니다.",
  },
  {
    top: "68%",
    title: "03. 캠페인 배너 영역",
    body: "제품의 사용 맥락과 가치를 감성적인 비주얼로 전달하고, 하단 버튼으로 다음 제품 상세 페이지까지 자연스럽게 연결되도록 구성했습니다.",
  },
];
// air(대표)를 크게 봤으니, 나머지 2제품은 같은 상세페이지를 작게 나란히 → 일관성 증명
const PD_PAGES = [
  { file: "one-rep", name: "VENTA DAILY ONE", kw: "일상 · 가벼움 · 도심" },
  { file: "pro-rep", name: "VENTA TRAIL PRO", kw: "자연 · 접지력 · 아웃도어" },
];

export function VentaDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="VENTA 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        <div className={styles.design}>
          {INTRO.map((name, i) => (
            <img
              key={`intro-${name}`}
              className={styles.section}
              src={`${ROOT}/${name}.png`}
              alt={`VENTA 인트로 ${name}`}
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* 메인 페이지 — 하늘 배경(bg) 위에 가운데 정렬 쇼케이스 */}
        <section className={styles.showcase}>
          <div className={styles.showcaseHead}>
            <p className={styles.showcaseLabel}>DESIGN 01</p>
            <h3 className={styles.showcaseTitle}>NEW MAIN HOMEPAGE</h3>
            <p className={styles.showcaseSub}>메인 홈페이지</p>
            <p className={styles.showcaseDesc}>
              브랜드의 첫인상을 결정하는 메인 페이지입니다. 히어로 비주얼부터
              베스트셀러, 신제품, 멤버십까지 하나의 흐름으로 연결해 방문자가
              자연스럽게 브랜드를 탐색하고 구매까지 이어지도록 구성했습니다.
            </p>
          </div>
          <div className={styles.pageStage}>
            <img
              className={styles.showcasePage}
              src={`${DIR}/main.png`}
              alt="VENTA 메인 페이지"
              loading="lazy"
            />
            {MAIN_NOTES.map((n, i) => (
              <div
                key={i}
                className={`${styles.note} ${
                  n.side === "right" ? styles.noteRight : styles.noteLeft
                }`}
                style={{ top: n.top }}
              >
                <p className={styles.noteTitle}>{n.title}</p>
                <p className={styles.noteBody}>{n.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.pageList}>
          {PAGES.map((pg) => (
            <div key={pg.name} className={styles.pageBlock}>
              {pg.title && (
                <div className={styles.pageHead}>
                  <h3 className={styles.pageTitle}>{pg.title}</h3>
                  {pg.desc && <p className={styles.pageDesc}>{pg.desc}</p>}
                </div>
              )}
              <img
                className={styles.pageShot}
                src={`${DIR}/${encodeURIComponent(pg.name)}.png`}
                alt={`VENTA ${pg.name}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* PRODUCT DETAIL — 대표 상세페이지 + 우측 주석 + 3제품 시스템 */}
        <section className={styles.pd}>
          <div className={styles.pdHeader}>
            <h3 className={styles.pdTitle}>PRODUCT DETAIL</h3>
            <p className={styles.pdDesc}>
              VENTA의 상세 페이지 시스템은 일관된 구조 안에서
              <br />
              제품별 사용 맥락과 무드에 맞춘 비주얼을 유연하게 담아냅니다.
            </p>
          </div>

          <div className={styles.pdStage}>
            <img
              className={styles.pdPage}
              src={`${DETAIL}/rep.png`}
              alt="VENTA 상세 페이지 대표 예시 (에어로 러닝)"
              loading="lazy"
            />
            {PD_ANNOS.map((a, i) => (
              <div key={i} className={styles.pdNote} style={{ top: a.top }}>
                <p className={styles.pdNoteTitle}>{a.title}</p>
                <p className={styles.pdNoteBody}>{a.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.pdSystem}>
            <p className={styles.pdSystemTitle}>
              3가지 제품, 하나의 일관된 상세 페이지 시스템
            </p>
            <div className={styles.pdPages}>
              {PD_PAGES.map((pg) => (
                <div key={pg.file} className={styles.pdPageItem}>
                  <div className={styles.pdPageLabel}>
                    <span className={styles.pdPageName}>{pg.name}</span>
                    <span className={styles.pdPageKw}>{pg.kw}</span>
                  </div>
                  <img
                    className={styles.pdPageShot}
                    src={`${DETAIL}/${pg.file}.png`}
                    alt={`${pg.name} 상세 페이지`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className={styles.pdTagline}>
              일관된 구조, 달라지는 무드. VENTA는 모든 발걸음의 순간을
              디자인합니다.
            </p>
          </div>
        </section>

        {/* 회원가입 여정 — 가로 4스텝 플로우 */}
        <section className={styles.flow}>
          <div className={styles.flowHead}>
            <p className={styles.flowLabel}>MEMBERSHIP FLOW</p>
            <h3 className={styles.flowTitle}>회원가입</h3>
            <p className={styles.flowDesc}>
              가입 시작부터 완료까지의 흐름을 최소한의 단계로 설계해, 진입
              장벽과 이탈을 줄이고 자연스럽게 첫 구매까지 이어지도록
              구성했습니다.
            </p>
          </div>

          <div className={styles.flowSteps}>
            {FLOW.map((s) => (
              <div key={s.file} className={styles.flowStep}>
                <div className={styles.flowStepHead}>
                  <span className={styles.flowStepNo}>{s.no}</span>
                  <span className={styles.flowStepName}>{s.name}</span>
                </div>
                <div className={styles.flowThumb}>
                  <img
                    src={`${DIR}/${encodeURIComponent(s.file)}.png`}
                    alt={`VENTA ${s.name} 화면`}
                    loading="lazy"
                  />
                </div>
                <p className={styles.flowStepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
