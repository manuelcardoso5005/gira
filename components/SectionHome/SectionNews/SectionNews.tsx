'use client';

import { motion } from 'framer-motion';
import ColumnOne from './ColumnOne/ColumnOne';
import ColumnTwo from './ColumnTwo/ColumnTwo';
import ColumnThree from './ColumnThree/ColumnThree';
import { featuredNews, sideNews } from '@/data/SideNews';
import { containerVariants } from '@/util/utilSectionNews';



export default function SectionNews() {
  return (
    <section className="py-12">
      <div className="p-4 mx-auto shadow-lg bg-linear-to-r from-gray-200 via-gray-100 to-gray-50 rounded-2xl">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 md:gap-6"
        >
          {/* Coluna 1 - 60% (Notícia Principal) */}
            <ColumnOne featuredNews={featuredNews} />

            {/* Coluna 2 - 20% (Duas notícias empilhadas) */}
            <ColumnTwo sideNews={sideNews} />
            
            {/* Coluna 3 */}
            <ColumnThree  />
        </motion.div>
      </div>
    </section>
  );
}