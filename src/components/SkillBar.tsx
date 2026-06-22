"use client";

import { type CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

type SkillBarProps = {
  label: string;
  value: number;
};

export default function SkillBar({ label, value }: SkillBarProps) {
  const { ref, inView } = useInView({ threshold: 0.14, once: true });

  return (
    <div
      ref={ref}
      className={`border-t border-line py-3 ${inView ? "skill-in" : ""}`}
      style={{ "--skill-width": `${value}%` } as CSSProperties}
    >
      <div className="mb-[7px] flex justify-between font-mono text-xs">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-[5px] overflow-hidden rounded-full bg-surface-2">
        <div className="skill-bar-fill h-full rounded-full bg-ink" />
      </div>
    </div>
  );
}
