'use client';
import { motion } from 'framer-motion';
import { itemVariants } from './util';

interface Team {
  pos: number;  // Posição da equipa na tabela
  logo: string; // Logo ou ícone da equipa
  pts: number;  // Pontos totais
  pj: number;   // Partidas jogadas
  pg: number;   // Partidas ganhas
}

// Exemplo: 16 equipas com emoji de placeholder
const teams: Team[] = Array.from({ length: 16 }, (_, i) => ({
  pos: i + 1,
  logo: ['⚽','🏆','🦁','🐍','🦅','🐯','🐴','🐙','🦄','🐉','🐼','🦊','🦢','🐸','🐺','🦖'][i],
  pts: Math.floor(Math.random() * 30),
  pj: 15,
  pg: Math.floor(Math.random() * 10),
  pe: Math.floor(Math.random() * 5),
  pp: Math.floor(Math.random() * 5),
  gf: Math.floor(Math.random() * 20),
  gc: Math.floor(Math.random() * 20),
}));

export default function ColumnThree() {
  return (
    <motion.div
      variants={itemVariants}
      className="w-full md:flex-[1] bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hidden md:block"
    >
      <a href="/classification" className="flex flex-col h-full">
        <div className="p-4 overflow-x-auto">
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1">#</th>
                  <th className="px-2 py-1">Logo</th>
                  <th className="px-2 py-1">Pts</th>
                  <th className="px-2 py-1">PJ</th>
                  <th className="px-2 py-1">PG</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.pos} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="px-2 py-1 font-semibold">{team.pos}</td>
                    <td className="flex items-center justify-center px-2 py-1">
                      <span className="text-2xl">{team.logo}</span>
                    </td>
                    <td className="px-2 py-1">{team.pts}</td>
                    <td className="px-2 py-1">{team.pj}</td>
                    <td className="px-2 py-1">{team.pg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </a>
    </motion.div>
  );
}