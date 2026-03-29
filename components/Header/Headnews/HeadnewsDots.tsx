import { motion } from "framer-motion";
import { news } from "./const";

export default function HeadnewsDots({ currentIndex, goToSlide }: any) {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {news.map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goToSlide(index)}
        >
          <div
            className={`rounded-full ${
              index === currentIndex
                ? "w-8 h-2.5 bg-gray-800"
                : "w-2.5 h-2.5 bg-gray-400"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
}