import { ReactNode, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuBgProps {
  onClick: () => void;
  children: ReactNode;
  title: string;
  direction?: "left" | "right" | "bottom" | "undefined" ;
}

export default function SideMenuBg({ onClick, children, title, direction = "right" }: MenuBgProps) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClick();
        }, 400);
    };

    const getPositionClasses = () => {
        switch (direction) {
            case "left":
                return "top-0 bottom-0 left-0 w-full max-w-md";
            case "right":
                return "top-0 bottom-0 right-0 w-full max-w-md";
            case "bottom":
                return "bottom-0 left-0 right-0 h-auto max-h-[80vh] rounded-t-2xl";
            default:
                return "top-0 bottom-0 right-0 w-full max-w-md";
        }
    };

    const getAnimationVariants = () => {
        switch (direction) {
            case "left":
                return {
                    initial: { x: "-100%" },
                    animate: { x: 0 },
                    exit: { x: "-100%" }
                };
            case "right":
                return {
                    initial: { x: "100%" },
                    animate: { x: 0 },
                    exit: { x: "100%" }
                };
            case "bottom":
                return {
                    initial: { y: "100%" },
                    animate: { y: 0 },
                    exit: { y: "100%" }
                };
            default:
                return {
                    initial: { x: "100%" },
                    animate: { x: 0 },
                    exit: { x: "100%" }
                };
        }
    };

    return (
        <AnimatePresence>
            {!isClosing && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        {...getAnimationVariants()}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className={`absolute ${getPositionClasses()} bg-gradient-to-b from-[#37003c] to-[#1a0a2e] shadow-2xl flex flex-col`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between flex-shrink-0 p-6 border-b border-white/10">
                            <h2 className="text-2xl font-semibold text-white">{title}</h2>
                            <button
                                onClick={handleClose}
                                className="p-2 transition-colors rounded-lg cursor-pointer text-white/70 hover:text-white hover:bg-white/10"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="space-y-2">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}