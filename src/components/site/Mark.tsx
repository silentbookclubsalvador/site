import logo from "@/assets/sbc-logo.jpg";

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Silent Book Club Salvador"
      width={40}
      height={40}
      className={
        "h-10 w-10 rounded-full object-cover mix-blend-multiply " +
        (className ?? "")
      }
    />
  );
}
