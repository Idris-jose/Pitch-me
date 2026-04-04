"use client";

import Sidebar from "@/app/components/Layout/Sidebar";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex h-screen overflow-hidden bg-[#0f1117] text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
                <main className="flex-1  overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

