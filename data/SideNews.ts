export interface NewsItem {
  id: number;
  title: string;
  competition?: string;
  stadium?:string;
  category?: string;
  date: string;
  time?: string;
  status?:string;
  question?:string;
  link?: string;
  description?: string;
  image: string;
  type?: 'video' | 'article' | 'poll';
  stats?:{
    homeWinProb?: string;
    drawProb?: string;
    awayWinProb?: string;
  }
}


export  const sideNews: NewsItem[] = [
  {
    id: 2,
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    competition: "Girabola 2025/26",
    stadium: "Estádio 11 de Novembro",
    category: "Girabola",
    date: "29 March 2026",
    time: "16:00",
    status: "Brevemente",
    link: "#",
    type: 'article',
    question:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.ibb.co/YFMdvXFF/IMG-6716-770x702.jpg",
      stats: {
      homeWinProb: "35%",
      drawProb: "20%",
      awayWinProb: "45%"
    }
  },
  {
    id: 3,
    title: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    competition: "Girabola 2025/26",
    stadium: "",
    category: "Girabola",
    date: "28 March 2026",
    time: "16:00",
    status: "Brevemente",
    link: "#",
    type: 'poll',
    question:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.ibb.co/1Y3JrRWW/IMG-8577.jpg",
      stats: {
        homeWinProb: "35%",
        drawProb: "20%",
        awayWinProb: "45%"
      }
  },
];


export const featuredNews: NewsItem = {
  id: 1,
  title: "1º de Agosto vs Petro de Luanda",
  competition: "Girabola 2025/26",
  stadium: "Estádio 11 de Novembro",
  category: "Girabola",
  link: "/jogo/agosto-vs-petro",
  date: "29 Jan 2026",
  time: "16:00",
  status: "Brevemente",
  type: 'poll',
  question: "Quem vence o clássico?", 
  description: "Clássico do futebol angolano com grandes expectativas.",
  image: "https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
  stats: {
    homeWinProb: "35%",
    drawProb: "20%",
    awayWinProb: "45%"
  }
};
