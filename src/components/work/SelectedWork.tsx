import { useState } from "react";
import { Reveal } from "../Reveal";
import { WorkCard } from "./WorkCard";
import { WorkOverlay } from "./WorkOverlay";
import { groups, type Work } from "@/data/works";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  const [openWork, setOpenWork] = useState<Work | null>(null);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.intro}>
        <Reveal>
          <div className={styles.label}>◇ Selected Work</div>
          <h2 className={styles.h2}>
            종류별로 모은 작업물.
            <br />
            클릭하면 자세히 펼쳐집니다.
          </h2>
        </Reveal>
      </div>

      {groups.map((g) => (
        <div key={g.label} className={styles.group}>
          <Reveal className={styles.groupHead}>
            <span className={styles.groupLabel}>{g.label}</span>
            <span className={styles.groupTag}>{g.tag}</span>
          </Reveal>
          {g.items.map((w) => (
            <WorkCard key={w.id} work={w} onOpen={setOpenWork} />
          ))}
        </div>
      ))}

      <WorkOverlay work={openWork} onClose={() => setOpenWork(null)} />
    </section>
  );
}
