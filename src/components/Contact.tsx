import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

/** Contact — 아웃라인 대형 타이포 + 이메일 + 안내 문구 (가운데 정렬). */
export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <span className={styles.outline}>CONTACT</span>
          <svg
            className={styles.arrow}
            viewBox="0 0 120 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 40 H86 M74 16 L104 40 L74 64"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
