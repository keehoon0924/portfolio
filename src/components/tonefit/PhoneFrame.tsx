import type { CSSProperties, ReactNode } from "react";
import styles from "./PhoneFrame.module.css";

type Props = {
  /** 단일 화면 이미지 (children 없을 때) */
  src?: string;
  alt?: string;
  /** 임시 크롭용 object-position (클린 단일화면이면 top 권장) */
  objPos?: string;
  /** 화면 안 이미지를 한 화면에 맞출지(cover) — 기본 cover */
  fit?: "cover" | "contain";
  /** 커스텀 화면 내용(여러 이미지 스택 등). 있으면 src 대신 렌더 */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** 너비는 부모가 결정하는 유동 폰 목업. 노치 + 둥근 베젤. */
export function PhoneFrame({
  src,
  alt = "",
  objPos = "center top",
  fit = "cover",
  children,
  className,
  style,
}: Props) {
  return (
    <div className={[styles.phone, className].filter(Boolean).join(" ")} style={style}>
      <div className={styles.screen}>
        <div className={styles.notch} />
        {children ?? (
          <img
            src={src}
            alt={alt}
            className={styles.shot}
            style={{ objectPosition: objPos, objectFit: fit }}
          />
        )}
      </div>
    </div>
  );
}
