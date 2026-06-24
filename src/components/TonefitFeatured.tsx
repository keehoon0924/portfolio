import { Reveal } from "./Reveal";
import { tonefitAssets } from "@/data/works";
import styles from "./TonefitFeatured.module.css";

const GRID_COUNT = 9;

export function TonefitFeatured() {
  const phones = Array.from({ length: GRID_COUNT }, (_, i) => ({
    img: tonefitAssets.gridImages[i % tonefitAssets.gridImages.length],
    up: i % 2 === 0,
  }));

  return (
    <section id="tonefit" className={styles.section}>
      <div className={styles.head}>
        <Reveal className={styles.headRow}>
          <div>
            <div className={styles.meta}>
              <span className={styles.metaDot} />웹 · 브랜드 런칭 · 팀프로젝트
              (2인 · 2주)
            </div>
            <h2 className={styles.title}>TONE:FIT</h2>
            <p className={styles.desc}>
              AI 퍼스널 컬러 무인 스튜디오 — 유행이 아닌 데이터·기술로 승부하는
              ‘클린-테크’ 브랜드. PC·모바일 반응형 전체를 직접 디자인했습니다.
            </p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>UI/UX</span>
            <span className={styles.tag}>이미지·영상 생성</span>
          </div>
        </Reveal>
      </div>

      <Reveal className={styles.band}>
        <div className={styles.bandRow}>
          {phones.map((p, i) => (
            <div
              key={i}
              className={styles.phoneWrap}
              style={{ transform: `translateY(${p.up ? -70 : 70}px)` }}
            >
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <div className={styles.notch} />
                  <img src={p.img} alt="" className={styles.shot} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
