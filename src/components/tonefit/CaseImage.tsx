import { useState } from "react";
import styles from "./CaseImage.module.css";

/**
 * 케이스 스터디 이미지 슬롯.
 * 이미지가 있으면 렌더, 없으면(로드 실패) 파일명을 보여주는 플레이스홀더.
 * → 이미지가 아직 없어도 빌드/레이아웃이 깨지지 않는다.
 */
export function CaseImage({
  src,
  alt = "",
  className,
  ratio,
  contain,
  position,
}: {
  src: string;
  alt?: string;
  className?: string;
  /** aspect-ratio (예: "16 / 10") */
  ratio?: string;
  /** object-fit: contain */
  contain?: boolean;
  /** object-position */
  position?: string;
}) {
  const [err, setErr] = useState(false);
  const name = src.split("/").pop();

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {err ? (
        <div className={styles.ph}>
          <span className={styles.phIcon} aria-hidden="true">
            🖼
          </span>
          <span className={styles.phName}>{name}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={styles.img}
          style={{
            objectFit: contain ? "contain" : "cover",
            objectPosition: position ?? "center top",
          }}
          onError={() => setErr(true)}
        />
      )}
    </div>
  );
}
