import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./Closing.module.css";

/**
 * Closing — "마지막 한마디" 섹션.
 * 세로 바 + 제목(일부 하이라이트) + 부연 설명 리스트.
 */
type Item = {
  title: ReactNode;
  desc: string;
};

const items: Item[] = [
  {
    title: (
      <>
        아직 전문가라고 할 수는 없습니다
        <br />
        하지만 기획에서 끝내지 않고 <span className={styles.hl}>직접 만들어냅니다</span>
      </>
    ),
    desc: "상세페이지, 이벤트 배너, 영상 편집까지 손으로 다뤄봤기에, 기획할 때부터 ‘실제로 구현 가능한 그림’을 그립니다",
  },
  {
    title: (
      <>
        유행보다 <span className={styles.hl}>왜 유행하는지</span>를 봅니다
      </>
    ),
    desc: "유행하는 콘텐츠일수록 반응의 이유를 먼저 분석하고, 우리 브랜드에 맞게 적용해 실제 성과로 잇는 방법을 고민합니다",
  },
  {
    title: (
      <>
        콘텐츠에는 <span className={styles.hl}>보는 사람의 흐름</span>이 있다고 믿습니다
      </>
    ),
    desc: "브랜드 컨셉부터 화면 안에서 시선이 머무는 순서까지 — 읽히는 콘텐츠와 넘겨지는 콘텐츠의 차이를 고민합니다",
  },
];

export function Closing() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p className={styles.label}>마지막 한마디</p>
          <h2 className={styles.title}>“저는 이런 마케터입니다”</h2>
        </Reveal>

        <div className={styles.list}>
          {items.map((it, i) => (
            <Reveal key={i} delay={0.05 * i} className={styles.item}>
              <h3 className={styles.itemTitle}>
                <span className={styles.bar} />
                <span>{it.title}</span>
              </h3>
              <p className={styles.itemDesc}>- {it.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
