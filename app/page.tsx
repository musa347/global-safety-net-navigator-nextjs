import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Sub-strip Header: Edition and Status */}
      <div className="w-full max-w-[1140px] mx-auto mb-6 bg-white border border-[#E1E8ED] rounded-xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2 text-xs">
          <span className="material-symbols-outlined text-[#006a6a] text-[18px]">
            public
          </span>
          <span className="font-bold tracking-wide text-[#2D3E50]">
            CROSS-BORDER NAVIGATOR EDITION 2025
          </span>
          <span className="text-[#5A6C7D] hidden sm:inline">•</span>
          <span className="text-[#5A6C7D] hidden sm:inline">
            Direct public safety net policy synthesis
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#006a6a]">
          <span className="w-2 h-2 rounded-full bg-[#006a6a]"></span>
          <span>Live Prototype Sandbox</span>
        </div>
      </div>

      {/* Hero Section Container */}
      <div className="w-full max-w-[1140px] mx-auto bg-[#5DCCCC] rounded-[24px] pt-14 pb-20 px-6 md:px-12 text-center relative overflow-hidden shadow-xs">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#004f50] mb-6 shadow-xs">
          <span className="material-symbols-outlined text-[#004f50] text-[16px]">
            verified
          </span>
          <span>Independent Global Policy Explorer</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#193339] leading-[1.15] tracking-tight max-w-[800px] mx-auto mb-4">
          Understand your options when your income changes.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[17px] md:text-[19px] text-[#1c4b57] max-w-[620px] mx-auto font-medium leading-relaxed mb-8">
          Explore publicly available income-protection information and find the official sources to review.
        </p>

        {/* Primary Yellow CTA Button */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/scenarios"
            className="inline-flex items-center justify-center gap-2 bg-[#F5D576] hover:bg-[#F0CA5E] text-[#2D3E50] font-bold text-lg py-4 px-10 rounded-xl shadow-[0_4px_14px_rgba(45,62,80,0.12)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Explore my situation</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* White Notice Card */}
        <div className="bg-white rounded-xl py-3 px-6 max-w-[600px] mx-auto shadow-xs flex items-center justify-center gap-2 text-xs md:text-sm text-[#5A6C7D]">
          <span className="material-symbols-outlined text-[#D97706] text-[18px] shrink-0">
            warning
          </span>
          <p className="m-0 text-center leading-normal">
            <span className="font-bold text-[#2D3E50]">Notice:</span> This independent educational prototype does not determine eligibility or guarantee benefits.
          </p>
        </div>

        {/* Subtle decorative bottom wave curve */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-10 text-[#f7f9ff] fill-current"
          >
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Policy Overview Card */}
      <div className="w-full max-w-[940px] mx-auto bg-white border-2 border-[#E1E8ED] rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row -mt-8 relative z-10">
        <div className="w-full md:w-[45%] relative h-[220px] md:h-auto bg-[#2D3E50]">
          {/* Note: You'll need to add the image to public folder */}
          <div className="w-full h-full bg-gradient-to-br from-[#2D3E50] to-[#1a2838] flex items-center justify-center">
            <span className="text-white/30 text-sm">Image placeholder</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
            <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-md">
              Borderless Protection Intelligence
            </span>
          </div>
        </div>

        <div className="w-full md:w-[55%] p-7 md:p-9 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#006a6a] mb-2">
            <span className="material-symbols-outlined text-[18px]">
              verified_user
            </span>
            <span>INDEPENDENT PUBLIC RESEARCH</span>
          </div>
          <h2 className="text-2xl font-bold text-[#2D3E50] mb-3 tracking-tight">
            Clear pathways, zero legalese.
          </h2>
          <p className="text-[15px] text-[#5A6C7D] leading-relaxed m-0">
            We synthesize publicly documented terms across income protection, temporary displacement allowances, and international emergency criteria into simple, step-by-step clarity.
          </p>
        </div>
      </div>

      {/* How it works Section */}
      <div className="w-full max-w-[1140px] mx-auto bg-white rounded-2xl border border-[#E1E8ED] p-8 md:p-14 mt-12 shadow-xs">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F4F4] text-[#006a6a] text-xs font-bold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            Simple 3-Phase Process
          </div>
          <h2 className="text-[36px] font-extrabold text-[#2D3E50] tracking-tight mb-2">
            How it works
          </h2>
          <p className="text-[16px] text-[#5A6C7D] max-w-[620px] mx-auto leading-relaxed">
            From ambiguity to documentation in less than three minutes without creating an account or entering personal data.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 01 */}
          <div className="flex flex-col justify-between p-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-extrabold text-[#5DCCCC] tracking-tight">
                  01
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#E8F4F4] text-[#006a6a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    tune
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50] mb-2">
                Choose your situation
              </h3>
              <p className="text-[15px] text-[#5A6C7D] leading-relaxed mb-6">
                Select your current income disruption to see tailored public policy guidelines.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E1E8ED] flex items-center gap-1.5 text-xs text-[#5A6C7D]">
              <span className="material-symbols-outlined text-[16px]">
                schedule
              </span>
              <span>Est. 30 seconds</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col justify-between p-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-extrabold text-[#5DCCCC] tracking-tight">
                  02
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#E8F4F4] text-[#006a6a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    fact_check
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50] mb-2">
                Review published policy info
              </h3>
              <p className="text-[15px] text-[#5A6C7D] leading-relaxed mb-6">
                Inspect transparent benefit structures, terms, and requirements documented in public certificates.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E1E8ED] flex items-center gap-1.5 text-xs text-[#5A6C7D]">
              <span className="material-symbols-outlined text-[16px]">
                menu_book
              </span>
              <span>Transparent breakdown</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col justify-between p-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-extrabold text-[#5DCCCC] tracking-tight">
                  03
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#E8F4F4] text-[#006a6a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    open_in_new
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50] mb-2">
                Find official sources
              </h3>
              <p className="text-[15px] text-[#5A6C7D] leading-relaxed mb-6">
                Access direct links to authoritative policy certificates and official support channels.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E1E8ED] flex items-center gap-1.5 text-xs text-[#5A6C7D]">
              <span className="material-symbols-outlined text-[16px]">
                link
              </span>
              <span>Direct certificate anchors</span>
            </div>
          </div>
        </div>

        {/* Ready to check your scenario CTA Banner */}
        <div className="bg-[#FFF9E6] border border-[#F5D576] rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#fddd7d] flex items-center justify-center text-[#735c02] shrink-0">
              <span className="material-symbols-outlined text-[22px]">
                flag
              </span>
            </div>
            <div>
              <div className="font-bold text-[#2D3E50] text-[17px]">
                Ready to check your scenario?
              </div>
              <div className="text-xs text-[#5A6C7D]">
                Explore remote work, cross-border freelance, and gap coverage.
              </div>
            </div>
          </div>
          <Link
            href="/scenarios"
            className="inline-flex items-center justify-center gap-2 bg-[#F5D576] hover:bg-[#F0CA5E] text-[#2D3E50] font-bold text-sm py-3 px-6 rounded-xl shrink-0 shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <span>Begin Scenario Explorer</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full max-w-[1140px] mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-3 px-4 text-xs text-[#5A6C7D]">
        <div className="flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#006a6a] text-[16px]">
              check_circle
            </span>
            <span>Zero Tracking Cookies</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#006a6a] text-[16px]">
              check_circle
            </span>
            <span>Non-Commercial Model</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#006a6a] text-[16px]">
              check_circle
            </span>
            <span>Open Access Data</span>
          </span>
        </div>
        <div>
          <span>Independent reference mirror updated for 2025</span>
        </div>
      </div>
    </div>
  );
}
