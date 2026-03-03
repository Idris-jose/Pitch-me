import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function CustomButton({ children, className = "", ...props }: GlassButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium text-white
        bg-accent dark:bg-accent-dark hover:bg-accent-hover
        transition-all duration-200 ease-out cursor-pointer
        hover:scale-[1.03] active:scale-[0.97]
        focus:outline-none focus:ring-2 focus:ring-base/50
        disabled:opacity-50 disabled:cursor-not-allowed
        
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),_inset_0_-2px_6px_rgba(0,0,0,0.25)]
        
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-500
        
        ${className}
      `}
    >
      {children}
    </button>
  );
}
