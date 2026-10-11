'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import type { JourneyResponse } from '@/lib/types';

export default function ResultPage() {
  const router = useRouter();
  const [journeyData, setJourneyData] = useState<JourneyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJourneyData() {
      try {
        setLoading(true);
        
        // Get selected scenario from sessionStorage
        const scenarioId = sessionStorage.getItem('selectedScenarioId');
        if (!scenarioId) {
          router.push('/scenarios');
          return;
        }

        const response = await api.submitJourney({ scenarioId });
        setJourneyData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load result');
        console.error('Error fetching journey data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchJourneyData();
  }, [router]);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[600px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5DCCCC]"></div>
        <p className="mt-4 text-[#5A6C7D]">Loading benefit information...</p>
      </div>
    );
  }

  if (error || !journeyData) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[600px]">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-red-500 text-[48px] mb-4">error</span>
          <h2 className="text-xl font-bold text-[#2D3E50] mb-2">Unable to Load Benefit Information</h2>
          <p className="text-[#5A6C7D] mb-4">{error}</p>
          <Link
            href="/scenarios"
            className="bg-[#5DCCCC] text-white px-6 py-2 rounded-lg hover:bg-[#4db8b8] inline-block"
          >
            Back to Scenarios
          </Link>
        </div>
      </div>
    );
  }

  const { journey, benefitInformation, disclaimer, sources, nextSteps } = journeyData;
  const { benefitStructure, policyConditions, itemsToVerify } = benefitInformation;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white py-[56px] px-4 md:px-[48px] pb-[100px] rounded-xl shadow-xs">
        <div className="max-w-[960px] mx-auto w-full">
          {/* Navigation Breadcrumb */}
          <Link
            href="/scenarios"
            className="inline-flex items-center gap-[8px] text-[#006a6a] font-bold text-base mb-[32px] no-underline hover:text-[#005454] transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            <span>Back to Scenario Selection</span>
          </Link>

          {/* SECTION 1: Situation Summary Box */}
          <section className="bg-[#E8F4F4] border-l-4 border-[#5DCCCC] rounded-[8px] p-[22px] md:p-[28px] mb-[36px] shadow-xs">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <span className="material-symbols-outlined text-[#006a6a] text-[24px]">
                check_circle
              </span>
              <h2 className="text-xl text-[#2D3E50] font-bold">
                Your Selected Situation
              </h2>
            </div>
            <p className="text-[17px] text-[#5A6C7D] leading-[1.6] m-0">
              You selected: <strong>{journey.scenarioLabel}</strong>
            </p>
          </section>

          {/* SECTION 2: Policy Information Card */}
          <section className="bg-white border-2 border-[#E1E8ED] rounded-xl p-[24px] md:p-[36px] mb-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            {/* Policy Header */}
            <div className="border-b-[3px] border-[#5DCCCC] pb-[14px] mb-[20px] flex items-center gap-[12px]">
              <span className="material-symbols-outlined text-[#006a6a] text-[28px]">
                assignment
              </span>
              <h1 className="text-[26px] md:text-[28px] text-[#2D3E50] font-bold">
                What the Published Information Says
              </h1>
            </div>
            <p className="text-[17px] text-[#5A6C7D] leading-[1.6] mb-[28px]">
              {benefitInformation.summary}
            </p>

            {/* Benefit Structure Subheading */}
            <h3 className="text-lg font-bold text-[#2D3E50] mb-[16px] tracking-tight">
              Benefit Summary
            </h3>

            {/* 3 Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[36px]">
              {/* Benefit Card 1 - Maximum */}
              <div className="bg-[#E8F4F4] border-2 border-[#5DCCCC] rounded-[10px] py-[24px] px-[16px] text-center flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <span className="text-xs uppercase tracking-[0.05em] font-bold text-[#5A6C7D] mb-[6px]">
                  MAXIMUM
                </span>
                <div className="text-[26px] font-extrabold text-[#2D3E50]">
                  {benefitStructure.maximumMonthlyBenefit.qualifier} ${benefitStructure.maximumMonthlyBenefit.amount.toLocaleString()}/month
                </div>
                <p className="text-xs text-[#5A6C7D] italic mt-[4px] m-0">
                  {benefitStructure.maximumMonthlyBenefit.currency}
                </p>
              </div>

              {/* Benefit Card 2 - Duration */}
              <div className="bg-[#E8F4F4] border-2 border-[#5DCCCC] rounded-[10px] py-[24px] px-[16px] text-center flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <span className="text-xs uppercase tracking-[0.05em] font-bold text-[#5A6C7D] mb-[6px]">
                  DURATION
                </span>
                <div className="text-[26px] font-extrabold text-[#2D3E50]">
                  {benefitStructure.maximumDuration.qualifier} {benefitStructure.maximumDuration.value} {benefitStructure.maximumDuration.unit}
                </div>
                <p className="text-xs text-[#5A6C7D] italic mt-[4px] m-0">
                  Consecutive disruption support
                </p>
              </div>

              {/* Benefit Card 3 - Frequency */}
              <div className="bg-[#E8F4F4] border-2 border-[#5DCCCC] rounded-[10px] py-[24px] px-[16px] text-center flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <span className="text-xs uppercase tracking-[0.05em] font-bold text-[#5A6C7D] mb-[6px]">
                  FREQUENCY
                </span>
                <div className="text-[20px] font-extrabold text-[#2D3E50]">
                  {benefitStructure.frequencyLimit}
                </div>
                <p className="text-xs text-[#5A6C7D] italic mt-[4px] m-0">
                  Per rolling period
                </p>
              </div>
            </div>

            {/* Policy Conditions Subheading */}
            <h3 className="text-xl font-bold text-[#2D3E50] mb-[20px] flex items-center gap-[8px]">
              <span className="material-symbols-outlined text-[#006a6a] text-[22px]">
                gavel
              </span>
              <span>What the Policy States</span>
            </h3>

            {/* Policy Conditions - Dynamic from API */}
            <div className="space-y-[16px]">
              {policyConditions.map((condition) => (
                <div
                  key={condition.id}
                  className="bg-[#E8F4F4] border-l-4 border-[#5DCCCC] rounded-[8px] p-[20px] md:px-[24px] transition-transform duration-200 hover:translate-x-1"
                >
                  <h4 className="text-lg font-bold text-[#2D3E50] mb-[6px] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006a6a] text-[18px]">
                      check_circle
                    </span>
                    <span>{condition.title}</span>
                  </h4>
                  <p className="text-[15px] text-[#5A6C7D] leading-[1.6] m-0">
                    {condition.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: What You Still Need to Verify Card */}
          <section className="bg-[#FFF9E6] border-[3px] border-[#F5D576] rounded-xl p-[28px] md:p-[32px_36px] mb-[32px] shadow-xs">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="material-symbols-outlined text-[#735c02] text-[26px]">
                task
              </span>
              <h2 className="text-[22px] font-bold text-[#2D3E50]">
                What You Still Need to Verify
              </h2>
            </div>
            <p className="text-[17px] text-[#5A6C7D] leading-[1.6] mb-[20px]">
              Only SafetyWing can determine whether you meet these conditions. You will need to confirm:
            </p>
            <ul className="space-y-[12px] text-[17px] text-[#5A6C7D] leading-[1.6] list-none p-0 m-0">
              {itemsToVerify.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#735c02] font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 4: Important Disclaimer Card */}
          <section className="bg-[#FFEEF2] border-[3px] border-[#E85D75] rounded-xl p-[28px] md:p-[32px] mb-[32px] shadow-md">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="material-symbols-outlined text-[#E85D75] text-[28px]">
                warning
              </span>
              <h2 className="text-[24px] font-bold text-[#E85D75]">
                Important Disclaimer
              </h2>
            </div>
            <p className="text-[18px] text-[#2D3E50] font-semibold leading-[1.6] mb-[12px]">
              This information explains publicly available policy conditions. It does not determine your personal eligibility, approve a claim, or guarantee a payout.
            </p>
            <p className="text-[17px] text-[#5A6C7D] leading-[1.6] m-0">
              {disclaimer.text}
            </p>
          </section>

          {/* SECTION 5: Source Evidence Box */}
          <section className="bg-white border-2 border-[#E1E8ED] rounded-xl p-[24px] md:p-[32px] mb-[48px] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <span className="material-symbols-outlined text-[#006a6a] text-[26px]">
                fact_check
              </span>
              <h3 className="text-[22px] font-bold text-[#2D3E50]">
                Official Sources & Evidence
              </h3>
            </div>
            <p className="text-[15px] text-[#5A6C7D] mb-[20px]">
              All information above is sourced from publicly available documents:
            </p>
            <div className="space-y-[16px]">
              {sources.map((source) => (
                <div key={source.id} className="bg-[#F8F9FA] border-l-4 border-[#5DCCCC] rounded-lg p-[20px] hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-[8px]">
                    <div className="flex-1">
                      <div className="font-bold text-[17px] text-[#2D3E50] mb-[6px]">{source.title}</div>
                      <div className="text-sm text-[#5A6C7D] space-y-1">
                        {source.effectiveDate && (
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#006a6a]">event</span>
                            <span><strong>Effective:</strong> {new Date(source.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#006a6a]">verified</span>
                          <span><strong>Reviewed:</strong> {new Date(source.reviewedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-[10px] text-[#006a6a] font-semibold text-[15px] hover:text-[#005454] transition-colors underline"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                    <span>View Official Document</span>
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: Next Steps & CTAs */}
          <div className="max-w-[560px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-[28px] font-bold text-[#2D3E50] mb-[24px]">
              Your Next Steps
            </h2>

            {/* Primary Yellow CTA Button */}
            <a
              href={nextSteps.primary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#F5D576] hover:bg-[#F0CA5E] text-[#2D3E50] font-bold text-lg py-[18px] px-[36px] rounded-xl transition-all duration-200 transform hover:-translate-y-[2px] shadow-[0_4px_12px_rgba(245,213,118,0.35)] cursor-pointer mb-[14px] flex items-center justify-center gap-2 no-underline"
            >
              <span className="material-symbols-outlined text-[20px]">
                support_agent
              </span>
              <span>Contact SafetyWing Support</span>
            </a>
            <p className="text-sm text-[#5A6C7D] mb-[20px]">{nextSteps.primary.description}</p>

            {/* Secondary Outlined Button */}
            <a
              href={nextSteps.secondary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-transparent border-2 border-[#2D3E50] hover:bg-[#2D3E50] hover:text-white text-[#2D3E50] font-bold text-lg py-[18px] px-[36px] rounded-xl transition-all duration-200 cursor-pointer mb-[6px] flex items-center justify-center gap-2 no-underline"
            >
              <span className="material-symbols-outlined text-[20px]">
                description
              </span>
              <span>Read Full Policy Terms</span>
            </a>
            <p className="text-sm text-[#5A6C7D] mb-[24px]">{nextSteps.secondary.description}</p>

            {/* Explore another situation Link */}
            <Link
              href="/scenarios"
              className="text-[16px] text-[#5A6C7D] underline hover:text-[#006a6a] transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              <span>Explore another situation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
