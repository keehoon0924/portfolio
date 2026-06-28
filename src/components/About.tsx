import { Reveal } from "./Reveal";
import styles from "./About.module.css";
import { IconPhotoshop, IconFigma, IconCanva, IconCapCut, IconPPT, IconAI } from "./ToolIcons";

const career = [
  { company: "소담촌 구미산동점", role: "지점장", period: "2023.09 – 2025.12" },
  { company: "옥계양꼬치", role: "", period: "2022.07 – 2023.09" },
];

const education = [
  { school: "이젠아카데미 인천", desc: "SEO 최적화 디지털 브랜딩 UI/UX 웹서비스 구현 과정", period: "2026.02 – 2026.07" },
  { school: "백암고등학교", desc: "졸업", period: "2019.02" },
];

const keywords = ["문제발견", "데이터분석", "고객관찰", "SEO", "콘텐츠기획", "실행력"];

const traits = [
  { label: "관찰하는 사람", desc: "고객이 뭘 불편해하는지 먼저 봅니다" },
  { label: "실행하는 사람", desc: "배운 건 바로 적용해봅니다" },
  { label: "적응하는 사람", desc: "낯선 환경에서 더 빠릅니다" },
];

const tools = [
  { name: "Photoshop", Icon: IconPhotoshop },
  { name: "Figma", Icon: IconFigma },
  { name: "Canva", Icon: IconCanva },
  { name: "CapCut", Icon: IconCapCut },
  { name: "PPT", Icon: IconPPT },
  { name: "AI Tools", Icon: IconAI },
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        {/* 상단 헤더 */}
        <Reveal className={styles.topYear}>2026</Reveal>

        <div className={styles.layout}>

          {/* 왼쪽: 사진 + 이름 + 연락처 */}
          <div className={styles.left}>
            <Reveal className={styles.photoWrap}>
              <div className={styles.photo}>
                {/* 사진 준비 후 교체: <img src="/photo.jpg" alt="이기훈" /> */}
              </div>
            </Reveal>
            <Reveal delay={0.08} className={styles.nameBlock}>
              <p className={styles.jobTitle}>마케터 ——</p>
              <h2 className={styles.name}>이기훈 입니다.</h2>
            </Reveal>
            <Reveal delay={0.12} className={styles.contactBlock}>
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
            </Reveal>
          </div>

          {/* 오른쪽: 슬로건 + 정보 */}
          <div className={styles.right}>

            <Reveal className={styles.slogan}>
              고객의 불편을 발견하는 마케터
            </Reveal>

            {/* 경력 */}
            <Reveal delay={0.06} className={styles.block}>
              <h3 className={styles.blockTitle}>Experience</h3>
              {career.map((c) => (
                <div key={c.company} className={styles.row}>
                  <div className={styles.rowLeft}>
                    <span className={styles.rowMain}>{c.company}</span>
                    {c.role && <span className={styles.rowSub}>{c.role}</span>}
                    {/* TODO: 경력 설명 추가 */}
                  </div>
                  <span className={styles.rowPeriod}>{c.period}</span>
                </div>
              ))}
            </Reveal>

            {/* 교육 */}
            <Reveal delay={0.1} className={styles.block}>
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
            </Reveal>

            {/* 키워드 */}
            <Reveal delay={0.14} className={styles.block}>
              <h3 className={styles.blockTitle}>Keywords</h3>
              <div className={styles.keywords}>
                {keywords.map((k) => (
                  <span key={k} className={styles.keyword}>#{k}</span>
                ))}
              </div>
            </Reveal>

            {/* 나는 이런 사람 */}
            <Reveal delay={0.18} className={styles.block}>
              <h3 className={styles.blockTitle}>About Me</h3>
              {traits.map((t) => (
                <div key={t.label} className={styles.trait}>
                  <span className={styles.traitLabel}>{t.label}</span>
                  <span className={styles.traitArrow}>→</span>
                  <span className={styles.traitDesc}>{t.desc}</span>
                </div>
              ))}
            </Reveal>

            {/* 툴 */}
            <Reveal delay={0.22} className={styles.block}>
              <h3 className={styles.blockTitle}>Skills</h3>
              <div className={styles.toolList}>
                {tools.map((t) => (
                  <div key={t.name} className={styles.toolItem}>
                    <t.Icon size={40} />
                    <span className={styles.toolName}>{t.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
