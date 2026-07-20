import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import styles from "./CheongyeonDetail.module.css";

/**
 * 청연(다도 원데이 클래스) 상세 페이지 — 이미지 스택 오버레이.
 * WORK 카드 클릭 시 열린다.
 * 순서: kv → style-guide → 1 → 2 → 3 → 4 → 5
 * 이미지 경로: public/assets/cheongyeon/{name}.png
 */
const images = ["kv", "style-guide", "1", "2", "3", "4", "5"];

/** 실험용 스크롤텔링 텍스트 (샘플 — 실제 문구로 교체 예정) */
const steps = [
  {
    eyebrow: "Project Background",
    title: "청연을 시작한 이유",
    desc: "여기에 설명 텍스트가 들어갑니다. 스크롤을 내리면 텍스트와 점선이 샤라락 나타나요. (샘플 문구)",
  },
  {
    eyebrow: "Design Concept",
    title: "동양의 미감을 담다",
    desc: "각 섹션마다 이렇게 텍스트가 하나씩 등장합니다. 한 번 나오면 그대로 유지돼요. (샘플 문구)",
  },
  {
    eyebrow: "Live Site",
    title: "직접 둘러보세요",
    desc: "오른쪽 화면은 실제 배포된 청연 사이트예요. 그 안에서 스크롤·클릭이 됩니다. (샘플 문구)",
  },
];

/** 데스크탑 폭으로 렌더한 뒤 프레임에 맞게 축소해 PC 버전을 보여준다 */
const DESIGN_W = 1280;

export function CheongyeonDetail({ onClose }: { onClose: () => void }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: DESIGN_W, h: 800, scale: 0.45 });

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      const scale = cw / DESIGN_W;
      setDims({ w: DESIGN_W, h: scale ? ch / scale : ch, scale });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
        {images.map((name, i) => (
          <section key={name} className={styles.imgSection}>
            <Reveal>
              <img
                className={styles.fullImg}
                src={`/assets/cheongyeon/${name}.png`}
                alt={`청연 상세 이미지 ${i + 1}`}
                loading="lazy"
              />
            </Reveal>
          </section>
        ))}

        {/* ── 실험: 스크롤텔링 + 라이브 사이트 iframe ── */}
        <section className={styles.scrolly}>
          <div className={styles.scrollyGrid}>
            {/* 왼쪽: 스크롤 따라 등장하는 텍스트 + 꺾인 점선 */}
            <div className={styles.narrative}>
              {steps.map((s) => (
                <div key={s.title} className={styles.step}>
                  <Reveal className={styles.stepInner}>
                    <p className={styles.stepEyebrow}>{s.eyebrow}</p>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                    <span className={styles.lineWrap} aria-hidden="true">
                      <span className={styles.lineDot} />
                      <span className={styles.lineH} />
                      <span className={styles.lineV} />
                    </span>
                  </Reveal>
                </div>
              ))}
            </div>

            {/* 오른쪽: 고정(sticky) 라이브 사이트 */}
            <div className={styles.stageCol}>
              <div className={styles.stageSticky}>
                <div className={styles.browser}>
                  <div className={styles.browserBar}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.frameViewport} ref={frameRef}>
                    <iframe
                      className={styles.liveFrame}
                      src="/cheongyeon-site/"
                      title="청연 라이브 사이트"
                      loading="lazy"
                      style={{
                        width: `${dims.w}px`,
                        height: `${dims.h}px`,
                        transform: `scale(${dims.scale})`,
                        transformOrigin: "top left",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
