"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function VoiceAnimation() {
    

    return (
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center"
            style={{
                background:
                    "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15), transparent 60%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1), transparent 50%), #0b0e1a",
            }}
        >
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Orbiting circles like the reference image */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.06]"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="absolute w-2.5 h-2.5 rounded-full bg-indigo-400/80 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                    style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
                />
            </motion.div>

            <motion.div
                className="absolute w-[520px] h-[520px] rounded-full border border-white/[0.04]"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="absolute w-2 h-2 rounded-full bg-purple-400/60 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                    style={{ top: "50%", right: "0%", transform: "translate(50%, -50%)" }}
                />
            </motion.div>

            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full border border-white/[0.05]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/70 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                    style={{ bottom: "0%", left: "50%", transform: "translate(-50%, 50%)" }}
                />
            </motion.div>

            {/* Center microphone icon with pulse rings */}
            <div className="relative z-10 flex items-center justify-center">
                {/* Pulse rings */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute rounded-full border border-indigo-500/20"
                        style={{
                            width: 80 + ring * 50,
                            height: 80 + ring * 50,
                        }}
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.3, 0.08, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: ring * 0.6,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Mic circle */}
                <motion.div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(8, 94, 255, 0.3), rgba(8, 94, 255, 0.3))",
                        boxShadow: "0 0 40px rgba(8, 94, 255, 0.2), inset 0 0 20px rgba(8, 94, 255, 0.1)",
                        border: "1px solid rgba(8, 94, 255, 0.2)",
                    }}
                    animate={{
                        boxShadow: [
                            "0 0 40px rgba(99,102,241,0.2), inset 0 0 20px rgba(99,102,241,0.1)",
                            "0 0 60px rgba(99,102,241,0.35), inset 0 0 30px rgba(99,102,241,0.15)",
                            "0 0 40px rgba(99,102,241,0.2), inset 0 0 20px rgba(99,102,241,0.1)",
                        ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Mic className="text-indigo-300" size={32} />
                </motion.div>
            </div>


            {/* Branding text */}
            <div className="absolute top-10 left-10 z-10">
                <h2 className="text-2xl font-bold text-white/90 tracking-tight">Pitch Me</h2>
                <p className="text-sm text-white/40 mt-1">Master your voice. Own the room.</p>
            </div>

        </div>
    );
}
