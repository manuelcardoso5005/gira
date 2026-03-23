'use client';

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { Menu, Search } from "lucide-react";
import SearchPage from "@/components/Search/Search";
import MenuPage from "@/components/Menu/Menu"


export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setMenu] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo + Menu + Links */}
        <div className="flex items-center gap-6">
            <button onClick={() => setMenu(true)} className="hidden md:block">
                <Menu className="w-6 h-6 text-neutral-700" />
            </button>
          <Link href="/" className="text-xl font-bold text-neutral-900">
            Girabora
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-neutral-700 font-medium">
            <Link href="/jogos">Jogos</Link>
            <Link href="/classificacao">Classificação</Link>
            <Link href="/estatistica">Estatística</Link>
            <Link href="/noticias">Notícias</Link>
            <Link href="/clubes">Clubes</Link>
          </nav>
        </div>

        {/* Ícone de Pesquisa */}
        <button onClick={() => setShowSearch(true)} className="hidden md:block">
          <Search className="w-6 h-6 text-neutral-700" />
        </button>

      </div>

      {/* Componente de busca */}
      {showSearch && (
        <SearchPage onClick={() => setShowSearch(false)} />
      )}
      {showMenu && (
        <MenuPage onClick={() => setMenu(false)} />
      )}
    </header>
  );
}