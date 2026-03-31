// Tipo para os jogos
export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  date: string;
  time: string;
  status: 'finished' | 'live' | 'upcoming';
}

// Dados de exemplo (depois você pode buscar da API)
export const matchesByRound: Record<number, Match[]> = {
  1: [
    { 
      id: 1, 
      homeTeam: "Petro de Luanda", 
      awayTeam: "1º de Agosto", 
      homeScore: 2, 
      awayScore: 1, 
      date: "Dom, 12 de Jan", 
      time: "15:30",
      status: 'finished' 
    },
    { 
      id: 2, 
      homeTeam: "Sagrada Esperança", 
      awayTeam: "Interclube", 
      homeScore: 0, 
      awayScore: 0, 
      date: "Dom, 12 de Jan", 
      time: "18:00",
      status: 'finished' 
    },
    { 
      id: 3, 
      homeTeam: "Desportivo da Huíla", 
      awayTeam: "Académica do Lobito", 
      homeScore: 1, 
      awayScore: 2, 
      date: "Sáb, 11 de Jan", 
      time: "16:00",
      status: 'finished' 
    },
    { 
      id: 4, 
      homeTeam: "Bravos do Maquis", 
      awayTeam: "Recreativo do Libolo", 
      homeScore: null, 
      awayScore: null, 
      date: "Dom, 13 de Jan", 
      time: "15:00",
      status: 'upcoming' 
    },
  ],
  2: [
    { 
      id: 5, 
      homeTeam: "1º de Agosto", 
      awayTeam: "Sagrada Esperança", 
      homeScore: null, 
      awayScore: null, 
      date: "Sáb, 18 de Jan", 
      time: "15:30",
      status: 'upcoming' 
    },
  ],
  3: [
    { 
      id: 5, 
      homeTeam: "1º de Agosto", 
      awayTeam: "Sagrada Esperança", 
      homeScore: null, 
      awayScore: null, 
      date: "Sáb, 18 de Jan", 
      time: "15:30",
      status: 'upcoming' 
    },
  ],
  4: [
    { 
      id: 5, 
      homeTeam: "1º de Agosto", 
      awayTeam: "Sagrada Esperança", 
      homeScore: null, 
      awayScore: null, 
      date: "Sáb, 18 de Jan", 
      time: "15:30",
      status: 'upcoming' 
    },
  ],
  5: [
    { 
      id: 5, 
      homeTeam: "1º de Agosto", 
      awayTeam: "Sagrada Esperança", 
      homeScore: null, 
      awayScore: null, 
      date: "Sáb, 18 de Jan", 
      time: "15:30",
      status: 'upcoming' 
    },
  ],
};
