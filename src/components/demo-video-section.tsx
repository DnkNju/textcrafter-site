function DemoPlayIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="what-emblem-icon h-[2.45rem] w-[2.45rem]">
      <rect
        x="4"
        y="5"
        width="20"
        height="18"
        rx="4.8"
        fill="url(#demoVideoPlate)"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="0.8"
      />
      <path d="m12.2 10.1 6 3.9-6 3.9v-7.8Z" fill="rgba(255,255,255,0.94)" />
      <path
        d="M7.8 9.1h1.4M7.8 13.9h1.4M7.8 18.7h1.4"
        stroke="rgba(255,255,255,0.45)"
        strokeLinecap="round"
      />
      <path
        d="M18.8 9.1h1.4M18.8 13.9h1.4M18.8 18.7h1.4"
        stroke="rgba(255,255,255,0.45)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="demoVideoPlate" x1="5.6" y1="6" x2="22.4" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9A8D4" />
          <stop offset="0.54" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DemoVideoSection() {
  return (
    <section
      id="demo-video"
      className="scroll-mt-28 border-b border-white/8 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,20,42,0.98)_38%,rgba(7,12,23,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="section-gradient-title inline-block bg-clip-text text-[clamp(3.7rem,7.2vw,6.8rem)] font-semibold leading-none tracking-tight text-transparent">
            Demo Video
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_54px_rgba(236,72,153,0.14)] backdrop-blur-sm">
              <DemoPlayIcon />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_120px_rgba(6,10,22,0.55)] sm:p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.12),transparent_26%)]" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60">
            <video
              className="block aspect-video w-full rounded-[28px] bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/video/demo-video-poster.jpg"
            >
              <source src="/videos/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
