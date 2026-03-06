import CustomButton from "./Button";
import { Flame,CirclePlay } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-5 border-b border-[#2a2f3f]">
            <div>
                <h1 className="text-3xl font-semibold">Welcome back, Alex!</h1>
                <p className="text-sm text-[#9496a7]">Here's what's happening with your pitch practice today.</p>
            </div>

            <div className="flex items-center gap-5">
                <p className="px-8 py-3 rounded-full flex items-center gap-1 bg-[#1E293B] border border-[#2a2f3f] text-white"><Flame className="text-[#FB923C]" size={18} />12 day streak</p>
                <CustomButton className="bg-[#6366f1]"><CirclePlay size={18} />Start Practice</CustomButton>
            </div>
        </header>
    );
}