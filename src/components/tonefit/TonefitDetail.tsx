import { useState } from "react";
import { Reveal } from "../Reveal";
import styles from "./TonefitDetail.module.css";

/**
 * TONE:FIT 상세 소개 페이지 (WORK 카드 클릭 시 오버레이로 열림).
 * 레퍼런스 구조를 따르고 내용은 전부 TONE:FIT으로 작성.
 * 섹션: Hero → Concept → Desk research(img) → User research(img)
 *      → IMC → Solution → Project Goal → KV 영상 → 디자인 영상
 */

/** Problem → Solution 한 페이지 (상단 문제 → 하단 해결) */
const problemSolutions = [
  {
    problem: "비슷한 촬영 경험의 반복",
    solTag: "Solution 1",
    solTitle: "AI 퍼스널 컬러 매칭",
    solBody:
      "피부 톤을 스캔해 최적의 조명·배경을 자동 세팅하고, ‘나에게 맞는’ 무결점 화보 경험을 제공합니다.",
  },
  {
    problem: "브랜드 간 차별화 부족",
    solTag: "Solution 2",
    solTitle: "무인 프리미엄 공간",
    solBody:
      "24시간 무인 스튜디오와 다양한 FRAME 구성으로, 기술과 감성이 공존하는 차별화된 경험을 설계했습니다.",
  },
  {
    problem: "개인화·감성 경험의 부재",
    solTag: "Solution 3",
    solTitle: "콜라보·바이럴 설계",
    solBody:
      "캐릭터·아티스트 콜라보 프레임과 SNS 인증 요소로, 고객의 자발적 공유와 재방문을 유도합니다.",
  },
];

/** SNS 마케팅 — 채널별 그룹 (Instagram / Threads) */
const snsGroups = [
  {
    channel: "Instagram",
    cards: [
      {
        img: "insta1",
        caption:
          "새 콜라보 프레임 오픈 소식을 화보처럼 담아, ‘나도 찍으러 가고 싶다’는 마음이 들게 했습니다.",
      },
      {
        img: "insta2",
        caption:
          "‘내 톤을 찾는’ 브랜드 메시지를 감각적인 룩북 영상으로 풀어, 자연스럽게 방문으로 이어지게 했습니다.",
        video: "1번 시안 영상.mp4",
      },
    ],
  },
  {
    channel: "Threads",
    cards: [
      {
        img: "insta3",
        caption:
          "반려동물과 함께한 순간으로 대화를 열어, 댓글과 공유가 오가는 따뜻한 바이럴을 만들었습니다.",
      },
      {
        img: "insta4",
        caption:
          "친구에게 말 걸듯한 톤으로 후기를 나눠, 재방문과 인증 참여를 부담 없이 이끌었습니다.",
      },
    ],
  },
];

