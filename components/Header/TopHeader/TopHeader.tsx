'use client';

import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/components/UI/LanguageSwitcher";
import { useTranslations } from 'next-intl';

interface LinkTopHeaderProps {
  title: string;
  link: string;
}

// Componente de link reutilizável
function LinkTopHeader({ title, link }: LinkTopHeaderProps) {
  return (
    <Link 
      href={link} 
      className="font-medium transition-colors duration-200 text-neutral-600 hover:text-neutral-900"
    >
      {title}
    </Link>
  );
}

export default function TopHeader() {
  const t = useTranslations('TopHeader');
  const links = [
    { key: "shop", link: "/loja" },
    { key: "about", link: "/sobre" },
    { key: "events", link: "/eventos" },
  ];

  return (
    <header className="w-full border-b bg-linear-to-r border-neutral-200">
      <div className="flex items-center justify-between px-4 text-xs h-9">
        {/* Links de navegação secundária */}
        <nav className="items-center hidden gap-6 md:flex">
          {links.map((item) => (
            <LinkTopHeader 
              key={item.link} 
              title={t(item.key)} 
              link={item.link} 
            />
          ))}
        </nav>

        {/* Mobile: Apenas um link principal */}
        <nav className="md:hidden">
          <LinkTopHeader title={t('shop')} link="/loja" />
        </nav>

        {/* Ações da direita */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}