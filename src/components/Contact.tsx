import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

/** Contact — 아웃라인 대형 타이포 + 이메일 + 안내 문구 (가운데 정렬). */
export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <span className={styles.outline}>CONTACT</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Reveal>

        <Reveal delay={0.1} className={styles.center}>
          <a className={styles.email} href="mailto:edcrfv51@gmail.com">
            edcrfv51@gmail.com
          </a>
          <p className={styles.message}>
            함께 일할 마케터를 찾고 계신가요?
            <br />
            저에게 궁금한 점이 있으시다면 연락해 주세요 :) 빠르게 답장
            드리겠습니다!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
