import { DemoVideoSection } from "@/components/demo-video-section";
import { ExperimentalResultsSection } from "@/components/experimental-results-section";
import { HeroSection } from "@/components/hero-section";
import { SpecificDatasetsSection } from "@/components/specific-datasets-section";
import { TechnicalFrameworkSection } from "@/components/technical-framework-section";
import { WhatIsTextCrafterSection } from "@/components/what-is-textcrafter-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%),radial-gradient(circle_at_80%_18%,_rgba(168,85,247,0.16),_transparent_24%),linear-gradient(180deg,_#07111f,_#050914_55%,_#04070d)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,black_35%,transparent_88%)]" />

      <HeroSection />
      <DemoVideoSection />
      <WhatIsTextCrafterSection />
      <SpecificDatasetsSection />
      <TechnicalFrameworkSection />
      <ExperimentalResultsSection />
    </main>
  );
}
