import { createFileRoute } from "@tanstack/react-router";
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
          "O Silent Book Club nasceu em São Francisco em 2012. O capítulo de Salvador começou em 2025 e já reuniu leitoras e leitores em cafés, parques, mirantes e espaços culturais da cidade.",
      },
      { property: "og:title", content: "Sobre o clube" },
      {
        property: "og:description",
        content:
          "De São Francisco para o mundo — e agora, para a Bahia. Conheça o capítulo baiano do Silent Book Club.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

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
              Sobre o movimento
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-tight">
              De São Francisco para o mundo — e agora, para a Bahia.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O Silent Book Club nasceu em 2012 em São Francisco, quando duas
              amigas resolveram trocar o clube do livro tradicional por algo
              mais leve: encontrar-se num bar, ler cada uma o seu livro e
              conversar depois — se desse vontade. Hoje são mais de{" "}
              <strong className="text-foreground">1.500 capítulos</strong> em
              mais de <strong className="text-foreground">50 países</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              O capítulo de Salvador rodou o primeiro encontro em{" "}
              <strong className="text-foreground">2025</strong> e já reuniu
              leitoras e leitores em cafés, livrarias, mirantes, parques,
              áreas abertas da faculdade e até em um shopping quietinho do
              outro lado da cidade.
            </p>
            <blockquote className="mt-10 border-l-2 border-accent pl-6 font-display text-2xl italic leading-snug text-foreground">
              “A parte mais bonita é o silêncio compartilhado. Você percebe
              que não está sozinha no gosto de virar página devagar.”
              <footer className="mt-3 font-sans text-sm not-italic text-muted-foreground">
                — Ana, participante desde o encontro nº 02
              </footer>
            </blockquote>
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
