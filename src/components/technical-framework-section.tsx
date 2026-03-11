"use client";

import Image from "next/image";
import { useState } from "react";
import { technicalFramework } from "@/data/project";

type FrameworkStage = (typeof technicalFramework.stages)[number];
type FrameworkStageKey = FrameworkStage["key"];

function LightningBoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="framework-bolt-icon h-[2.4rem] w-[2.4rem]">
      <path
        d="M12.9 1.9 5.5 12.1h4.55l-1.25 9.95 9.2-12.45H13.5l-.6-7.7Z"
        fill="url(#frameworkBoltFill)"
      />
      <path
        d="M12.9 1.9 5.5 12.1h4.55l-1.25 9.95 9.2-12.45H13.5l-.6-7.7Z"
        stroke="rgba(255,255,255,0.26)"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="frameworkBoltFill"
          x1="7"
          y1="3"
          x2="17.8"
          y2="20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDE68A" />
          <stop offset="0.44" stopColor="#FB7185" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function InsulationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.7rem] w-[1.7rem]">
      <rect x="3.2" y="5.2" width="5.8" height="13.6" rx="2" fill="#38BDF8" opacity="0.92" />
      <rect x="14.9" y="5.2" width="5.8" height="13.6" rx="2" fill="#A78BFA" opacity="0.92" />
      <path
        d="M11.95 4.5v15"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.2 2.2"
      />
      <path
        d="M6.1 11.95h2.8M15.1 11.95h2.8"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AttentionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.7rem] w-[1.7rem]">
      <path d="M7.2 8.3h2.4v3.9H7.2z" fill="#F59E0B" />
      <path d="M14.4 8.3h2.4v3.9h-2.4z" fill="#FB7185" />
      <circle cx="12" cy="12" r="6.6" stroke="#38BDF8" strokeWidth="1.55" opacity="0.92" />
      <circle cx="12" cy="12" r="3.3" stroke="#A78BFA" strokeWidth="1.55" opacity="0.95" />
      <circle cx="12" cy="12" r="1.25" fill="#E2E8F0" />
    </svg>
  );
}

function StageArrow() {
  return (
    <div className="rotate-90 lg:rotate-0">
      <svg viewBox="0 0 128 36" fill="none" className="framework-flow-arrow h-12 w-16 lg:h-14 lg:w-24">
        <defs>
          <linearGradient
            id="frameworkArrowStroke"
            x1="8"
            y1="18"
            x2="120"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#818CF8" />
            <stop offset="0.52" stopColor="#60A5FA" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M8 18h92"
          stroke="url(#frameworkArrowStroke)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d="m94 6 26 12-26 12" fill="url(#frameworkArrowStroke)" />
      </svg>
    </div>
  );
}

function FrameworkMarker({
  label,
  x,
  y,
  active,
  onActivate,
}: {
  label: string;
  x: number;
  y: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`framework-marker group absolute z-20 ${active ? "framework-marker-active" : ""}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="framework-marker-ripple" />
      <span className="framework-marker-ripple framework-marker-ripple-delay" />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100/42 bg-[linear-gradient(180deg,rgba(96,165,250,0.98),rgba(37,99,235,0.95))] text-sm font-semibold text-white shadow-[0_0_26px_rgba(56,189,248,0.42)]">
        {label}
      </span>
    </button>
  );
}

function FrameworkStageCard({
  stage,
  active,
  onActivate,
}: {
  stage: FrameworkStage;
  active: boolean;
  onActivate: () => void;
}) {
  const icon = stage.icon === "insulation" ? <InsulationIcon /> : <AttentionIcon />;

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`group relative overflow-hidden rounded-[28px] border px-6 py-6 text-left transition duration-300 sm:px-7 sm:py-7 ${
        active
          ? "framework-stage-card-active border-cyan-300/30 bg-[linear-gradient(180deg,rgba(13,29,67,0.94),rgba(12,23,55,0.92))]"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(9,20,45,0.72),rgba(8,17,37,0.82))] opacity-[0.84] hover:border-cyan-300/16 hover:opacity-100"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(96,165,250,0.18),transparent_20%),radial-gradient(circle_at_86%_24%,rgba(34,211,238,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/38 to-transparent" />
      <div className="relative">
        <div className="flex items-start gap-4">
          <span
            className={`framework-stage-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(30,41,89,0.2))] text-white shadow-[0_12px_24px_rgba(5,10,20,0.28)] ${
              active ? "framework-stage-icon-active" : ""
            }`}
          >
            <span className={`framework-stage-glyph ${active ? "framework-stage-glyph-active" : ""}`}>
              {icon}
            </span>
          </span>
          <div>
            <h3 className="text-[1.32rem] font-semibold tracking-tight text-white sm:text-[1.46rem]">
              {stage.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-slate-300 sm:text-[1.02rem]">
              {stage.description}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

export function TechnicalFrameworkSection() {
  const [activeStageKey, setActiveStageKey] = useState<FrameworkStageKey>(
    technicalFramework.stages[0].key,
  );

  return (
    <section
      id="method"
      className="scroll-mt-28 border-b border-white/8 bg-[radial-gradient(circle_at_50%_4%,rgba(37,99,235,0.18),transparent_24%),radial-gradient(circle_at_14%_18%,rgba(96,165,250,0.11),transparent_22%),radial-gradient(circle_at_86%_24%,rgba(34,211,238,0.1),transparent_24%),linear-gradient(180deg,rgba(8,18,42,0.995),rgba(7,14,34,0.985)_55%,rgba(6,11,24,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[clamp(3.2rem,7vw,6.1rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="section-gradient-title inline-block">{technicalFramework.title}</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="framework-bolt-shell flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-sm">
              <LightningBoltIcon />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[930px] text-[clamp(1.02rem,1.42vw,1.34rem)] leading-8 text-slate-300 sm:leading-9">
            {technicalFramework.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_26px_120px_rgba(3,8,20,0.46)] sm:p-5 lg:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(96,165,250,0.12),transparent_22%),radial-gradient(circle_at_86%_22%,rgba(34,211,238,0.1),transparent_22%),radial-gradient(circle_at_52%_92%,rgba(99,102,241,0.08),transparent_24%)]" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(240,247,255,0.98),rgba(234,244,255,0.96))] p-3 shadow-[0_18px_80px_rgba(5,10,20,0.28)] sm:p-4">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-300/55 bg-white">
              <Image
                src={technicalFramework.figure.src}
                alt={technicalFramework.figure.alt}
                width={technicalFramework.figure.width}
                height={technicalFramework.figure.height}
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="h-auto w-full"
              />
              {technicalFramework.figure.markers.map((marker) => {
                const isActive = marker.key === activeStageKey;
                return (
                  <FrameworkMarker
                    key={marker.key}
                    label={marker.label}
                    x={marker.x}
                    y={marker.y}
                    active={isActive}
                    onActivate={() => setActiveStageKey(marker.key as FrameworkStageKey)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <div>
            <FrameworkStageCard
              stage={technicalFramework.stages[0]}
              active={technicalFramework.stages[0].key === activeStageKey}
              onActivate={() => setActiveStageKey(technicalFramework.stages[0].key)}
            />
          </div>

          <div className="flex justify-center">
            <StageArrow />
          </div>

          <div>
            <FrameworkStageCard
              stage={technicalFramework.stages[1]}
              active={technicalFramework.stages[1].key === activeStageKey}
              onActivate={() => setActiveStageKey(technicalFramework.stages[1].key)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
