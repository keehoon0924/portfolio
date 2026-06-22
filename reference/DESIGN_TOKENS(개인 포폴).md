# 디자인 토큰 사양서 — LEE KIHOON Portfolio

지금까지 정한 결정을 한 장에 모았습니다. 이 문서가 모든 화면의 기준입니다.

---

## 0. 확정 요약

| 항목 | 결정 |
|---|---|
| 작업 방식 | 여기서 디자인 확정 → **Claude Code**가 실제 빌드 |
| 기술 스택 | **Next.js (App Router) + TypeScript + Tailwind CSS 4** · 배포 Vercel |
| 색 팔레트 | **B · 쿨 화이트 + 차콜** |
| 폰트 | **Pretendard**(본문·제목) · **IBM Plex Mono**(라벨) · **Nanum Pen Script**(후기) |
| 모서리 | 살짝 둥글 **8~12px** |
| 모션 | 풍부하게 (단, 절제된 규칙 안에서) |
| 모드 | **라이트 모드만** |
| 작업물 표현 | 카드형 금지 · 종류별 섹션 → 클릭 시 오버레이 펼침 |

---

## 1. 색 (Color)

라이트 모드 전용. 강조색(노란 형광펜)은 화면당 1~2곳에만.

### 중립 (Neutral)
| 토큰 | HEX | 용도 |
|---|---|---|
| `paper` | `#F6F7F8` | 페이지 배경 |
| `surface` | `#FFFFFF` | 카드·오버레이 표면 |
| `surface-2` | `#F1F2F4` | 살짝 들어간 영역(인셋) |
| `ink` | `#16181B` | 기본 텍스트·버튼 |
| `ink-soft` | `#4A4D52` | 보조 텍스트(본문 설명) |
| `muted` | `#8A9099` | 라벨·캡션·비활성 |
| `line` | `#E4E7EA` | 기본 테두리 |
| `line-strong` | `#D3D7DC` | 호버·강조 테두리 |

### 강조 (Accent — 형광펜)
| 토큰 | HEX | 용도 |
|---|---|---|
| `mark` | `#ECCB3A` | 형광펜 하이라이트(기본) |
| `mark-soft` | `#F7E9A8` | 옅은 강조 배경 |
| `mark-deep` | `#C9A91E` | 강조 위 텍스트/호버 |

### 후기 포스트잇
| 토큰 | HEX | 용도 |
|---|---|---|
| `note` | `#F7E9A8` | 포스트잇 종이색 |
| `note-ink` | `#5A4A12` | 포스트잇 글자색 |

> 규칙: 노란 배경 위 텍스트는 검정이 아니라 같은 계열 어두운 색(`ink` 또는 `note-ink`)을 씁니다.

---

## 2. 타이포그래피 (Typography)

### 폰트
- 본문·제목 — **Pretendard** (400 / 500 / 700 / 800)
- 라벨·메타·숫자 — **IBM Plex Mono** (400 / 500)
- 후기 손글씨 — **Nanum Pen Script**

### 타입 스케일
| 역할 | 크기 | 굵기 | 행간 | 자간 |
|---|---|---|---|---|
| 히어로 H1 | `clamp(40px, 6vw, 84px)` | 800 | 1.04 | -0.025em |
| 섹션 H2 | `clamp(24px, 3.3vw, 38px)` | 800 | 1.1 | -0.015em |
| 항목 제목 H3 | 18px | 700 | 1.4 | — |
| 리드/서브 | 18px | 500 | 1.6 | — |
| 본문 | 15px | 400 | 1.7 | — |
| 작은 본문 | 13px | 400 | 1.65 | — |
| 라벨(모노) | 12px | 500 | — | 0.16em, 대문자 |
| 캡션(모노) | 11px | 400 | — | 0.04em |

---

## 3. 레이아웃 · 간격 (Spacing)

- 4px 기준 스케일: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- 콘텐츠 최대폭: **1160px** · 좌우 여백(거터): 30px (모바일 20px)
- 섹션 상하 여백: 데스크탑 **96~120px** · 모바일 64px
- 섹션 구분선: 상단 1px `line`

