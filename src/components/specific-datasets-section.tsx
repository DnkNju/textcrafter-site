"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { datasetShowcase } from "@/data/project";

function DatasetStackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="what-emblem-icon h-7 w-7">
      <rect x="5" y="5" width="9" height="9" rx="2.2" fill="#A3E635" opacity="0.95" />
      <rect x="8.2" y="7.6" width="9" height="9" rx="2.2" fill="#60A5FA" opacity="0.95" />
      <rect x="11.4" y="10.2" width="9" height="9" rx="2.2" fill="#F472B6" opacity="0.95" />
      <path d="M5 14.2V5.8c0-0.44 0.36-0.8 0.8-0.8h8.4" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
      <path d="M8.2 16.8V8.4c0-0.44 0.36-0.8 0.8-0.8h8.4" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
    </svg>
  );
}

export function SpecificDatasetsSection() {
  const [activeKey, setActiveKey] = useState<string>(datasetShowcase.tabs[0].key);

  const activeTab = useMemo(
    () => datasetShowcase.tabs.find((item) => item.key === activeKey) ?? datasetShowcase.tabs[0],
    [activeKey],
  );

  return (
    <section
      id="datasets"
      className="scroll-mt-28 border-b border-white/8 bg-[radial-gradient(circle_at_18%_12%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(8,17,37,0.99),rgba(7,14,31,0.98)_48%,rgba(6,11,22,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1460px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[clamp(3.05rem,6.3vw,6rem)] font-semibold leading-[0.96] tracking-tight">
            <span className="section-gradient-title block">Specific Datasets for</span>
            <span className="section-gradient-title block">TextCrafter</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_50px_rgba(236,72,153,0.12)] backdrop-blur-sm">
              <DatasetStackIcon />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[960px] text-[clamp(1.04rem,1.36vw,1.42rem)] leading-8 text-slate-300 sm:leading-9">
            {datasetShowcase.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(140deg,rgba(35,51,111,0.42),rgba(88,43,116,0.34)_42%,rgba(128,77,39,0.22)_74%,rgba(38,90,73,0.18))] px-6 py-8 shadow-[0_26px_120px_rgba(3,8,20,0.46)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(244,114,182,0.12),transparent_22%),radial-gradient(circle_at_80%_76%,rgba(74,222,128,0.08),transparent_24%),radial-gradient(circle_at_68%_20%,rgba(96,165,250,0.12),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative">
            <div className="inline-flex rounded-full border border-fuchsia-300/18 bg-fuchsia-300/10 px-5 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200 shadow-[0_0_36px_rgba(232,121,249,0.18)] sm:text-[0.84rem]">
              {datasetShowcase.badge}
            </div>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-[linear-gradient(90deg,rgba(55,34,92,0.72),rgba(49,43,100,0.54)_35%,rgba(39,77,84,0.48))] p-2 shadow-[0_18px_60px_rgba(8,10,24,0.28)]">
              <div className="grid gap-2 sm:grid-cols-2">
                {datasetShowcase.tabs.map((item) => {
                  const isActive = item.key === activeKey;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setActiveKey(item.key)}
                      className={`rounded-[20px] px-5 py-4 text-center text-sm font-semibold transition duration-300 sm:text-base ${
                        isActive
                          ? "border border-fuchsia-300/26 bg-[linear-gradient(135deg,rgba(244,114,182,0.26),rgba(192,132,252,0.18))] text-fuchsia-200 shadow-[0_0_42px_rgba(244,114,182,0.3)]"
                          : "border border-transparent bg-transparent text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="section-gradient-title inline-block bg-clip-text text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-tight text-transparent">
                {activeTab.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[980px] text-base leading-8 text-slate-200/90 sm:text-[1.04rem]">
                {activeTab.summary}
              </p>
              <p className="mx-auto mt-3 max-w-[980px] text-base leading-8 text-slate-300 sm:text-[1.02rem]">
                {activeTab.details}
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {activeTab.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_60px_rgba(4,10,20,0.34)] sm:p-5">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/90">
                <Image
                  src={datasetShowcase.combinedFigure.src}
                  alt={datasetShowcase.combinedFigure.alt}
                  width={datasetShowcase.combinedFigure.width}
                  height={datasetShowcase.combinedFigure.height}
                  className="h-auto w-full"
                />
              </div>
              <p className="px-2 pb-1 pt-5 text-center text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
                {datasetShowcase.figureCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
