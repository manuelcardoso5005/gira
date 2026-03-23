'use client';

import { X, Search as SearchIcon } from "lucide-react";

interface MenuProps {
  onClick: () => void;
}


export default function Menu ({ onClick }: MenuProps) {
    return (
        <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClick}>
            <div 
                className="absolute top-0 bottom-0 left-0 bg-linear-to-b from-[#37003c] to-[#1a0a2e] w-full max-w-md shadow-2xl animate-slide-in"
                onClick={(e) => e.stopPropagation()}>

            </div>
        </div>
    )
}