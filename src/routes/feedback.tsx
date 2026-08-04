import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MessageForm } from "@/components/site/MessageForm";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "Conte como foi o encontro: o que funcionou, o que dava pra melhorar e o que você sentiu falta no Silent Book Club Salvador.",
      },
      { property: "og:title", content: "Deixe seu feedback" },
      {
        property: "og:description",
        content:
          "Sua opinião ajuda a escolher lugares, horários e o ritmo dos próximos encontros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Feedback,
});

function Feedback() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Depois do encontro
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
            Deixe seu feedback
          </h1>
          <p className="mt-6 text-muted-foreground">
            O que funcionou, o que incomodou, o que dava pra melhorar. Pode ser
            sobre o lugar, o horário, o tempo de leitura ou a conversa do final.
            Crítica honesta é bem-vinda — é assim que o clube cresce.
          </p>
        </div>
        <div className="md:col-span-7">
          <MessageForm
            subject="Feedback"
            submitLabel="Enviar feedback →"
            fields={[
              { name: "nome", label: "Seu nome (ou @)", placeholder: "Como te chamamos" },
              {
                name: "encontro",
                label: "Qual encontro",
                placeholder: "Ex.: Parque da Cidade, setembro",
              },
              {
                name: "nota",
                label: "Nota de 0 a 10",
                placeholder: "8",
              },
              {
                name: "mensagem",
                label: "Seu feedback",
                type: "textarea",
                required: true,
                placeholder: "Escreva com sinceridade…",
              },
            ]}
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
