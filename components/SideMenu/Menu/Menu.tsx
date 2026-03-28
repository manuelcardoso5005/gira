'use client';

import { useState } from "react";
import MenuBgProps from "@/components/SideMenu/_components/SideMenuBg"

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuBgProps
      onClick={onClose}
      title="Menu"
      direction="left"
    >
      qwer
    </MenuBgProps>
  );
}