'use client';
import { motion } from 'framer-motion';
import { itemVariants } from '@/util/utilSectionNews';
import { teams } from './util';
import { Trophy } from 'lucide-react';

export default function ColumnThree() {
  // Filtrar apenas as primeiras 13 equipas
  const displayedTeams = teams.slice(0, 13);

  return (
    <motion.div
      variants={itemVariants}
      className="w-full md:flex-[1] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hidden lg:block"
    >
      <a href="/classification" className="flex flex-col h-full">
        {/* Header simples */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
          <Trophy className="w-4 h-4 text-purple-600" />
          <h3 className="text-sm font-bold text-gray-800">Girabola 2025/26</h3>
        </div>

        {/* Tabela compacta */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 font-semibold text-left text-gray-600">#</th>
                <th className="px-3 py-2 font-semibold text-left text-gray-600">Equipa</th>
                <th className="px-3 py-2 font-semibold text-center text-gray-600">Pts</th>
                <th className="px-3 py-2 font-semibold text-center text-gray-600">PJ</th>
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

                  {/* Logo */}
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-center text-lg w-7 h-7">
                      {team.logo}
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

        {/* Footer minimalista */}
        <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Champions</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Descida</span>
              </div>
            </div>
            <span className="text-xs font-medium text-purple-600 hover:underline">
              Ver tudo →
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}