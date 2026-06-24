import { type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** stagger delay (초) — 레퍼런스의 요소별 지연(.05~.2s) */
  delay?: number;
  /** 렌더링 태그 (기본 div) */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

/**
 * 뷰포트 진입 시 opacity/translateY를 푸는 공통 reveal 래퍼.
 * global.css의 [data-reveal] + .is-visible 규칙을 사용한다.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.14 });

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={[inView ? "is-visible" : "", className].filter(Boolean).join(" ")}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
