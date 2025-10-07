"use client";

import { ArrowDown } from "lucide-react";

export const MainDialog = ({ isOpen, className = "", children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`
        shadow-xl 
        h-screen 
        md:h-[80vh] 
        max-w-[500px] 
        mx-4 
        my-4 
        md:mx-auto 
        md:max-w-[1000px]
        animate-slide-from-bottom-fast
        custom-bg-dark sm:p-8 rounded-xl space-y-8 w-full flex flex-col
        ${className}
    `}
      >
        {children}
        <div className="absolute bottom-8 right-4">
          <ArrowDown className="text-foreground group-hover:text-accent w-[40px] h-[30px] animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
};
