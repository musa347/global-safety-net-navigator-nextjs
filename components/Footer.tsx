import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#eef4ff] mt-16 border-t border-[#E1E8ED]">
      <div className="min-w-[1024px] max-w-[1440px] mx-auto px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#006a6a] text-[20px]">
            verified_user
          </span>
          <span className="text-sm font-semibold text-[#0a1d2d]">
            Global Safety Net Navigator — Educational Initiative
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/scenarios"
            className="text-xs text-[#5A6C7D] hover:text-[#0a1d2d] transition-colors"
          >
            Coverage Scenarios
          </Link>
          <Link
            href="/result"
            className="text-xs text-[#5A6C7D] hover:text-[#0a1d2d] transition-colors"
          >
            Result Matrices
          </Link>
          <span className="text-xs text-[#5A6C7D]">
            © 2025 Prototype Sandbox. For informational and study purposes only.
          </span>
        </div>
      </div>
    </footer>
  );
};
