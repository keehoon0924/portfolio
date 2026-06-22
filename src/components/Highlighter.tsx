"use client";

import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type HighlighterProps = {
  children: ReactNode;
  lit?: boolean;
  observe?: boolean;
  className?: string;
};

export default function Highlighter({
  children,
  lit = false,
  observe = false,
  className = "",
}: HighlighterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({
    threshold: 0.9,
    once: true,
  });
  const isLit = lit || (observe && inView);

  return (
    <span
      ref={observe ? ref : undefined}
      className={`highlighter ${isLit ? "is-lit" : ""} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
