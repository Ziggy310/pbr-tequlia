import { Slide, FadeIn } from "./DeckPrimitives";

export const SlideCase = () => (
  <Slide bg="primary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">STRAIGHT FORWARD PATH</p>
    </FadeIn>
    <FadeIn delay={0.05}>
      <h2 className="font-headline text-foreground text-4xl md:text-[52px] tracking-wide leading-none mb-2">
        MASHBILL AND PBR HIGH LEVEL EXECUTION
      </h2>
    </FadeIn>
    <FadeIn delay={0.08}>
      <p className="font-accent text-subtext text-base text-center mb-8">(Use of Marks: TBD — PBR's choice)</p>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT — PBR's Role */}
      <div>
        <FadeIn delay={0.1}>
          <p className="font-body text-gold text-xs tracking-[0.3em] font-semibold mb-6">PBR'S ROLE (HIGH LEVEL) — THREE THINGS</p>
        </FadeIn>

        {[
          {
            num: "1",
            title: "QR Codes in Broadcasts, Publications & Ads",
            body: "Wherever PBR already has eyeballs — TV, event programs, print, digital banners. Fans scan and land on the Jaripeo DTC store. Mashbill builds and runs the store.",
          },
          {
            num: "2",
            title: "Social Drops",
            body: "X posts per platform around each event. Mashbill delivers all assets — video, imagery, copy — ready to post. No creative production burden for PBR.",
          },
          {
            num: "3",
            title: "Event Integration",
            body: "Branded Jaripeo activation at both venues. Fans see the bottle, scan to buy direct-to-home. (Strategy TBD)",
          },
        ].map((item, i) => (
          <FadeIn key={i} delay={0.15 + i * 0.08}>
            <div className="flex gap-4 mb-6">
              <span className="font-headline text-gold text-5xl leading-none">{item.num}</span>
              <div>
                <h4 className="font-body font-bold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="font-body text-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.4}>
          <div className="flex gap-4 mb-4">
            <span className="font-headline text-gold text-5xl leading-none">+</span>
            <div>
              <h4 className="font-body font-bold text-foreground text-sm mb-1">On-Premise Sales (Optional)</h4>
              <p className="font-body text-foreground text-sm leading-relaxed">
                Jaripeo available by the glass at event venues. Structure &amp; Revenue economics TBD.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* RIGHT — Mashbill's Role */}
      <div>
        <FadeIn delay={0.1}>
          <p className="font-body text-gold text-xs tracking-[0.3em] font-semibold mb-6">MASHBILL'S ROLE</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="border-l-4 border-gold rounded-lg p-6" style={{ background: "#1a1a1a" }}>
            <ul className="font-body text-foreground text-sm leading-relaxed space-y-3 list-disc list-inside">
              <li>Covers all costs (no capital investment by PBR)</li>
              <li>Provides the Jaripeo brand</li>
              <li>Makes the exquisite juice</li>
              <li>Manages production</li>
              <li>Legal compliance — TTB approval &amp; necessary licenses</li>
              <li>E-commerce site build and store management</li>
              <li>Warehouse storage &amp; fulfillment</li>
              <li>Customer service</li>
              <li>Creation of all marketing assets</li>
              <li>Reporting, accounting and settlement</li>
            </ul>
            <p className="font-body font-bold text-gold text-sm mt-6">
              Mashbill handles 100% of operations. End to end.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </Slide>
);
