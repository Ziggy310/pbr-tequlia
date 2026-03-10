import { Slide, FadeIn, GoldRule, FeatureBlock } from "./DeckPrimitives";

export const SlideFit = () => (
  <Slide bg="primary">
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-6">
        DIRECT-TO-FAN. AND WE UNDERSTAND YOUR CURRENT PARTNERS.
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="font-body text-foreground text-base leading-[1.7] mb-6">
        PBR already has spirits sponsors. We know that, we respect it, and Jaripeo is designed to complement — not collide. Jaripeo fills the one gap no current partner covers: tequila, the spirit most connected to the sport's largest passionate audience.
      </p>
    </FadeIn>
    <FadeIn delay={0.15}><GoldRule /></FadeIn>
    <FadeIn delay={0.2}>
      <p className="font-body font-semibold text-gold text-sm tracking-[0.2em] uppercase mb-6">WHAT NO TRADITIONAL SPIRITS PARTNER CAN OFFER</p>
    </FadeIn>
    <div className="space-y-2">
      <FeatureBlock delay={0.25} title="OWNED FAN DATA" body="Every other spirit deal PBR has lives in the 3-tier system. Data stops at the wholesaler. The fan relationship never starts. With Mashbill, PBR builds a direct fan commerce channel for the first time in spirits." />
      <FeatureBlock delay={0.35} title="DROP SCARCITY = EARNED MEDIA" body="Limited drops create urgency and sell-out moments. Every rider bottle a fan keeps on their shelf is a brand impression that compounds." />
      <FeatureBlock delay={0.45} title="A CUSTOMER LIST THAT BELONGS TO THE BRAND" body="Name, email, purchase history, location. Every buyer is a known fan. That list grows with every drop." />
      <FeatureBlock delay={0.55} title="ONE MORE THING WORTH KNOWING" variant="amber" body="Mashbill's DTC infrastructure isn't exclusive to Jaripeo. If PBR's current spirits sponsors want to reach fans directly — and any serious distiller would — Mashbill can power that channel for them too. We're open to being the infrastructure layer for the entire PBR spirits ecosystem." />
    </div>
  </Slide>
);
