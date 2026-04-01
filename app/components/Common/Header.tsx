import CustomButton from "./Button";
import { Flame,CirclePlay } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row md:items-center justify-between p-5 border-b border-[#2a2f3f] gap-4 md:gap-0">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold">Welcome back, Alex!</h1>
                <p className="text-sm text-[#9496a7] mt-1">Here's what's happening with your pitch practice today.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full md:w-auto">
                <p className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center sm:justify-start gap-1 bg-[#1E293B] border border-[#2a2f3f] text-white text-sm sm:text-base"><Flame className="text-[#FB923C]" size={18} />12 day streak</p>
                <CustomButton className="bg-[#6366f1] w-full sm:w-auto justify-center"><CirclePlay size={18} />Start Practice</CustomButton>
            </div>
        </header>
    );
}