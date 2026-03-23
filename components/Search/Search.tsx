'use client';

import { X, Search as SearchIcon } from "lucide-react";

interface SearchProps {
  onClick: () => void;
}

export default function Search({ onClick }: SearchProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      onClick={onClick}
    >
      <div 
        className="absolute top-0 bottom-0 right-0 bg-gradient-to-b from-[#37003c] to-[#1a0a2e] w-full max-w-md shadow-2xl animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white text-2xl font-semibold">Search</h2>
          <button 
            onClick={onClick} 
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6">
          <div className="relative">
            <SearchIcon 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" 
              size={20} 
            />
            <input 
              type="text" 
              placeholder="Search teams, players, matches..." 
              autoFocus
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
            />
          </div>

          {/* Quick Links ou Sugestões */}
          <div className="mt-8">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-4">
              Popular Searches
            </h3>
            <div className="space-y-2">
              {['Premier League Standings', 'Top Scorers', 'Match Results', 'Fixtures'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}