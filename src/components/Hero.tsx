import styles from "./Hero.module.css";

/**
 * Hero / KV — mjaedot 레퍼런스 스타일.
 * 좌측: 솔리드 + 아웃라인 대형 타이포. 우측: 기울어진 폴라로이드 캐릭터 카드.
 * 하단 중앙: scroll 인디케이터.
 */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.lineSolid}>KEEHOON&rsquo;S</span>
          <span className={styles.lineOutline}>PORTFOLIO</span>
        </div>

        <figure className={styles.polaroid}>
          <div className={styles.photo}>
            <img
              src="/assets/images/main-character.png"
              alt="Keehoon character"
              className={styles.photoImg}
            />
          </div>
          <figcaption className={styles.caption}>keehoon</figcaption>
        </figure>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollDot} />
        <span className={styles.scrollLabel}>scroll me</span>
      </div>
    </section>
  );
}
