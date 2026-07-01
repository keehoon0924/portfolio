import { useState } from "react";
import { Reveal } from "../Reveal";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 상세 소개 페이지 (WORK 카드 클릭 시 오버레이로 열림).
 * 레퍼런스 구조를 따르고 내용은 전부 TONE:FIT으로 작성.
 * 섹션: Hero → Concept → Desk research(img) → User research(img)
 *      → IMC → Solution → Project Goal → KV 영상 → 디자인 영상
 */

/** IMC 3단계 전략 */
const imc = [
  {
    tag: "IMC Strategy 1",
    emoji: "👀",
    title: "브랜드 인지 단계",
    body: "온·오프라인 채널로 브랜드 접근성을 높이고, 기존 무인 포토부스와의 차별점(AI 퍼스널 컬러)을 명확히 각인시킵니다.",
  },
  {
    tag: "IMC Strategy 2",
    emoji: "💡",
    title: "경험·신뢰 단계",
    body: "30초 AI 스캔과 맞춤 촬영을 직접 경험하게 하여, 데이터·기술 기반 브랜드에 대한 신뢰를 형성합니다.",
  },
  {
    tag: "IMC Strategy 3",
    emoji: "🗣️",
    title: "확산·재방문 단계",
    body: "콜라보 프레임과 SNS 인증 요소로 화제성을 만들어, 고객의 자발적 공유와 재방문을 자연스럽게 유도합니다.",
  },
];

/** Solution 카드 */
const solutions = [
  {
    tag: "Solution 1",
    title: "AI 브랜드 경험",
    items: [
      "AI 퍼스널 컬러 진단 – 30초 스캔",
      "맞춤 조명·배경 자동 세팅",
      "무보정 화보 퀄리티 결과물",
    ],
  },
  {
    tag: "Solution 2",
    title: "무인 프리미엄 공간",
    items: [
      "24시간 무인 스튜디오 운영",
      "다양한 FRAME·컷 구성",
      "반려동물 동반 입장 가능",
    ],
  },
  {
    tag: "Solution 3",
    title: "바이럴·재방문",
    items: [
      "캐릭터·아티스트 콜라보 프레임",
      "SNS 인증 아카이브 리포트",
      "시즌 컨셉으로 재방문 유도",
    ],
  },
];

/** SNS 마케팅 카드 (Instagram 1·2 / Threads 3·4) */
const snsCards = [
  {
    img: "insta1",
    tag: "Instagram",
    caption:
      "새 콜라보 프레임 오픈 소식을 화보처럼 담아, ‘나도 찍으러 가고 싶다’는 마음이 들게 했어요.",
  },
  {
    img: "insta2",
    tag: "Instagram",
    caption:
      "‘내 톤을 찾는’ 브랜드 메시지를 감각적인 룩북 영상으로 풀어, 자연스럽게 방문으로 이어지게 했어요.",
    video: "1번 시안 영상.mp4",
  },
  {
    img: "insta3",
    tag: "Threads",
    caption:
      "반려동물과 함께한 순간으로 대화를 열어, 댓글과 공유가 오가는 따뜻한 바이럴을 만들었어요.",
  },
  {
    img: "insta4",
    tag: "Threads",
    caption:
      "친구에게 말 걸듯한 톤으로 후기를 나눠, 재방문과 인증 참여를 부담 없이 이끌었어요.",
  },
];

