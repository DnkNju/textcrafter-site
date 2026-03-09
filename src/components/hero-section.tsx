"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";
import { heroShowcase, navigation, project } from "@/data/project";

type LinkIconName = "book" | "computer" | "hugging" | "rocket" | "dataset" | "movie";

const linkAccentClasses: Record<string, string> = {
  violet: "from-violet-400/85 via-fuchsia-400/80 to-violet-300/85",
  sky: "from-sky-400/85 via-cyan-300/80 to-blue-400/85",
  amber: "from-amber-300/85 via-orange-300/80 to-yellow-200/85",
  rose: "from-rose-400/80 via-pink-400/80 to-fuchsia-300/80",
  emerald: "from-emerald-300/80 via-teal-300/75 to-cyan-300/75",
  indigo: "from-indigo-400/80 via-violet-400/80 to-fuchsia-300/75",
};

const cardSizeClasses = {
  sm: "w-[9.2rem] xl:w-[10.2rem] 2xl:w-[11.1rem]",
  md: "w-[11.2rem] xl:w-[12.5rem] 2xl:w-[13.7rem]",
  lg: "w-[14rem] xl:w-[15.7rem] 2xl:w-[17.2rem]",
} as const;

function LinkIcon({ icon }: { icon: LinkIconName }) {
  const common = "h-[18px] w-[18px]";

  if (icon === "hugging") {
    return <span className="text-base leading-none">🤗</span>;
  }

  if (icon === "book") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19v15.5H7.5A2.5 2.5 0 0 0 5 22z" />
        <path d="M5 6.5v13" />
        <path d="M9 8h6" />
      </svg>
    );
  }

  if (icon === "computer") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3.5" y="4.5" width="17" height="11" rx="2.5" />
        <path d="M8 19.5h8" />
        <path d="M10 15.5v4" />
        <path d="M14 15.5v4" />
      </svg>
    );
  }

  if (icon === "rocket") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M14 5c2.5-.2 4.3.7 5 1.4.7.7 1.6 2.5 1.4 5L14 18l-4-4z" />
        <path d="M10 14 5 19" />
        <path d="M9 6 3 12l4 1" />
        <path d="M12 21l1-4 4-1" />
        <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "dataset") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" />
        <path d="M5.5 5.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
        <path d="M5.5 11.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M8 3.5v4" />
      <path d="M16 3.5v4" />
      <path d="M3.5 10.5h17" />
      <path d="m10 14 2 1.5L14 14" />
    </svg>
  );
}

function LinkGrid({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${mobile ? "max-w-none" : "max-w-[52rem]"}`}>
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.href || "#overview"}
          className="group flex items-center gap-4 rounded-[22px] border border-white/10 bg-[#071121]/74 px-5 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-[#0a1629] hover:shadow-[0_18px_48px_rgba(5,9,20,0.38)]"
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${linkAccentClasses[link.accent] ?? linkAccentClasses.violet} text-white shadow-[0_8px_28px_rgba(168,85,247,0.28)] transition duration-300 group-hover:scale-105`}
          >
            <LinkIcon icon={link.icon} />
          </span>
          <span className="text-sm font-semibold text-slate-100">{link.label}</span>
        </a>
      ))}
    </div>
  );
}

function renderAuthorMark(mark: string) {
  if (mark === "dagger") {
    return (
      <sup className="ml-[2px] align-super text-[0.68em] font-semibold leading-none text-slate-200">
        &dagger;
      </sup>
    );
  }

  if (mark === "asterisk") {
    return (
      <sup className="ml-[1px] align-super text-[0.68em] font-semibold leading-none text-slate-200">
        *
      </sup>
    );
  }

  return (
    <sup className="ml-[1px] align-super text-[0.64em] font-medium leading-none text-slate-400">
      {mark}
    </sup>
  );
}

function renderAuthorNoteSymbol(kind: string) {
  if (kind === "dagger") {
    return <span className="mr-1.5 font-semibold text-slate-300">&dagger;</span>;
  }

  return <span className="mr-1.5 font-semibold text-slate-300">*</span>;
}

