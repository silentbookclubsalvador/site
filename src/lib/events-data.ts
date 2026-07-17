export type SbcEvent = {
  id: string;
  day: string;
  month: string;
  weekday: string;
  title: string;
  venueType: string;
  neighborhood: string;
  time: string;
  spots: string;
  address: string;
  description: string;
};

export const upcomingEvents: SbcEvent[] = [
  {
    id: "ago-2026-rio-vermelho",
    day: "23",
    month: "Ago",
    weekday: "Sábado",
    title: "Café Rosa dos Ventos",
    venueType: "Cafeteria",
    neighborhood: "Rio Vermelho",
    time: "16h — 18h",
    spots: "12 confirmados",
    address: "Rua da Paciência, 234 · Rio Vermelho",
    description:
      "Mesa reservada nos fundos, com boa luz natural e tomadas para quem preferir e-reader. Chegue 10 minutos antes para se acomodar.",
  },
  {
    id: "set-2026-parque-cidade",
    day: "27",
    month: "Set",
    weekday: "Domingo",
    title: "Parque da Cidade",
    venueType: "Área aberta",
    neighborhood: "Itaigara",
    time: "9h — 11h",
    spots: "abertas 20 vagas",
    address: "Encontro no quiosque próximo ao lago principal",
    description:
      "Encontro ao ar livre — traga uma canga, chapéu e sua garrafinha. Em caso de chuva, remarcamos pelo Instagram na sexta.",
  },
  {
    id: "out-2026-solar-ferrao",
    day: "25",
    month: "Out",
    weekday: "Sábado",
    title: "Solar Ferrão",
    venueType: "Espaço cultural",
    neighborhood: "Pelourinho",
    time: "15h — 17h",
    spots: "em breve",
    address: "Largo do Cruzeiro de São Francisco, s/n",
    description:
      "Vamos ocupar o pátio interno do Solar. Depois da leitura, quem quiser fica pra uma volta rápida pelas exposições.",
  },
  {
    id: "nov-2026-mirante-lacerda",
    day: "22",
    month: "Nov",
    weekday: "Sábado",
    title: "Mirante do Elevador Lacerda",
    venueType: "Mirante",
    neighborhood: "Centro Histórico",
    time: "16h — 18h",
    spots: "em breve",
    address: "Praça Tomé de Souza · Centro",
    description:
      "Leitura com vista para a Baía de Todos-os-Santos. Levamos cangas extras e uma caixinha de marcadores de página.",
  },
];
