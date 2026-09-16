import type { Agent } from "@/lib/agents";
import { talkToLabel } from "@/lib/agents";

export function TalkButton({
  agent,
  className = "",
}: {
  agent: Agent;
  className?: string;
}) {
  return (
    <a
      href={agent.grokUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`talk-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide text-white ${className}`}
    >
      {talkToLabel(agent)}
      <span aria-hidden="true">→</span>
    </a>
  );
}
