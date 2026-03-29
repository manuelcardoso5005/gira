'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadnewsButton from "./HeadnewsButton";
import HeadnewsContent from "./HeadnewsContent";
import HeadnewsDots from "./HeadnewsDots";
import HeadnewsProgress from "./HeadnewsProgress";
import { useHeadnews } from "./hooks";

export default function Headnews() {
  const {
    currentIndex,
    isAutoPlaying,
    direction,
    goToSlide,
    nextSlide,
    prevSlide,
  } = useHeadnews();

  return (
    <div className="relative overflow-hidden bg-linear-to-r from-gray-200 via-gray-100 to-gray-50">
      <div className="relative px-4 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          
          <HeadnewsButton onClick={prevSlide} ariaLabel="Anterior" Icon={ChevronLeft} />

          <HeadnewsContent currentIndex={currentIndex} direction={direction} />

          <HeadnewsButton onClick={nextSlide} ariaLabel="Próxima" Icon={ChevronRight} />
        </div>

        <HeadnewsDots currentIndex={currentIndex} goToSlide={goToSlide} />
      </div>

      {/*<HeadnewsProgress
        isAutoPlaying={isAutoPlaying}
        currentIndex={currentIndex}
      />*/}
    </div>
  );
}