import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(靑淵) — 전통 다도 원데이 클래스 케이스 스터디.
 * WORK 카드 클릭 시 오버레이로 열린다.
 *
 * 구조: 설명 파트(텍스트 오버레이) + 리서치 상세(풀폭 이미지) + 라이브 미리보기.
 * 이미지 경로: /assets/cheongyeon/*  (없으면 배경색/여백으로 레이아웃 유지)
 */

const IMG = "/assets/cheongyeon";
const LIVE_URL = "https://cheongyeon-amber.vercel.app/";

/** S5 경험 흐름 6단계 */
const FLOW = ["발견", "정보 확인", "예약", "방문", "스탬프 적립", "재방문"];
/** 리서치 상세 풀폭 이미지 */
const RESEARCH = ["2", "3", "4", "5"];

/** 이미지 로드 실패 시 조용히 숨겨 레이아웃이 깨지지 않게 한다. */
function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.opacity = "0";
      }}
    />
  );
}

export function CheongyeonDetail({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="청연 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* ══════════ S1 표지 ══════════ */}
        <section
          className={styles.cover}
          style={{ backgroundImage: `url(${IMG}/11.png)` }}
        >
          <span className={styles.coverGrad} aria-hidden="true" />
          <Reveal className={styles.coverText}>
            <p className={styles.coverBrand}>
              청연 <span className={styles.coverHanja}>靑淵</span>
            </p>
            <p className={styles.coverSub}>
              전통 다도 원데이 클래스 브랜드 사이트
            </p>
            <p className={styles.coverSub}>
              다도를 처음 만나는 사람의 입장에서 만들었습니다
            </p>
          </Reveal>
        </section>

        {/* ══════════ S2 리서치 ══════════ */}
        <section className={`${styles.section} ${styles.paper} ${styles.two}`}>
          <Reveal className={styles.colText}>
            <h2 className={styles.h}>
              먼저, 사람들이 왜 다도를 시작하지 않는지 찾아봤습니다
            </h2>
            <p className={styles.p}>
              찾아보니 다도를 싫어하는 사람은 거의 없었습니다. 다만 다도가 정확히
              무엇을 하는 시간인지, 얼마나 걸리는지, 무엇을 준비해야 하는지 모르는
              경우가 대부분이었어요. 정보가 여기저기 흩어져 있어서 찾다가 지치는
              겁니다.
            </p>
            <p className={styles.p}>
              그래서 저는 이걸 관심의 문제가 아니라{" "}
              <b className={styles.forest}>정보의 문제</b>로 봤습니다.
            </p>
          </Reveal>
          <Reveal delay={0.08} className={styles.colImg}>
            <Img
              className={styles.roundImg}
              src={`${IMG}/12.png`}
              alt="다도에 대한 사용자 리서치"
            />
          </Reveal>
        </section>

        {/* ══════════ S3 방향 설정 ══════════ */}
        <section
          className={`${styles.bleed} ${styles.bleedTall}`}
          style={{ backgroundImage: `url(${IMG}/background.png)` }}
        >
          <span className={styles.dim} aria-hidden="true" />
          <Reveal className={`${styles.bleedText} ${styles.bleedCenter}`}>
            <h2 className={`${styles.h} ${styles.hLight}`}>
              다도 클래스는 많은데,{" "}
              <span className={styles.gold}>정작 뭘 하는지는</span> 안 나와
              있었습니다
            </h2>
            <p className={`${styles.p} ${styles.pLight}`}>
              기존 사이트들을 찾아보니 대부분 클래스 이름과 시간, 금액만 적혀
              있었습니다. 설명도 사진도 거의 없어서, 무엇을 배우는 자리인지 어떤
              분위기인지 알 수가 없었어요.
            </p>
            <p className={`${styles.p} ${styles.pLight}`}>
              그래서 청연은 클래스마다 어떤 시간을 보내게 되는지를 사진과 함께
              먼저 보여주기로 했습니다. 무엇을 하는지 알고 나면 부담이 줄고,
              그때부터 편하게 즐길 수 있으니까요.
            </p>
          </Reveal>
        </section>

        {/* ══════════ S4 디자인 방향 ══════════ */}
        <section
          className={`${styles.section} ${styles.paper} ${styles.two} ${styles.twoReverse}`}
        >
          <Reveal className={styles.colText}>
            <h2 className={styles.h}>어렵지 않게, 친근하게 보이도록 정리했습니다</h2>
            <p className={styles.p}>
              전통 브랜드라고 해서 딱딱해 보일 필요는 없다고 생각했습니다. 색과
              서체, 여백 기준을 하나로 정리해 어느 화면에서든 편안하게 읽히도록
              만들었습니다.
            </p>
          </Reveal>
          <Reveal delay={0.08} className={styles.colImg}>
            <Img
              className={styles.roundImg}
              src={`${IMG}/14.png`}
              alt="청연 디자인 방향"
            />
          </Reveal>
        </section>

        {/* 스타일 가이드 — 풀폭 단독 이미지 */}
        <section className={`${styles.section} ${styles.paper} ${styles.guideSec}`}>
          <Reveal className={styles.guideWrap}>
            <Img
              className={styles.guideImg}
              src={`${IMG}/style-guide.png`}
              alt="청연 스타일 가이드 (컬러 · 타이포그래피 · 여백 기준)"
            />
          </Reveal>
        </section>

        {/* ══════════ S5 경험 흐름 ══════════ */}
        <section
          className={styles.flowSec}
          style={{ backgroundImage: `url(${IMG}/bg.png)` }}
        >
          <span className={styles.flowWash} aria-hidden="true" />
          <div className={styles.flowInner}>
            <Reveal className={styles.flowHead}>
              <h2 className={styles.h}>처음 온 사람이 다시 찾아오기까지</h2>
              <p className={styles.p}>
                예약 도중에 그만두지 않도록 정보를 먼저 보여주고, 스탬프를 넣어
                다시 오실 이유를 만들었습니다.
              </p>
            </Reveal>

            <Reveal className={styles.flow}>
              <ol className={styles.flowSteps}>
                {FLOW.map((label, i) => (
                  <li key={label} className={styles.step}>
                    <span className={styles.dot} />
                    <span className={styles.stepNum}>{`0${i + 1}`}</span>
                    <span className={styles.stepLabel}>{label}</span>
                  </li>
                ))}
              </ol>
              {/* 재방문 → 발견 순환 화살표 */}
              <svg
                className={styles.loop}
                viewBox="0 0 1000 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className={styles.loopPath}
                  d="M975 6 C 995 46, 900 52, 500 52 C 100 52, 25 46, 25 12"
                  fill="none"
                />
                <path
                  className={styles.loopHead}
                  d="M16 20 L25 8 L34 20"
                  fill="none"
                />
              </svg>
            </Reveal>
          </div>
        </section>

        {/* ══════════ 리서치 상세 ══════════ */}
        <section className={`${styles.section} ${styles.paper}`}>
          <Reveal className={styles.detailLabel}>RESEARCH DETAIL</Reveal>
          <div className={styles.detailStack}>
            {RESEARCH.map((n, i) => (
              <Reveal key={n} delay={i * 0.04} className={styles.detailWrap}>
                <Img
                  className={styles.detailImg}
                  src={`${IMG}/${n}.png`}
                  alt={`청연 리서치 상세 ${i + 1}`}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════ 전환 배너 ══════════ */}
        <section
          className={`${styles.bleed} ${styles.banner}`}
          style={{ backgroundImage: `url(${IMG}/13.png)` }}
        >
          <span className={styles.dim} aria-hidden="true" />
          <Reveal className={`${styles.bleedText} ${styles.bleedCenter}`}>
            <p className={styles.bannerText}>이제, 실제 화면입니다</p>
          </Reveal>
        </section>

        {/* ══════════ 라이브 미리보기 ══════════ */}
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>
    </div>
  );
}
