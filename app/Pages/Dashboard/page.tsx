import Header from "@/app/components/Common/Header";
import MetricCard from "@/app/components/Dashboard/MetricCard";
import PerformanceChart from "@/app/components/Dashboard/PerformanceChart";
import RecentSessions from "@/app/components/Dashboard/RecentSessions";
import { Sparkles, Lightbulb, AudioLines, TrendingUp } from "lucide-react";

export default function Dashboard() {
    return (
        <section className="flex flex-col overflow-y-auto gap-6 bg-[#111022] min-h-screen pb-6">
            <Header />

            {/* Metric cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-5">
                <MetricCard
                    icon={<Sparkles size={18} />}
                    label="Clarity Score"
                    value="85"
                    unit="/100"
                    change={5}
                    progress={85}
                    progressColor="from-indigo-500 to-cyan-400"
                />
                <MetricCard
                    icon={<Lightbulb size={18} />}
                    label="Confidence Score"
                    value="92"
                    unit="/100"
                    change={2}
                    progress={92}
                    progressColor="from-blue-500 to-indigo-400"
                />
                <MetricCard
                    icon={<AudioLines size={18} />}
                    label="Filler Words"
                    value="Low"
                    unit="Count"
                    description={`Great job reducing "um's" and "ah's"`}
                    change={-15}
                />
                <MetricCard
                    icon={<TrendingUp size={18} />}
                    label="Avg Improvement"
                    value="+12%"
                    unit="Total"
                    change={3}
                    progress={60}
                    progressColor="from-emerald-500 to-teal-400"
                />
            </div>

            {/* Chart + Recent Sessions */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4 px-5">
                <PerformanceChart />
                <RecentSessions />
            </div>
        </section>
    );
}
