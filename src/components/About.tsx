import { Reveal } from "./Reveal";
import { Marker } from "./Marker";
import { SkillBar } from "./SkillBar";
import { skills, tools } from "@/data/profile";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.label}>◇ About</Reveal>
        <div className={styles.grid}>
          <div>
            <Reveal as="h2" delay={0.05} className={styles.h2}>
              예쁘게 만드는 데서 멈추지 않습니다.
              <br />왜 이렇게 풀었는지, 무엇을 측정할지부터{" "}
              <Marker>설계하는 마케터</Marker>입니다.
            </Reveal>
            <Reveal as="p" delay={0.12} className={styles.desc}>
              브랜드의 문제를 데이터로 정의하고, 콘텐츠·상세페이지·광고로 풀어
              성과로 증명합니다. 기획부터 제작, 검증까지 직접 합니다.
            </Reveal>
            <Reveal delay={0.18} className={styles.tools}>
              {tools.map((t) => (
                <span key={t} className={styles.tool}>
                  {t}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} className={styles.skillCard}>
            <div className={styles.skillCardLabel}>SKILL FOCUS</div>
            {skills.map((s) => (
              <SkillBar key={s.name} skill={s} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
