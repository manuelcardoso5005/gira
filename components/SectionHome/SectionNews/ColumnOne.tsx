'use client';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { itemVariants } from './util';
import { NewsItem } from './SideNews';

interface ColumnOneProps {
    featuredNews: NewsItem;
}

export default function ColumnOne({ featuredNews }: ColumnOneProps) {
    return (
        <motion.div
            variants={itemVariants}
            className="flex-[3] bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
        >
            <a href={featuredNews.link} className="block">
                {/* Imagem/Banner */}
                <div className="relative overflow-hidden aspect-video">
                    <img
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 transition-opacity bg-black/20 group-hover:bg-black/30" />

                    {/* Badge de tipo */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-bold text-white uppercase rounded-full bg-black/50 backdrop-blur-sm">
                            {featuredNews.type}
                        </span>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-purple-700 uppercase bg-purple-100 rounded-full">
                            <Tag className="w-3 h-3" />
                            {featuredNews.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {featuredNews.date}
                        </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-purple-600">
                        {featuredNews.title}
                    </h3>

                    <p className="mb-4 text-gray-600 line-clamp-2">
                        {featuredNews.description}
                    </p>

                    <div className="flex items-center gap-2 font-semibold text-purple-600 transition-transform group-hover:translate-x-2">
                        Read more
                        <ExternalLink className="w-4 h-4" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}