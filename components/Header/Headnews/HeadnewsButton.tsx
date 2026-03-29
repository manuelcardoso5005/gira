import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HeadnewsButtonProps {
  onClick: () => void;
  ariaLabel: string;
  Icon: LucideIcon;
  direction?: "left" | "right";
}

export default function HeadnewsButton({ onClick, ariaLabel, Icon, direction }: HeadnewsButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full shadow-md cursor-pointer shrink-0 bg-gray-800/80 hover:bg-gray-900 backdrop-blur-sm group"
      aria-label={ariaLabel}
    >
      <Icon
        className={`w-5 h-5 text-white transition-transform ${
            direction === "left"
            ? "group-hover:-translate-x-0.5"
            : "group-hover:translate-x-0.5"
        }`}
        />
    </motion.button>
  );
}