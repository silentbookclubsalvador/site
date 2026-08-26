import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import detailImg from "@/assets/detail-book.jpg";
import gatheringImg from "@/assets/gathering.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Silent Book Club Salvador" },
      {
        name: "description",
        content:
          "O Silent Book Club é um movimento literário global e descentralizado de leitura silenciosa compartilhada, fundado em 2012 na Califórnia. Conheça o capítulo de Salvador.",
      },
      { property: "og:title", content: "O que é o Silent Book Club" },
      {
        property: "og:description",
        content:
          "Leitura silenciosa compartilhada: cada um com o seu livro, todos juntos. Da Califórnia para o mundo — e desde 2025, em Salvador.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Abertura */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Sobre o movimento
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
          A hora feliz dos introvertidos.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          O <strong className="text-foreground">Silent Book Club</strong> é um
          movimento literário global e descentralizado, focado na leitura
          silenciosa compartilhada em espaços públicos. Nasceu em{" "}
          <strong className="text-foreground">2012, na Califórnia</strong>,
          com Guinevere de la Mare e Laura Gluhanich, como alternativa aos
          clubes de leitura tradicionais — e hoje se espalha por capítulos
          voluntários no mundo inteiro.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A ideia é simples: eliminar a obrigatoriedade de uma leitura única,
          os prazos rígidos, as discussões estruturadas e a mediação
          acadêmica. Cada pessoa lê o que quiser, no seu ritmo — só que junto
          das outras.
        </p>
      </section>

      {/* Pilares */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="font-display text-2xl">Pilares do clube</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-display text-xl">Autonomia literária total</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ficção, não-ficção, quadrinhos, poesia, e-book ou audiolivro
                com fones — cada participante escolhe a própria leitura. Não
                há obra comum atribuída ao grupo.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Inclusão e acessibilidade</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Um formato que rompe a ansiedade social e a pressão de
                desempenho: acolhe tanto leitores ávidos quanto quem está
                tentando retomar o hábito, sem debates literários
                intimidadores.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Contra o isolamento</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A leitura vira conexão comunitária de baixa intensidade:
                dividir o mesmo espaço numa atividade solitária, em conjunto —
                uma coexistência pacífica e silenciosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capítulo Salvador */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={detailImg}
                alt="Mãos segurando um livro aberto ao lado de um caderno"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              O capítulo baiano
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              E em Salvador, desde 2025.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O <strong className="text-foreground">Silent Book Club Salvador</strong>{" "}
              é o projeto que replica esse formato na capital baiana. Os
              encontros são gratuitos e acontecem em "terceiros lugares" —
              espaços públicos acolhedores que não são nem casa, nem trabalho.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A cidade é o cenário, nunca o protagonista: cada edição acontece
              num lugar diferente, anunciado com antecedência no Instagram. O
              que permanece é o ritual — chegar, ler em silêncio, conversar se
              quiser.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/como-funciona"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
              >
                Como funciona um encontro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-sm">
          <img
            src={gatheringImg}
            alt="Grupo diverso lendo em silêncio em um encontro em Salvador"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-[440px] w-full object-cover"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
