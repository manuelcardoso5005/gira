'use client';

import { Link } from "@/i18n/routing";
import { teams } from "@/data/clubs";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { matchesByRound } from "./util";
import ButtonSeeMore from "@/components/UI/ButtonSeeMore";
import SectionGamesHeader from "./SectionGamesHeader";

export default function SectionGames() {
  const t = useTranslations('games');
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = Object.keys(matchesByRound).length;

  const currentMatches = matchesByRound[currentRound] || [];

  const getTeamLogo = (teamName: string) => {
    const team = teams.find(t => t.shortName === teamName || t.sigla === teamName);
    return team?.logo || '⚽';
  };

  const handlePreviousRound = () => {
    if (currentRound > 1) {
      setCurrentRound(currentRound - 1);
    }
  };

  const handleNextRound = () => {
    if (currentRound < totalRounds) {
      setCurrentRound(currentRound + 1);
    }
  };

  return (
    <div>
      {/* Header */}
      <SectionGamesHeader
        currentRound={currentRound}
        totalRounds={totalRounds}
        handlePreviousRound={handlePreviousRound}
        handleNextRound={handleNextRound}
      />

      {/* Lista de jogos */}
      <div >
        {currentMatches.map((match, index) => {
          const showDate =
            index === 0 || match.date !== currentMatches[index - 1].date;

          return (
            <div key={match.id}>
              {showDate && (
                <div className="py-1 mb-4 text-center text-white bg-red-600 rounded-sm text-[12px] mt-8">
                  {match.date}
                </div>
              )}

              <div>
                <div className="flex items-center justify-center">
                  {/* Casa */}
                  <div className="flex items-center justify-end gap-2">
                    <span>{match.homeTeam}</span>
                    <img 
                      src={getTeamLogo(match.homeTeam)} 
                      alt={match.homeTeam}
                      className="w-10 h-10"
                    />
                  </div>

                  {/* Centro */}
                  <div>
                    {match.status === 'finished' && match.homeScore !== null ? (
                      <div>
                        <span>{match.homeScore}</span>
                        <span>-</span>
                        <span>{match.awayScore}</span>
                      </div>
                    ) : match.status === 'live' ? (
                      <div>AO VIVO</div>
                    ) : (
                      <div>{match.time}</div>
                    )}
                  </div>

                  {/* Visitante */}
                  <div  className="flex items-center justify-start gap-2"> 
                    <img 
                      src={getTeamLogo(match.awayTeam)} 
                      alt={match.awayTeam}
                      className="w-10 h-10"
                    />
                    <span>{match.awayTeam}</span>
                  </div>
                </div>

                {match.status === 'upcoming' && (
                  <div>Brevemente</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

        {/* Footer */}
        <div className="text-right">
            <ButtonSeeMore href="/games" text="Ver tudo" />
        </div>
    </div>
  );
}