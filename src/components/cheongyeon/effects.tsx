import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useCountUp } from "@/hooks/useCountUp";
import styles from "./effects.module.css";

/**
 * 청연 케이스 스터디 전용 스크롤 모션 프리미티브.
 * 실제 사이트(GSAP ScrollTrigger)의 시그니처 효과를 외부 라이브러리 없이
 * IntersectionObserver + rAF + CSS로 재현한다. 모두 prefers-reduced-motion 대응.
 */

/* ── 섹션이 뷰포트를 지나는 0→1 진행도 (오빗·패럴럭스용) ── */
function useSectionProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let active = false;

    const loop = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = r.height + vh;
      const prog = Math.min(1, Math.max(0, (vh - r.top) / total));
      setP(prog);
      if (active) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!active) {
            active = true;
            raf = requestAnimationFrame(loop);
          }
        } else {
          active = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => {
      active = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return { ref, p };
}

/* ── 잉크 번짐 리빌 (스크롤 진입 시 opacity+scale 블룸, 양방향) ── */
export function InkReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.28,
    once: false,
  });
  return (
    <div
      ref={ref}
      className={[styles.ink, inView ? styles.inkOn : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}

/* ── 붓선 드로잉 (SVG stroke-dashoffset 자가 드로잉) ── */
export function BrushDraw({ vertical = false }: { vertical?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.5,
    once: false,
  });
  return (
    <div
      ref={ref}
      className={[styles.brush, vertical ? styles.brushV : ""]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <svg
        viewBox={vertical ? "0 0 8 200" : "0 0 200 8"}
        preserveAspectRatio="none"
      >
        <path
          className={inView ? styles.brushOn : ""}
          d={vertical ? "M4 2 L4 198" : "M2 4 L198 4"}
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ── 세로 한글 타이포 (글자별 stagger 리빌) ── */
export function VerticalTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.4,
    once: false,
  });
  const chars = useMemo(() => [...text], [text]);
  return (
    <div
      ref={ref}
      className={[styles.vtitle, className].filter(Boolean).join(" ")}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className={inView ? styles.vcharOn : styles.vchar}
          style={{ transitionDelay: `${i * 0.09}s` }}
          aria-hidden="true"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

/* ── 카운트업 통계 ── */
export function CountStat({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const { ref, value } = useCountUp(to, 1400);
  return (
    <div className={styles.stat}>
      <p className={styles.statNum}>
        <span ref={ref}>{value}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

/* ── 떨어지는 꽃잎 파티클 ── */
type Petal = {
  left: number;
  size: number;
  delay: number;
  dur: number;
  drift: number;
  rot: number;
};
export function Petals({ count = 18 }: { count?: number }) {
  const reduced = useReducedMotion();
  const petals = useMemo<Petal[]>(() => {
    const seeds = Array.from({ length: count }, (_, i) => i);
    return seeds.map((i) => {
      // 결정적 의사난수 (SSR/리렌더 안정)
      const r = (n: number) => {
        const x = Math.sin((i + 1) * 12.9898 * n) * 43758.5453;
        return x - Math.floor(x);
      };
      return {
        left: r(1) * 100,
        size: 10 + r(2) * 16,
        delay: r(3) * 8,
        dur: 7 + r(4) * 7,
        drift: (r(5) - 0.5) * 120,
        rot: r(6) * 360,
      };
    });
  }, [count]);

  if (reduced) return null;
  return (
    <div className={styles.petals} aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={styles.petal}
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 1.1}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              "--drift": `${p.drift}px`,
              "--rot": `${p.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ── 찻사발 오빗 (스크롤에 따라 링이 회전, 활성 계절이 중앙으로) ── */
export type OrbitItem = { img: string; name: string; desc: string };
export function Orbit({ items }: { items: OrbitItem[] }) {
  const reduced = useReducedMotion();
  const { ref, p } = useSectionProgress<HTMLDivElement>();
  const n = items.length;
  const step = 360 / n;
  // 진행도 → 링 회전 (마지막 항목까지 도는 데 전체의 (n-1)/n 사용)
  const ease = reduced ? 0 : p;
  const ringRot = -ease * step * (n - 1);
  const active = Math.round(Math.min(n - 1, Math.max(0, ease * (n - 1))));

  return (
    <div ref={ref} className={styles.orbitSec}>
      <Petals count={14} />
      <div className={styles.orbitStage}>
        <div
          className={styles.orbitRing}
          style={{ transform: `rotate(${ringRot}deg)` }}
        >
          {items.map((it, i) => (
            <div
              key={it.name}
              className={styles.orbitItem}
              style={{
                transform: `rotate(${i * step}deg) translateY(calc(var(--orbit-r) * -1))`,
              }}
            >
              <div
                className={[
                  styles.orbitBowl,
                  i === active ? styles.orbitBowlOn : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ transform: `rotate(${-i * step - ringRot}deg)` }}
              >
                <img src={it.img} alt={it.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orbitCenter}>
          <p className={styles.orbitIndex}>
            {String(active + 1).padStart(2, "0")}
            <span> / {String(n).padStart(2, "0")}</span>
          </p>
          <VerticalTitle
            key={active}
            text={items[active].name}
            className={styles.orbitName}
          />
          <p className={styles.orbitDesc}>{items[active].desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ── 카드-팬 전개 (중앙에서 부채꼴로 펼쳐짐) ── */
export function CardFan({
  images,
  center = 1.5,
}: {
  images: { img: string; label: string }[];
  center?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.35,
    once: false,
  });
  return (
    <div
      ref={ref}
      className={[styles.fan, inView ? styles.fanOn : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {images.map((im, i) => (
        <figure
          key={i}
          className={styles.fanCard}
          style={
            {
              "--i": i,
              "--from": i - center,
              transitionDelay: `${Math.abs(i - center) * 0.09}s`,
            } as React.CSSProperties
          }
        >
          <img src={im.img} alt={im.label} loading="lazy" />
          <figcaption>{im.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ── 족자(두루마리) 언롤 — 본문이 위→아래로 펼쳐짐 ── */
export function ScrollUnroll({
  title,
  items,
}: {
  title: string;
  items: { ko: string; hanja?: string; desc: string }[];
}) {
  return (
    <div className={styles.jokja}>
      {items.map((it, i) => (
        <UnrollItem key={it.ko} item={it} index={i} title={title} />
      ))}
    </div>
  );
}
function UnrollItem({
  item,
  index,
  title,
}: {
  item: { ko: string; hanja?: string; desc: string };
  index: number;
  title: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    once: false,
  });
  return (
    <div
      ref={ref}
      className={[styles.roll, inView ? styles.rollOn : ""]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className={styles.rollTop} aria-hidden="true">
        <span>{title}</span>
      </div>
      <div className={styles.rollBody}>
        <div className={styles.rollInner}>
          {item.hanja && <p className={styles.rollHanja}>{item.hanja}</p>}
          <p className={styles.rollKo}>{item.ko}</p>
          <p className={styles.rollDesc}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ── 실제 사이트 라이브 프레임 (PC 폭 그대로 축소해 인라인 임베드) ── */
export function LiveFrame({
  url,
  height = "80vh",
}: {
  url: string;
  height?: string;
}) {
  const DESIGN_W = 1440;
  const vpRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ scale: 0.7, h: 900 });

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      const scale = cw / DESIGN_W;
      setDims({ scale, h: scale ? ch / scale : ch });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const addr = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={styles.liveFrame}>
      <div className={styles.lfBar}>
        <span />
        <span />
        <span />
        <div className={styles.lfAddr}>{addr}</div>
      </div>
      <div className={styles.lfViewport} ref={vpRef} style={{ height }}>
        <iframe
          className={styles.lfIframe}
          src={url}
          title="청연 실제 사이트"
          loading="lazy"
          style={{
            width: `${DESIGN_W}px`,
            height: `${dims.h}px`,
            transform: `scale(${dims.scale})`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  );
}

/* ── 패럴럭스 이미지 (스크롤에 따라 배경이 천천히 이동) ── */
export function Parallax({
  src,
  alt,
  className = "",
  amount = 60,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const { ref, p } = useSectionProgress<HTMLDivElement>();
  const shift = reduced ? 0 : (p - 0.5) * amount;
  return (
    <div
      ref={ref}
      className={[styles.px, className].filter(Boolean).join(" ")}
    >
      <img
        className={styles.pxImg}
        src={src}
        alt={alt}
        loading="lazy"
        style={{ transform: `translate3d(0, ${shift}px, 0) scale(1.12)` }}
      />
      {children}
    </div>
  );
}
