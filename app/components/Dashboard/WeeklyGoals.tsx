type Goal = {
    label: string;
    /** e.g. "3/5" for numeric, or null to show statusText instead */
    progress?: number;
    total?: number;
    statusText?: string;
    /** Tailwind gradient for the bar */
    barColor?: string;
};

type WeeklyGoalsProps = {
    resetDay?: string;
    goals?: Goal[];
};

const DEFAULT_GOALS: Goal[] = [
    {
        label: "Complete 5 Practice Sessions",
        progress: 3,
        total: 5,
        barColor: "from-indigo-500 to-blue-400",
    },
    {
        label: "Maintain >80 Clarity",
        statusText: "On Track",
        progress: 100,
        total: 100,
        barColor: "from-emerald-500 to-teal-400",
    },
];

export default function WeeklyGoals({
    resetDay = "Sunday",
    goals = DEFAULT_GOALS,
}: WeeklyGoalsProps) {
    return (
        <div className="relative flex flex-col gap-4 rounded-3xl bg-[#1E293B] border border-[#2a2f45] p-5 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),_inset_0_-2px_6px_rgba(0,0,0,0.3)]">
            {/* Blue orb */}
            <div className="pointer-events-none absolute -top-6 -right-6 w-28 h-28 rounded-full bg-blue-500/25 blur-2xl" />

            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
                <h3 className="text-base font-semibold text-white">Weekly Goals</h3>
                <span className="text-xs text-[#6b6d82]">Resets {resetDay}</span>
            </div>

            {/* Goal rows */}
            <div className="flex flex-col gap-4 relative z-10">
                {goals.map((g, i) => {
                    const pct =
                        g.progress !== undefined && g.total
                            ? Math.min(100, Math.round((g.progress / g.total) * 100))
                            : 0;
                    const badge =
                        g.statusText ??
                        (g.progress !== undefined && g.total
                            ? `${g.progress}/${g.total}`
                            : null);

                    return (
                        <div key={i} className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#9496a7]">{g.label}</span>
                                {badge && (
                                    <span className="text-xs font-semibold text-white">{badge}</span>
                                )}
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-[#2a2f45] overflow-hidden">
                                <div
                                    className={`h-full rounded-full bg-gradient-to-r ${g.barColor ?? "from-indigo-500 to-cyan-400"} transition-all duration-700`}
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
