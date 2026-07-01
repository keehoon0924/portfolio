import { useState } from "react";
import styles from "./Tools.module.css";

/**
 * Tools — 사용 가능한 툴을 가로로 무한 슬라이드하는 마퀴 섹션.
 * 로고는 Simple Icons CDN(cdn.simpleicons.org)에서 브랜드 컬러로 로드한다.
 * slug이 없는 툴(예: Cursor)은 텍스트 배지로 폴백한다.
 */
type Tool = { name: string; slug?: string };

const tools: Tool[] = [
  { name: "Figma", slug: "figma" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "Adobe XD", slug: "adobexd" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "jQuery", slug: "jquery" },
  { name: "ChatGPT", slug: "openai" },
  { name: "Claude", slug: "claude" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Cursor" },
  { name: "CapCut", slug: "capcut" },
  { name: "Notion", slug: "notion" },
  { name: "GA4", slug: "googleanalytics" },
  { name: "네이버 플레이스", slug: "naver" },
];

function ToolItem({ tool }: { tool: Tool }) {
  const [broken, setBroken] = useState(false);

  if (!tool.slug || broken) {
    return <span className={styles.badge}>{tool.name}</span>;
  }
  return (
    <img
      className={styles.logo}
      src={`https://cdn.simpleicons.org/${tool.slug}`}
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
