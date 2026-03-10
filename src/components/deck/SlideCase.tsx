import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

const rows = [
  { activity: "4 limited rider/bull drops", revenue: "$500K – $800K" },
  { activity: "World Finals Championship release", revenue: "$300K – $600K" },
  { activity: "City/event drops ×6", revenue: "$400K+" },
  { activity: "Evergreen core DTC + retail", revenue: "Ongoing / compounding" },
];

export const SlideCase = () => (
  <Slide bg="primary" glow>
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        THE MATH IS CONSERVATIVE. THE UPSIDE ISN'T.
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      <div className="overflow-x-auto table-scroll -mx-2 mb-4">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="border-b border-border-warm">
              <th className="font-headline text-gold text-left py-3 px-3 text-base tracking-wide">ACTIVITY</th>
              <th className="font-headline text-gold text-left py-3 px-3 text-base tracking-wide">ANNUAL REVENUE POTENTIAL</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border-warm" style={{ background: i % 2 !== 0 ? "#1A1A1A" : undefined }}>
                <td className="font-body text-foreground py-3 px-3">{r.activity}</td>
                <td className="font-body text-foreground py-3 px-3">{r.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
    <FadeIn delay={0.2}>
      <p className="font-body text-subtext text-sm italic mb-8">
        Direct-to-fan revenue — not dependent on distributor placement, shelf positioning, or a retailer's quarterly priorities.
      </p>
    </FadeIn>
    <FadeIn delay={0.3}><GoldRule /></FadeIn>
    <FadeIn delay={0.35}>
      <div className="rounded-lg px-5 py-5 border border-gold/20" style={{ background: "rgba(201,160,82,0.08)" }}>
        <p className="font-body font-semibold text-foreground text-base leading-relaxed mb-2">
          Every drop, every sell-out, every rider bottle that lives on a fan's shelf adds to the brand story. That story is what a strategic acquirer pays for.
        </p>
        <p className="font-body text-gold text-sm">
          Jaripeo — backed by PBR's audience, TKO's infrastructure, and a 5-year Paramount+ deal — is a brand someone will want to own.
        </p>
      </div>
    </FadeIn>
  </Slide>
);
