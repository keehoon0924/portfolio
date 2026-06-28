interface IconProps {
  size?: number;
}

export function IconPhotoshop({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d3a5c"/>
          <stop offset="100%" stopColor="#001E36"/>
        </linearGradient>
        <linearGradient id="ps-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#ps-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#ps-shine)"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="19" fill="#31A8FF">
        Ps
      </text>
    </svg>
  );
}

export function IconFigma({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fig-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2c2c"/>
          <stop offset="100%" stopColor="#1E1E1E"/>
        </linearGradient>
        <linearGradient id="fig-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#fig-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#fig-shine)"/>
      <g transform="translate(15, 9)">
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
      <defs>
        <linearGradient id="ca-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9B4FE8"/>
          <stop offset="100%" stopColor="#7D2AE8"/>
        </linearGradient>
        <linearGradient id="ca-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#ca-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#ca-shine)"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="white">
        C
      </text>
    </svg>
  );
}

export function IconCapCut({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
        <linearGradient id="cc-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#cc-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#cc-shine)"/>
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="white">
        Cap
      </text>
      <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="white">
        Cut
      </text>
    </svg>
  );
}

export function IconPPT({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ppt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E05A30"/>
          <stop offset="100%" stopColor="#C43E1C"/>
        </linearGradient>
        <linearGradient id="ppt-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#ppt-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#ppt-shine)"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white">
        P
      </text>
    </svg>
  );
}

export function IconAI({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1ec99b"/>
          <stop offset="100%" stopColor="#10A37F"/>
        </linearGradient>
        <linearGradient id="ai-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#ai-bg)"/>
      <rect width="48" height="24" rx="10" fill="url(#ai-shine)"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="white">
        AI
      </text>
    </svg>
  );
}
