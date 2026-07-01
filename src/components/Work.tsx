import { useState } from "react";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

/**
 * Work — 대표 프로젝트를 2단 카드 그리드로 소개.
 * 상단은 아웃라인 대형 타이포 "WORK →".
 * TONE:FIT은 데스크탑+휴대폰 목업 조합, 그 외는 단일 스크린샷.
 */
type Project = {
  title: string;
  tags: string;
  /** 단일 이미지(스크린샷) 경로 */
  img?: string;
  /** 데스크탑+휴대폰 목업 조합으로 렌더 */
  device?: { desktop: string; phone: string };
  link?: string;
  /** 클릭 시 상세 오버레이 열기 */
  detail?: boolean;
};

const projects: Project[] = [
  {
    title: "TONE:FIT",
    tags: "Web | 디자인 · 개발 · 퍼블리싱 · SEO · 유지보수",
    device: { desktop: "main-pc.png", phone: "momain.png" },
    detail: true,
  },
  {
    title: "청연 (다도 원데이클래스)",
    tags: "Web | 디자인 · 개발 · 퍼블리싱 · SEO · 유지보수",
    img: "cheongyeon.png",
  },
];

/** 데스크탑(iMac 스타일) + 휴대폰 1대 목업 조합 */
function DeviceCombo({ desktop, phone }: { desktop: string; phone: string }) {
  return (
    <div className={styles.combo}>
      <div className={styles.monitor}>
        <div className={styles.monitorScreen}>
          <img src={`/assets/images/${desktop}`} alt="데스크탑 화면" />
        </div>
        <div className={styles.monitorChin} />
        <div className={styles.monitorStand} />
        <div className={styles.monitorFoot} />
      </div>

      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <img
          className={styles.phoneScreen}
          src={`/assets/images/${phone}`}
          alt="모바일 화면"
        />
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpenDetail,
}: {
  project: Project;
  onOpenDetail: () => void;
}) {
  const [broken, setBroken] = useState(false);

  let media;
  if (project.device) {
    media = (
      <DeviceCombo
        desktop={project.device.desktop}
        phone={project.device.phone}
      />
    );
  } else if (broken || !project.img) {
    media = (
      <div className={styles.placeholder}>
        <span>{project.title}</span>
      </div>
    );
  } else {
    media = (
      <img
        className={styles.shot}
        src={`/assets/images/${project.img}`}
        alt={project.title}
        loading="lazy"
        onError={() => setBroken(true)}
      />
    );
  }

  const card = (
    <>
      <div className={styles.frame}>{media}</div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tags}>{project.tags}</p>
    </>
  );

  if (project.detail) {
    return (
      <button type="button" className={styles.card} onClick={onOpenDetail}>
        {card}
      </button>
    );
  }
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

export function Work({ onOpenTonefit }: { onOpenTonefit: () => void }) {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.heading}>
          <span className={styles.outline}>WORK</span>
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

        <div className={styles.grid}>
          {projects.map((p) => (
            <Reveal key={p.title} className={styles.cardWrap}>
              <ProjectCard project={p} onOpenDetail={onOpenTonefit} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
