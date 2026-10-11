'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D3E50]">
      <div className="h-[72px] min-w-[1024px] max-w-[1440px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:text-[#5DCCCC] transition-colors"
          >
            <span className="material-symbols-outlined text-[#5DCCCC] text-[26px]">
              explore
            </span>
            <span className="font-bold text-[20px] text-white tracking-tight">
              Global Safety Net Navigator
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 ml-4">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                pathname === '/'
                  ? 'text-white font-bold underline underline-offset-8 decoration-[#5DCCCC]'
                  : 'text-[#d2e4fb] hover:text-white font-medium'
              }`}
            >
              Overview
            </Link>
            <Link
              href="/scenarios"
              className={`text-sm transition-colors ${
                pathname === '/scenarios'
                  ? 'text-white font-bold underline underline-offset-8 decoration-[#5DCCCC]'
                  : 'text-[#d2e4fb] hover:text-white font-medium'
              }`}
            >
              Scenario Explorer
            </Link>
            <Link
              href="/result"
              className={`text-sm transition-colors ${
                pathname === '/result'
                  ? 'text-white font-bold underline underline-offset-8 decoration-[#5DCCCC]'
                  : 'text-[#d2e4fb] hover:text-white font-medium'
              }`}
            >
              Diagnostics
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center text-sm font-semibold text-white px-4 py-1.5 border-2 border-white/30 rounded-lg hover:border-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Log in →
          </button>
          <div className="w-8 h-8 rounded-full bg-[#006a6a] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>

      {/* Yellow Notice Banner */}
      <div className="w-full bg-[#FFF9E6] border-l-4 border-[#F5D576] px-8 md:px-12 py-[13px] flex items-center gap-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <span className="material-symbols-outlined text-[#735c02] text-[20px] shrink-0">
          warning
        </span>
        <p className="text-[15px] leading-tight text-[#5A6C7D] m-0">
          <span className="font-semibold text-[#0a1d2d]">Notice:</span> Independent educational prototype. Not affiliated with SafetyWing.
        </p>
      </div>
    </header>
  );
};
