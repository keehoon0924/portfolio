# 이기훈 마케터 포트폴리오

아이디어를 성과로 증명하는 1인 마케터 이기훈의 원페이지 포트폴리오.
Vite + React + TypeScript로 구현했다.

## 개발

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build → dist/
npm run preview  # 빌드 결과 미리보기
```

## 섹션 구성

Header → Hero(명함 카드) → About(스킬) → 성과(Stats) →
TONE:FIT 피처드(지그재그 폰 밴드) → TONE:FIT PC·모바일 라이브 미리보기 →
Selected Work(카테고리별 + 클릭 펼침 오버레이) → 후기(Notes) → Contact

## 디자인 토큰

색상·타이포·간격은 `design_handoff_portfolio/README.md` 핸드오프 문서를 따른다.
`src/styles/tokens.css`에 CSS 변수로 정의되어 있다.

## ⚠️ 교체 필요

수치 데이터(스킬 %, 통계), 연락처(이메일·전화·SNS), 후기는 모두 **예시
placeholder**다. 배포 전 실제 값으로 교체할 것. (`src/data/` 내 `// TODO` 참고)
