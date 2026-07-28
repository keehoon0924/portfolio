import { useState } from "react";
import { Reveal } from "../Reveal";
import { LiveSitePreview } from "../LiveSitePreview";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 케이스 스터디 상세.
 * 직접 디자인한 슬라이드(1~7) → main-pc 롱 캡처 + 주석 →
 * 영상 파트(KV 영상 · 디자인 영상, 상단 가운데 텍스트 + 그리드 폭 영상) →
 * SNS 마케팅(Instagram·Threads 카드, 인스타 카드는 릴스 영상 모달) →
 * 마무리 브릿지 → 실제 배포 사이트 라이브 미리보기.
 */
const IMG = "/assets/tonefit/new";
const LIVE_URL = "https://ad-portfolio-tonefitcom.netlify.app";
const SLIDES = [1, 2, 3, 4, 5, 6, 7];
const MAIN_PC = `${IMG}/main-pc.png`;

/* SNS 마케팅 카드 (Instagram 1·2 / Threads 3·4) — insta2에 릴스 영상 */
const SNS_CARDS = [
  {
    img: "insta1",
    tag: "Instagram",
    caption:
      "인기 IP 콜라보 프레임 출시를 화보형 피드로 기획했습니다. 콜라보의 화제성을 브랜드 인지로 연결하고, ‘나도 찍어보고 싶다’는 방문 동기를 만드는 데 초점을 뒀습니다.",
  },
  {
    img: "insta2",
    tag: "Instagram",
    caption:
      "브랜드 핵심 메시지 ‘내 톤을 찾다’를 릴스 룩북 영상으로 제작했습니다. 릴스의 도달력을 활용해 브랜드 무드와 차별점을 각인시키고, 관심을 방문 고려 단계로 전환하는 것을 목표했습니다.",
    video: "1번 시안 영상.mp4",
  },
  {
    img: "insta3",
    tag: "Threads",
    caption:
      "쓰레드의 대화형 특성에 맞춰 반려동물 소재로 접점을 열었습니다. 가볍게 말 거는 화법으로 댓글·공유를 유도해, 자연스러운 바이럴과 반려인 타깃까지 브랜드 접점을 확장했습니다.",
  },
  {
    img: "insta4",
    tag: "Threads",
    caption:
      "반려동물도 함께 찍는 촬영 기능을 ‘집사’ 공감 화법으로 풀어냈습니다. 실제 사용 맥락을 대화체로 전달해, 반려인의 방문 전환과 인증·후기 참여(UGC)를 부담 없이 이끌었습니다.",
  },
];

