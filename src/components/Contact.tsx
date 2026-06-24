import { Reveal } from "./Reveal";
import { Marker } from "./Marker";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>LET'S WORK TOGETHER</Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          함께 <Marker light>성과</Marker>를 만들어요.
        </Reveal>
        <Reveal delay={0.12} className={styles.mail}>
          <a href={`mailto:${profile.email}`} className={styles.mailLink}>
            ✉ {profile.email}
          </a>
        </Reveal>
        <Reveal delay={0.18} className={styles.line}>
          {profile.phone}
          {"  |  "}
          {profile.social.join(" · ")}
        </Reveal>
        <div className={styles.copy}>© 2025 {profile.nameEn} — PORTFOLIO</div>
      </div>
    </section>
  );
}
