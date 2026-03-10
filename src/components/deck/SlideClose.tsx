import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

export const SlideClose = () => (
  <Slide bg="primary" glowStrong>
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-20">
      <FadeIn>
        <p className="font-body text-subtext text-xs tracking-[0.3em] mb-8">85 MILLION FANS. NO TEQUILA. UNTIL NOW.</p>
      </FadeIn>
      <FadeIn delay={0.1}><GoldRule width="30%" /></FadeIn>
      <FadeIn delay={0.2}>
        <h2 className="font-headline text-gold text-7xl md:text-[80px] tracking-wider my-4">JARIPEO</h2>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="font-accent text-foreground text-2xl mb-4">The spirit of the eight seconds.</p>
      </FadeIn>
      <FadeIn delay={0.35}><GoldRule width="30%" /></FadeIn>
      <FadeIn delay={0.4}>
        <p className="font-body text-foreground text-base leading-[1.8] max-w-[480px] mt-6 mb-8">
          Bull riding started in Mexico. Tequila comes from Mexico. PBR's most passionate fans are Mexican.
          <br /><br />
          This brand was always waiting to be built. The audience exists. The cultural moment is here. The category gap is real.
        </p>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="font-body font-semibold text-foreground text-lg mb-2">Mashbill has the infrastructure. PBR has the audience.</p>
      </FadeIn>
      <FadeIn delay={0.55}>
        <h3 className="font-headline text-gold text-4xl tracking-wide mb-10">LET'S BUILD JARIPEO.</h3>
      </FadeIn>
      <FadeIn delay={0.6}>
        <a
          href="mailto:info@mashbillspirits.com"
          className="inline-block bg-red hover:bg-red/90 text-foreground font-body font-semibold text-base px-10 py-4 rounded-full transition-colors"
        >
          REACH OUT
        </a>
      </FadeIn>
      <div className="mt-16 space-y-1">
        <FadeIn delay={0.7}>
          <p className="font-body text-subtext text-xs">MashbillSpirits.com | Confidential</p>
        </FadeIn>
        <FadeIn delay={0.75}>
          <p className="font-body text-subtext text-xs tracking-widest">MASHBILL SPIRITS × PBR × JARIPEO</p>
        </FadeIn>
      </div>
    </div>
  </Slide>
);
