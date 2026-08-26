import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-reading.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silent Book Club Salvador — Leia em boa companhia" },
      {
        name: "description",
        content:
          "Encontros mensais em Salvador para ler o seu próprio livro em silêncio, junto de outras pessoas. Cafés, parques, mirantes e espaços culturais.",
      },
      { property: "og:title", content: "Silent Book Club Salvador" },
      {
        property: "og:description",
        content:
          "Traga seu livro, leia em silêncio por uma hora e converse depois se quiser. Gratuito, mensal, em Salvador.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marqueeLine =
  "Leitura em silêncio • Salvador • Rio Vermelho • Pelourinho • Parque da Cidade • Traga seu livro • ";

export default function noop() {}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero editorial */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-16 md:pt-12 md:pb-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Salvador · Bahia · desde 2025
        </p>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.86] tracking-tight">
              Leia
              <br />
              <span className="ml-[0.35em] italic font-normal">o seu livro</span>
              <br />
              em silêncio.
            </h1>

            <div className="mt-10 flex justify-end md:mt-14">
              <p className="max-w-xs text-right text-sm leading-relaxed text-muted-foreground">
                Um encontro mensal em cafeterias, parques, mirantes, livrarias e
                espaços culturais de{" "}
                <span className="font-display italic text-foreground">
                  Salvador
                </span>
                . Você traz a leitura, a gente traz o silêncio confortável.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/encontros"
                className="group inline-flex items-center gap-3 rounded-none bg-foreground px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition hover:opacity-90"
              >
                Ver próximos encontros
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/como-funciona"
                className="border-b border-foreground pb-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                Como funciona
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rule-hairline overflow-hidden p-2">
              <img
                src={heroImg}
                alt="Duas pessoas lendo em silêncio em um encontro do clube em Salvador"
                width={1600}
                height={1200}
                className="h-[420px] w-full object-cover grayscale-[15%] md:h-[560px]"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Encontro nº 07 · Rio Vermelho</span>
              <span>Fig. 01</span>
            </div>

            <dl className="rule-hairline mt-8 grid grid-cols-3 divide-x divide-border">
              <Stat n="1h" l="de silêncio" />
              <Stat n="∞" l="livros" />
              <Stat n="0" l="mensalidade" />
            </dl>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-foreground bg-foreground py-3 text-background">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="whitespace-nowrap px-2 font-display text-sm uppercase tracking-[0.2em]"
            >
              {marqueeLine.repeat(2)}
            </span>
          ))}
        </div>
      </div>

      {/* Teaser cards */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-2xl">Índice</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Quatro páginas
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <TeaserCard
            n="01"
            to="/como-funciona"
            title={<>Como<br />funciona</>}
            copy="Chega, lê em silêncio por uma hora, conversa depois se quiser."
          />
          <TeaserCard
            n="02"
            to="/encontros"
            title={<>Próximos<br />encontros</>}
            copy="Cafés, parques, mirantes e espaços culturais pela cidade."
          />
          <TeaserCard
            n="03"
            to="/sugestoes"
            title={<>Sugira um<br />local</>}
            copy="Conhece um lugar silencioso? Manda a dica pra gente."
          />
          <TeaserCard
            n="04"
            to="/feedback"
            filled
            title={<>Conte<br />como foi</>}
            copy="Sua opinião define ritmo, horário e lugar dos próximos encontros."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rule-hairline px-6 py-16 text-center md:px-16 md:py-24">
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Vem ler com a gente
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl text-balance font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.95]">
            O próximo capítulo é <em className="italic">seu</em>.
          </h2>
          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
            <a
              href="https://instagram.com/sbc.salvador"
              target="_blank"
              rel="noreferrer"
              className="bg-foreground py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-background transition active:scale-[0.99]"
            >
              Seguir @sbc.salvador
            </a>
            <Link
              to="/encontros"
              className="rule-hairline py-5 text-[11px] font-semibold uppercase tracking-[0.25em] transition hover:bg-foreground hover:text-background"
            >
              Ver agenda completa
            </Link>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Gratuito · aberto a todo tipo de leitura
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="px-4 py-5 text-center">
      <dt className="font-display text-3xl leading-none">{n}</dt>
      <dd className="mt-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        {l}
      </dd>
    </div>
  );
}

function TeaserCard({
  n,
  to,
  title,
  copy,
  filled,
}: {
  n: string;
  to: "/como-funciona" | "/encontros" | "/sobre" | "/sugestoes" | "/feedback";
  title: React.ReactNode;
  copy: string;
  filled?: boolean;
}) {
  return (
    <Link
      to={to}
      className={
        "rule-hairline group flex min-h-[240px] flex-col justify-between p-6 transition " +
        (filled
          ? "bg-foreground text-background"
          : "hover:bg-foreground hover:text-background")
      }
    >
      <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">
        {n}
      </span>
      <div>
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        <p className="mt-3 text-xs leading-relaxed opacity-70">{copy}</p>
        <span className="mt-6 block h-px w-8 bg-current transition-all group-hover:w-16" />
      </div>
    </Link>
  );
}
