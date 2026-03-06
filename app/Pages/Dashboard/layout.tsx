"use client";

import Sidebar from "@/app/components/Layout/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex min-h-screen h-screen overflow-hidden bg-[#0f1117] text-white">

            <Sidebar
            />

            {/* Content area — offset by sidebar width on desktop */}
            <div className="flex flex-col flex-1 min-w-0 relative overflow-hidden">


                {/* Page content */}
                <main className="flex-1 p-4 pb-20 lg:pb-4 overflow-y-auto">
                    {children}
                </main>
            </div>


        </div>
    );
}