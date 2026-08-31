import { Link } from "@tanstack/react-router";
import { Mark } from "./Mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Mark />
            <span className="font-display text-sm text-foreground">
              Silent Book Club Salvador
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Capítulo Bahia · encontros mensais desde 2025.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com/sbc.salvador"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline underline-offset-4 decoration-accent/50 hover:decoration-accent"
              >
                @sbc.salvador
              </a>{" "}
              <span className="text-muted-foreground">· Instagram</span>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </li>

          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Participe
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/encontros" className="hover:text-foreground">
                Próximos encontros
              </Link>
            </li>
            <li>
              <Link to="/sugestoes" className="hover:text-foreground">
                Sugerir um local
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:text-foreground">
                Deixar feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-xs text-muted-foreground">
          Feito com silêncio compartilhado em Salvador — {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
