import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Dúvidas — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "Perguntas frequentes sobre os encontros do Silent Book Club Salvador: valor, timidez, idade mínima e como confirmar presença.",
      },
      { property: "og:title", content: "Perguntas frequentes" },
      {
        property: "og:description",
        content:
          "Tudo que você precisa saber antes de vir para o primeiro encontro.",
      },
    ],
  }),
  component: Faq,
});

type Item = { q: string; short: string; long: string };

const faq: Item[] = [
  {
    q: "Preciso pagar alguma coisa?",
    short: "Não, o encontro é gratuito.",
    long: "O encontro em si é 100% gratuito. Só o que você consumir no local (café, água, entrada de espaço cultural, etc.) fica por sua conta — e sempre escolhemos lugares acessíveis, incluindo parques e mirantes onde não precisa consumir nada.",
  },
  {
    q: "E se eu for tímido?",
    short: "Perfeito, esse clube foi feito pra você.",
    long: "A hora de silêncio é o coração do encontro — a socialização é sempre opcional. Muita gente chega, lê a hora inteira, se despede e vai embora sem trocar mais que duas palavras. E tá tudo bem.",
  },
  {
    q: "Tem idade mínima?",
    short: "A partir de 16 anos.",
    long: "Recomendamos a partir de 16 anos. Menores acompanhados dos pais ou responsáveis são bem-vindos. Não há idade máxima — já tivemos participantes dos 16 aos 70+.",
  },
  {
    q: "Como confirmo presença?",
    short: "Pelo direct do @sbc.salvador.",
    long: "Basta mandar um direct no Instagram até um dia antes do encontro. A gente responde confirmando o endereço exato, a mesa/ponto de encontro e qualquer instrução específica do local (tipo levar canga em encontro ao ar livre).",
  },
  {
    q: "Que tipo de livro posso levar?",
    short: "Qualquer um. Sério.",
    long: "Romance, ensaio, poesia, quadrinho, mangá, livro técnico, e-book no Kindle, revista, fanfic impressa. Não julgamos leitura. O único combinado é ler em silêncio durante a hora reservada.",
  },
  {
    q: "Os encontros são sempre em café?",
    short: "Não — variam bastante.",
    long: "Já rolou em cafés, livrarias, mirantes, no parque da cidade, em áreas abertas de faculdade, em espaços culturais e até dentro de um shopping bem tranquilo. A ideia é revezar entre lugares diferentes da cidade.",
  },
];

function Faq() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Antes de vir
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
            Perguntas frequentes
          </h1>
          <p className="mt-6 text-muted-foreground">
            Toque em uma pergunta para ler a resposta completa. Se não estiver
            aqui, escreve pra gente no direct — respondemos sempre.
          </p>
        </div>
        <dl className="md:col-span-8">
          {faq.map((item, i) => (
            <button
              key={item.q}
              onClick={() => setOpen(item)}
              className={
                "group flex w-full items-start justify-between gap-6 py-8 text-left transition hover:text-accent " +
                (i !== faq.length - 1 ? "border-b border-border" : "")
              }
            >
              <div>
                <dt className="font-display text-2xl">{item.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  {item.short}
                </dd>
              </div>
              <span className="mt-2 text-xl text-accent transition group-hover:translate-x-1">
                →
              </span>
            </button>
          ))}
        </dl>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {open && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl leading-tight">
                  {open.q}
                </DialogTitle>
              </DialogHeader>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {open.long}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
