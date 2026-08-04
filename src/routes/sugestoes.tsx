import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MessageForm } from "@/components/site/MessageForm";

export const Route = createFileRoute("/sugestoes")({
  head: () => ({
    meta: [
      { title: "Sugira um local — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "Conhece um café, parque, mirante, livraria ou espaço cultural silencioso em Salvador? Sugira o próximo local de encontro do clube.",
      },
      { property: "og:title", content: "Sugira o próximo local" },
      {
        property: "og:description",
        content:
          "Os melhores encontros nasceram de dicas de quem lê com a gente. Manda a sua.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sugestoes,
});

function Sugestoes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Próximos lugares
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
            Sugira um local
          </h1>
          <p className="mt-6 text-muted-foreground">
            Café tranquilo, parque com sombra, mirante com vista, livraria,
            espaço cultural, área aberta de faculdade — vale tudo que caiba um
            grupo lendo em silêncio por uma hora.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li>· Precisa ser acessível de ônibus ou metrô, se possível.</li>
            <li>· Sem música alta e sem consumo obrigatório caro.</li>
            <li>· Espaço para pelo menos 12 pessoas sentadas.</li>
          </ul>
        </div>
        <div className="md:col-span-7">
          <MessageForm
            subject="Sugestão de local"
            submitLabel="Enviar sugestão →"
            fields={[
              { name: "nome", label: "Seu nome (ou @)", placeholder: "Como te chamamos" },
              {
                name: "local",
                label: "Nome do local",
                required: true,
                placeholder: "Ex.: Livraria LDM · Barra",
              },
              {
                name: "bairro",
                label: "Bairro",
                placeholder: "Ex.: Rio Vermelho",
              },
              {
                name: "porque",
                label: "Por que esse lugar?",
                type: "textarea",
                required: true,
                placeholder: "Silencioso, tem sombra, cabe bastante gente…",
              },
            ]}
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
