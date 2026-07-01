import { useState } from "react";
import styles from "./Tools.module.css";

/**
 * Tools — 사용 가능한 툴을 가로로 무한 슬라이드하는 마퀴 섹션.
 * 각 로고는 3D 아이콘 PNG를 로컬에서 로드한다:
 *   public/assets/images/tools/{file}
 * 이미지가 없으면(아직 안 넣었으면) 텍스트 배지로 자동 폴백한다.
 */
type Tool = { name: string; file: string };

const tools: Tool[] = [
  { name: "Figma", file: "figma.png" },
  { name: "Photoshop", file: "photoshop.png" },
  { name: "Illustrator", file: "illustrator.png" },
  { name: "Adobe XD", file: "adobexd.png" },
  { name: "HTML5", file: "html5.png" },
  { name: "CSS3", file: "css3.png" },
  { name: "JavaScript", file: "javascript.png" },
  { name: "Bootstrap", file: "bootstrap.png" },
  { name: "jQuery", file: "jquery.png" },
  { name: "ChatGPT", file: "chatgpt.png" },
  { name: "Claude", file: "claude.png" },
  { name: "Gemini", file: "gemini.png" },
  { name: "Cursor", file: "cursor.png" },
  { name: "CapCut", file: "capcut.png" },
  { name: "Notion", file: "notion.png" },
  { name: "GA4", file: "ga4.png" },
];

function ToolItem({ tool }: { tool: Tool }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return <span className={styles.badge}>{tool.name}</span>;
  }
  return (
    <img
      className={styles.logo}
      src={`/assets/images/tools/${tool.file}`}
      alt={tool.name}
      title={tool.name}
      loading="lazy"
      onError={() => setBroken(true)}
    />
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
