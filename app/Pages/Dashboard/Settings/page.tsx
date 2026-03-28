export default function Settings() {
    return (
        <section className="flex flex-col overflow-y-auto gap-6 p-5 bg-[#111022] min-h-screen pb-6">
            <main className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-b border-[#2a2f3f] pb-4">
                    <h1 className="text-3xl font-semibold">Account Settings</h1>
                    <p className="text-[#9496a7]">Manage your profile, preferences, and training data.</p>
                </div>
                <div className="flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-[#1A1933] border border-[#2a2745] shadow-[inset_0_1px_2px_rgba(255,255,255,0.07)] relative overflow-hidden">
                    {/* Background glow decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg flex-shrink-0 border-2 border-[#1A1933] ring-2 ring-indigo-500/30">
                        AJ
                    </div>
                    
                    <div className="flex flex-col z-10">
                        <h1 className="text-2xl font-bold text-white tracking-tight">Alex Johnson</h1>
                        <p className="text-[#9496a7] mt-1 pr-4">alex.johnson@email.com</p>
                    </div>
                    
                    <div className="ml-auto hidden sm:block z-10">
                        <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-[#2a2745] rounded-xl font-medium transition-all duration-200">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </main>
        </section>
    );
}