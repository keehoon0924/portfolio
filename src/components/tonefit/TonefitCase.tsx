import { Reveal } from "../Reveal";
import { tonefitProblem } from "@/data/tonefit";
import styles from "./TonefitCase.module.css";

export function TonefitCase() {
  return (
    <article id="tonefit" className={styles.case}>
      {/* 2막 — 문제·배경 */}
      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <Reveal className={styles.problemLabel}>◇ Why TONE:FIT</Reveal>
          <Reveal as="h3" delay={0.05} className={styles.problemHeadline}>
            {tonefitProblem.headline}
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.problemBody}>
            {tonefitProblem.body}
          </Reveal>
          <Reveal delay={0.16} className={styles.problemPoints}>
            {tonefitProblem.points.map((p, i) => (
              <div key={p} className={styles.point}>
                <span className={styles.pointNo}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

    </article>
  );
}
