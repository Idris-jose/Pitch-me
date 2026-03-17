"use client";

export default function PrepTimer() {
    return (
        <div className="w-[300px] h-[160px] flex flex-col items-center justify-center rounded-[24px] bg-[#1A1933] border border-[#2a2745] shadow-[inset_0_1px_2px_rgba(255,255,255,0.07)]">
            <p className="text-[11px] font-semibold tracking-widest text-[#9496a7] uppercase mb-2">
                Prep Time Remaining
            </p>
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[42px] font-bold text-white leading-none tracking-tight">00:15</span>
                <span className="text-xl font-bold text-[#6b6d82] leading-none">s</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
                <button className="text-[#6366f1] hover:text-[#7b7df2] transition-colors">+30s</button>
                <span className="text-[#2a2745]">|</span>
                <button className="text-[#6b6d82] hover:text-white transition-colors">Skip Prep</button>
            </div>
        </div>
    );
}
