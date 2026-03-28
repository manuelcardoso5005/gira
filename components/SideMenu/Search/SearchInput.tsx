import { Search as SearchIcon } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function SearchInput () {
  const t = useTranslations('SearchMenu');
    return (
     
          <div className="relative">
            <SearchIcon 
              className="absolute -translate-y-1/2 left-4 top-1/2 text-white/50" 
              size={20} 
            />
            <input 
              type="text" 
              placeholder={t("searchInputPlaceholder")}
              autoFocus
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
            />
          </div>

    )
}