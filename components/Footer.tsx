import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#eef4ff] mt-16 border-t border-[#E1E8ED]">
      <div className="min-w-[1024px] max-w-[1440px] mx-auto px-8 md:px-12 py-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#006a6a] text-[20px]">
            school
          </span>
          <span className="text-sm font-semibold text-[#0a1d2d]">
            Global Safety Net Navigator
          </span>
        </div>
        <div className="text-xs text-center text-[#5A6C7D]">
          Independent educational prototype<br />
          Not affiliated with or operated by SafetyWing
        </div>
        <div className="flex items-center gap-6 text-xs text-[#5A6C7D]">
          <a href="https://safetywing.com/nomad-citizen" target="_blank" rel="noopener noreferrer" className="hover:text-[#006a6a] transition-colors">
            Sources
          </a>
          <a href="https://safetywing.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-[#006a6a] transition-colors">
            Support
          </a>
        </div>
        <div className="text-xs text-[#5A6C7D]">
          © 2026
        </div>
      </div>
    </footer>
  );
};
