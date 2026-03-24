import Image from "next/image";
import { platformGallery } from "@/data/project";

function PlatformGalleryIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="what-emblem-icon h-[2.5rem] w-[2.5rem]">
      <path
        d="M6.4 7.2c0-1.02.82-1.84 1.84-1.84h5.32c1.01 0 1.84.82 1.84 1.84v5.17c0 3.16-2.25 5.75-5.23 6.28-2.26-.4-3.81-1.76-4.74-3.74-.45-.97-.7-2.08-.7-3.25V7.2Z"
        fill="url(#galleryMaskLeft)"
      />
      <path
        d="M14.08 9.08c0-1.02.82-1.84 1.84-1.84h4.92c1.01 0 1.84.82 1.84 1.84v4.79c0 2.93-2.08 5.34-4.83 5.83-2.11-.37-3.54-1.62-4.39-3.45-.42-.89-.64-1.91-.64-2.97V9.08Z"
        fill="url(#galleryMaskRight)"
      />
      <path
        d="M8.54 10.64c.48-.42 1.31-.74 2.11-.74.79 0 1.6.32 2.09.74"
        stroke="rgba(7,17,31,0.56)"
        strokeLinecap="round"
        strokeWidth="0.82"
      />
      <circle cx="9.36" cy="12.14" r="0.82" fill="#07111F" fillOpacity="0.58" />
      <circle cx="11.98" cy="12.14" r="0.82" fill="#07111F" fillOpacity="0.58" />
      <path
        d="M8.98 14.64c.76.72 1.72 1.1 2.76 1.1 1.04 0 2-.38 2.76-1.1"
        stroke="rgba(7,17,31,0.58)"
        strokeLinecap="round"
        strokeWidth="0.96"
      />
      <path
        d="M16.02 11.7c.41-.36 1.12-.64 1.79-.64s1.35.28 1.76.64"
        stroke="rgba(49,24,8,0.5)"
        strokeLinecap="round"
        strokeWidth="0.82"
      />
      <circle cx="16.76" cy="12.98" r="0.74" fill="#4A2106" fillOpacity="0.52" />
      <circle cx="18.96" cy="12.98" r="0.74" fill="#4A2106" fillOpacity="0.52" />
      <path
        d="M16.44 15.42c.7-.54 1.46-.82 2.29-.82.83 0 1.6.28 2.29.82"
        stroke="rgba(74,33,6,0.54)"
        strokeLinecap="round"
        strokeWidth="0.94"
      />
      <defs>
        <linearGradient id="galleryMaskLeft" x1="7.4" y1="6.08" x2="15.44" y2="18.72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" />
          <stop offset="0.5" stopColor="#67E8F9" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="galleryMaskRight" x1="15.44" y1="8.04" x2="22.2" y2="18.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.46" stopColor="#FDBA74" />
          <stop offset="1" stopColor="#FB7185" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PlatformGallerySection() {
  return (
    <section
      id="platform-gallery"
      className="scroll-mt-28 border-b border-white/8 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_18%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.1),transparent_22%),linear-gradient(180deg,rgba(6,12,28,0.995),rgba(7,14,33,0.992)_36%,rgba(5,10,23,1))] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[clamp(3.25rem,6.9vw,6.35rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="section-gradient-title inline-block">{platformGallery.title}</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="what-emblem-motion flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_54px_rgba(236,72,153,0.14)] backdrop-blur-sm">
              <PlatformGalleryIcon />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[920px] text-[clamp(1.02rem,1.34vw,1.32rem)] leading-8 text-slate-300 sm:leading-9">
            {platformGallery.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,48,0.94),rgba(8,16,40,0.94)_46%,rgba(6,13,31,0.98))] p-4 shadow-[0_28px_120px_rgba(3,8,20,0.5)] sm:p-5 lg:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(125,211,252,0.1),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(192,132,252,0.1),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(45,212,191,0.08),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {platformGallery.images.map((image) => (
              <div key={image.src} className="group relative aspect-square">
                <div className="pointer-events-none absolute inset-2 rounded-[30px] bg-cyan-300/12 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />
                <div className="relative h-full transform-gpu overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,20,43,0.88),rgba(8,14,33,0.96))] p-2 shadow-[0_16px_50px_rgba(5,10,20,0.32)] transition duration-300 group-hover:z-10 group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:border-cyan-200/24 group-hover:shadow-[0_24px_70px_rgba(4,10,20,0.44)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.16),transparent_16%),linear-gradient(140deg,rgba(125,211,252,0.08),transparent_48%,rgba(192,132,252,0.08)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative h-full overflow-hidden rounded-[22px] border border-white/8 bg-slate-950/70">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 46vw, (max-width: 1024px) 44vw, (max-width: 1280px) 30vw, 23vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
