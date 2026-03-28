
'use client';

import SearchInput from "@/components/SideMenu/Search/SearchInput"
import MenuBgProps from "@/components/SideMenu/_components/SideMenuBg"
import { useTranslations } from 'next-intl';

interface SearchProps {
  onClose: () => void;
}

export default function SearchDesktop({ onClose }: SearchProps) {
    const t = useTranslations('SearchMenu');
  return (
    <MenuBgProps
      onClick={onClose}
      title={t("search")}
      direction="right"
    >
      <SearchInput />
    </MenuBgProps>
  )
}