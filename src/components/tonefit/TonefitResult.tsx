import { Reveal } from "../Reveal";
import { tonefitMeta, tonefitResult } from "@/data/tonefit";
import styles from "./TonefitResult.module.css";

export function TonefitResult() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.label}>◇ Result</Reveal>
        <Reveal as="h3" delay={0.05} className={styles.headline}>
          {tonefitResult.headline}
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.body}>
          {tonefitResult.body}
        </Reveal>

        <Reveal delay={0.16} className={styles.stats}>
          {tonefitResult.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.22} className={styles.ctaWrap}>
          <a
            href={tonefitMeta.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            실제 사이트 방문 ↗
          </a>
          <span className={styles.note}>
            * 성과 수치는 예시입니다 — 실제 데이터 들어갈 자리
          </span>
        </Reveal>
      </div>
    </section>
  );
}
