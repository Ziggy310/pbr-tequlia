import { Slide, FadeIn } from "./DeckPrimitives";

export const SlideMasterPlay = () => (
  <Slide bg="secondary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">THE PROPOSAL</p>
    </FadeIn>

    <FadeIn delay={0.1}>
      <div className="border-l-4 border-gold rounded-lg p-8 md:p-10 mb-6" style={{ background: "#1a1a1a" }}>
        <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none">
          DO TWO TEST DROPS TO PROVE CONCEPT
        </h2>
      </div>
    </FadeIn>

    <FadeIn delay={0.15}>
      <div className="flex flex-col items-center my-4">
        <div className="h-px bg-gold w-[40%] opacity-70" />
        <div className="text-gold text-2xl mt-1">▼</div>
      </div>
    </FadeIn>

    <FadeIn delay={0.2}>
      <div className="border-l-4 border-gold rounded-lg p-8 md:p-10" style={{ background: "#1a1a1a" }}>
        <h2 className="font-headline text-foreground text-4xl md:text-[52px] tracking-wide leading-none">
          ONCE CONCEPT IS PROVEN PROVIDE A PATH FOR PBR TO OBTAIN 50% OWNERSHIP (STRUCTURE TBD)
        </h2>
      </div>
    </FadeIn>
  </Slide>
);
