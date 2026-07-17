import { Mark } from "./Mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3 text-accent">
          <Mark />
          <span className="font-display text-sm text-foreground">
            Silent Book Club Salvador · capítulo Bahia
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Feito com silêncio compartilhado em Salvador — {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