/** UI 쇼케이스 — 실제 사이트를 캡처해 목업에 삽입 (데스크탑 풀 + 모바일 왼쪽) */
const uiShowcases = [
  {
    id: "identity",
    label: "Brand Identity",
    title: "AI가 피부를 분석하는 브랜드",
    pc: "/assets/tonefit-case/identity-pc.png",
    mo: "/assets/tonefit-case/identity-mo.png",
    notes: [
      "TONE(고객 고유의 피부 톤·분위기)과 FIT(기술로 완성하는 최적의 맞춤 세팅)으로 브랜드 철학을 두 축으로 정리했어요.",
      "‘일반 포토부스가 프레임을 고르는 동안, TONE:FIT은 AI가 피부를 분석해 조명·필터·컬러를 자동 설정한다’는 차별점을 대비 구조로 보여줬어요.",
      "AI 분석 정확도·18K+ 피부톤 분류 유형 수치로 ‘기술력’을 신뢰로 증명했어요.",
    ],
  },
  {
    id: "kiosk",
    label: "How It Works",
    title: "서는 순간부터 완성까지, 모든 과정을 자동으로",
    pc: "/assets/tonefit-case/kiosk-pc.png",
    mo: "/assets/tonefit-case/kiosk-mo.png",
    notes: [
      "촬영 전 과정을 STEP 01·02·03으로 단계화해 ‘자동으로 완성된다’는 핵심을 직관적으로 전달했어요.",
      "퍼스널 컬러별 시그니처 프레임과 컷 수(2·4·6 CUT)를 함께 보여줘 선택의 폭을 명확히 했어요.",
      "AI 톤 스캔·진단 정확도·프레임 보유·원격 제어를 지표로 강조해 기술 신뢰도를 높였어요.",
    ],
  },
  {
    id: "frame",
    label: "Frame",
    title: "매달 바뀌는 아티스트·캐릭터·시즌 프레임",
    pc: "/assets/tonefit-case/frame-pc.png",
    mo: "/assets/tonefit-case/frame-mo.png",
    notes: [
      "프레임을 아티스트·캐릭터·시즌 3개 카테고리로 분류해 방대한 라인업을 깔끔하게 정리했어요.",
      "콜라보 프레임을 진행 기간과 함께 갤러리로 배치해 한정판 희소성을 강조했어요.",
    ],
  },
  {
    id: "space",
    label: "Space Concept",
    title: "네 가지 무드로 설계한 프리미엄 공간",
    pc: "/assets/tonefit-case/space-pc.png",
    mo: "/assets/tonefit-case/space-mo.png",
    notes: [
      "Pinkish Mood·Point Modern·Pure Modern·Blooming Layer 네 무드로 매장 분위기를 감각적으로 보여줬어요.",
      "미드센추리 모던·미니멀리즘 컨셉으로 ‘무인=프리미엄’ 인식을 만들었어요.",
    ],
  },
  {
    id: "startup",
    label: "Franchise",
    title: "인건비 제로, 데이터로 증명하는 창업",
    pc: "/assets/tonefit-case/startup-pc.png",
    mo: "/assets/tonefit-case/startup-mo.png",
    notes: [
      "‘인건비 제로, 퀄리티는 무한대’ + 30초 AI 스캔·자동 세팅·100% 무인화 3단계로 운영 부담이 없음을 증명했어요.",
      "‘단 3개월 만에 누적 15만 건 돌파’ 실데이터를 전면 배치해 기대를 확신으로 바꿨어요.",
      "가맹 상담→계약→시공→세팅→교육→오픈 프로세스를 시각화해 창업 여정을 예측 가능하게 했어요.",
    ],
  },
];