---

## 4. 모서리 · 테두리 (Radius / Border)

| 토큰 | 값 | 용도 |
|---|---|---|
| `radius-sm` | 8px | 버튼·칩 내부 |
| `radius-md` | 10px | 버튼·작은 요소 |
| `radius-lg` | 12px | 카드·목업·오버레이 |
| `radius-pill` | 999px | 태그·필 |

- 기본 테두리: `1px solid line` / 호버: `line-strong`
- 한쪽 테두리(border-left 등)만 줄 땐 둥근 모서리 금지(각지게).

---

## 5. 그림자 (Shadow) — 미니멀하게

| 토큰 | 값 | 용도 |
|---|---|---|
| `e1` | `0 18px 34px -22px rgba(22,24,27,.18)` | 카드 호버 |
| `e2` | `0 30px 60px -30px rgba(22,24,27,.28)` | 오버레이·배지 |

평소엔 그림자 없이 테두리로만. 떠오르는 순간에만 사용.

---

## 6. 모션 (Motion) — "풍부하게", 단 규칙 안에서

강한 움직임은 **① 클릭 → 오버레이 펼침** 하나에 집중. 나머지는 통일된 조용한 등장.

| 종류 | 동작 | 시간 / 이징 |
|---|---|---|
| 이징 표준 | — | `cubic-bezier(.4,0,.1,1)` |
| 이징 강조 | — | `cubic-bezier(.5,0,.1,1)` |
| 등장(reveal) | `translateY(22px)` + fade | 700ms 표준 |
| 호버 리프트 | `translateY(-5px)` | 300ms |
| 오버레이 펼침 | 아래에서 슬라이드 업 | 500ms 강조 |
| 형광펜 | `scaleX(0→1)` 왼쪽 기준 | 700ms |
| 헤더 축소 | 배경+패딩 전환 | 300ms |

- 등장 애니메이션 **방향은 하나로 통일**(아래→위).
- `prefers-reduced-motion` 존중: 모션 끄고 즉시 표시.

---

## 7. 바로 쓰는 코드 — `app/globals.css` (Tailwind CSS 4)

```css
@import "tailwindcss";
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Nanum+Pen+Script&display=swap');

@theme {
  /* fonts */
  --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-hand: 'Nanum Pen Script', cursive;

  /* neutral */
  --color-paper: #F6F7F8;
  --color-surface: #FFFFFF;
  --color-surface-2: #F1F2F4;
  --color-ink: #16181B;
  --color-ink-soft: #4A4D52;
  --color-muted: #8A9099;
  --color-line: #E4E7EA;
  --color-line-strong: #D3D7DC;

  /* accent */
  --color-mark: #ECCB3A;
  --color-mark-soft: #F7E9A8;
  --color-mark-deep: #C9A91E;

  /* postit */
  --color-note: #F7E9A8;
  --color-note-ink: #5A4A12;

  /* radius */
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;

  /* easing */
  --ease-std: cubic-bezier(0.4, 0, 0.1, 1);
  --ease-emph: cubic-bezier(0.5, 0, 0.1, 1);
}

@layer base {
  html { scroll-behavior: smooth; }
  body {
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
}
```

이렇게 두면 Tailwind에서 `bg-paper` `text-ink` `text-muted` `border-line` `rounded-lg` `font-mono` `shadow-...` 처럼 토큰 이름 그대로 클래스로 쓸 수 있습니다.

> 폰트 최적화 팁: 위는 가장 간단한 CDN 방식이고, 나중에 Claude Code가 `next/font`로 바꿔 로딩 속도를 더 끌어올릴 수 있습니다(선택).

---

## 8. 다음 단계

1. 이 토큰을 적용한 **정적 화면 디자인 컨셉**(히어로·About·후기·Contact) + 들어갈 **카피** 확정
2. 작업물 **데이터 구조**(제목·역할·기간·문제·실행·결과·이미지) 정리
3. 위 전부를 **빌드 사양서**로 묶어 Claude Code에 전달 → 실제 빌드
