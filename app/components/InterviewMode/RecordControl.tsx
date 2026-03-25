"use client";
import { useState } from "react";
import { Mic } from "lucide-react";

export default function RecordControl() {
    const [isRecording, setIsRecording] = useState(false);
    return (
        <div className="flex-1 flex justify-center items-center">
            {/* Outer rings for visual effect */}
            <div className="relative flex items-center justify-center w-[120px] h-[120px] rounded-full bg-[#1A1933]/50 border border-[#2a2745]/50 overflow-hidden">
                <div className="absolute w-[100px] h-[100px] rounded-full bg-[#1A1933] border border-[#2a2745] shadow-lg flex items-center justify-center">
                    <button
            onClick={() => setIsRecording(!isRecording)}
            className={`relative w-[76px] h-[76px] rounded-full shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_2px_15px_rgba(99,102,241,0.15)] flex items-center justify-center transition-all cursor-pointer group ${
                isRecording
                ? "bg-gradient-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
                : "bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
            } hover:scale-105`}
            >
                        <Mic size={24} className={`text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform ${isRecording ? "text-red-500" : ""}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
