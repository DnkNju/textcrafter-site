import Image from "next/image";
import { DemoVideoSection } from "@/components/demo-video-section";
import { HeroSection } from "@/components/hero-section";
import { WhatIsTextCrafterSection } from "@/components/what-is-textcrafter-section";
import { SpecificDatasetsSection } from "@/components/specific-datasets-section";
import {
  challenges,
  citation,
  contributions,
  methodCards,
  resultsGallery,
} from "@/data/project";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-3 text-center sm:mb-14">
      <span className="rounded-full border border-white/12 bg-white/6 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%),radial-gradient(circle_at_80%_18%,_rgba(168,85,247,0.16),_transparent_24%),linear-gradient(180deg,_#07111f,_#050914_55%,_#04070d)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,black_35%,transparent_88%)]" />

      <HeroSection />
      <DemoVideoSection />
      <WhatIsTextCrafterSection />
      <SpecificDatasetsSection />

      <section id="overview" className="scroll-mt-28 border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Overview"
            title="A polished paper page, built around the manuscript"
            description="The site is structured around the same story as the paper: what makes complex visual text generation hard, how TextCrafter addresses it, and what the benchmark reveals."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {contributions.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/8 bg-white/6 p-6 shadow-[0_10px_40px_rgba(4,10,20,0.26)] backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[30px] border border-white/8 bg-white/6 p-4 shadow-[0_12px_50px_rgba(4,10,20,0.26)]">
            <Image
              src="/images/paper/high-level.png"
              alt="High-level comparison figure"
              width={8456}
              height={1155}
              className="h-auto w-full rounded-[22px] border border-white/8 bg-slate-950/30"
            />
          </div>
        </div>
      </section>

      <section id="challenges" className="scroll-mt-28 border-t border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Challenges"
            title="Where complex visual text generation breaks"
            description="The paper identifies three representative failure modes. This section turns them into clear cards so visitors can quickly understand the problem setting before reading the method."
          />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              {challenges.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[26px] border border-white/8 bg-slate-950/40 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/8 bg-white/6 p-4 shadow-[0_12px_50px_rgba(4,10,20,0.26)]">
              <Image
                src="/images/paper/challenges.png"
                alt="Challenges in complex visual text generation"
                width={8662}
                height={4331}
                className="h-auto w-full rounded-[22px] border border-white/8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="scroll-mt-28 border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Method"
            title="Three stages, from layout prior to precise text rendering"
            description="The page separates the method into digestible blocks so that a reader can understand the pipeline without diving into every formula on first visit."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {methodCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-white/8 bg-white/6 p-4 shadow-[0_12px_50px_rgba(4,10,20,0.26)]"
              >
                <div className="rounded-[24px] border border-white/8 bg-slate-950/30 p-3">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    className="h-auto w-full rounded-[18px] border border-white/8"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {card.description}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="scroll-mt-28 border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Results"
            title="A gallery-first section for demos and qualitative comparisons"
            description="This layout is ready for you to swap in newer figures, videos, or side-by-side demos later without changing the structure of the page."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {resultsGallery.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[30px] border border-white/8 bg-white/6 p-4 shadow-[0_12px_50px_rgba(4,10,20,0.26)]"
              >
                <div className="overflow-hidden rounded-[24px] border border-white/8 bg-slate-950/30">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-auto w-full"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="citation" className="scroll-mt-28 border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Citation"
            title="A placeholder citation block you can refine later"
            description="The citation is included as a safe manuscript placeholder. Replace it with the final venue and year once the publication details are fixed."
          />

          <div className="rounded-[30px] border border-white/8 bg-slate-950/60 p-6 shadow-[0_12px_50px_rgba(4,10,20,0.26)]">
            <pre className="overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-slate-200">
              {citation}
            </pre>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 lg:px-8">
        Built with Next.js static export for GitHub Pages. Update project links in
        <span className="mx-1 font-medium text-slate-300">site/src/data/project.ts</span>
        and redeploy.
      </footer>
    </main>
  );
}
