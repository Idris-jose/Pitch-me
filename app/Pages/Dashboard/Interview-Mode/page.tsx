"use client";
import { useState } from "react";
import { Monitor, Rocket, Brain } from "lucide-react";
import QuestionCard from "@/app/components/InterviewMode/QuestionCard";

export default function InterviewMode() {

    const [modes] = useState([
        { title: "Tech", icon: <Monitor size={16} className="text-[#6764F2]" /> },
        { title: "StartUp", icon: <Rocket size={16} className="text-[#6764F2]" /> },
        { title: "Behavioral", icon: <Brain size={16} className="text-[#6764F2]" /> },
    ]);

    return (
        <section className="flex flex-col overflow-y-auto gap-6 p-5 bg-[#111022] min-h-screen pb-6">
            <main className="flex flex-col gap-6 w-[896px]">

                {/* Page header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">Interview Mode</h1>
                        <p className="text-sm text-[#9496a7]">Sharpen your pitch with AI-driven questions.</p>
                    </div>
                    <div className="flex gap-2">
                        {modes.map((mode, index) => (
                            <div key={index} className="flex items-center gap-2 bg-[#1A1933] px-2 py-1 rounded-full border border-[#242348]">
                                <p>{mode.icon}</p>
                                <p className="text-xs">{mode.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question card */}
                <QuestionCard
                    question="Tell me about a time you failed."
                    hint="Structure your answer using the STAR method: Situation, Task, Action, Result. Focus on what you learned."
                    current={3}
                    total={5}
                    difficulty="Hard"
                />
            </main>
        </section>
    );
}
