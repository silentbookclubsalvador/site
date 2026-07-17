import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-reading.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-8 pb-24 md:grid-cols-12 md:gap-10 md:pt-16">
        <div className="md:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Salvador · Bahia · desde 2025
          </p>
          <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98]">
            Leia o seu livro,{" "}
            <em className="font-normal italic text-accent">em silêncio</em>,
            <br /> em boa companhia.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Um encontro mensal em Salvador — cafeterias, parques, mirantes,
            livrarias, espaços culturais. Você traz o livro que estiver lendo,
            a gente traz o silêncio confortável.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/encontros"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
            >
              Ver próximos encontros
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/como-funciona"
              className="text-sm underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
            >
              Como funciona um encontro
            </Link>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-8 border-t border-border pt-8">
            <Stat n="1h" l="de leitura silenciosa" />
            <Stat n="∞" l="livros permitidos" />
            <Stat n="0" l="cobrança de mensalidade" />
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -left-6 -top-6 hidden font-display text-[10rem] leading-none text-accent/15 md:block">
            “
          </div>
          <div className="relative overflow-hidden rounded-sm border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <img
              src={heroImg}
              alt="Duas pessoas lendo em silêncio em um encontro do clube em Salvador"
              width={1600}
              height={1200}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 max-w-xs text-xs italic text-muted-foreground">
            Encontro nº 07 · Rio Vermelho · foto de Maria Bethânia S.
          </figcaption>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-foreground text-background">
        <div className="flex items-center gap-16 overflow-hidden whitespace-nowrap py-5 font-display text-2xl italic">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 pl-16">
              <span>Traga seu livro.</span>
              <span className="text-accent">✦</span>
              <span>Leia em paz.</span>
              <span className="text-accent">✦</span>
              <span>Escolha o próximo lugar.</span>
              <span className="text-accent">✦</span>
              <span>Repita mês que vem.</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teaser cards to sub-pages */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
          <TeaserCard
            to="/como-funciona"
            eyebrow="O ritual"
            title="Três atos, duas horas."
            copy="Chega, lê em silêncio por uma hora, conversa depois se quiser."
          />
          <TeaserCard
            to="/encontros"
            eyebrow="Agenda"
            title="Próximos encontros"
            copy="Cafés, parques, mirantes e espaços culturais espalhados pela cidade."
          />
          <TeaserCard
            to="/sobre"
            eyebrow="Sobre"
            title="De onde a gente veio"
            copy="O movimento global e o capítulo baiano que começou em 2025."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-sm bg-accent px-8 py-20 text-center text-background md:px-16 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-background/80">
            Vem ler com a gente
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] text-balance">
            O próximo capítulo é <em className="italic">seu</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-background/85">
            Siga o clube no Instagram para saber onde e quando ler junto na
            próxima vez.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/sbc.salvador"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
            >
              Seguir @sbc.salvador
            </a>
            <Link
              to="/encontros"
              className="rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition hover:bg-background hover:text-foreground"
            >
              Ver agenda completa
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-display text-4xl text-foreground">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {l}
      </dd>
    </div>
  );
}

function TeaserCard({
  to,
  eyebrow,
  title,
  copy,
}: {
  to: "/como-funciona" | "/encontros" | "/sobre";
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between gap-10 bg-background p-8 transition hover:bg-foreground hover:text-background"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <div>
        <h3 className="font-display text-3xl leading-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/80">
          {copy}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm">
          Abrir página
          <span className="transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
