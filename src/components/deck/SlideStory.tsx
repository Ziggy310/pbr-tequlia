import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

export const SlideStory = () => (
  <Slide bg="primary" glow>
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        BULL RIDING WAS BORN IN MEXICO. THE TEQUILA SHOULD BE TOO.
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="font-body text-foreground text-base leading-[1.7] mb-8">
        Bull riding didn't originate in Texas. It began in 16th-century Mexico as part of the charreada — Mexico's national rodeo tradition. The Mexican version, called jaripeo, is the direct ancestor of everything PBR does today.
      </p>
    </FadeIn>
    <div className="space-y-3 mb-8">
      {[
        "14 MILLION hardcore Mexican and Latino fans among the most passionate in the sport",
        "PBR ACTIVELY BROADCASTS IN SPANISH to audiences across the U.S., Mexico, and Latin America — a direct investment in the sport's massive Latino fanbase",
        "BRAZILIAN AND MEXICAN RIDERS dominate the standings. The sport's culture is as Latin as it is American.",
      ].map((text, i) => (
        <FadeIn key={i} delay={0.2 + i * 0.1}>
          <div className="flex gap-4 py-3 px-4 rounded" style={{ background: "rgba(201,160,82,0.07)" }}>
            <div className="w-[3px] bg-gold shrink-0 rounded-full" />
            <p className="font-body text-foreground text-sm leading-relaxed">{text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.5}>
      <div className="rounded-lg px-5 py-5 mb-8" style={{ background: "rgba(196,18,48,0.12)", borderLeft: "4px solid hsl(350, 83%, 42%)" }}>
        <p className="font-body font-semibold text-foreground text-lg mb-1">There is no PBR tequila. There has never been a PBR tequila.</p>
        <p className="font-body text-subtext text-sm">That's the opportunity — and the name has been waiting the whole time.</p>
      </div>
    </FadeIn>
    <FadeIn delay={0.6}>
      <div className="text-center">
        <GoldRule width="30%" />
        <h3 className="font-headline text-gold text-5xl md:text-[64px] tracking-wider my-4">JARIPEO</h3>
        <p className="font-accent text-foreground text-xl mb-2">The original Mexican word for bull riding.</p>
        <p className="font-body text-subtext text-sm">Premium spirits. Built for 85 million fans.</p>
        <GoldRule width="30%" />
      </div>
    </FadeIn>
  </Slide>
);
