import { Reveal } from "../Reveal";
import { tonefitKv, tonefitMeta, tonefitProblem } from "@/data/tonefit";
import styles from "./TonefitCase.module.css";

export function TonefitCase() {
  return (
    <article id="tonefit" className={styles.case}>
      {/* 1막 — Intro (KV) */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <Reveal className={styles.introText}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />◇ FEATURED PROJECT
            </div>
            <h2 className={styles.title}>{tonefitMeta.title}</h2>
            <p className={styles.positioning}>{tonefitMeta.positioning}</p>
            <div className={styles.projectType}>{tonefitMeta.projectType}</div>
            <dl className={styles.facts}>
              {tonefitMeta.facts.map((f) => (
                <div key={f.k} className={styles.factRow}>
                  <dt className={styles.factKey}>{f.k}</dt>
                  <dd className={styles.factVal}>
                    {f.v.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className={styles.kvStage}>
            <img
              src={tonefitKv.mockup}
              alt="TONE:FIT 메인 화면 목업"
              className={styles.kvMockup}
            />
          </Reveal>
        </div>
      </section>

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
