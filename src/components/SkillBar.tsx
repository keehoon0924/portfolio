import { useInView } from "@/hooks/useInView";
import type { Skill } from "@/data/profile";
import styles from "./About.module.css";

/** 스킬 바 — 뷰포트 진입 시 width 0% → 목표 %로 채워진다. */
export function SkillBar({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className={styles.skill}>
      <div className={styles.skillHead}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPct}>{skill.pct}</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{ width: inView ? `${skill.pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}
