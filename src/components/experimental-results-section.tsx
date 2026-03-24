"use client";

import Image from "next/image";
import { useState } from "react";
import { experimentalResults } from "@/data/experimental-results";

type BenchmarkKey = (typeof experimentalResults.benchmarks)[number]["key"];

function ResultsChartIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="what-emblem-icon h-[2.45rem] w-[2.45rem]">
      <rect
        x="4"
        y="4"
        width="20"
        height="20"
        rx="5.2"
        fill="url(#resultsIconPlate)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
      />
      <rect x="8.2" y="13.2" width="3.4" height="6.8" rx="1.2" fill="#A7F3D0" />
      <rect x="12.3" y="9.1" width="3.4" height="10.9" rx="1.2" fill="#C084FC" />
      <rect x="16.4" y="6.8" width="3.4" height="13.2" rx="1.2" fill="#60A5FA" />
      <path
        d="M7.8 20.7h12.4"
        stroke="rgba(255,255,255,0.24)"
        strokeLinecap="round"
        strokeWidth="0.85"
      />
      <defs>
        <linearGradient
          id="resultsIconPlate"
          x1="5.4"
          y1="5.2"
          x2="22.6"
          y2="22.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9A8D4" />
          <stop offset="0.52" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ExperimentalResultsSection() {
  const [activeBenchmarkKey, setActiveBenchmarkKey] = useState<BenchmarkKey>(
    experimentalResults.benchmarks[0].key,
  );
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

  const activeBenchmark =
    experimentalResults.benchmarks.find((item) => item.key === activeBenchmarkKey) ??
    experimentalResults.benchmarks[0];

  return (
    <section
      id="results"
      className="scroll-mt-28 border-b border-white/8 bg-[radial-gradient(circle_at_50%_0%,rgba(192,132,252,0.14),transparent_20%),radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(180deg,rgba(7,14,33,0.995),rgba(8,15,36,0.99)_38%,rgba(5,11,24,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="text-[clamp(3.2rem,7vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="section-gradient-title inline-block">{experimentalResults.title}</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_54px_rgba(236,72,153,0.14)] backdrop-blur-sm">
              <ResultsChartIcon />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[980px] text-[clamp(1.03rem,1.4vw,1.34rem)] leading-8 text-slate-300 sm:leading-9">
            {experimentalResults.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,18,49,0.96),rgba(8,16,40,0.94)_42%,rgba(5,11,28,0.98))] px-6 py-8 shadow-[0_28px_120px_rgba(3,8,20,0.5)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(167,139,250,0.12),transparent_20%),radial-gradient(circle_at_80%_22%,rgba(59,130,246,0.12),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.08),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/32 to-transparent" />

          <div className="relative mx-auto max-w-[1300px] text-center">
            <h3 className="text-[clamp(2rem,3.25vw,3.2rem)] font-semibold tracking-[-0.04em]">
              <span className="section-gradient-title inline-block">
                {experimentalResults.comparisonTitle}
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-[980px] text-[1rem] leading-8 text-slate-300 sm:text-[1.05rem]">
              {experimentalResults.comparisonDescription}
            </p>

            <div className="results-tabs-shell relative mx-auto mt-8 max-w-[1120px] rounded-[30px] border border-white/10 bg-[linear-gradient(90deg,rgba(33,30,74,0.86),rgba(30,39,81,0.82)_36%,rgba(25,48,80,0.76)_68%,rgba(20,58,75,0.68))] p-3 shadow-[0_22px_90px_rgba(7,12,28,0.42)]">
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_18%_50%,rgba(167,139,250,0.16),transparent_18%),radial-gradient(circle_at_78%_48%,rgba(96,165,250,0.14),transparent_22%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
              <div className="relative grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {experimentalResults.benchmarks.map((benchmark) => {
                  const isActive = benchmark.key === activeBenchmarkKey;

                  return (
                    <button
                      key={benchmark.key}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => {
                        setActiveBenchmarkKey(benchmark.key);
                        setActiveRowIndex(null);
                      }}
                      className={`group relative overflow-hidden rounded-[24px] px-5 py-4 text-center text-[0.96rem] font-semibold tracking-tight transition duration-300 sm:px-6 sm:text-[1.02rem] ${
                        isActive
                          ? "results-tab-active text-white"
                          : "text-slate-300/72 hover:scale-[1.01] hover:text-slate-100"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <span className="pointer-events-none absolute inset-[-16%] rounded-[30px] bg-[radial-gradient(circle_at_24%_48%,rgba(192,132,252,0.34),rgba(96,165,250,0.24)_40%,rgba(34,211,238,0.16)_66%,transparent_80%)] blur-2xl" />
                          <span className="pointer-events-none absolute inset-0 rounded-[24px] border border-cyan-200/18 bg-[linear-gradient(135deg,rgba(62,45,114,0.92),rgba(54,60,126,0.88)_42%,rgba(38,80,136,0.78)_74%,rgba(24,74,103,0.84))]" />
                          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/62 to-transparent" />
                        </>
                      ) : (
                        <span className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent bg-transparent transition duration-300 group-hover:border-white/10 group-hover:bg-white/[0.04]" />
                      )}
                      <span
                        className={`relative inline-block transition duration-300 ${
                          isActive
                            ? "bg-[linear-gradient(90deg,#b8a5ff_0%,#7dd3fc_52%,#67e8f9_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
                            : ""
                        }`}
                      >
                        {benchmark.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-[920px] text-sm leading-7 text-slate-400 sm:text-[0.95rem]">
              {activeBenchmark.note}
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-[1320px] overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,33,0.84),rgba(6,12,29,0.96))] p-2.5 shadow-[0_22px_80px_rgba(4,10,20,0.36)] sm:p-3">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(96,165,250,0.08),transparent_18%),radial-gradient(circle_at_82%_16%,rgba(192,132,252,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(6,12,30,0.88),rgba(7,12,28,0.96))]">
              {activeBenchmark.figure ? (
                <div className="p-2 sm:p-3">
                  <div className="overflow-hidden rounded-[18px] border border-white/8 bg-white">
                    <Image
                      src={activeBenchmark.figure.src}
                      alt={activeBenchmark.figure.alt}
                      width={activeBenchmark.figure.width}
                      height={activeBenchmark.figure.height}
                      sizes="(max-width: 1024px) 100vw, 1280px"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table
                    className="w-full text-left [border-collapse:separate] [border-spacing:0]"
                    style={{ minWidth: activeBenchmark.minTableWidth }}
                  >
                    <thead>
                      <tr>
                        <th className="border-b border-white/8 px-0 py-0 align-middle">
                          <div className="mx-px my-px flex h-[60px] items-center rounded-[14px] border border-violet-300/16 bg-[linear-gradient(180deg,rgba(77,70,140,0.86),rgba(56,47,114,0.82))] px-4 py-2.5 text-[0.78rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_12px_30px_rgba(38,36,92,0.22)] sm:px-5">
                            Model
                          </div>
                        </th>
                        {activeBenchmark.metrics.map((metric) => (
                          <th key={metric.label} className="border-b border-white/8 px-0 py-0 align-middle">
                            <div className="mx-px my-px flex h-[60px] items-center justify-center rounded-[14px] border border-white/8 bg-[linear-gradient(180deg,rgba(73,66,135,0.88),rgba(53,48,108,0.84))] px-3 py-2.5 text-center transition duration-300 sm:px-4">
                              <span className="text-[0.78rem] font-semibold tracking-[0.08em] text-white uppercase sm:text-[0.82rem]">
                                {metric.label}
                              </span>
                              <span className="ml-1 text-white/65">↑</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {activeBenchmark.rows.map((row, rowIndex) => {
                        const normalizedRow = row as {
                          model: string;
                          citation?: string;
                          starred?: boolean;
                          dividerBefore?: boolean;
                          isOurs?: boolean;
                          values: Array<{
                            display: string;
                            rank?: "best" | "second";
                            note?: string;
                          }>;
                        };
                        const isRowActive = rowIndex === activeRowIndex;
                        const borderClass = normalizedRow.dividerBefore
                          ? "border-t border-white/16"
                          : rowIndex === 0
                            ? ""
                            : "border-t border-white/[0.06]";

                        return (
                          <tr
                            key={`${activeBenchmark.key}-${row.model}`}
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveRowIndex(rowIndex)}
                            onMouseLeave={() => setActiveRowIndex(null)}
                          >
                            <th className={`px-0 py-0 align-middle ${borderClass}`}>
                              <div
                                className={`mx-px my-px flex h-[64px] flex-col justify-center rounded-[14px] border px-4 py-2.5 text-left transition duration-300 sm:px-5 ${
                                  normalizedRow.isOurs
                                    ? "border-emerald-300/20 bg-[linear-gradient(180deg,rgba(8,95,74,0.82),rgba(8,70,60,0.78))] shadow-[0_0_26px_rgba(16,185,129,0.16)]"
                                    : "border-white/8 bg-[linear-gradient(180deg,rgba(9,17,39,0.74),rgba(7,13,31,0.9))]"
                                } ${isRowActive ? "results-row-active border-cyan-300/22" : ""}`}
                              >
                                <span
                                  className={`text-[0.88rem] font-semibold leading-5 sm:text-[0.94rem] ${
                                    normalizedRow.isOurs ? "text-white" : "text-slate-100"
                                  }`}
                                >
                                  {normalizedRow.model}
                                  {normalizedRow.starred ? (
                                    <sup className="ml-1 text-[0.68rem] text-cyan-200/90">*</sup>
                                  ) : null}
                                </span>
                                {normalizedRow.citation ? (
                                  <span className="mt-1 block text-[0.7rem] leading-4 font-medium tracking-[0.04em] text-slate-400">
                                    {normalizedRow.citation}
                                  </span>
                                ) : null}
                              </div>
                            </th>

                            {activeBenchmark.metrics.map((metric, metricIndex) => {
                              const cell =
                                normalizedRow.values[metricIndex] ??
                                ({
                                  display: "-",
                                } as {
                                  display: string;
                                  rank?: "best" | "second";
                                  note?: string;
                                });
                              const isUnavailable = cell.display === "-";
                          const rankClass =
                            cell.rank === "best"
                              ? "border-emerald-300/22 bg-[linear-gradient(180deg,rgba(6,78,59,0.34),rgba(7,89,69,0.2))] text-emerald-300 shadow-[0_0_22px_rgba(16,185,129,0.14)]"
                              : cell.rank === "second"
                                ? "border-sky-300/20 bg-[linear-gradient(180deg,rgba(37,99,235,0.26),rgba(30,64,175,0.14))] text-sky-300 shadow-[0_0_20px_rgba(59,130,246,0.14)]"
                                : "border-white/8 bg-[linear-gradient(180deg,rgba(8,16,37,0.7),rgba(7,13,30,0.9))] text-slate-100";

                              return (
                                <td
                                  key={`${row.model}-${metric.label}`}
                                  className={`px-0 py-0 align-middle ${borderClass}`}
                                >
                                  <div
                                    className={`mx-px my-px flex h-[64px] items-center justify-center rounded-[14px] border px-3 py-2.5 text-center transition duration-300 sm:px-4 ${
                                      isUnavailable
                                        ? "border-white/6 bg-[linear-gradient(180deg,rgba(8,15,34,0.52),rgba(7,12,28,0.72))] text-slate-500"
                                        : rankClass
                                    } ${isRowActive ? "results-row-active border-cyan-300/22" : ""}`}
                                  >
                                    <div className="flex items-center justify-center gap-1.5">
                                      <span className="text-[0.92rem] font-semibold sm:text-[0.98rem]">
                                        {cell.display}
                                      </span>
                                      {cell.note ? (
                                        <span
                                          className={`relative -top-1.5 text-[0.6rem] font-semibold ${
                                            cell.rank === "best"
                                              ? "text-emerald-200/90"
                                              : cell.rank === "second"
                                                ? "text-sky-200/90"
                                                : "text-slate-300/80"
                                          }`}
                                        >
                                          {cell.note}
                                        </span>
                                      ) : null}
                                    </div>
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
