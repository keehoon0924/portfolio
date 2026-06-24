import { Reveal } from "./Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { stats, type Stat } from "@/data/profile";
import styles from "./Stats.module.css";

function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <Reveal className={styles.card}>
      <div className={styles.row}>
        <span className={styles.number}>
          <span ref={ref}>
            {stat.prefix}
            {value}
          </span>
        </span>
        <span className={styles.unit}>{stat.unit}</span>
      </div>
      <div className={styles.label}>{stat.label}</div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.heading}>◇ 한눈에 보는 성과</Reveal>
        <div className={styles.grid}>
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
        <Reveal as="p" className={styles.caption}>
          * 수치는 예시입니다 — 실제 데이터 들어갈 자리
        </Reveal>
      </div>
    </section>
  );
}
