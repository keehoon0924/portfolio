import { profile } from "@/data/profile";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.name}>{profile.nameEn}</div>
          <div className={styles.role}>{profile.role}</div>
        </div>
        <nav className={styles.nav}>
          <a href="#about">ABOUT</a>
          <a href="#work">WORKS</a>
          <a href="#notes">후기</a>
          <a href="#contact" className={styles.contact}>
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
