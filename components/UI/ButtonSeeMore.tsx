import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

interface ButtonSeeMoreProps {
  href: string;
  text: string;
}

export default function ButtonSeeMore({ href, text }: ButtonSeeMoreProps) {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-lg bg-gradient-to-r hover:to-gray-800 hover:shadow-lg group"
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}