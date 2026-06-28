interface IconProps {
  size?: number;
}

export function IconPhotoshop({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#001E36"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Adobe Clean, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#31A8FF">
        Ps
      </text>
    </svg>
  );
}

export function IconFigma({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#1E1E1E"/>
      <g transform="translate(15, 8)">
        <rect x="0" y="0" width="9" height="9" rx="4.5" fill="#F24E1E"/>
        <rect x="9" y="0" width="9" height="9" rx="4.5" fill="#FF7262"/>
        <rect x="0" y="9" width="9" height="9" rx="4.5" fill="#A259FF"/>
        <rect x="0" y="18" width="9" height="9" rx="4.5" fill="#0ACF83"/>
        <circle cx="13.5" cy="22.5" r="4.5" fill="#1ABCFE"/>
      </g>
    </svg>
  );
}

export function IconCanva({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#7D2AE8"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="white">
        C
      </text>
    </svg>
  );
}

export function IconCapCut({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#000000"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="white">
        Cap
      </text>
      <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="white">
        Cut
      </text>
    </svg>
  );
}

export function IconPPT({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#D24726"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="white">
        P
      </text>
    </svg>
  );
}

export function IconAI({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#10A37F"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="white">
        AI
      </text>
    </svg>
  );
}
