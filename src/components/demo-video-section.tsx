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
