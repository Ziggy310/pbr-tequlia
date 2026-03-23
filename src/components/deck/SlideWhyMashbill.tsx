import { Slide, FadeIn } from "./DeckPrimitives";

export const SlideWhyMashbill = () => (
  <Slide bg="secondary">
    <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none z-0 overflow-hidden">
      <span className="font-headline text-[120px] md:text-[200px] tracking-widest leading-none" style={{ color: "rgba(201,160,82,0.06)" }}>
        JARIPEO
      </span>
    </div>

    <div className="relative z-10">
      <FadeIn>
        <h2 className="font-headline text-gold text-[80px] md:text-[120px] tracking-wider leading-none mb-2">JARIPEO</h2>
      </FadeIn>
      <FadeIn delay={0.05}>
        <p className="font-body text-subtext text-xs tracking-[0.3em] text-center mb-10">2 DROPS</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn delay={0.1}>
          <div className="border-l-4 border-gold bg-background rounded-lg p-6 md:p-8 h-full">
            <span className="inline-block font-body text-xs tracking-[0.2em] text-background bg-gold rounded-full px-4 py-1 mb-4 font-semibold">DROP 1 — MAY</span>
            <h3 className="font-headline text-foreground text-3xl md:text-4xl tracking-wide mb-3">EL CAMPEÓN</h3>
            <div className="h-px bg-gold opacity-70 mb-3" />
            <p className="font-body font-bold text-foreground text-base mb-1">UNLEASH THE BEAST</p>
            <p className="font-accent text-subtext text-sm">PBR World Finals • Fort Worth &amp; Arlington, TX</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="border-l-4 border-gold bg-background rounded-lg p-6 md:p-8 h-full">
            <span className="inline-block font-body text-xs tracking-[0.2em] text-background bg-gold rounded-full px-4 py-1 mb-4 font-semibold">DROP 2 — JULY</span>
            <h3 className="font-headline text-foreground text-3xl md:text-4xl tracking-wide mb-3">EL HOMBRE</h3>
            <div className="h-px bg-gold opacity-70 mb-3" />
            <p className="font-body font-bold text-foreground text-base mb-1">LAST COWBOY STANDING</p>
            <p className="font-accent text-subtext text-sm">Best of the West • Canvas Stadium, Fort Collins, CO</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </Slide>
);
