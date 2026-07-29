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
// 메인 페이지(main)는 아래 bg 쇼케이스로 별도 표현. 나머지는 순서대로 이어 붙임.
// 각 페이지 위에 타이틀+서브타이틀(가운데 정렬)을 붙일 수 있음.
type Page = { name: string; title?: string; desc?: string };
const PAGES: Page[] = [
  {
    name: "all",
    title: "전체 상품 페이지",
    desc: "러닝·데일리·트레일 제품을 동일한 각도와 규칙적인 그리드로 배치해 형태와 컬러를 한눈에 비교하고, 카테고리와 정렬 기능을 통해 원하는 상품을 빠르게 탐색할 수 있도록 구성했습니다.",
  },
  { name: "air" },
  { name: "one" },
  { name: "login" },
  { name: "join membership" },
  { name: "enter membership information" },
  { name: "membership registration completed" },
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
      </div>
    </div>
  );
}
