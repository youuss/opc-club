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
      <circle cx="10" cy="3" r="2" fill={color} />
      <path
        d="M6.5 8L10 5.5V14.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="6.5"
        y1="14.5"
        x2="13.5"
        y2="14.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