function UiShowcase({ s }: { s: (typeof uiShowcases)[number] }) {
  return (
    <section className={styles.scBlock}>
      <Reveal className={styles.scHead}>
        <p className={styles.scLabel}>{s.label}</p>
        <h3 className={styles.scTitle}>{s.title}</h3>
      </Reveal>
      <div className={styles.scStage}>
        {/* 모바일 목업 + 주석 — 왼쪽 (스크롤 따라오는 sticky) */}
        <div className={styles.scRail}>
          <div className={styles.scPhone}>
            <span className={styles.scNotch} />
            <img src={s.mo} alt={`${s.label} 모바일`} loading="lazy" />
          </div>
          <ul className={styles.scNotes}>
            {s.notes.map((n) => (
              <li key={n} className={styles.scNote}>
                <span className={styles.scDot} />
                {n}
              </li>
            ))}
          </ul>
        </div>
        {/* 데스크탑 — 브라우저 목업 안에서 전체가 아래로 흐름 */}
        <div className={styles.scBrowser}>
          <div className={styles.scBar}>
            <span />
            <span />
            <span />
          </div>
          <img
            className={styles.scShot}
            src={s.pc}
            alt={`${s.label} 데스크탑`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

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
        {/* ⓪ 영상 인트로 — 상세페이지 진입 시 가장 먼저 보이는 2개 영상 */}
        <section className={styles.videoIntro}>
          {/* 영상 1 — Key Visual */}
          <Reveal className={styles.introBlock}>
            <div className={styles.introHead}>
              <p className={styles.introLabel}>Key Visual</p>
              <h3 className={styles.introTitle}>브랜드의 첫인상, KV 영상</h3>
              <p className={styles.introDesc}>
                메인 진입과 동시에 재생되는 키 비주얼 영상입니다. 브랜드의
                기술력과 감성을 동시에 각인시키고 다음 스크롤로 자연스럽게
                이어지게 설계했습니다.
              </p>
            </div>
            <div className={styles.introVideoWrap}>
              <video
                className={styles.introVideo}
                src="/assets/vidio/main-kv.webm"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Reveal>

          {/* 영상 2 — 매장을 채우는 무드와 소품 */}
          <Reveal delay={0.1} className={styles.introBlock}>
            <div className={styles.introHead}>
              <p className={styles.introLabel}>Store Mood</p>
              <h3 className={styles.introTitle}>매장을 채우는 무드와 소품</h3>
              <p className={styles.introDesc}>
                프리미엄 무인 스튜디오의 공간 분위기와 다양한 촬영 소품을 영상으로
                담아, TONE:FIT만의 감성적인 매장 경험을 전합니다.
              </p>
            </div>
            <div className={styles.introVideoWrap}>
              <video
                className={styles.introVideo}
                src={encodeURI("/assets/vidio/영상3.mp4")}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Reveal>
        </section>

        {/* ① KV 이미지 — 기존 Hero를 대체 */}
        <section className={styles.imgSection}>
          <Reveal>
            <img
              className={styles.fullImg}
              src="/assets/images/tonefit-kv.png"
              alt="TONE:FIT 키 비주얼"
              loading="lazy"
            />
          </Reveal>
        </section>

        {/* ② About 이미지 — 브랜드 소개 */}
        <section className={styles.imgSection}>
          <Reveal>
            <img
              className={styles.fullImg}
              src="/assets/images/tonefit-about.png"
              alt="TONE:FIT 브랜드 소개"
              loading="lazy"
            />
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

        {/* ⑤ Problem & Solution — 상단 문제 → 점선 → 하단 해결 */}
        <section className={styles.section}>
          <Reveal className={`${styles.head} ${styles.psHeadWide}`}>
            <p className={styles.psLabel}>Problem &amp; Solution</p>
            <h3 className={styles.headTitle}>
              최종적으로 문제점을 도출하고, TONE:FIT의 솔루션을 제시합니다.
            </h3>
            <p className={styles.headDesc}>
              앞선 리서치와 시장 분석을 바탕으로 사용자의 핵심 문제를 도출하고,
              그에 맞는 해결 방향을 설계했습니다.
            </p>
          </Reveal>

          <div className={styles.psGrid}>
            {problemSolutions.map((p) => (
              <Reveal key={p.solTag} className={styles.psCol}>
                <div className={styles.psProblem}>
                  <span className={styles.psProblemLabel}>Problem</span>
                  <p className={styles.psProblemText}>{p.problem}</p>
                </div>
                <span className={styles.psConnector} aria-hidden="true" />
                <div className={styles.psSolution}>
                  <span className={styles.psSolutionTag}>{p.solTag}</span>
                  <div className={styles.psSolutionTitle}>{p.solTitle}</div>
                  <p className={styles.psSolutionBody}>{p.solBody}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ⑥ Concept Explain — 좌측 설명 + 화면 갤러리 */}
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

        {/* ⑥-1 UI 디자인 소개 — 풀사이즈 영상 (텍스트는 위에 얹을 자리만) */}
        <section className={styles.scIntro}>
          <Reveal className={styles.scVideoWrap}>
            <video
              className={styles.scVideo}
              src="/assets/vidio/main-kv.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className={styles.scVideoText}>
              {/* TODO: 여기에 UI 소개 텍스트 입력 (자리만 잡아둠) */}
              <span className={styles.scVideoPlaceholder}>텍스트 영역</span>
            </div>
          </Reveal>
        </section>

        {/* ⑥-2 UI 쇼케이스 — 페이지별 목업 + 주석 */}
        {uiShowcases.map((s) => (
          <UiShowcase key={s.id} s={s} />
        ))}

        {/* ⑦ SNS 마케팅 — 라벨 + 4카드(Instagram/Threads) */}
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

          {snsGroups.map((g) => (
            <div key={g.channel} className={styles.snsGroup}>
              <p className={styles.snsChannel}>{g.channel}</p>
              <div className={styles.snsGrid}>
                {g.cards.map((c) => (
                  <Reveal key={c.img} className={styles.snsCard}>
                    <button
                      type="button"
                      className={styles.snsThumb}
                      onClick={() => setLightbox(`/assets/images/${c.img}.png`)}
                      aria-label={`${g.channel} 게시물 크게 보기`}
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
            </div>
          ))}
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
