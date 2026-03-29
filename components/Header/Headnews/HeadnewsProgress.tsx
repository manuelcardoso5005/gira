import { motion } from "framer-motion";

export default function HeadnewsProgress({ isAutoPlaying, currentIndex }: any) {
  if (!isAutoPlaying) return null;

  return (
    <motion.div
      className="absolute bottom-0 left-0 h-1 bg-gray-800"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 5, ease: "linear" }}
      key={currentIndex}
    />
  );
}