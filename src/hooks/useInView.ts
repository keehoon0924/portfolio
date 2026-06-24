import { useEffect, useRef, useState } from "react";

type Options = {
  /** IntersectionObserver threshold (레퍼런스 기본 .14) */
  threshold?: number;
  /** 한 번 보이면 계속 보인 상태 유지 (레퍼런스와 동일) */
  once?: boolean;
};

/**
 * 요소가 뷰포트에 들어오면 inView=true. 스크롤 reveal·마커·스킬바·카운트업의
 * 공통 트리거. 레퍼런스의 IntersectionObserver 패턴을 훅으로 일반화했다.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { threshold = 0.14, once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
