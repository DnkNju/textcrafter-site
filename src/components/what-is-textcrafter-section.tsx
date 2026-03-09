import Image from "next/image";
import { whatIsTextCrafter } from "@/data/project";

function CreativeWandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="what-emblem-icon h-7 w-7">
      <path
        d="M12.8 11.2 19.2 17.6"
        stroke="url(#wandStroke)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 3.5 9 6.7l3.2 1.5L9 9.7l-1.5 3.2L6 9.7 2.8 8.2 6 6.7 7.5 3.5Z"
        fill="url(#wandStar)"
      />
      <path
        d="M15.7 4.4 16.35 5.8l1.4.65-1.4.65-.65 1.4-.65-1.4-1.4-.65 1.4-.65.65-1.4Z"
        fill="#F9A8D4"
      />
      <path
        d="M4.8 13.4 5.35 14.5l1.1.55-1.1.55-.55 1.1-.55-1.1-1.1-.55 1.1-.55.55-1.1Z"
        fill="#FDBA74"
      />
      <circle cx="20" cy="18.4" r="1.35" fill="#A78BFA" />
      <defs>
        <linearGradient id="wandStroke" x1="12.8" y1="11.2" x2="19.2" y2="17.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDA4AF" />
          <stop offset="0.45" stopColor="#C084FC" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="wandStar" x1="4.2" y1="4.2" x2="11.5" y2="11.8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.55" stopColor="#F9A8D4" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.5 14.3 8l5.2 2-5.2 2L12 17.5 9.7 12 4.5 10l5.2-2L12 2.5Z" />
    </svg>
  );
}

export function WhatIsTextCrafterSection() {
  const compactPrompt = whatIsTextCrafter.prompt.replace(/\n\s*\n+/g, "\n");

  return (
    <section
      id="what-is"
      className="scroll-mt-28 border-b border-white/8 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(9,18,38,0.98),rgba(7,14,30,0.98)_48%,rgba(6,11,22,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1460px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="section-gradient-title inline-block bg-clip-text text-[clamp(3.1rem,6.4vw,6.1rem)] font-semibold leading-[0.95] tracking-tight text-transparent">
            {whatIsTextCrafter.title}
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_50px_rgba(236,72,153,0.12)] backdrop-blur-sm">
              <CreativeWandIcon />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[960px] text-[clamp(1.05rem,1.38vw,1.45rem)] leading-8 text-slate-300 sm:leading-9">
            {whatIsTextCrafter.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(140deg,rgba(35,51,111,0.44),rgba(88,43,116,0.38)_42%,rgba(128,77,39,0.28)_74%,rgba(38,90,73,0.22))] px-6 py-8 shadow-[0_26px_120px_rgba(3,8,20,0.46)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(96,165,250,0.12),transparent_22%),radial-gradient(circle_at_68%_70%,rgba(249,115,22,0.1),transparent_28%),radial-gradient(circle_at_88%_88%,rgba(74,222,128,0.08),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.26fr)_auto_minmax(19rem,23rem)] lg:gap-8 xl:grid-cols-[minmax(0,1.32fr)_auto_minmax(21rem,25rem)]">
            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(92,58,146,0.52),rgba(46,47,97,0.56))] p-5 shadow-[0_16px_50px_rgba(7,10,30,0.28)] backdrop-blur-sm sm:p-6">
              <div className="flex items-center gap-3 text-fuchsia-200/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.18)]">
                  <SparkIcon />
                </span>
                <span className="text-[0.9rem] font-semibold tracking-tight sm:text-[1rem]">
                  {whatIsTextCrafter.promptLabel}
                </span>
              </div>

              <div className="mt-5 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,19,38,0.16),rgba(7,10,20,0.24))] p-4 sm:p-5">
                <p className="text-[0.82rem] leading-7 whitespace-pre-line text-slate-100/90 sm:text-[0.9rem]">
                  <span className="text-white/45">&quot;</span>
                  {compactPrompt}
                  <span className="text-white/45">&quot;</span>
                </p>
              </div>
            </article>

            <div className="flex flex-col items-center gap-3 justify-self-center py-2 lg:py-0">
              <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200 shadow-[0_0_34px_rgba(232,121,249,0.14)] sm:text-[0.76rem]">
                {whatIsTextCrafter.engineLabel}
              </span>
              <div className="what-arrow-pulse relative h-12 w-[7.2rem] sm:h-14 sm:w-[8.6rem]">
                <div className="absolute left-0 top-1/2 h-[0.32rem] w-[70%] -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-300 via-orange-300 to-rose-400 shadow-[0_0_24px_rgba(251,146,60,0.38)] sm:h-[0.38rem]" />
                <div className="absolute left-[57%] top-1/2 h-[1.1rem] w-[1.1rem] -translate-y-1/2 rounded-full bg-fuchsia-300/18 blur-[8px] sm:h-[1.35rem] sm:w-[1.35rem]" />
                <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-l-[18px] border-y-transparent border-l-fuchsia-400 drop-shadow-[0_0_14px_rgba(232,121,249,0.35)] sm:border-y-[12px] sm:border-l-[22px]" />
              </div>
            </div>

            <div className="justify-self-center lg:justify-self-end">
              <div className="what-result-float relative w-[min(78vw,20rem)] sm:w-[21rem] xl:w-[23.8rem]">
                <div className="absolute inset-0 rounded-[32px] bg-fuchsia-400/14 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-2 shadow-[0_22px_80px_rgba(5,10,20,0.42)]">
                  <Image
                    src={whatIsTextCrafter.result.src}
                    alt={whatIsTextCrafter.result.alt}
                    width={whatIsTextCrafter.result.width}
                    height={whatIsTextCrafter.result.height}
                    className="h-auto w-full rounded-[22px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
