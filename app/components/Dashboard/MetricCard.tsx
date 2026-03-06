import React from "react";

export type MetricCardProps = {
    /** Icon element rendered in the top-left corner */
    icon: React.ReactNode;
    /** Label shown above the main value, e.g. "Clarity Score" */
    label: string;
    /** Primary display value, e.g. "85" or "Low" */
    value: React.ReactNode;
    /** Optional unit / suffix rendered smaller next to the value, e.g. "/100" or "Count" */
    unit?: string;
    /** Optional sub-description below the value */
    description?: string;
    /**
     * Percentage change shown in the badge (include sign, e.g. +5 or -15).
     * Positive → green badge, negative → red badge.
     */
    change?: number;
    /**
     * 0–100 progress value for the bar at the bottom.
     * Omit to hide the bar.
     */
    progress?: number;
    /** Tailwind gradient classes for the progress bar, defaults to indigo→cyan */
    progressColor?: string;
};

export default function MetricCard({
    icon,
    label,
    value,
    unit,
    description,
    change,
    progress,
    progressColor = "from-indigo-500 to-cyan-400",
}: MetricCardProps) {
    const isPositive = change !== undefined && change >= 0;
    const isNegative = change !== undefined && change < 0;

    return (
        <div className="relative flex flex-col gap-3 rounded-3xl bg-[#1E293B] border  border-[#2a2f45] p-5 min-w-[180px] overflow-hidden group shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),_inset_0_-2px_6px_rgba(0,0,0,0.3)] transition-transform duration-200">
            {/* Subtle radial glow in the card */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-20 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.35),transparent_70%)]" />

            {/* Blurred blue orb — top right */}
            <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500/40 blur-2xl" />



            {/* Top row: icon + badge */}
            <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl  text-indigo-400">
                    {icon}
                </div>

                {change !== undefined && (
                    <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${isPositive
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-red-500/20 text-red-400"
                            }`}
                    >
                        {isPositive ? `+${change}%` : `${change}%`}
                    </span>
                )}
            </div>

            {/* Label */}
            <p className="text-sm text-[#9496a7] font-medium leading-none">{label}</p>

            {/* Value + unit */}
            <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-white leading-none tracking-tight">
                    {value}
                </span>
                {unit && (
                    <span className="text-base text-[#9496a7] font-medium">{unit}</span>
                )}
            </div>

            {/* Optional description */}
            {description && (
                <p className="text-xs text-[#6b6d82] leading-snug">{description}</p>
            )}

            {/* Progress bar */}
            {progress !== undefined && (
                <div className="mt-auto h-1.5 w-full rounded-full bg-[#2a2f45] overflow-hidden">
                    <div
                        className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700`}
                        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                    />
                </div>
            )}
        </div>
    );
}
