import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { slideVariants } from "./animations";
import { news } from "./const";

export default function HeadnewsContent({ currentIndex, direction }: any) {
  return (
    <div className="flex-1 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.a
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          href={news[currentIndex].link}
          className="flex items-center justify-center gap-3 cursor-pointer group min-h-10"
        >
          <span className="text-2xl">{news[currentIndex].icon}</span>
          <span className="text-sm font-bold text-gray-800 md:text-base">
            {news[currentIndex].text}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-700" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}