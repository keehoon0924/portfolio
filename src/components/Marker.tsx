import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type MarkerProps = {
  children: ReactNode;
  /** Contact 다크 섹션에서는 텍스트를 흰색으로 */
  light?: boolean;
};

/** 노랑 형광펜 마커 — 뷰포트 진입 시 background-size 0% → 100%. */
export function Marker({ children, light }: MarkerProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const style: CSSProperties = light ? { color: "#fff", padding: "0 4px" } : {};

  return (
    <span
      ref={ref}
      className={`marker${inView ? " is-on" : ""}`}
      style={style}
    >
      {children}
    </span>
  );
}
