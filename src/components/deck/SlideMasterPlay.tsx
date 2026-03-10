import { Slide, FadeIn } from "./DeckPrimitives";

const drops = [
  { type: "Rider Editions", example: "Jaripeo × World Champion", scale: "500–2,000 bottles / $90–$150" },
  { type: "Bull Editions", example: "Jaripeo × Man Hater", scale: "Limited / Collector" },
  { type: "Championship Annual", example: "World Finals Añejo", scale: "2,000+ bottles / $150–$500" },
  { type: "City / Event Drops", example: "MSG · Fort Worth · Las Vegas", scale: "800 bottles / fast sell-through" },
  { type: "Evergreen Core", example: "Jaripeo Blanco / Reposado", scale: "Year-round / DTC + retail" },
];

export const SlideMasterPlay = () => (
  <Slide bg="secondary">
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-6">
        ONE BRAND. UNLIMITED DROPS. ONE EXIT.
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="font-body text-foreground text-base leading-[1.7] mb-4">
        Traditional spirits partnerships bet everything on one SKU. One label. One shot at retail. If it doesn't break through, the deal quietly dies. Jaripeo is built differently.
      </p>
    </FadeIn>
    <FadeIn delay={0.2}>
      <div className="rounded-lg px-5 py-5 mb-8 border border-amber/20" style={{ background: "rgba(212,130,42,0.12)" }}>
        <p className="font-body font-semibold text-gold text-base leading-relaxed">
          Jaripeo is a Master Spirits Brand — not just a tequila, but a platform. It launches with tequila because the audience and cultural roots demand it. The architecture supports bourbon, vodka, or any spirit that serves PBR's expanding fanbase — including the growing female audience.
        </p>
      </div>
    </FadeIn>
    <FadeIn delay={0.3}>
      <div className="overflow-x-auto table-scroll -mx-2">
        <table className="w-full min-w-[500px] text-sm">
          <thead>
            <tr className="border-b border-border-warm">
              <th className="font-headline text-gold text-left py-3 px-3 text-base tracking-wide">DROP TYPE</th>
              <th className="font-headline text-gold text-left py-3 px-3 text-base tracking-wide">EXAMPLE</th>
              <th className="font-headline text-gold text-left py-3 px-3 text-base tracking-wide">SCALE</th>
            </tr>
          </thead>
          <tbody>
            {drops.map((d, i) => (
              <tr key={i} className={`border-b border-border-warm ${i % 2 === 0 ? "bg-background-secondary" : ""}`} style={i % 2 !== 0 ? { background: "#1A1A1A" } : {}}>
                <td className="font-body text-foreground py-3 px-3">{d.type}</td>
                <td className="font-body text-foreground py-3 px-3">{d.example}</td>
                <td className="font-body text-subtext py-3 px-3">{d.scale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
    <FadeIn delay={0.4}>
      <p className="font-accent text-gold text-lg mt-8 text-center">
        Every drop sells independently. Every drop builds the Master Brand. The exit isn't riding on any single bottle.
      </p>
    </FadeIn>
  </Slide>
);
