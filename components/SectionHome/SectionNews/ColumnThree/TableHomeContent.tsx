import { Team } from "./util";
import { Trophy } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TableHomeProps {
  displayedTeams: Team[];
}

export default function TableHome({ displayedTeams }: TableHomeProps) {
    const t = useTranslations('tableHeader');
    return (
      <>
        {/* Header simples */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
          <Trophy className="w-4 h-4 text-purple-600" />
          <h3 className="text-sm font-bold text-gray-800">Girabola 2025/26</h3>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 font-semibold text-left text-gray-600">#</th>
                <th className="px-3 py-2 font-semibold text-left text-gray-600">{t('team')}</th>
                <th className="px-3 py-2 font-semibold text-center text-gray-600">{t('points')}</th>
                <th className="px-3 py-2 font-semibold text-center text-gray-600">{t('matches')}</th>
              </tr>
            </thead>
            <tbody>
              {displayedTeams.map((team, index) => (
                <tr 
                  key={team.pos} 
                  className="transition-colors border-b border-gray-100 hover:bg-purple-50/50"
                >
                  {/* Posição */}
                  <td className="px-3 py-2">
                    <span className={`font-bold ${
                      index === 0 ? 'text-purple-600' : 'text-gray-700'
                    }`}>
                      {team.pos}
                    </span>
                  </td>

                  {/* Logo + Nome */}
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{team.logo}</span>
                      {team.name && (
                        <span className="text-xs font-medium text-gray-700 truncate">
                          {team.name}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Pontos */}
                  <td className="px-3 py-2 text-center">
                    <span className="font-bold text-purple-600">
                      {team.pts}
                    </span>
                  </td>

                  {/* Partidas Jogadas */}
                  <td className="px-3 py-2 text-center text-gray-600">
                    {team.pj}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
}