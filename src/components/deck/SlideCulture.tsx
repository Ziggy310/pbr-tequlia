import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

export const SlideCulture = () => (
  <Slide bg="secondary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">THE OPPORTUNITY</p>
    </FadeIn>
    <FadeIn delay={0.05}>
      <h2 className="font-headline text-foreground text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        PBR HAS MUCH MORE BRAND POWER THAN GEORGE CLOONEY.
      </h2>
    </FadeIn>

    {/* Gold bordered callout - two column */}
    <FadeIn delay={0.1}>
      <div className="border border-gold rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="md:w-2/3">
          <p className="font-body text-foreground text-base md:text-lg leading-relaxed">
            His brand — Casamigos Tequila — exited for <span className="font-semibold text-gold">$1 BILLION</span>.
          </p>
        </div>
        <div className="md:w-1/3 text-center">
          <span className="font-headline text-gold text-7xl md:text-[80px] leading-none">$1B</span>
        </div>
      </div>
    </FadeIn>

    <FadeIn delay={0.15}>
      <h3 className="font-headline text-gold text-2xl md:text-3xl tracking-wide mb-8">
        THIS OPPORTUNITY IS VERY REAL — 1ST DIRECT-TO-FAN THEN EXPAND INTO RETAIL
      </h3>
    </FadeIn>

    {/* 2x2 grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <FadeIn delay={0.2}>
        <div className="border border-gold rounded-lg p-5 h-full" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-foreground text-sm tracking-wide uppercase mb-3">
            MASHBILL HAS BUILT THE INFRASTRUCTURE &amp; HAS THE EXPERTISE
          </h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Multi-Tier Multi-Spirit Production, Direct-to-Fan compliance network (47 states), national retail distribution, e-commerce, fulfillment — all in place. Ready to go.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <div className="border border-gold rounded-lg p-5 h-full" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-foreground text-sm tracking-wide uppercase mb-3">
            PBR HAS THE AUDIENCE
          </h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            14M+ Hispanic fans make up a large portion of PBR's fan base that is the most loyal sports fan base in the country. The exact audience Jaripeo is built for.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="border border-gold rounded-lg p-5 h-full" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-gold text-sm tracking-wide uppercase mb-3">
            STRAIGHT FORWARD LOW RISK VALIDATION — 2 DROP TEST TO PROVE THE CONCEPT
          </h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Upon success, PBR gets the option for up to 50% of the Jaripeo brand. Structure TBD — whatever works for PBR's existing agreements.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.35}>
        <div className="border border-gold rounded-lg p-5 h-full" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-gold text-sm tracking-wide uppercase mb-3">
            ZERO CAPITAL EXPENSE TO PBR
          </h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Mashbill funds and operates everything. PBR invests its audience and promotional firepower. No cash. No risk.
          </p>
        </div>
      </FadeIn>
    </div>

    {/* Gold footer bar */}
    <FadeIn delay={0.4}>
      <div className="bg-gold rounded-lg py-4 px-6 text-center">
        <p className="font-body font-bold text-background text-sm md:text-base">
          If PBR selects to move forward it agrees to build a spirits brand together with Mashbill.
        </p>
      </div>
    </FadeIn>
  </Slide>
);
