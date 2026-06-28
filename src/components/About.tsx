import styles from "./About.module.css";
import { IconPhotoshop, IconFigma, IconCanva, IconCapCut, IconPPT, IconAI } from "./ToolIcons";

const career = [
  { company: "소담촌 구미산동점", role: "지점장", period: "2023 – 2025" },
  { company: "옥계양꼬치", role: "", period: "2022 – 2023" },
];

const education = [
  { school: "이젠아카데미", desc: "SEO·UI/UX 웹서비스 과정", period: "2026" },
  { school: "백암고등학교", desc: "졸업", period: "2019" },
];

const tools = [
  { name: "Photoshop", Icon: IconPhotoshop, desc: "이미지 보정, 배너·상세페이지" },
  { name: "Figma", Icon: IconFigma, desc: "UI 디자인, 목업·프로토타이핑" },
  { name: "Canva", Icon: IconCanva, desc: "SNS 썸네일, 카드뉴스" },
  { name: "CapCut", Icon: IconCapCut, desc: "숏폼 영상, 릴스·쇼츠 편집" },
  { name: "PPT", Icon: IconPPT, desc: "발표자료, 제안서·기획서" },
  { name: "AI Tools", Icon: IconAI, desc: "GPT·Gemini·Claude, 영상 AI" },
];

export function About() {
  return (
    <section id="about" className={styles.section}>

      {/* 배경 장식 선 */}
      <svg className={styles.deco} viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="350" r="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        <circle cx="200" cy="350" r="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        <line x1="600" y1="0" x2="1200" y2="700" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
      </svg>

      <div className={styles.inner}>

        {/* 왼쪽 */}
        <div className={styles.left}>
          <p className={styles.decoText}>About<br/>Me</p>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              {/* TODO: <img src="/photo.jpg" alt="이기훈" /> */}
            </div>
          </div>
          <div className={styles.nameBlock}>
            <h2 className={styles.name}>이기훈</h2>
            <p className={styles.nameEn}>LEE KIHOON</p>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Call</span>
              <span className={styles.contactValue}>010-5676-9024</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>edcrfv51@gmail.com</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Lang</span>
              <span className={styles.contactValue}>한국어 · 中文</span>
            </div>
          </div>
        </div>

        {/* 가운데 */}
        <div className={styles.mid}>
          <p className={styles.slogan}>고객의 불편을 발견하는 마케터</p>

          <div className={styles.divider}/>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Experience</h3>
            {career.map((c) => (
              <div key={c.company} className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.rowMain}>{c.company}</span>
                  {c.role && <span className={styles.rowSub}>{c.role}</span>}
                </div>
                <span className={styles.rowPeriod}>{c.period}</span>
              </div>
            ))}
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Education</h3>
            {education.map((e) => (
              <div key={e.school} className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.rowMain}>{e.school}</span>
                  <span className={styles.rowSub}>{e.desc}</span>
                </div>
                <span className={styles.rowPeriod}>{e.period}</span>
              </div>
            ))}
          </div>

          <div className={styles.divider}/>

          <div className={styles.traits}>
            <div className={styles.trait}><span className={styles.traitDot}/><span>관찰하는 사람 — 고객이 뭘 불편해하는지 먼저 봅니다</span></div>
            <div className={styles.trait}><span className={styles.traitDot}/><span>실행하는 사람 — 배운 건 바로 적용해봅니다</span></div>
            <div className={styles.trait}><span className={styles.traitDot}/><span>적응하는 사람 — 낯선 환경에서 더 빠릅니다</span></div>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className={styles.right}>
          <h3 className={styles.blockTitle}>Skills</h3>
          <div className={styles.toolList}>
            {tools.map((t) => (
              <div key={t.name} className={styles.toolItem}>
                <div className={styles.toolIconWrap}>
                  <t.Icon size={38} />
                </div>
                <div className={styles.toolInfo}>
                  <span className={styles.toolName}>{t.name}</span>
                  <span className={styles.toolDesc}>{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
