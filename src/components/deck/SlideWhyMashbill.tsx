import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

const capabilities = [
  { title: "PRODUCT", body: "Formula, bottle, label, production" },
  { title: "COMPLIANCE", body: "DTC shipping to 40+ states through licensed retail partners as seller of record" },
  { title: "STOREFRONT", body: "Shopify-native fan experience built for drops, presales, and limited releases" },
  { title: "SPEED", body: "Brand approval to product in fans' hands: approximately 90 days. Presales begin sooner where permitted." },
  { title: "ZERO OPERATIONAL BURDEN", body: "PBR's team stays focused on the sport. Mashbill runs the operation end-to-end." },
  { title: "EQUITY PARTNERSHIP", body: "Not a royalty. Meaningful profit participation and brand exit upside." },
];

export const SlideWhyMashbill = () => (
  <Slide bg="secondary">
    <FadeIn>
      <h2 className="font-headline text-gold text-4xl md:text-[52px] tracking-wide leading-none mb-6">
        WE HANDLE EVERYTHING THAT WOULD OTHERWISE STOP THIS FROM HAPPENING
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="font-body font-semibold text-foreground text-lg mb-8">
        This is not an endorsement deal. PBR participates in meaningful profit share and brand exit upside.
      </p>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {capabilities.map((c, i) => (
        <FadeIn key={i} delay={0.15 + i * 0.08}>
          <div className="rounded-lg p-5 h-full" style={{ background: "rgba(201,160,82,0.06)", borderTop: "2px solid hsl(39, 50%, 55%)" }}>
            <h4 className="font-body font-semibold text-gold text-sm tracking-widest uppercase mb-2">{c.title}</h4>
            <p className="font-body text-foreground text-sm leading-relaxed">{c.body}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.6}>
      <GoldRule />
      <p className="font-accent text-foreground text-xl text-center">PBR's brand. Mashbill's engine.</p>
    </FadeIn>
  </Slide>
);