/* main-pc 롱 캡처 주석 (세로 위치 %) — 섹션에 맞춰 배치 */
const MAIN_NOTES = [
  {
    top: "16%",
    num: "02",
    head: "Brand Identity",
    text: "TONE FIT은 개인의 고유한 톤(TONE)과 그에 맞는 촬영 환경의 조화(FIT)를 중심에 둡니다. 단순한 촬영 공간을 넘어, 사용자에게 더 자연스럽고 어울리는 결과를 제안합니다.",
  },
  {
    top: "32%",
    num: "03",
    head: "AI Smart Tone Finder",
    text: "기존 포토부스가 사용자의 선택에 의존했다면, TONE FIT은 30초 AI 분석으로 사용자의 톤을 이해하고 맞춤 촬영 경험으로 연결합니다. 브랜드의 차별화된 기술을 가장 직접적으로 보여주는 핵심 기능입니다.",
  },
  {
    top: "41%",
    num: "04",
    head: "Personal Background Matching",
    text: "AI 분석 결과를 실제 촬영 환경에 반영해 사용자의 톤에 맞는 배경 조합을 제안합니다. 이를 통해 보다 자연스럽고 정돈된 결과를 완성합니다.",
  },
  {
    top: "49%",
    num: "05",
    head: "Pet-Friendly Experience",
    text: "반려동물과 함께하는 촬영으로 콘텐츠의 확장 가능성을 보여줍니다. 일반 고객을 넘어 반려인까지 브랜드 접점을 넓히며, 사람과 반려동물이 함께 기록하는 경험을 제안합니다.",
  },
  {
    top: "58%",
    num: "06",
    head: "Limited Collab Frame",
    text: "매달 새롭게 교체되는 IP 콜라보 프레임으로 콘텐츠에 신선함을 더합니다. 방문할 때마다 다른 경험을 제공해, 한 번 온 고객이 다시 찾을 이유를 만듭니다.",
  },
  {
    top: "69%",
    num: "07",
    head: "Organic Virality",
    text: "촬영 경험이 자연스럽게 공유되도록 바이럴 구조를 설계했습니다. 사용자가 직접 남긴 콘텐츠가 브랜드 접점을 넓히고, 신뢰를 자연스럽게 쌓아가도록 구성했습니다.",
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
        <div className={styles.slides}>
          {SLIDES.map((n) => (
            <img
              key={n}
              className={styles.slide}
              src={`${IMG}/${n}.png`}
              alt={`TONE:FIT 케이스 스터디 ${n}`}
              loading={n <= 2 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* main-pc 롱 캡처 + 좌측 주석 (청연 방식) */}
        <section className={styles.mainSec}>
          <div className={styles.mainStage}>
            <div className={styles.mainMock}>
              <div className={styles.mainBar}>
                <span />
                <span />
                <span />
              </div>
              <img
                className={styles.mainImg}
                src={MAIN_PC}
                alt="TONE:FIT 메인 페이지"
                loading="lazy"
              />
            </div>
            {MAIN_NOTES.map((note) => (
              <div
                key={note.num}
                className={styles.mainNote}
                style={{ top: note.top }}
              >
                <p className={styles.mainNum}>{note.num}</p>
                <p className={styles.mainNoteHead}>{note.head}</p>
                <p className={styles.mainNoteText}>{note.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 영상 파트 ① KV 영상 — 상단 가운데 텍스트 + 그리드 폭 영상 */}
        <section className={styles.videoSec}>
          <Reveal className={styles.videoHead}>
            <p className={styles.videoLabel}>Key Visual</p>
            <h3 className={styles.videoTitle}>브랜드의 첫인상, KV 영상</h3>
            <p className={styles.videoDesc}>
              메인 진입과 동시에 재생되는 키 비주얼 영상입니다. 모든 장면을
              AI로 생성하고 편집해, 브랜드의 기술력과 감성을 동시에 각인시키고
              다음 스크롤로 자연스럽게 이어지게 설계했습니다.
            </p>
          </Reveal>
          <Reveal delay={0.1} className={styles.videoWrap}>
            <video
              className={styles.videoEl}
              src="/assets/vidio/main-kv.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </Reveal>
        </section>

        {/* 영상 파트 ② 디자인 영상 — 상단 가운데 텍스트 + 그리드 폭 영상 */}
        <section className={styles.videoSec}>
          <Reveal className={styles.videoHead}>
            <p className={styles.videoLabel}>Design Film</p>
            <h3 className={styles.videoTitle}>매장을 채우는 무드와 소품</h3>
            <p className={styles.videoDesc}>
              프리미엄 무인 스튜디오의 공간 분위기와 다양한 촬영 소품을 영상으로
              담아, TONE:FIT만의 감성적인 매장 경험을 전합니다.
            </p>
          </Reveal>
          <Reveal delay={0.1} className={styles.videoWrap}>
            <video
              className={styles.videoEl}
              src={encodeURI("/assets/vidio/영상3.mp4")}
              autoPlay
              muted
              loop
              playsInline
            />
          </Reveal>
        </section>

        {/* SNS 마케팅 — Instagram·Threads 카드 (insta2는 릴스 영상 모달) */}
        <section className={styles.snsSec}>
          <Reveal className={styles.snsHead}>
            <p className={styles.snsLabel}>
              <span className={styles.snsDot} />
              SNS Marketing
            </p>
            <h3 className={styles.videoTitle}>SNS로 확장한 TONE:FIT 브랜드 경험</h3>
            <p className={styles.videoDesc}>
              Instagram과 Threads 두 채널의 특성에 맞춰 콘텐츠를 기획했습니다.
              화보형 콘텐츠로 브랜드 무드를 각인시키고, 대화형 콘텐츠로 후기와
              참여를 이끌어내 자연스러운 바이럴과 재방문을 유도했습니다.
            </p>
          </Reveal>

          <div className={styles.snsGrid}>
            {SNS_CARDS.map((c) => (
              <Reveal key={c.img} className={styles.snsCard}>
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
                  <span className={styles.snsBadge}>{c.tag}</span>
                </button>
                {c.video && (
                  <button
                    type="button"
                    className={styles.snsVideoBtn}
                    onClick={() =>
                      setVideoModal(encodeURI(`/assets/vidio/${c.video}`))
                    }
                  >
                    ▶ 영상 보기 →
                  </button>
                )}
                <p className={styles.snsCaption}>{c.caption}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 마무리 + 라이브 진입 안내 (섹션 → iframe 전환 브릿지) */}
        <section className={styles.outro}>
          <p className={styles.outroLabel}>END OF CASE STUDY</p>
          <h2 className={styles.outroTitle}>
            기획부터 화면까지,
            <br />
            TONE:FIT을 만든 과정이었습니다.
          </h2>
          <div className={styles.outroLive}>
            <span className={styles.outroTag}>LIVE SITE</span>
            <p className={styles.outroLine}>
              이제, 실제로 움직이는 화면을 직접 둘러보세요.
            </p>
            <p className={styles.outroSub}>PC · 모바일 지원</p>
          </div>
          <svg
            className={styles.scrollCue}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>

        {/* 실제 배포 사이트 라이브 미리보기 */}
        <div className={styles.liveWrap}>
          <LiveSitePreview url={LIVE_URL} />
        </div>
      </div>

      {/* SNS 이미지 라이트박스 */}
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

      {/* 인스타 릴스 스타일 영상 모달 */}
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
          <div className={styles.reelFrame} onClick={(e) => e.stopPropagation()}>
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
