import { itemVariants } from '@/util/utilSectionNews';
import { motion } from 'framer-motion';
import { NewsItem } from '@/data/SideNews';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

interface ColumnTwoProps {
    sideNews: NewsItem[];
}

export default function ColumnTwo({ sideNews }: ColumnTwoProps) {
    return (          
        <div className="w-full md:w-[calc(20%-4px)] flex flex-col gap-4">
            {sideNews.map((news, index) => (
              <motion.div
                key={news.id}
                variants={itemVariants}
                className="flex-1 overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl group hover:shadow-xl"
              >
                <a href={news.link} className="flex flex-col h-full">
                  {/* Thumbnail com imagem real */}
                  <div className="relative overflow-hidden aspect-video">
                    {news.image ? (
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`absolute inset-0 transition-transform duration-500 bg-gradient-to-br ${
                        index === 0
                          ? 'from-blue-500 to-cyan-500'
                          : 'from-green-500 to-emerald-500'
                      } group-hover:scale-110`} />
                    )}
                    
                    <div className="absolute inset-0 transition-opacity bg-black/20 group-hover:bg-black/30" />
                    
                    {/* Badge do tipo de conteúdo */}
                    {news.type && (
                      <div className="absolute px-3 py-1 text-xs font-bold text-white uppercase bg-purple-600 rounded-full top-3 left-3">
                        {news.type}
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col flex-1 p-4">
                    <span className="inline-flex items-center self-start gap-1 px-2 py-1 mb-2 text-xs font-semibold text-blue-700 uppercase bg-blue-100 rounded-full">
                      <Tag className="w-3 h-3" />
                      {news.category}
                    </span>

                    <h3 className="mb-3 text-sm font-bold leading-tight text-gray-900 transition-colors line-clamp-3 group-hover:text-purple-600">
                      {news.title}
                    </h3>

                    {/* Informações do jogo (se aplicável) */}
                    {news.competition && (
                      <div className="mb-3 text-xs text-gray-600">
                        <p className="font-medium">{news.competition}</p>
                        {news.stadium && (
                          <p className="text-gray-500">{news.stadium}</p>
                        )}
                      </div>
                    )}

                    {/* Footer - sempre no final */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                        {news.time && (
                          <span className="ml-1">• {news.time}</span>
                        )}
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-400 transition-all group-hover:text-purple-600 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
        </div>
    )
}