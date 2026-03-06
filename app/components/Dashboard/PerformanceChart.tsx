"use client";

import { useEffect, useRef, useState } from "react";

type DataPoint = {
    day: string;
    value: number; // 0–100
};

type PerformanceChartProps = {
    title?: string;
    subtitle?: string;
    range?: string;
    data?: DataPoint[];
};

const DEFAULT_DATA: DataPoint[] = [
    { day: "Mon", value: 28 },
    { day: "Tue", value: 42 },
    { day: "Wed", value: 38 },
    { day: "Thu", value: 55 },
    { day: "Fri", value: 47 },
    { day: "Sat", value: 60 },
    { day: "Sun", value: 52 },
    { day: "Today", value: 85 },
];

export default function PerformanceChart({
    title = "Performance Over Time",
    subtitle = "Tracking your clarity and pace scores",
    range = "Last 30 Days",
    data = DEFAULT_DATA,
}: PerformanceChartProps) {
    const [mounted, setMounted] = useState(false);
    const isToday = (d: DataPoint) => d.day === "Today";

    useEffect(() => {
        // Tiny delay so the bars animate in on mount
        const t = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="relative flex flex-col gap-4 rounded-3xl bg-[#1E293B] border border-[#2a2f45] p-5 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),_inset_0_-2px_6px_rgba(0,0,0,0.3)]">
            {/* Blurred blue orb — top right */}
            <div className="pointer-events-none absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500/30 blur-2xl" />

            {/* Header */}
            <div className="flex items-start justify-between relative z-10">
                <div>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                    <p className="text-xs text-[#9496a7] mt-0.5">{subtitle}</p>
                </div>
                <span className="text-xs text-[#9496a7] whitespace-nowrap pt-0.5">{range}</span>
            </div>

            {/* Chart area */}
            <div className="relative border-1 border-[#2a2f3f] rounded-lg p-4 flex items-end gap-1 h-52 pt-6 z-10">
                {data.map((d, i) => {
                    const today = isToday(d);
                    return (
                        <div
                            key={d.day}
                            className="flex flex-col items-center gap-2 flex-1 h-full justify-end"
                        >
                            {/* Bar wrapper — needed for label alignment */}
                            <div className="relative flex flex-col items-center justify-end w-full h-full">
                                {/* Percentage label on top (today only) */}
                                {today && (
                                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-white bg-indigo-500 px-2 py-0.5 rounded-full whitespace-nowrap z-10 shadow-lg">
                                        {d.value}%
                                    </span>
                                )}

                                {/* Bar */}
                                <div
                                    className={`w-full rounded-lg transition-all duration-700 ease-out ${today
                                            ? "bg-indigo-500 shadow-lg shadow-indigo-800"
                                            : "bg-[#2d3651] shadow-lg shadow-[#2d3651]"
                                        }`}
                                    style={{
                                        height: mounted ? `${d.value}%` : "0%",
                                        transitionDelay: `${i * 60}ms`,
                                    }}
                                />
                            </div>

                            {/* Day label */}
                            <span
                                className={`text-[11px] font-medium ${today ? "text-indigo-400" : "text-[#6b6d82]"
                                    }`}
                            >
                                {d.day}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
