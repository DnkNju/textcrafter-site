import { citation } from "@/data/project";

function CitationIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="what-emblem-icon h-[2.45rem] w-[2.45rem]">
      <rect
        x="5"
        y="6"
        width="18"
        height="16"
        rx="4.5"
        fill="url(#citationPlate)"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="0.8"
      />
      <path
        d="M10.2 11.2 8.2 14l2 2.8M17.8 11.2l2 2.8-2 2.8M13 17.2l2-6.4"
        stroke="rgba(255,255,255,0.92)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <defs>
        <linearGradient id="citationPlate" x1="6.2" y1="7.2" x2="21.8" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9A8D4" />
          <stop offset="0.52" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CitationSection() {
  return (
    <section
      id="citation"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(5,10,23,1),rgba(5,9,19,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[clamp(2.9rem,6vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="section-gradient-title inline-block">BibTeX</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_54px_rgba(236,72,153,0.14)] backdrop-blur-sm">
              <CitationIcon />
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,40,0.96),rgba(7,13,30,0.98))] p-4 shadow-[0_24px_90px_rgba(3,8,20,0.46)] sm:p-5 lg:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(96,165,250,0.1),transparent_18%),radial-gradient(circle_at_84%_18%,rgba(192,132,252,0.1),transparent_18%)]" />
          <pre className="relative overflow-x-auto rounded-[24px] border border-white/8 bg-[#050c1d]/92 px-5 py-5 font-mono text-[0.9rem] leading-7 whitespace-pre-wrap text-slate-200 sm:px-6 sm:py-6 sm:text-[0.95rem]">
            <code>{citation}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
