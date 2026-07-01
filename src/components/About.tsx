import { Reveal } from "./Reveal";
import styles from "./About.module.css";

/**
 * About — 좌측 프로필 사진 + 우측 자기소개 텍스트.
 * 사진: public/assets/images/self.jpg
 */
export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>ABOUT ME</h2>

        <div className={styles.grid}>
          <Reveal className={styles.photoWrap}>
            <img
              src="/assets/images/id_photo.jpg"
              alt="이기훈 프로필 사진"
              className={styles.photo}
            />
          </Reveal>

          <Reveal delay={0.1} className={styles.body}>
            <div className={styles.name}>Keehoon Lee</div>

            <p className={styles.lead}>
              안녕하세요.
              <br />
              현장에서 고객의 반응을 읽고,
              <br />그 흐름을 마케팅으로 연결해가는 예비 마케터 이기훈입니다.
            </p>

            <p className={styles.para}>
              저는 매장 운영 경험을 통해 고객이 어떤 이유로 방문하고, 다시 찾게
              되는지를 직접 관찰했습니다. 지점장으로 근무하며 매출 관리와 고객
              응대를 경험했고, 네이버 플레이스 키워드 관리와 블로그 체험단 운영을
              직접 시도하며 온라인 노출이 실제 방문으로 이어지는 과정을
              배웠습니다.
            </p>

            <p className={styles.para}>
              특히 검색 키워드와 고객 반응을 분석해 매장의 플레이스 검색 유입을
              개선한 경험은 제가 마케팅에 관심을 갖게 된 가장 큰 계기였습니다.
            </p>

            <p className={styles.para}>
              현재는 SEO, 디지털 브랜딩, UI/UX 웹서비스 구현 과정을 통해 콘텐츠
              기획, 상세페이지 제작, 웹사이트 구조 설계 등을 배우고 있습니다.
              또한 ChatGPT, Claude, Gemini, Cursor, CapCut 등 AI 도구를 활용해
              기획과 제작의 효율을 높이는 방법도 함께 익히고 있습니다.
            </p>

            <p className={styles.para}>
              저는 감각만으로 움직이는 마케터보다, 고객 반응과 데이터를 근거로
              문제를 발견하고 작은 개선을 실행해 성과로 연결하는 마케터로
              성장하고자 합니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
