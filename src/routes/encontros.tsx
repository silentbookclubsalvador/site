import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { upcomingEvents, type SbcEvent } from "@/lib/events-data";

export const Route = createFileRoute("/encontros")({
  head: () => ({
    meta: [
      { title: "Próximos encontros — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "Agenda dos próximos encontros mensais do Silent Book Club em Salvador: cafés, parques, mirantes, livrarias e espaços culturais.",
      },
      { property: "og:title", content: "Próximos encontros" },
      {
        property: "og:description",
        content:
          "Confira onde e quando é a próxima leitura silenciosa em Salvador.",
      },
    ],
  }),
  component: Encontros,
});

function Encontros() {
  const [open, setOpen] = useState<SbcEvent | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              Agenda
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
              Próximos encontros
            </h1>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Toque em um encontro para ver o endereço completo e detalhes.
            Confirme presença pelo Instagram até um dia antes.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {upcomingEvents.map((e) => (
            <button
              key={e.id}
              onClick={() => setOpen(e)}
              className="group flex flex-col justify-between gap-10 bg-background p-8 text-left transition hover:bg-foreground hover:text-background"
            >
              <div className="flex items-baseline gap-4 font-display">
                <span className="text-6xl leading-none">{e.day}</span>
                <span className="text-lg uppercase tracking-wider text-accent group-hover:text-background">
                  {e.month}
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent group-hover:text-background/80">
                  {e.venueType}
                </p>
                <h2 className="mt-2 font-display text-2xl">{e.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-background/80">
                  {e.neighborhood}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-widest text-muted-foreground group-hover:border-background/20 group-hover:text-background/80">
                  <span>
                    {e.weekday} · {e.time}
                  </span>
                  <span>{e.spots}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {open && (
            <>
              <DialogHeader>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {open.day} {open.month} · {open.weekday}
                </p>
                <DialogTitle className="font-display text-3xl leading-tight">
                  {open.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {open.venueType} · {open.neighborhood}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Horário
                  </p>
                  <p className="mt-1">{open.time}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Endereço
                  </p>
                  <p className="mt-1">{open.address}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Vagas
                  </p>
                  <p className="mt-1">{open.spots}</p>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {open.description}
                </p>
                <a
                  href="https://instagram.com/sbc.salvador"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:bg-accent"
                >
                  Confirmar pelo @sbc.salvador
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
