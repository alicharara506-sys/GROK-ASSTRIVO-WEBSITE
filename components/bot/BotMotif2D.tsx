import type { FleetMember } from "@/lib/fleet";

export function BotMotif2D({ member }: { member: FleetMember }) {
  switch (member.slug) {
    case "astro":
      return <OrbitWatermark color={member.theme.secondary} />;
    case "brando":
      return <Pillars color={member.theme.accent} />;
    case "marko":
      return <FunnelRibbon color={member.theme.secondary} />;
    case "devo":
      return <BlueprintGrid color={member.theme.secondary} />;
    case "dato":
      return <ChartSpine color={member.theme.secondary} />;
    case "aivo":
      return <MeshNet color={member.theme.accent} />;
    case "como":
      return <ChannelPills />;
    case "pomo":
      return <StatusChips />;
    case "fino":
      return <InvoiceStates />;
    case "rovo":
      return <VerdictStamps />;
    case "quanto":
      return <ScoreStamp />;
  }
}

function OrbitWatermark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="100" r="28" fill="none" stroke={color} strokeWidth="1.2" />
      <circle cx="100" cy="100" r="54" fill="none" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <circle cx="100" cy="100" r="82" fill="none" stroke={color} strokeWidth="0.5" opacity="0.35" />
    </svg>
  );
}

function Pillars({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      {[30, 80, 130].map((x, i) => (
        <rect key={x} x={x} y={20 + i * 8} width="28" height={80 - i * 10} rx="4" fill={color} opacity={0.25 + i * 0.12} />
      ))}
    </svg>
  );
}

function FunnelRibbon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 80" className="h-full w-full" aria-hidden="true">
      <path d="M8 16h224L168 64H72z" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="120" cy="70" r="4" fill={color} />
    </svg>
  );
}

function BlueprintGrid({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="120" stroke={color} strokeWidth="0.4" opacity="0.45" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 24} x2="200" y2={i * 24} stroke={color} strokeWidth="0.4" opacity="0.45" />
      ))}
    </svg>
  );
}

function ChartSpine({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden="true">
      <polyline
        points="8,62 40,48 72,52 104,28 136,34 168,12 192,18"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

function MeshNet({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 180 120" className="h-full w-full" aria-hidden="true">
      <path d="M20 60L70 25L120 48L160 20M20 60L80 90L140 70L160 20" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
      {[ [20, 60], [70, 25], [120, 48], [160, 20], [80, 90], [140, 70] ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={color} />
      ))}
    </svg>
  );
}

function ChannelPills() {
  const channels = ["Mail", "WhatsApp", "Telegram"];
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {channels.map((label) => (
        <span
          key={label}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-fog/80"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function StatusChips() {
  const statuses = [
    { label: "On track", color: "#22C55E" },
    { label: "At risk", color: "#F59E0B" },
    { label: "Blocked", color: "#EF4444" },
  ];
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {statuses.map((item) => (
        <span
          key={item.label}
          className="rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-white"
          style={{ background: `${item.color}33`, border: `1px solid ${item.color}66` }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

function InvoiceStates() {
  const states = [
    { label: "Paid", color: "#10B981" },
    { label: "Pending", color: "#D4AF37" },
    { label: "Overdue", color: "#EF4444" },
  ];
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {states.map((item) => (
        <span
          key={item.label}
          className="rounded-md border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em]"
          style={{ borderColor: item.color, color: item.color }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

function VerdictStamps() {
  const stamps = [
    { label: "ADOPT", color: "#84CC16" },
    { label: "WATCH", color: "#F59E0B" },
    { label: "SKIP", color: "#EF4444" },
  ];
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {stamps.map((item) => (
        <span
          key={item.label}
          className="rotate-[-6deg] rounded-sm border-2 px-2 py-0.5 font-plex text-[0.7rem] font-semibold tracking-[0.2em]"
          style={{ borderColor: item.color, color: item.color }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

function ScoreStamp() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1f2937" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#22C55E"
            strokeWidth="3"
            strokeDasharray="70 88"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans text-sm tabular-nums text-white">
          90
        </span>
      </div>
      <div className="flex flex-col gap-1 text-[0.6rem] uppercase tracking-[0.18em]">
        <span className="text-[#22C55E]">Approve</span>
        <span className="text-[#F59E0B]">Revise</span>
        <span className="text-[#EF4444]">Reject</span>
      </div>
    </div>
  );
}
