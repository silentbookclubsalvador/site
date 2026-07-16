import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-reading.jpg";
import detailImg from "@/assets/detail-book.jpg";
import gatheringImg from "@/assets/gathering.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const upcoming = [
  {
    day: "23",
    month: "Ago",
    title: "Café Rosa dos Ventos",
    neighborhood: "Rio Vermelho",
    time: "Sábado · 16h — 18h",
    spots: "12 confirmados",
  },
  {
    day: "27",
    month: "Set",
    title: "Livraria LDM",
    neighborhood: "Barra",
    time: "Sábado · 16h — 18h",
    spots: "abertas 20 vagas",
  },
  {
    day: "25",
    month: "Out",
    title: "Solar Ferrão",
    neighborhood: "Pelourinho",
    time: "Sábado · 15h — 17h",
    spots: "em breve",
  },
];

const steps = [
  {
    n: "01",
    t: "Chega e cumprimenta",
    d: "Os primeiros 20 minutos são para se apresentar, mostrar o livro que trouxe e pegar um café.",
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

const faq = [
  {
    q: "Preciso pagar alguma coisa?",
    a: "Não. O encontro é gratuito. Só o que você consumir no café/livraria fica por sua conta.",
  },
  {
    q: "E se eu for tímido?",
    a: "Perfeito, esse clube foi feito pra você. A hora de silêncio é o coração do encontro — a socialização é sempre opcional.",
  },
  {
    q: "Tem idade mínima?",
    a: "Recomendamos a partir de 16 anos. Menores acompanhados dos pais são bem-vindos.",
  },
  {
    q: "Como confirmo presença?",
    a: "Pelo direct do Instagram @sbc.salvador. Avisamos o endereço exato e a mesa reservada.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <Mark />
          <span className="font-display text-lg tracking-tight">
            Silent Book Club <span className="text-accent">·</span> Salvador
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#como" className="hover:text-foreground">Como funciona</a>
          <a href="#encontros" className="hover:text-foreground">Encontros</a>
          <a href="#sobre" className="hover:text-foreground">Sobre</a>
          <a href="#faq" className="hover:text-foreground">Dúvidas</a>
        </nav>
        <a
          href="https://instagram.com/sbc.salvador"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-foreground/20 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
        >
          @sbc.salvador
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-8 pb-24 md:grid-cols-12 md:gap-10 md:pt-16">
        <div className="md:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Salvador · Bahia · desde 2024
          </p>
          <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98]">
            Leia o seu livro,{" "}
            <em className="font-normal italic text-accent">em silêncio</em>,
            <br /> em boa companhia.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Um encontro mensal em cafés e livrarias de Salvador. Você traz o
            livro que estiver lendo, a gente traz o silêncio confortável — e
            um café bem tirado.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#encontros"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
            >
              Ver próximos encontros
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#como" className="text-sm underline underline-offset-4 decoration-accent/60 hover:decoration-accent">
              Como funciona um encontro
            </a>
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
              alt="Duas pessoas lendo em silêncio em um café em Salvador"
              width={1600}
              height={1200}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 max-w-xs text-xs italic text-muted-foreground">
            Encontro nº 07 · Café no Rio Vermelho · foto de Maria Bethânia S.
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
              <span>Peça outro café.</span>
              <span className="text-accent">✦</span>
              <span>Repita mês que vem.</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Como funciona */}
      <section id="como" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              O ritual
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Três atos, duas horas, um bom livro.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Sem leitura obrigatória, sem debate marcado, sem apresentação
              de trabalho. Só o prazer de ler perto de quem também ama ler.
            </p>
          </div>

          <ol className="md:col-span-8 md:pl-8">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={
                  "grid grid-cols-[auto_1fr] gap-8 py-8 " +
                  (i !== steps.length - 1 ? "border-b border-border" : "")
                }
              >
                <span className="font-display text-4xl text-accent">{s.n}</span>
                <div>
                  <h3 className="text-2xl">{s.t}</h3>
                  <p className="mt-2 max-w-xl text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Próximos encontros */}
      <section id="encontros" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                Agenda
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Próximos encontros
              </h2>
            </div>
            <p className="max-w-sm text-sm text-background/70">
              Confirme presença pelo Instagram até um dia antes — as mesas
              enchem rápido.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-background/10 md:grid-cols-3">
            {upcoming.map((e) => (
              <article
                key={e.day + e.title}
                className="group flex flex-col justify-between gap-10 bg-foreground p-8 transition hover:bg-accent"
              >
                <div className="flex items-baseline gap-4 font-display">
                  <span className="text-6xl leading-none">{e.day}</span>
                  <span className="text-lg uppercase tracking-wider">
                    {e.month}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-background/70 group-hover:text-background/90">
                    {e.neighborhood}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-background/15 pt-4 text-xs uppercase tracking-widest text-background/70 group-hover:text-background">
                    <span>{e.time}</span>
                    <span>{e.spots}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={detailImg}
                alt="Mãos segurando um livro aberto ao lado de um café"
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
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              De São Francisco para o mundo — e agora, para a Bahia.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O Silent Book Club nasceu em 2012 em São Francisco, quando
              duas amigas resolveram trocar o clube do livro tradicional
              por algo mais leve: encontrar-se num bar, ler cada uma o seu
              livro e conversar depois — se desse vontade. Hoje são mais
              de <strong className="text-foreground">1.500 capítulos</strong>{" "}
              em mais de <strong className="text-foreground">50 países</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              O capítulo de Salvador rodou o primeiro encontro em 2024 e
              já reuniu leitoras e leitores de todos os cantos da cidade —
              do Pelourinho à Pituba, passando por cafés do Rio Vermelho.
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

      {/* Gallery band */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="overflow-hidden rounded-sm">
          <img
            src={gatheringImg}
            alt="Grupo diverso lendo em silêncio em uma livraria em Salvador"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-[440px] w-full object-cover"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              Antes de vir
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Perguntas frequentes
            </h2>
            <p className="mt-6 text-muted-foreground">
              Ficou com alguma dúvida que não está aqui? Escreve pra gente
              no direct — respondemos sempre.
            </p>
          </div>
          <dl className="md:col-span-8">
            {faq.map((item, i) => (
              <div
                key={item.q}
                className={
                  "py-8 " + (i !== faq.length - 1 ? "border-b border-border" : "")
                }
              >
                <dt className="font-display text-2xl">{item.q}</dt>
                <dd className="mt-3 text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
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
            <a
              href="#encontros"
              className="rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition hover:bg-background hover:text-foreground"
            >
              Ver agenda completa
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Mark />
            <span className="font-display text-sm">
              Silent Book Club Salvador · capítulo Bahia
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Feito com café e silêncio em Salvador — {new Date().getFullYear()}.
          </p>
        </div>
      </footer>
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

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="2" y="4" width="28" height="24" rx="1" fill="var(--terracotta)" />
      <path d="M16 4v24" stroke="var(--paper)" strokeWidth="1.2" />
      <path
        d="M7 10h6M7 14h6M19 10h6M19 14h6M7 18h6M19 18h6"
        stroke="var(--paper)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
