"use client";

import { useRef, type ReactNode } from "react";
import { useMockAutoPreview } from "@/hooks/useMockAutoPreview";

type MockScrollScreenProps = {
  className: string;
  children: ReactNode;
};

export default function MockScrollScreen({
  className,
  children,
}: MockScrollScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  useMockAutoPreview(screenRef);

  return (
    <div ref={screenRef} className={className}>
      {children}
    </div>
  );
}
