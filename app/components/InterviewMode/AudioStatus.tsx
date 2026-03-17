"use client";

import { CheckCircle2 } from "lucide-react";

export default function AudioStatus() {
    return (
        <div className="w-[300px] h-[160px] flex flex-col items-center justify-center rounded-[24px] bg-[#1A1933] border border-[#2a2745] shadow-[inset_0_1px_2px_rgba(255,255,255,0.07)]">
            <p className="text-[11px] font-semibold tracking-widest text-[#9496a7] uppercase mb-4">
                Audio Input
            </p>
            
            {/* Visualizer bars */}
            <div className="flex items-center gap-[5px] mb-5 h-[32px]">
                <div className="w-[5px] h-3 bg-[#3f3c6e] rounded-full"></div>
                <div className="w-[5px] h-5 bg-[#6366f1] rounded-full opacity-70"></div>
                <div className="w-[5px] h-7 bg-[#6366f1] rounded-full"></div>
                <div className="w-[5px] h-8 bg-[#8b8df2] rounded-full shadow-[0_0_8px_rgba(139,141,242,0.6)]"></div>
                <div className="w-[5px] h-6 bg-[#6366f1] rounded-full"></div>
                <div className="w-[5px] h-4 bg-[#6366f1] rounded-full opacity-70"></div>
                <div className="w-[5px] h-3 bg-[#3f3c6e] rounded-full"></div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#6b6d82]">
                <CheckCircle2 size={13} className="text-[#6b6d82]" />
                <span className="font-medium">Microphone Ready</span>
            </div>
        </div>
    );
}
