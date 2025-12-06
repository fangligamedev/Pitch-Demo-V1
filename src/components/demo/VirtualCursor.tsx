"use client";
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function VirtualCursor({ x, y, clickTrigger }: { x: number, y: number, clickTrigger: boolean }) {
    return (
        <motion.div
            className="fixed pointer-events-none z-[9999]"
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.8 }}
            style={{ top: 0, left: 0 }}
        >
            <div className="relative">
                {/* Click Ripple */}
                {clickTrigger && (
                    <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full border-2 border-red-500 animate-ping opacity-75" />
                )}

                {/* Cursor Body */}
                <MousePointer2 className="w-8 h-8 text-black/20 fill-black translate-y-[1px] translate-x-[1px]" strokeWidth={0} /> {/* Shadow */}
                <MousePointer2 className="w-8 h-8 text-white fill-black absolute top-0 left-0 drop-shadow-lg" />
            </div>

            {/* Label (Optional) */}
            <div className="ml-6 mt-1 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow-lg opacity-80 uppercase tracking-wider">
                AI Agent
            </div>
        </motion.div>
    )
}
