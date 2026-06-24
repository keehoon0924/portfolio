import { Marker } from "./Marker";
import { heroTags, profile } from "@/data/profile";
import styles from "./Hero.module.css";

/** Hero 변형 1 — split 레이아웃 + 명함 스타일 카드. (스위처 없음) */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>MARKETER · PORTFOLIO 2025</div>
          <h1 className={styles.h1}>
            아이디어를 <Marker>성과</Marker>로 증명하는
            <br />
            마케터 {profile.name}입니다.
          </h1>
          <p className={styles.sub}>
            전략적 사고와 빠른 실행으로 브랜드의 가치를 키웁니다. 기획부터
            제작까지 직접 만들고, 직접 검증합니다.
          </p>
          <div className={styles.tags}>
            {heroTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cardWrap}>
          <article className={styles.card}>
            <div className={styles.cardNotch} />
            <div className={styles.cardHead}>
              <div className={styles.cardRole}>MARKETER</div>
              <div className={styles.cardName}>{profile.name}</div>
            </div>
            <div className={styles.cardPhoto}>
              <div className={styles.cardPhotoChip} />
            </div>
            <div className={styles.cardMeta}>
              <div>{profile.birth}</div>
              <div>{profile.phone}</div>
              <div>{profile.email}</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
