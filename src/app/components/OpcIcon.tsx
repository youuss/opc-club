interface OpcIconProps {
  size?: number;
  color?: string;
}

export function OpcIcon({ size = 18, color = "white" }: OpcIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="5.5" r="2.5" fill={color} />
      <path
        d="M3.5 16C3.5 12.134 6.134 9 9 9C11.866 9 14.5 12.134 14.5 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="16"
        x2="12"
        y2="16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
