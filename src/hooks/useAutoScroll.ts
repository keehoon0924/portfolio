import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * 기기 목업 안의 풀페이지 캡처를 세로로 무한 alternate 스크롤시킨다.
 * - 세로로 긴 이미지(naturalHeight > naturalWidth*1.15): translateY(0 → -overflow)
 * - 가로 이미지: scale 드리프트
 * 레퍼런스 initAutoScroll() 로직 이식. Element.animate 사용.
 */
export function useAutoScroll<T extends HTMLImageElement = HTMLImageElement>() {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const img = ref.current;
    if (!img || reduced) return;

    let animation: Animation | null = null;

    const setup = () => {
      const screen = img.parentElement;
      if (!screen) return;
      const tall = img.naturalHeight > img.naturalWidth * 1.15;

      if (tall) {
        img.style.width = "100%";
        img.style.height = "auto";
        const overflow = img.clientHeight - screen.clientHeight;
        if (overflow > 6) {
          animation = img.animate(
            [
              { transform: "translateY(0)" },
              { transform: `translateY(${-overflow}px)` },
            ],
            {
              duration: Math.max(7000, overflow * 16),
              iterations: Infinity,
              direction: "alternate",
              easing: "cubic-bezier(.45,0,.55,1)",
            },
          );
        }
      } else {
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.objectPosition = "top center";
        img.style.transformOrigin = "top center";
        animation = img.animate(
          [
            { transform: "scale(1) translateY(0)" },
            { transform: "scale(1.12) translateY(-4%)" },
          ],
          {
            duration: 9000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
          },
        );
      }
    };

    if (img.complete && img.clientHeight) {
      setup();
    } else {
      img.addEventListener("load", setup, { once: true });
    }

    return () => {
      animation?.cancel();
      img.removeEventListener("load", setup);
    };
  }, [reduced]);

  return ref;
}
