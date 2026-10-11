'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import type { Scenario } from '@/lib/types';

export default function ScenariosPage() {
  const router = useRouter();
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScenarios() {
      try {
        setLoading(true);
        const response = await api.getScenarios();
        setScenarios(response.scenarios);
        // Auto-select first scenario
        if (response.scenarios.length > 0) {
          setSelectedScenario(response.scenarios[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load scenarios');
        console.error('Error fetching scenarios:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchScenarios();
  }, []);

  const handleContinue = () => {
    if (selectedScenario) {
      // Store selected scenario in sessionStorage for result page
      sessionStorage.setItem('selectedScenarioId', selectedScenario);
      router.push('/result');
    }
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[600px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5DCCCC]"></div>
        <p className="mt-4 text-[#5A6C7D]">Loading scenarios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[600px]">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-red-500 text-[48px] mb-4">error</span>
          <h2 className="text-xl font-bold text-[#2D3E50] mb-2">Unable to Load Scenarios</h2>
          <p className="text-[#5A6C7D] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#5DCCCC] text-white px-6 py-2 rounded-lg hover:bg-[#4db8b8]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white py-[64px] px-6 md:px-[48px] pb-[100px] min-h-[700px] rounded-xl shadow-xs">
        <div className="max-w-[860px] mx-auto flex flex-col">
          {/* Back Navigation */}
          <div className="mb-[40px]">
            <Link
              href="/"
              className="inline-flex items-center gap-[8px] text-[#006a6a] font-bold text-base hover:underline transition-all group"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-[48px]">
            <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 bg-[#d9eaff] rounded-full mb-4">
              <span className="material-symbols-outlined text-[#006a6a] text-[18px]">
                rule
              </span>
              <span className="text-xs font-bold text-[#006a6a] tracking-wider uppercase">
                Diagnostic Step 01
              </span>
            </div>
            <h1 className="text-[34px] md:text-[40px] font-extrabold text-[#0a1d2d] text-center mb-[14px] tracking-tight">
              What happened to your income?
            </h1>
            <p className="text-[18px] text-[#5A6C7D] text-center max-w-[620px] mx-auto leading-relaxed">
              Select your situation below to explore published income-protection information.
            </p>
          </div>

          {/* Scenario Cards - Dynamic from API */}
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              role="radio"
              aria-checked={selectedScenario === scenario.id}
              tabIndex={0}
              onClick={() => setSelectedScenario(scenario.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedScenario(scenario.id);
                }
              }}
              className={`rounded-[12px] p-[32px_36px] md:p-[36px_40px] mb-[24px] cursor-pointer relative transition-all duration-200 hover:-translate-y-0.5 ${
                selectedScenario === scenario.id
                  ? 'bg-[#E8F4F4] shadow-[0_8px_24px_rgba(93,204,204,0.20)] outline-[3px] outline-[#5DCCCC] -outline-offset-[3px]'
                  : 'bg-white border-2 border-[#E1E8ED] hover:border-[#5DCCCC]'
              }`}
            >
              {/* Header row with custom radio button */}
              <div className="flex items-center gap-[16px] mb-[14px]">
                <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0 shadow-xs ${
                  selectedScenario === scenario.id
                    ? 'bg-[#5DCCCC]'
                    : 'border-2 border-[#C1C9D2]'
                }`}>
                  {selectedScenario === scenario.id && (
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-[20px] md:text-[22px] font-bold text-[#0a1d2d]">
                  {scenario.label}
                </span>
              </div>

              {/* Description */}
              <p className="ml-[40px] text-[17px] md:text-[18px] text-[#5A6C7D] leading-[1.6] m-0">
                {scenario.description}
              </p>
            </div>
          ))}
          {/*Live Prototype Sandbox*/}

          {/* Visual Context Strip */}
          <div className="bg-[#F8F9FA] rounded-xl p-5 md:p-6 mb-[48px] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#d9eaff] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#006a6a] text-[24px]">
                  verified_user
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#0a1d2d]">
                  Verified Knowledge Base
                </span>
                <span className="text-xs text-[#5A6C7D]">
                  Analysis cross-referenced with non-statutory global safety net models
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#006a6a] text-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                lock
              </span>
              <span>No personal identifiers required</span>
            </div>
          </div>

          {/* Call To Action */}
          <div className="flex justify-center items-center">
            <button
              onClick={handleContinue}
              disabled={!selectedScenario}
              className="inline-flex items-center justify-center gap-[10px] bg-[#F5D576] text-[#2D3E50] py-[18px] px-[64px] font-bold text-lg rounded-[12px] cursor-pointer shadow-[0_4px_14px_rgba(45,62,80,0.1)] hover:bg-[#F0CA5E] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Continue</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
