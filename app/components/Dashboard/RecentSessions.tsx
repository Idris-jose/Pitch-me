"use client";

import { LucideIcon, Mic, MonitorPlay, AudioLines, Presentation } from "lucide-react";

type Session = {
    id: string;
    title: string;
    subtitle?: string;
    timestamp: string;
    score: number;
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
};

type RecentSessionsProps = {
    sessions?: Session[];
    onViewAll?: () => void;
};

const DEFAULT_SESSIONS: Session[] = [
    {
        id: "1",
        title: "Elevator Pitch v3",
        timestamp: "Today, 10:23 AM",
        score: 92,
        icon: Mic,
        iconBg: "bg-indigo-500/20",
        iconColor: "text-indigo-400",
    },
    {
        id: "2",
        title: "Mock Interview: PM",
        timestamp: "Yesterday, 4:15 PM",
        score: 88,
        icon: MonitorPlay,
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
    },
    {
        id: "3",
        title: "Tone Practice",
        timestamp: "Oct 24, 2:50 PM",
        score: 76,
        icon: AudioLines,
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400",
    },
    {
        id: "4",
        title: "Elevator Pitch",
        timestamp: "Oct 22, 9:10 AM",
        score: 72,
        icon: Presentation,
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
    },
];

function scoreColor(score: number) {
    if (score >= 85) return "text-emerald-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
}

export default function RecentSessions({
    sessions = DEFAULT_SESSIONS,
    onViewAll,
}: RecentSessionsProps) {
    return (
        <div className="relative flex flex-col rounded-3xl bg-[#1E293B] border border-[#2a2f45] overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),_inset_0_-2px_6px_rgba(0,0,0,0.3)]">
            {/* Blue orb */}
            <div className="pointer-events-none absolute -top-6 -right-6 w-28 h-28 rounded-full bg-blue-500/25 blur-2xl" />

            {/* Header */}
            <div className="px-5 pt-5 pb-3 relative z-10">
                <h3 className="text-base font-semibold text-white">Recent Sessions</h3>
            </div>

            {/* Session list */}
            <ul className="flex flex-col divide-y divide-[#2a2f45] relative z-10">
                {sessions.map((s) => {
                    const Icon = s.icon;
                    return (
                        <li
                            key={s.id}
                            className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.03] transition-colors cursor-pointer"
                        >
                            {/* Icon */}
                            <div className={`flex-none flex items-center justify-center w-10 h-10 rounded-xl ${s.iconBg}`}>
                                <Icon size={18} className={s.iconColor} />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-white truncate">{s.title}</p>
                                <p className="text-xs text-[#6b6d82] mt-0.5">{s.timestamp}</p>
                            </div>

                            {/* Score */}
                            <div className="flex-none text-right">
                                <p className={`text-sm font-bold ${scoreColor(s.score)}`}>{s.score}%</p>
                                <p className="text-[11px] text-[#6b6d82] mt-0.5">Score</p>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* Footer CTA */}
            <button
                onClick={onViewAll}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 text-sm font-medium text-[#9496a7] hover:text-white border-t border-[#2a2f45] transition-colors relative z-10"
            >
                View Full History
                <span aria-hidden>→</span>
            </button>
        </div>
    );
}
