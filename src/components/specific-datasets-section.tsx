"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { datasetShowcase } from "@/data/project";

function DatasetStackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="what-emblem-icon h-[2.45rem] w-[2.45rem]">
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
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-[clamp(2.45rem,5vw,5.15rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
            <span className="section-gradient-title block">Datasets for TextCrafter</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_54px_rgba(236,72,153,0.14)] backdrop-blur-sm">
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
            <div className="dataset-tabs-shell mt-6 rounded-[30px] border border-white/10 bg-[linear-gradient(90deg,rgba(42,23,71,0.82),rgba(54,35,88,0.74)_34%,rgba(61,42,83,0.62)_66%,rgba(26,67,73,0.52))] p-3 shadow-[0_22px_90px_rgba(7,12,28,0.42)]">
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_18%_48%,rgba(232,121,249,0.16),transparent_18%),radial-gradient(circle_at_74%_52%,rgba(96,165,250,0.12),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
              <div className="relative grid gap-3 sm:grid-cols-2">
                {datasetShowcase.tabs.map((item) => {
                  const isActive = item.key === activeKey;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveKey(item.key)}
                      className={`group relative overflow-hidden rounded-[24px] px-5 py-5 text-center text-[0.98rem] font-semibold tracking-tight transition duration-300 sm:px-7 sm:text-[1.08rem] ${
                        isActive
                          ? "dataset-tab-active text-white"
                          : "text-slate-300/70 hover:scale-[1.01] hover:text-slate-100"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <span className="pointer-events-none absolute inset-[-16%] rounded-[30px] bg-[radial-gradient(circle_at_26%_48%,rgba(240,171,252,0.42),rgba(232,121,249,0.26)_34%,rgba(96,165,250,0.18)_58%,transparent_78%)] blur-2xl" />
                          <span className="pointer-events-none absolute inset-0 rounded-[24px] border border-fuchsia-200/20 bg-[linear-gradient(135deg,rgba(78,48,110,0.9),rgba(92,48,110,0.86)_38%,rgba(82,50,97,0.82)_72%,rgba(67,54,115,0.86))]" />
                          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                        </>
                      ) : (
                        <span className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent bg-transparent transition duration-300 group-hover:border-white/10 group-hover:bg-white/[0.04]" />
                      )}
                      <span
                        className={`relative inline-block transition duration-300 ${
                          isActive
                            ? "bg-[linear-gradient(90deg,#d58dff_0%,#ff7cad_48%,#ff9f70_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
                            : ""
                        }`}
                      >
                        {item.label}
                      </span>
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
                {activeTab.body}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
