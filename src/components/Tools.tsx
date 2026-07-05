import { useState } from "react";
import styles from "./Tools.module.css";

/**
 * Tools — 사용 가능한 툴을 가로로 무한 슬라이드하는 마퀴 섹션.
 * 각 로고는 SVG를 로컬에서 로드해 3D 타일 위에 얹는다:
 *   public/assets/images/{file}
 * 이미지가 없거나 파일명이 다르면 텍스트 배지로 자동 폴백한다.
 */
type Tool = { name: string; file: string };

const tools: Tool[] = [
  { name: "Figma", file: "figma-icon.svg" },
  { name: "Photoshop", file: "Photoshop.svg" },
  { name: "HTML5", file: "html5.svg" },
  { name: "CSS3", file: "css_old.svg" },
  { name: "JavaScript", file: "javascript-1.svg" },
  { name: "Bootstrap", file: "bootstrap-5-1.svg" },
  { name: "jQuery", file: "jquery-3.svg" },
  { name: "ChatGPT", file: "chatgpt-4.svg" },
  { name: "Claude", file: "anthropic-1.svg" },
  { name: "Gemini", file: "gemini.svg" },
  { name: "CapCut", file: "capcut-symbol-logo-vector.svg" },
  { name: "Notion", file: "notion-2.svg" },
  { name: "GA4", file: "google-analytics.svg" },
];

function ToolItem({ tool }: { tool: Tool }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return <span className={styles.badge}>{tool.name}</span>;
  }
  return (
    <div className={styles.tile} title={tool.name}>
      <img
        className={styles.logo}
        src={`/assets/images/${tool.file}`}
        alt={tool.name}
        loading="lazy"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export function Tools() {
  // 끊김 없는 루프를 위해 목록을 2번 반복한다.
  const loop = [...tools, ...tools];

  return (
    <section className={styles.section} aria-label="사용 가능한 툴">
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {loop.map((t, i) => (
            <li key={`${t.name}-${i}`} className={styles.item}>
              <ToolItem tool={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
