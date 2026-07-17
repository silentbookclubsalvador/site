import { Link } from "@tanstack/react-router";
import { Mark } from "./Mark";

const links = [
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/encontros", label: "Encontros" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "Dúvidas" },
] as const;

export function SiteNav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="flex items-center gap-2 text-accent">
        <Mark />
        <span className="font-display text-lg tracking-tight text-foreground">
          Silent Book Club <span className="text-accent">·</span> Salvador
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <a
        href="https://instagram.com/sbc.salvador"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-foreground/20 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
      >
        @sbc.salvador
      </a>
    </header>
  );
}