export function TonefitDetail({ onClose }: { onClose: () => void }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="TONE:FIT 프로젝트 상세"
    >
      <button className={styles.close} onClick={onClose} aria-label="닫기">
        ✕
      </button>

      <div className={styles.page}>
        {/* ① Hero — 카테고리·개요 + 폰 목업 */}
        <section className={styles.hero}>
          <Reveal className={styles.heroText}>
            <p className={styles.category}>UI/UX · Web / Contents Design</p>
            <h2 className={styles.heroTitle}>
              TONE:FIT
              <br />
              브랜드 웹 · 콘텐츠
            </h2>

            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Overview</h4>
              <p className={styles.blockBody}>
                TONE:FIT은 AI 퍼스널 컬러 기술로 ‘나에게 맞는 색’을 찾아주는 무인
                프리미엄 포토 스튜디오입니다. 유행이 아닌 데이터와 기술로
                차별화하여, 고객에게는 무결점 화보 경험을, 예비 창업자에게는 무인
                고수익 모델을 제안합니다. 시장·사용자 리서치부터 브랜드
                아이덴티티, 웹·콘텐츠 디자인까지의 과정을 담았습니다.
              </p>
            </div>

            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Participation</h4>
              <p className={styles.blockBody}>
                브랜드 기획 · UI/UX 디자인 · 콘텐츠 제작
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={styles.phones}>
            {["phone3", "phone4", "phone5", "phone6"].map((img, i) => (
              <div key={img} className={`${styles.phone} ${styles[`phone${i}`]}`}>
                <img
                  className={styles.phoneImg}
                  src={`/assets/images/${img}.png`}
                  alt={`TONE:FIT 화면 ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </Reveal>
        </section>

        {/* ② Concept Explain — 좌측 설명 + 화면 갤러리 */}
        <section className={styles.concept}>
          <Reveal className={styles.conceptText}>
            <h4 className={styles.blockLabel}>Concept Explain</h4>
            <p className={styles.blockBody}>
              ‘클린-테크(Clean-Tech)’를 핵심 무드로, 오프화이트와 포인트
              오렌지를 활용해 갤러리 같은 신뢰감을 설계했습니다. 1px 헤어라인
              그리드와 글래스모피즘으로 정교한 기술 이미지를 전달하고, 사진과
              콘텐츠가 돋보이도록 여백과 위계를 정리해 가독성을 높였습니다.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.conceptGallery}>
            {[1, 2, 3, 4, 5].map((n) => (
              <img
                key={n}
                className={styles.shotImg}
                src={`/assets/images/${n}.png`}
                alt={`TONE:FIT 디자인 화면 ${n}`}
                loading="lazy"
              />
            ))}
          </Reveal>
        </section>

        {/* ③ Desk research — 이미지 */}
        <section className={styles.imgSection}>
          <Reveal>
            <img
              className={styles.fullImg}
              src={encodeURI("/assets/images/Desk research.png")}
              alt="Desk research — 시장·소비자 리서치"
              loading="lazy"
            />
          </Reveal>
        </section>

        {/* ④ User research — 이미지 */}
        <section className={styles.imgSection}>
          <Reveal>
            <img
              className={styles.fullImg}
              src="/assets/images/presona.png"
              alt="User research — 페르소나"
              loading="lazy"
            />
          </Reveal>
        </section>

        {/* ⑤ IMC 전략 */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <h3 className={styles.headTitle}>
              브랜드 경험을 확산하는 TONE:FIT IMC 전략
            </h3>
            <p className={styles.headDesc}>
              온·오프라인의 경계를 넘어 일관되고 설득력 있는 브랜드 메시지를
              전달하고, 고객의 자발적 공유를 이끌어내기 위해 3단계 IMC 전략을
              설계했습니다.
            </p>
          </Reveal>

          <div className={styles.cards3}>
            {imc.map((c) => (
              <Reveal key={c.tag} className={styles.imcCard}>
                <span className={styles.imcTag}>{c.tag}</span>
                <span className={styles.imcEmoji}>{c.emoji}</span>
                <div className={styles.imcTitle}>{c.title}</div>
                <p className={styles.imcBody}>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ⑥ Solution — 3 카드 */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <h3 className={styles.headTitle}>
              TONE:FIT이 제안하는 3가지 솔루션
            </h3>
            <p className={styles.headDesc}>
              데이터·기술을 브랜드 경험으로 연결하기 위해, 촬영 경험부터 공간
              운영, 바이럴 확산까지 세 갈래의 솔루션을 설계했습니다.
            </p>
          </Reveal>

          <div className={styles.cards3}>
            {solutions.map((s) => (
              <Reveal key={s.tag} className={styles.solCard}>
                <span className={styles.solLabel}>{s.tag}</span>
                <div className={styles.solTitle}>{s.title}</div>
                <ul className={styles.solList}>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ⑦ Project Goal — 중앙 정렬 */}
        <section className={styles.goal}>
          <Reveal>
            <p className={styles.goalLabel}>Project Goal</p>
            <p className={styles.goalText}>
              데이터와 기술로 ‘나에게 맞는 색’을 찾는 경험을 전하고,{" "}
              <span className={styles.hl}>
                무인 프리미엄 포토 스튜디오의 새로운 기준
              </span>
              을 만들자!
            </p>
          </Reveal>
        </section>

        {/* ⑧ Key Visual — 좌측 KV 영상 + 우측 텍스트 */}
        <section className={styles.media}>
          <Reveal className={styles.videoBox}>
            <video
              className={styles.videoEl}
              src="/assets/vidio/main-kv.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </Reveal>
          <Reveal delay={0.1} className={styles.mediaText}>
            <h4 className={styles.blockLabel}>Key Visual</h4>
            <h3 className={styles.mediaTitle}>브랜드의 첫인상, KV 영상</h3>
            <p className={styles.blockBody}>
              메인 진입과 동시에 재생되는 키 비주얼 영상입니다. 브랜드의 기술력과
              감성을 동시에 각인시키고 다음 스크롤로 자연스럽게 이어지게
              설계했습니다.
            </p>
          </Reveal>
        </section>

        {/* ⑨ 디자인 영상 — 상단 타이틀 + 16:9 영상 */}
        <section className={styles.videoSection}>
          <Reveal className={styles.videoHead}>
            <h3 className={styles.mediaTitle}>매장을 채우는 무드와 소품</h3>
            <p className={styles.videoDesc}>
              프리미엄 무인 스튜디오의 공간 분위기와 다양한 촬영 소품을 영상으로
              담아, TONE:FIT만의 감성적인 매장 경험을 전합니다.
            </p>
          </Reveal>
          <Reveal delay={0.1} className={styles.wideVideoWrap}>
            <video
              className={styles.wideVideo}
              src={encodeURI("/assets/vidio/영상3.mp4")}
              autoPlay
              muted
              loop
              playsInline
            />
          </Reveal>
        </section>

        {/* ⑩ SNS 마케팅 — 라벨 + 4카드(Instagram/Threads) */}
        <section className={styles.section}>
          <Reveal className={styles.head}>
            <p className={styles.snsLabel}>
              <span className={styles.snsDot} />
              SNS Marketing
            </p>
            <h3 className={styles.headTitle}>
              SNS로 확장한 TONE:FIT 브랜드 경험
            </h3>
            <p className={styles.headDesc}>
              Instagram과 Threads 두 채널의 특성에 맞춰 콘텐츠를 기획했습니다.
              화보형 콘텐츠로 브랜드 무드를 각인시키고, 대화형 콘텐츠로 후기와
              참여를 이끌어내 자연스러운 바이럴과 재방문을 유도했습니다.
            </p>
          </Reveal>

          <div className={styles.snsGrid}>
            {snsCards.map((c) => (
              <Reveal key={c.img} className={styles.snsCard}>
                <span className={styles.snsBadge}>{c.tag}</span>
                <button
                  type="button"
                  className={styles.snsThumb}
                  onClick={() => setLightbox(`/assets/images/${c.img}.png`)}
                  aria-label={`${c.tag} 게시물 크게 보기`}
                >
                  <img
                    className={styles.snsImg}
                    src={`/assets/images/${c.img}.png`}
                    alt={c.caption}
                    loading="lazy"
                  />
                </button>
                <p className={styles.snsCaption}>{c.caption}</p>
                {c.video && (
                  <button
                    type="button"
                    className={styles.snsVideoBtn}
                    onClick={() =>
                      setVideoModal(encodeURI(`/assets/vidio/${c.video}`))
                    }
                  >
                    ▶ 영상 보기
                  </button>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
        >
          <button className={styles.lightboxClose} aria-label="닫기">
            ✕
          </button>
          <img className={styles.lightboxImg} src={lightbox} alt="확대 이미지" />
        </div>
      )}

      {videoModal && (
        <div
          className={styles.lightbox}
          onClick={() => setVideoModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label="영상 보기"
        >
          <button className={styles.lightboxClose} aria-label="닫기">
            ✕
          </button>
          <div
            className={styles.reelFrame}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className={styles.reelVideo}
              src={videoModal}
              autoPlay
              loop
              playsInline
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
}
