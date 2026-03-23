import { Slide, FadeIn } from "./DeckPrimitives";

export const SlideFit = () => (
  <Slide bg="primary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">SUGGESTED LAUNCH PRODUCT</p>
    </FadeIn>

    <FadeIn delay={0.05}>
      <span className="font-accent text-gold text-8xl leading-none block mb-0">"</span>
    </FadeIn>

    <FadeIn delay={0.1}>
      <div className="border-l-4 border-gold pl-6 mb-8">
        <p className="font-accent text-foreground text-xl md:text-[28px] leading-relaxed">
          We agree tequila is the lead spirit. For the pilot drops, we recommend starting with Reposado — available now, no production delays. Reposado to prove the concept. Tequila to drive the stake in the ground.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={0.15}>
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-gold opacity-70" />
        <span className="font-body text-subtext text-xs tracking-[0.3em]">WHY IT WORKS</span>
        <div className="flex-1 h-px bg-gold opacity-70" />
      </div>
    </FadeIn>

    <FadeIn delay={0.2}>
      <div className="border border-gold rounded-lg p-6 md:p-8">
        <p className="font-accent text-foreground text-base md:text-lg leading-relaxed">
          A premium Reposado tequila finished in American whiskey barrels — bridging Mexican tequila tradition and American cowboy identity. Purpose-built for PBR's 14M+ Hispanic fans and the broader World Finals audience.
        </p>
      </div>
    </FadeIn>
  </Slide>
);
