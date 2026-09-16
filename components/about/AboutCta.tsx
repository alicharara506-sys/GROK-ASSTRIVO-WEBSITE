"use client";

import { CORE_AGENT } from "@/lib/agents";

export function AboutCta() {
  return (
    <div className="mt-10">
      <a
        href={CORE_AGENT.grokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="talk-button inline-flex max-w-xl items-center justify-center rounded-full px-6 py-3.5 text-left text-sm font-semibold leading-snug text-white sm:text-base"
      >
        Talk to the fleet — let’s put Astrivo to work on yours.
      </a>
    </div>
  );
}
