import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface SectionGamesHeaderProps {
  currentRound: number;
  totalRounds: number;
  handlePreviousRound: () => void;
  handleNextRound: () => void;
}

export default function SectionGamesHeader({ 
  currentRound, 
  totalRounds, 
  handlePreviousRound, 
  handleNextRound 
}: SectionGamesHeaderProps) {
  return (
    <div className="relative flex items-center justify-between px-4 py-4 overflow-hidden bg-black rounded-lg md:px-6 md:py-5">
      {/* Background pattern decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-32 -translate-y-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-32 translate-y-32 bg-white rounded-full blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Botão Previous */}
        <button
          onClick={handlePreviousRound}
          disabled={currentRound === 1}
          className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full cursor-pointer md:w-12 md:h-12 hover:bg-white/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent group"
          aria-label="Jornada anterior"
        >
          <ChevronLeft className="w-5 h-5 transition-transform md:w-6 md:h-6 group-hover:-translate-x-0.5" />
        </button>

        {/* Título central */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-white/80 md:w-5 md:h-5" />
            <h2 className="text-base font-bold text-white md:text-xl">
              Jornada {currentRound}
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalRounds }, (_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i + 1 === currentRound
                    ? 'w-6 md:w-8 bg-white'
                    : 'w-1.5 md:w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botão Next */}
        <button
          onClick={handleNextRound}
          disabled={currentRound === totalRounds}
          className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full cursor-pointer md:w-12 md:h-12 hover:bg-white/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent group"
          aria-label="Próxima jornada"
        >
          <ChevronRight className="w-5 h-5 transition-transform md:w-6 md:h-6 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}