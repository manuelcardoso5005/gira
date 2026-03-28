'use client';

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Menu, Search } from "lucide-react";
import SearchMobile from "@/components/SideMenu/Search/SearchMobile";
import SearchDesktop from "@/components/SideMenu/Search/SearchDesktop";
import MenuPage from "@/components/SideMenu/Menu/Menu";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const t = useTranslations('NavHeader');

  const navLinks = [
    { href: "/jogos", label: "games" },
    { href: "/classificacao", label: "classification" },
    { href: "/estatistica", label: "stats" },
    { href: "/noticias", label: "news" },
    { href: "/clubes", label: "clubs" },
  ];

  return (
    <header className="w-full">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-screen-2xl">
        {/* Logo + Menu + Links */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMenu(true)} 
              className="transition-opacity cursor-pointer hover:opacity-70"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-neutral-700" />
            </button>
            <Link href="/" className="text-xl font-bold text-neutral-900">
              Girabora
            </Link>
          </div>

          <nav className="items-center hidden gap-6 font-medium md:flex text-neutral-700">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="transition-colors hover:text-neutral-900"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Ícone de Pesquisa */}
        <button 
          onClick={() => setShowSearch(true)} 
          className="transition-opacity cursor-pointer hover:opacity-70"
          aria-label="Abrir pesquisa"
        >
          <Search className="w-6 h-6 text-neutral-700" />
        </button>
      </div>

      {/* Componentes de busca e menu com AnimatePresence */}
      <AnimatePresence>
        {showSearch && (
          <>
            <div className="block md:hidden ">
              <SearchMobile onClose={() => setShowSearch(false)} />
            </div>
            <div className="hidden md:block ">
              <SearchDesktop onClose={() => setShowSearch(false)} />
            </div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMenu && <MenuPage onClose={() => setShowMenu(false)} />}
      </AnimatePresence>
    </header>
  );
}