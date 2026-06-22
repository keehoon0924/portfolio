"use client";

import { useEffect, type RefObject } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useMockAutoPreview(
  screenRef: RefObject<HTMLDivElement | null>,
) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen || reduced) return;

    let done = false;
    let touched = false;

    const stopOnTouch = () => {
      touched = true;
    };

    (["wheel", "touchstart", "pointerdown"] as const).forEach((event) => {
      screen.addEventListener(event, stopOnTouch, { passive: true, once: true });
    });

    const mock = screen.closest("[data-mock]");
    if (!mock) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || done) return;

          done = true;
          window.setTimeout(() => {
            if (touched) return;

            const target = Math.min(
              screen.scrollHeight - screen.clientHeight,
              420,
            );
            const start = screen.scrollTop;
            const duration = 2600;
            const startTime = performance.now();

            const tick = (now: number) => {
              if (touched) return;

              let progress = Math.min((now - startTime) / duration, 1);
              progress =
                progress < 0.5
                  ? 2 * progress * progress
                  : 1 - (-2 * progress + 2) ** 2 / 2;

              screen.scrollTop = start + (target - start) * progress;
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }, 500);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(mock);

    return () => {
      observer.disconnect();
      (["wheel", "touchstart", "pointerdown"] as const).forEach((event) => {
        screen.removeEventListener(event, stopOnTouch);
      });
    };
  }, [screenRef, reduced]);
}
