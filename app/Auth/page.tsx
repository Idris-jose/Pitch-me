"use client"
import CustomButton from "@/app/components/Common/Button";
import { Mail, Lock } from "lucide-react";
import VoiceAnimation from "@/app/components/Auth/VoiceAnimation";
import { useState } from "react";

export default function Auth(){
    const [isUser,setIsUser]= useState(false)
          return (
                <section className="min-h-screen flex bg-[#0f121e] text-white font-sans">
                    {/* Left side - Animation */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <VoiceAnimation />
                    </div>
        
                    {/* Right side - Form */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-5" style={{ background: 'radial-gradient(circle at bottom left, rgba(74, 53, 115, 0.4), transparent 50%), radial-gradient(circle at top right, rgba(23, 27, 48, 1), transparent 50%), #0f121e' }}>
                        <div className="max-w-[440px] w-full">
                            <h1 className="text-[28px] font-bold mb-2 tracking-[-0.5px]">{isUser ? "Login to" :"Create"} your account</h1>
                            <p className="text-[14px] text-[#9496a7] mb-8">{isUser ? "Continue" : "Start"} your journey to better communication today.</p>
        
                            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block text-[13px] font-semibold text-[#e2e8f0] mb-2">Email Address</label>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-[14px] text-[#6c718a] flex items-center pointer-events-none">
                                                <Mail size={18} />
                                            </span>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="jane@example.com"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pr-[14px] pl-10 text-white text-sm outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 placeholder:text-[#6c718a]"
                                            />
                                        </div>
                                    </div>
        
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block text-[13px] font-semibold text-[#e2e8f0] mb-2">Password</label>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-[14px] text-[#6c718a] flex items-center pointer-events-none">
                                                <Lock size={18} />
                                            </span>
                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pr-[14px] pl-10 text-white text-sm outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 placeholder:text-[#6c718a]"
                                            />
                                        </div>
                                    </div>
        
                                    <CustomButton type="submit" className="w-full bg-[#6366f1] border-none rounded-lg p-3.5 text-white text-[15px] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 active:scale-95 shadow-[0_4px_14px_rgba(99,102,241,0.4)]">
                                        {isUser ? "Login" : "Create account"}
                                    </CustomButton>
                                </form>
                                <div className="flex items-center text-center my-6 before:content-[''] before:flex-1 before:border-b before:border-white/10 after:content-[''] after:flex-1 after:border-b after:border-white/10">
                                    <span className="px-4 text-[#6c718a] text-[11px] font-semibold tracking-[0.5px] uppercase">OR CONTINUE WITH</span>
                                </div>
        
                                <CustomButton type="button" className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/10 rounded-lg p-2.5 text-[#e2e8f0] text-sm font-medium cursor-pointer transition-colors hover:bg-white/5 hover:border-white/20">
                                    <svg className="w-[18px] h-[18px] object-contain" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </CustomButton>
                            </div>
        
                            <div className="text-center mt-6 text-[13px] text-[#6c718a]">
                               {isUser ? "Don't have an account?" : "Have an account?"}  <a href="#" className="text-[#6366f1] no-underline transition-colors hover:text-[#818cf8]">{isUser ? "Sign Up" : "Login"}</a>
                            </div>
                        </div>
                    </div>
                </section>
            );
}