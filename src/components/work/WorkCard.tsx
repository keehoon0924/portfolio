import { Reveal } from "../Reveal";
import { WorkMock } from "./WorkMock";
import type { Work } from "@/data/works";
import styles from "./WorkCard.module.css";

type Props = {
  work: Work;
  onOpen: (work: Work) => void;
};

export function WorkCard({ work, onOpen }: Props) {
  return (
    <Reveal
      className={styles.card}
      style={{ gridTemplateColumns: work.cols }}
    >
      {/* Reveal는 div를 렌더하지만 클릭/role은 내부 버튼 래퍼로 처리 */}
      <button
        type="button"
        className={styles.hit}
        onClick={() => onOpen(work)}
        aria-label={`${work.title} 자세히 보기`}
      />
      <div className={styles.text} style={{ order: work.textOrder }}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          {work.kicker}
        </div>
        <h3 className={styles.title}>{work.title}</h3>
        <div className={styles.rows}>
          {work.rows.map((r) => (
            <div key={r.k} className={styles.row}>
              <span className={styles.rowKey}>{r.k}</span>
              <span className={styles.rowVal}>{r.v}</span>
            </div>
          ))}
        </div>
        <div className={styles.foot}>
          <span className={styles.pill}>
            자세히 보기 <span className={styles.arrow}>→</span>
          </span>
          <span className={styles.meta}>{work.meta}</span>
        </div>
      </div>
      <div className={styles.mock} style={{ order: work.mockOrder }}>
        <WorkMock kind={work.mock} label={work.title} img={work.img} />
      </div>
    </Reveal>
  );
}
