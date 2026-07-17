import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "Três atos, duas horas: chegar, ler em silêncio e conversar. Entenda o ritual dos encontros do Silent Book Club Salvador.",
      },
      { property: "og:title", content: "Como funciona um encontro" },
      {
        property: "og:description",
        content:
          "Sem leitura obrigatória, sem debate marcado. Só o prazer de ler perto de quem também ama ler.",
      },
    ],
  }),
  component: ComoFunciona,
});

const steps = [
  {
    n: "01",
    t: "Chega e cumprimenta",
    d: "Os primeiros 20 minutos são para se apresentar, mostrar o livro que trouxe e se acomodar no espaço.",
  },
  {
    n: "02",
    t: "Uma hora de silêncio",
    d: "Cada um lê o próprio livro — romance, quadrinho, ensaio, e-book, o que quiser. Só o barulho das páginas.",
  },
  {
    n: "03",
    t: "Conversa livre",
    d: "No fim, quem quiser fica pra bater papo sobre a leitura. Sem obrigação, sem prova, sem resenha.",
  },
];

function ComoFunciona() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">O ritual</p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
          Três atos, duas horas,
          <br /> um bom livro.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Sem leitura obrigatória, sem debate marcado, sem apresentação de
          trabalho. Só o prazer de ler perto de quem também ama ler.
        </p>

        <ol className="mt-16">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={
                "grid grid-cols-[auto_1fr] gap-8 py-8 " +
                (i !== steps.length - 1 ? "border-b border-border" : "")
              }
            >
              <span className="font-display text-5xl text-accent">{s.n}</span>
              <div>
                <h2 className="font-display text-2xl md:text-3xl">{s.t}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/encontros"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
          >
            Ver próximos encontros →
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm transition hover:bg-foreground hover:text-background"
          >
            Perguntas frequentes
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
