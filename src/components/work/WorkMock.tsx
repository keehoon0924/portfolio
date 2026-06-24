import type { MockKind } from "@/data/works";
import styles from "./WorkMock.module.css";

type Props = {
  kind: MockKind;
  label: string;
  img?: string;
};

/** Selected Work 카드용 CSS 목업 (laptop / phone). 이미지 없으면 빗금 플레이스홀더. */
export function WorkMock({ kind, label, img }: Props) {
  if (kind === "laptop") {
    return (
      <div className={styles.laptop}>
        <div className={styles.laptopFrame}>
          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
          {img ? (
            <div className={styles.laptopScreen}>
              <img src={img} alt={label} />
            </div>
          ) : (
            <div className={`${styles.laptopScreen} ${styles.ph}`}>{label}</div>
          )}
        </div>
        <div className={styles.laptopBase} />
      </div>
    );
  }

  // phone
  return (
    <div className={styles.phone}>
      <div className={styles.phoneInner}>
        <div className={styles.phoneHead}>
          <div className={styles.phoneTitle}>{label}</div>
          <div className={styles.phoneSub}>상세 디자인</div>
        </div>
        <div className={styles.phoneBody}>
          <div className={styles.block} />
          <div className={styles.list}>
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.listItem}>
                <span
                  className={styles.chip}
                  style={{ background: i === 0 ? "var(--accent)" : "#d3d7dc" }}
                />
                <span className={styles.bar} />
              </div>
            ))}
          </div>
          <div className={styles.blockSm} />
        </div>
      </div>
    </div>
  );
}
