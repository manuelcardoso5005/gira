'use client';
import { motion } from 'framer-motion';
import { itemVariants } from '@/util/utilSectionNews';
import { teams } from '@/data/state';
import TableHome from './TableHomeContent';
import TableHomeFooter from './TableHomeFooter';

export default function ColumnThree() {
  // Filtrar apenas as primeiras 13 equipas
  const displayedTeams = teams.slice(0, 16);

  return (
    <motion.div
      variants={itemVariants}
      className="w-full md:flex-[1] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hidden lg:block"
    >
      <a href="/classification" className="flex flex-col h-full">
        {/* Tabela compacta */}
        <TableHome displayedTeams={displayedTeams} />

        {/* Footer minimalista */}
        <TableHomeFooter />
      </a>
    </motion.div>
  );
}