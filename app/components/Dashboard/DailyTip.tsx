import { Lightbulb } from "lucide-react";

type DailyTipProps = {
    title?: string;
    body?: string;
};

export default function DailyTip({
    title = "Pause for Effect",
    body = "Silence is a powerful tool. Use strategic pauses after key points to let your audience absorb the information. It also gives you a moment to breathe and reset your pace.",
}: DailyTipProps) {
    return (
        <div className="relative flex flex-col gap-3 rounded-3xl bg-indigo-950/60 border border-indigo-500/30 p-5 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),_inset_0_-2px_6px_rgba(0,0,0,0.3)]">
            {/* Decorative blurred circle — top right */}
            <div className="pointer-events-none absolute -top-4 -right-4 w-28 h-28 rounded-full bg-indigo-500/30 blur-2xl" />
            {/* Faint large circle outline echoing the screenshot */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-indigo-500/20" />

            {/* Badge */}
            <span className="relative z-10 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 px-2.5 py-1 rounded-full">
                <Lightbulb size={12} />
                Daily Tip
            </span>

            {/* Content */}
            <h3 className="relative z-10 text-lg font-bold text-white leading-snug">{title}</h3>
            <p className="relative z-10 text-sm text-[#9496a7] leading-relaxed">{body}</p>
        </div>
    );
}
