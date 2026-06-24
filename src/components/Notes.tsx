import { Reveal } from "./Reveal";
import { notes } from "@/data/profile";
import styles from "./Notes.module.css";

export function Notes() {
  return (
    <section id="notes" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.label}>◇ 함께한 사람들의 한마디</Reveal>
        <div className={styles.grid}>
          {notes.map((n) => (
            <Reveal
              key={n.who}
              className={styles.note}
              style={{ ["--rot" as string]: n.rot }}
            >
              <p className={styles.quote}>{n.quote}</p>
              <div className={styles.who}>— {n.who}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
