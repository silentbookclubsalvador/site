// Placeholder para a logo do Silent Book Club Salvador.
// Substituir por <img src={...} /> quando o arquivo da logo for enviado.
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Silent Book Club Salvador"
      className={className}
    >
      <rect x="2" y="4" width="28" height="24" rx="1" fill="currentColor" />
      <path d="M16 4v24" stroke="var(--paper)" strokeWidth="1.2" />
      <path
        d="M7 10h6M7 14h6M19 10h6M19 14h6M7 18h6M19 18h6"
        stroke="var(--paper)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
