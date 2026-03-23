import { Slide, FadeIn, GoldRule } from "./DeckPrimitives";

export const SlideClose = () => (
  <Slide bg="primary">
    <FadeIn>
      <p className="font-body text-subtext text-xs tracking-[0.3em] mb-4">THE POSSIBILITIES</p>
    </FadeIn>
    <FadeIn delay={0.05}>
      <h2 className="font-headline text-foreground text-4xl md:text-[52px] tracking-wide leading-none mb-8">
        THE POSSIBILITIES ARE ENDLESS.
      </h2>
    </FadeIn>

    <div className="space-y-4 mb-8">
      <FadeIn delay={0.1}>
        <div className="border-l-[3px] border-gold rounded-lg p-6" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-foreground text-base mb-2">
            Eventually implement Augmented Reality — Every Bottle Tells a Story Inspiring Fans To Share Them Via Social Igniting Viral Moments
          </h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Fans point their phone at any Jaripeo bottle and unlock exclusive content — epic bull riding moments, champion rider messages, event highlights, behind-the-scenes footage. Every drop tells a different story. Every bottle becomes a collectible experience.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="border-l-[3px] border-gold rounded-lg p-6" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-foreground text-base mb-2">Product Expansion</h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Once the tequila category is established we can expand into other spirits such as vodka, rum, gin etc. ...including flavored spirits.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="border-l-[3px] border-gold rounded-lg p-6" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-gold text-base mb-2">MULTI SALES CHANNELS</h4>
          <p className="font-body text-foreground text-sm leading-relaxed">
            Once Direct-To-Fan is proven we can launch the brand into retail.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <div className="border-l-[3px] border-gold rounded-lg p-6" style={{ background: "#1a1a1a" }}>
          <h4 className="font-body font-bold text-foreground text-base mb-2">International Expansion</h4>
        </div>
      </FadeIn>
    </div>

    {/* Gold footer bar */}
    <FadeIn delay={0.3}>
      <div className="bg-gold rounded-lg py-4 px-6 text-center">
        <p className="font-body font-bold text-background text-sm md:text-base">
          Every event. Every champion. Every moment. A new drop. A new story. A growing brand.
        </p>
      </div>
    </FadeIn>
  </Slide>
);
