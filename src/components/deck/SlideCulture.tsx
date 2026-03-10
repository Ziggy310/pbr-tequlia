import { Slide, FadeIn, StatBlock } from "./DeckPrimitives";

export const SlideCulture = () => (
  <Slide bg="secondary">
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        THE CULTURE FINALLY CAUGHT UP TO PBR
      </h2>
    </FadeIn>
    <div className="space-y-2">
      <StatBlock delay={0.1} headline="85 MILLION FANS GLOBALLY" subtext="44 million TV viewers in 2025. Paramount+ signed a landmark 5-year streaming deal as the exclusive home of Unleash The Beast." />
      <StatBlock delay={0.2} headline="MADISON SQUARE GARDEN — SOLD OUT 3 CONSECUTIVE NIGHTS" subtext="January 2025. First time in nearly 20 years." />
      <StatBlock delay={0.3} headline="650,000 NEW SOCIAL FOLLOWERS IN EARLY 2025 ALONE" subtext="Nearly matching all of 2024. Majority ages 18–35. TikTok following approaching 3 million." />
      <StatBlock delay={0.4} headline="COWBOYCORE IS POP CULTURE NOW" subtext="Beyoncé. Pharrell at Louis Vuitton. Pinterest: 8,700% spike in 'country glam' searches. Western style is everywhere." />
      <StatBlock delay={0.5} headline="PBR IS NOW UNDER TKO GROUP HOLDINGS" subtext="The same entity behind UFC and WWE. The infrastructure for a global brand is in place." />
    </div>
    <FadeIn delay={0.6}>
      <p className="font-accent text-gold text-lg mt-8 text-center">
        The audience is primed. The cultural tailwind is real. The spirits category is wide open.
      </p>
    </FadeIn>
  </Slide>
);
