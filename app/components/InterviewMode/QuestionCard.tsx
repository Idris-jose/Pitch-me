"use client";

import { RefreshCw, Bookmark, User } from "lucide-react";

type Difficulty = "Easy" | "Medium" | "Hard";

type QuestionCardProps = {
    question: string;
    hint?: string;
    current?: number;
    total?: number;
    difficulty?: Difficulty;
    onRefresh?: () => void;
    onBookmark?: () => void;
};

const difficultyStyles: Record<Difficulty, string> = {
    Easy: "bg-emerald-500/20 text-emerald-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
};

export default function QuestionCard({
    question,
    hint,
    current = 1,
    total = 5,
    difficulty = "Hard",
    onRefresh,
    onBookmark,
}: QuestionCardProps) {
    const progress = Math.round((current / total) * 100);

    return (
        <div className="relative w-full min-h-[238px] h-auto justify-center md:items-center flex flex-col rounded-2xl bg-[#1A1933] border border-[#2a2745] overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.07)]">
            {/* Main content row */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 p-4 md:p-5 w-full relative">
                {/* Icon block */}
                <div className="flex-none flex relative flex-col items-center gap-1.5 self-center md:self-start">
                    <div className="relative shadow-lg shadow-indigo-900/40 rotate-6 flex items-center justify-center w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-xl bg-[#6366f1]">
                        <User size={30} className="text-white md:w-[30px] md:h-[30px] w-[24px] h-[24px]" />
                    </div>
                    {/* Difficulty pill */}
                    <span className={`text-[10px] absolute bottom-1 right-1 font-semibold bg-[#1A1933] px-2 py-0.5 md:py-1 rounded-full border text-[#6366f1] `}>
                        {difficulty}
                    </span>
                </div>

                {/* Text */}
                <div className="flex-1 w-full min-w-0 text-center md:text-left mt-2 md:mt-0">
                    <p className="text-[11px] font-semibold tracking-widest text-indigo-400 uppercase mb-1.5">
                        Question {current} of {total}
                    </p>
                    <h2 className="text-xl md:text-[30px] font-bold text-white leading-snug mb-2 md:mb-4">
                        &ldquo;{question}&rdquo;
                    </h2>
                    {hint && (
                        <p className="text-xs md:text-sm text-[#9496a7] leading-relaxed">{hint}</p>
                    )}
                </div>

                {/* Actions */}
                <div className="flex-none flex items-center gap-2 pt-0.5 absolute right-4 top-4 md:relative md:right-auto md:top-auto">
                    <button
                        onClick={onRefresh}
                        className="p-1.5 rounded-lg text-[#6b6d82] hover:text-white hover:bg-white/5 transition-colors"
                        aria-label="New question"
                    >
                        <RefreshCw size={15} />
                    </button>
                    <button
                        onClick={onBookmark}
                        className="p-1.5 rounded-lg text-[#6b6d82] hover:text-white hover:bg-white/5 transition-colors"
                        aria-label="Bookmark question"
                    >
                        <Bookmark size={15} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                    <div
                        className="h-full bg-[#6366f1] transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

           
        </div>
    );
}
