export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  link: string;
  description?: string;
  image: string;
  type?: 'video' | 'article' | 'poll';
}

export   const featuredNews: NewsItem = {
    id: 1,
    title: "Pick your EA SPORTS Player of the Month",
    category: "Awards",
    date: "29 March 2026",
    link: "#",
    description: "Which of these SEVEN Premier League stars gets YOUR vote to win March's award?",
    type: 'poll',
    image:"https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
  };

  export   const sideNews: NewsItem[] = [
    {
      id: 2,
      title: "All you need to know about Sunday's ePremier League Finals",
      category: "EPL",
      date: "29 March 2026",
      link: "#",
      type: 'article',
      image: "https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    },
    {
      id: 3,
      title: "VOTE: Is Salah the Premier League's best forward ever?",
      category: "Features",
      date: "28 March 2026",
      link: "#",
      type: 'poll',
      image: "https://i.ibb.co/jkCmfNVP/Agosto-e-petro.png",
    },
  ];
