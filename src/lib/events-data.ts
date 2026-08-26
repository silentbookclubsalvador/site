export type SbcEvent = {
  id: string;
  day: string;
  month: string;
  weekday: string;
  title: string;
  venueType: string;
  time: string;
  address: string;
  description: string;
};

// Os locais mudam a cada edição e são anunciados no @sbc.salvador.
export const upcomingEvents: SbcEvent[] = [
  {
    id: "set-2026",
    day: "??",
    month: "Set",
    weekday: "A definir",
    title: "Encontro de setembro",
    venueType: "Local a anunciar",
    time: "1h30 — 2h de encontro",
    address: "O local de cada edição é anunciado no Instagram @sbc.salvador",
    description:
      "Traga o livro que estiver lendo — qualquer gênero, qualquer formato. A dinâmica é sempre a mesma: uns 30 minutos de conversa inicial, 1 hora de leitura em silêncio e um papo livre no final, pra quem quiser ficar.",
  },
  {
    id: "out-2026",
    day: "??",
    month: "Out",
    weekday: "A definir",
    title: "Encontro de outubro",
    venueType: "Local a anunciar",
    time: "1h30 — 2h de encontro",
    address: "O local de cada edição é anunciado no Instagram @sbc.salvador",
    description:
      "Participação gratuita. Nos locais com consumação, a gente incentiva pedir algo pra apoiar o espaço que acolhe o encontro.",
  },
  {
    id: "nov-2026",
    day: "??",
    month: "Nov",
    weekday: "A definir",
    title: "Encontro de novembro",
    venueType: "Local a anunciar",
    time: "1h30 — 2h de encontro",
    address: "O local de cada edição é anunciado no Instagram @sbc.salvador",
    description:
      "Primeira vez? Chega sem cerimônia: se apresenta, mostra o que está lendo (se quiser) e se acomoda. O silêncio faz o resto.",
  },
];

// Edições que já aconteceram — a cidade como cenário, nunca como foco.
export const pastVenueNotes =
  "Já lemos em Ondina, na UFBA, na Barra, no Parque da Cidade, no Shopping Passeio e no Itaigara — cafeterias, áreas abertas, campus, shopping. Cada edição, um cenário novo; o ritual, sempre o mesmo.";
