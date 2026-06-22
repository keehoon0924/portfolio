"use client";

import {
  createElement,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: RevealProps<T>) {
  const { ref, inView } = useInView({ threshold: 0.14, once: true });
  const Component = as ?? "div";

  return createElement(
    Component,
    {
      ref,
      className: `reveal ${inView ? "is-visible" : ""} ${className}`.trim(),
      ...props,
    },
    children,
  );
}
