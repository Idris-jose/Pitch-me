"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    History,
    Mic,
    Dumbbell,
    Settings,
    Radio,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";

const navItems = [
    { title: "Dashboard", icon: LayoutDashboard, route: "/Pages/Dashboard" },
    { title: "Practice Mode", icon: Dumbbell, route: "/Pages/Dashboard/Practice-Mode" },
    { title: "Interview Mode", icon: Mic, route: "/Pages/Dashboard/Interview-Mode" },
    { title: "History", icon: History, route: "/Pages/Dashboard/History" },
    { title: "Settings", icon: Settings, route: "/Pages/Dashboard/Settings" },
];

const Sidebar = () => {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`
        flex flex-col shrink-0 border-r border-[#334155] bg-[#0f1117] text-white
        transition-all duration-300 ease-in-out overflow-hidden
        ${collapsed ? "w-[64px]" : "w-[220px]"}
      `}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 py-5 min-h-[64px]">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 shrink-0">
                    <Radio size={18} className="text-white" />
                </div>

                {/* Fade out label when collapsed */}
                <div
                    className={`flex flex-col leading-tight transition-all duration-200 overflow-hidden
            ${collapsed ? "w-0 opacity-0" : "w-full opacity-100"}
          `}
                >
                    <span className="text-sm font-semibold text-white whitespace-nowrap">PitchMe</span>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">AI Coach</span>
                </div>

                {/* Toggle button — only visible when expanded */}
                {!collapsed && (
                    <button
                        onClick={() => setCollapsed(true)}
                        className="ml-auto text-gray-500 hover:text-white transition-colors shrink-0"
                        aria-label="Collapse sidebar"
                    >
                        <PanelLeftClose size={16} />
                    </button>
                )}
            </div>

            {/* Collapsed — open toggle */}
            {collapsed && (
                <button
                    onClick={() => setCollapsed(false)}
                    className="flex items-center justify-center py-2 text-gray-500 hover:text-white transition-colors"
                    aria-label="Expand sidebar"
                >
                    <PanelLeftOpen size={16} />
                </button>
            )}

            {/* Navigation */}
            <nav className="flex flex-col gap-1 px-2 mt-2 flex-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.route;

                    return (
                        <Link
                            key={item.title}
                            href={item.route}
                            title={collapsed ? item.title : undefined}
                            className={`flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                ${isActive
                                    ? "bg-[#1e2235] text-indigo-400"
                                    : "text-gray-400 hover:bg-[#1a1f2e] hover:text-gray-200"
                                }
              `}
                        >
                            <Icon size={18} className="shrink-0" />
                            <span
                                className={`whitespace-nowrap overflow-hidden transition-all duration-200
                  ${collapsed ? "w-0 opacity-0" : "opacity-100"}
                `}
                            >
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div
                className={`flex items-center gap-3 mx-2 mb-4 rounded-xl bg-[#1a1f2e] cursor-pointer hover:bg-[#1e2235] transition-colors
          ${collapsed ? "px-2 py-2 justify-center" : "px-3 py-3"}
        `}
            >
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    AM
                </div>
                <div
                    className={`flex flex-col leading-tight flex-1 min-w-0 overflow-hidden transition-all duration-200
            ${collapsed ? "w-0 opacity-0" : "opacity-100"}
          `}
                >
                    <span className="text-xs font-semibold text-white truncate">Alex Morgan</span>
                    <span className="text-[11px] text-gray-400 truncate">Pro Plan</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;