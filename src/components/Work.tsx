import { useState } from "react";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

/**
 * Work — 대표 프로젝트를 2단 카드 그리드로 소개.
 * 상단은 아웃라인 대형 타이포 "WORK →".
 * 카드 이미지는 public/assets/images/{img} 에서 로드하고,
 * 없으면 플레이스홀더로 폴백한다.
 */
type Project = {
  title: string;
  tags: string;
  img: string;
  /** 목업 PNG는 잘리지 않게 contain, 스크린샷은 cover */
  fit?: "cover" | "contain";
  link?: string;
};

const projects: Project[] = [
  {
    title: "TONE:FIT",
    tags: "Web | 디자인 · 개발 · 퍼블리싱 · SEO · 유지보수",
    img: "phone1.png",
    fit: "contain",
    link: "https://ad-portfolio-tonefitcom.netlify.app",
  },
  {
    title: "청연 (다도 원데이클래스)",
    tags: "Web | 디자인 · 개발 · 퍼블리싱 · SEO · 유지보수",
    img: "cheongyeon.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [broken, setBroken] = useState(false);

  const media = broken ? (
    <div className={styles.placeholder}>
      <span>{project.title}</span>
    </div>
  ) : (
    <img
      className={project.fit === "contain" ? styles.shotContain : styles.shot}
      src={`/assets/images/${project.img}`}
      alt={project.title}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );

  const card = (
    <>
      <div className={styles.frame}>{media}</div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tags}>{project.tags}</p>
    </>
  );

  return project.link ? (
    <a
      className={styles.card}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      {card}
    </a>
  ) : (
    <div className={styles.card}>{card}</div>
  );
}

export function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <span className={styles.outline}>WORK</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((p) => (
            <Reveal key={p.title} className={styles.cardWrap}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
