import { Slide, FadeIn, StatBlock } from "./DeckPrimitives";

export const SlideStory = () => (
  <Slide bg="primary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">DIRECT-TO-FAN MODEL</p>
    </FadeIn>
    <FadeIn delay={0.05}>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        MASHBILL'S DIRECT-TO-FAN MODEL DELIVERS A LOW RISK, FLEXIBLE PATH TO SUCCESS
      </h2>
    </FadeIn>
    <div className="space-y-2">
      <StatBlock delay={0.1} headline="" subtext="Removes the pressure and capital requirements that come with starting at retail." />
      <StatBlock delay={0.2} headline="" subtext="Allows us to test and prove what products convert with fans." />
      <StatBlock delay={0.3} headline="" subtext="Provides heightened leverage once we are ready to bring the brand to retail." />
      <StatBlock delay={0.4} headline="" subtext="Establishes two sales channels which can offer exclusive products for each channel." />
    </div>
  </Slide>
);
