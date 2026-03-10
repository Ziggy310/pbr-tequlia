import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

export const SlideCover = () => (
  <Slide bg="primary" glow>
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-20">
      <FadeIn>
        <p className="font-body text-subtext text-xs tracking-[0.3em] mb-12">CONFIDENTIAL PARTNERSHIP OVERVIEW</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="font-headline text-gold text-6xl md:text-[72px] tracking-wider leading-none">PBR × MASHBILL SPIRITS</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <GoldRule />
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="font-accent text-foreground text-xl md:text-[22px] max-w-lg leading-relaxed">
          A Master Spirits Brand Built for the World's Most Passionate Fanbase
        </p>
      </FadeIn>
      <div className="mt-auto pt-20">
        <FadeIn delay={0.4}>
          <p className="font-body text-subtext text-xs tracking-widest">MashbillSpirits.com</p>
        </FadeIn>
      </div>
    </div>
  </Slide>
);
