"use client";

import { Mic } from "lucide-react";

export default function RecordControl() {
    return (
        <div className="flex-1 flex justify-center items-center">
            {/* Outer rings for visual effect */}
            <div className="relative flex items-center justify-center w-[120px] h-[120px] rounded-full bg-[#1A1933]/50 border border-[#2a2745]/50 overflow-hidden">
                <div className="absolute w-[100px] h-[100px] rounded-full bg-[#1A1933] border border-[#2a2745] shadow-lg flex items-center justify-center">
                    <button className="relative w-[76px] h-[76px] rounded-full bg-gradient-to-b from-[#2a284e] to-[#1e1c3a] shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_2px_15px_rgba(99,102,241,0.15)] flex items-center justify-center hover:scale-105 hover:from-[#32305a] hover:to-[#232145] transition-all cursor-pointer group">
                        <Mic size={24} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
