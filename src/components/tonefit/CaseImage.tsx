import { useState } from "react";
import styles from "./CaseImage.module.css";

/**
 * 케이스 스터디 이미지 슬롯.
 * 이미지를 자연 비율 그대로(잘림 없이) 보여준다.
 * 이미지가 없으면(로드 실패) 파일명 플레이스홀더 → 빌드/레이아웃이 깨지지 않는다.
 */
export function CaseImage({
  src,
  alt = "",
  className,
  phone,
}: {
  src: string;
  alt?: string;
  className?: string;
  /** 모바일 스크린샷용 둥근 스타일 */
  phone?: boolean;
}) {
  const [err, setErr] = useState(false);
  const name = src.split("/").pop();

  return (
    <div
      className={[styles.wrap, phone ? styles.phone : "", className]
        .filter(Boolean)
        .join(" ")}
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
          onError={() => setErr(true)}
        />
      )}
    </div>
  );
}