function AuthorMeta({ affiliations, mobile = false }: { affiliations: string; mobile?: boolean }) {
  return (
    <div className={`space-y-3 text-slate-200/90 ${mobile ? "" : "max-w-[56rem]"}`}>
      <p className={mobile ? "text-base leading-8" : "text-[clamp(1rem,1.02vw,1.08rem)] leading-8"}>
        {project.authors.map((author, index) => (
          <span key={author.name}>
            {index > 0 ? <span className="text-slate-500">, </span> : null}
            <span>
              {author.name}
              {author.marks.map((mark) => (
                <span key={`${author.name}-${mark}`}>{renderAuthorMark(mark)}</span>
              ))}
            </span>
          </span>
        ))}
      </p>
      <p className="text-sm leading-7 text-slate-400 sm:text-base">{affiliations}</p>
      <div className="space-y-1.5 pt-1">
        {project.authorNotes.map((item) => (
          <p key={item.kind} className="text-[0.84rem] leading-6 text-slate-500 sm:text-[0.92rem]">
            {renderAuthorNoteSymbol(item.kind)}
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    setPointer({ x, y });
  };

  const resetPointer = () => {
    setPointer({ x: 0, y: 0 });
    setActiveCard(null);
  };

  const primaryAction = project.links[0];
  const affiliations = project.affiliations.join(" · ");

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/8 pt-20 sm:pt-24">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#040811]/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#top">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white shadow-[0_0_26px_rgba(168,85,247,0.16)]">
              TC
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-slate-200 uppercase">
              TextCrafter
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {navigation.map((item) => (
              <a key={item.href} className="transition duration-300 hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#050813_0%,#050814_14%,#07142a_48%,#060a12_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />
      <div className="pointer-events-none absolute left-[-9rem] top-28 -z-10 h-72 w-72 rounded-full bg-violet-500/24 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-44 -z-10 h-80 w-80 rounded-full bg-sky-400/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-[15%] -z-10 h-64 w-64 rounded-full bg-fuchsia-500/14 blur-3xl" />

      <div className="mx-auto max-w-[min(1880px,99vw)] px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div
          className="hero-shell relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(130deg,rgba(19,28,58,0.96),rgba(6,12,26,0.92)_40%,rgba(6,10,20,0.98)_100%)] shadow-[0_30px_120px_rgba(3,8,20,0.75)]"
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90 transition duration-300"
            style={{
              background: `radial-gradient(circle at ${58 + pointer.x * 22}% ${34 + pointer.y * 18}%, rgba(161, 94, 255, 0.22), transparent 19%), radial-gradient(circle at ${36 + pointer.x * 20}% ${64 + pointer.y * 22}%, rgba(64, 214, 255, 0.14), transparent 26%), linear-gradient(120deg, rgba(122, 60, 255, 0.08), transparent 34%, rgba(34, 211, 238, 0.08) 72%, transparent 100%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="hero-desktop-grid relative z-10 hidden items-center px-6 py-16 lg:grid lg:px-8 xl:px-10 2xl:px-14">
            <div className="hero-left-column flex justify-start">
              <div
                className="hero-poster-shell relative"
                style={{
                  transform: `translate3d(${pointer.x * -24}px, ${pointer.y * -20}px, 0) rotate(${(-11 + pointer.x * -5).toFixed(2)}deg)`,
                }}
              >
                <div className="group relative w-[clamp(18.6rem,23.4vw,27.4rem)]">
                  <div className="absolute inset-0 rounded-[34px] bg-violet-500/18 blur-3xl transition duration-300 group-hover:bg-violet-400/28" />
                  <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/6 p-2 shadow-[0_18px_90px_rgba(0,0,0,0.55)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_24px_120px_rgba(34,211,238,0.18)]">
                    <Image
                      src={heroShowcase.poster.src}
                      alt={heroShowcase.poster.alt}
                      width={heroShowcase.poster.width}
                      height={heroShowcase.poster.height}
                      priority
                      className="h-auto w-full rounded-[24px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-copy-column relative z-10 w-full max-w-[42rem] justify-self-center">
              <div className="flex items-center gap-4 sm:gap-5">
                <h1 className="text-[clamp(3.35rem,5vw,5.5rem)] font-semibold tracking-tight text-white">
                  {project.shortTitle}:
                </h1>
                <div className="relative h-20 w-20 shrink-0 rounded-[28px] border border-white/12 bg-white/8 p-1.5 shadow-[0_0_40px_rgba(168,85,247,0.22)] sm:h-24 sm:w-24">
                  <div className="absolute inset-0 rounded-[28px] bg-violet-400/16 blur-2xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-white/70">
                    <Image
                      src={heroShowcase.logo.src}
                      alt={heroShowcase.logo.alt}
                      width={heroShowcase.logo.width}
                      height={heroShowcase.logo.height}
                      priority
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-[56rem] text-[clamp(1.72rem,2.3vw,2.36rem)] font-semibold leading-[1.14] text-white/90">
                {project.title}
              </p>
              <p className="mt-5 max-w-[52rem] text-[clamp(1rem,1.08vw,1.12rem)] leading-8 text-slate-300">
                {project.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#8b5cf6,#ec4899)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(236,72,153,0.32)]"
                  href={primaryAction.href || "#overview"}
                >
                  {primaryAction.label}
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-white/22 hover:bg-white/10"
                  href="#results"
                >
                  View Results
                </a>
              </div>

              <div className="mt-10">
                <AuthorMeta affiliations={affiliations} />
              </div>

              <div className="mt-11">
                <LinkGrid />
              </div>
            </div>

            <div className="hero-card-stage relative justify-self-end">
              {heroShowcase.cards.map((card, index) => {
                const isActive = activeCard === index;
                const isDimmed = activeCard !== null && activeCard !== index;
                const translateX = pointer.x * card.depth * 22;
                const translateY = pointer.y * card.depth * 18;
                const rotate = card.rotate + pointer.x * card.depth * 5;
                const scale = isActive ? 1.08 : isDimmed ? 0.95 : 1;
                const style: CSSProperties = {
                  left: `${card.x}%`,
                  top: `${card.y}%`,
                  zIndex: isActive ? 40 : 10 + index,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale})`,
                  filter: isActive
                    ? "brightness(1.13) saturate(1.14)"
                    : isDimmed
                      ? "brightness(0.75) saturate(0.9)"
                      : "brightness(0.99)",
                  animationDelay: card.delay,
                };

                return (
                  <button
                    key={card.src}
                    type="button"
                    aria-label={card.alt}
                    className={`hero-card-shell absolute ${cardSizeClasses[card.size]} cursor-default rounded-[30px] bg-transparent text-left transition duration-500`}
                    style={style}
                    onMouseEnter={() => setActiveCard(index)}
                    onFocus={() => setActiveCard(index)}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[30px] border bg-white/6 p-2 shadow-[0_18px_54px_rgba(4,10,20,0.5)] transition duration-500 ${
                        isActive
                          ? "border-violet-200/60 shadow-[0_24px_80px_rgba(167,139,250,0.34)]"
                          : "border-white/10"
                      }`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition duration-300 ${
                          isActive ? "opacity-100" : ""
                        }`}
                        style={{
                          background:
                            "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.32), transparent 22%), linear-gradient(160deg, rgba(168,85,247,0.18), transparent 50%, rgba(34,211,238,0.14))",
                        }}
                      />
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={card.width}
                        height={card.height}
                        className="relative h-auto w-full rounded-[22px] object-cover"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 px-6 py-14 sm:px-10 lg:hidden">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 sm:gap-5">
                <h1 className="text-[clamp(2.7rem,11vw,4.4rem)] font-semibold tracking-tight text-white">
                  {project.shortTitle}:
                </h1>
                <div className="relative h-16 w-16 shrink-0 rounded-[24px] border border-white/12 bg-white/8 p-1.5 shadow-[0_0_36px_rgba(168,85,247,0.22)] sm:h-20 sm:w-20">
                  <div className="absolute inset-0 rounded-[24px] bg-violet-400/16 blur-2xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-white/10 bg-white/70">
                    <Image
                      src={heroShowcase.logo.src}
                      alt={heroShowcase.logo.alt}
                      width={heroShowcase.logo.width}
                      height={heroShowcase.logo.height}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid items-start gap-6 md:grid-cols-[minmax(0,220px)_1fr]">
                <div className="mx-auto w-[min(82vw,19.6rem)]">
                  <div className="hero-poster-shell relative rotate-[-8deg]">
                    <div className="absolute inset-0 rounded-[32px] bg-violet-500/18 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-2 shadow-[0_18px_90px_rgba(0,0,0,0.55)]">
                      <Image
                        src={heroShowcase.poster.src}
                        alt={heroShowcase.poster.alt}
                        width={heroShowcase.poster.width}
                        height={heroShowcase.poster.height}
                        className="h-auto w-full rounded-[22px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[clamp(1.62rem,5vw,2.18rem)] font-semibold leading-[1.14] text-white/90">
                    {project.title}
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-300">{project.subtitle}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#8b5cf6,#ec4899)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.35)]"
                      href={primaryAction.href || "#overview"}
                    >
                      {primaryAction.label}
                    </a>
                    <a
                      className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-slate-100"
                      href="#results"
                    >
                      View Results
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <AuthorMeta affiliations={affiliations} mobile />
              </div>

              <div className="mt-10">
                <LinkGrid mobile />
              </div>

              <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
                {heroShowcase.cards.slice(0, 4).map((card, index) => (
                  <div
                    key={card.src}
                    className={`relative shrink-0 ${index === 0 ? "w-40" : "w-[7.75rem]"} overflow-hidden rounded-[22px] border border-white/10 bg-white/6 p-1.5 shadow-[0_12px_40px_rgba(5,9,20,0.35)]`}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                      className="h-auto w-full rounded-[16px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
