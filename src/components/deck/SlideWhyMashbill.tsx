import { Slide, FadeIn } from "./DeckPrimitives";
import elHombreBottle from "@/assets/el-hombre-bottle.png";
import gamblerDaysPlaceholder from "@/assets/gambler-days-placeholder.png";

export const SlideWhyMashbill = () => (
  <Slide bg="secondary">
    <div className="relative z-10">
      <FadeIn>
        <p className="font-body text-xs tracking-[0.25em] uppercase text-subtext mb-2">Limited Edition</p>
        <h2 className="font-headline text-gold text-[52px] md:text-[60px] tracking-wider leading-none mb-8">THE DROPS</h2>
      </FadeIn>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
        {/* Vertical gold divider between columns */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: "rgba(201,160,82,0.2)" }} />

        {/* Left column — El Hombre */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center md:pr-8">
            <img src={elHombreBottle} alt="El Hombre bottle" className="h-[480px] w-full object-contain mb-6" />
            <div className="border-l-4 border-gold bg-background rounded-lg p-6 md:p-8 w-full">
              <span className="inline-block font-body text-xs tracking-[0.2em] text-background bg-gold rounded-full px-4 py-1 mb-4 font-semibold">DROP 1 — JULY</span>
              <h3 className="font-headline text-foreground text-3xl md:text-4xl tracking-wide mb-3">EL HOMBRE</h3>
              <div className="h-px bg-gold opacity-70 mb-3" />
              <p className="font-body font-bold text-foreground text-base mb-1">LAST COWBOY STANDING EDITION</p>
              <p className="font-accent text-subtext text-sm">Last Cowboy Standing • July 21–22 • Fort Collins, CO</p>
            </div>
          </div>
        </FadeIn>

        {/* Right column — Gambler Days */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center md:pl-8">
            <img src={gamblerDaysPlaceholder} alt="Gambler Days — Coming August" className="h-[480px] w-full object-contain mb-6" loading="lazy" />
            <div className="border-l-4 border-gold bg-background rounded-lg p-6 md:p-8 w-full">
              <span className="inline-block font-body text-xs tracking-[0.2em] text-background bg-gold rounded-full px-4 py-1 mb-4 font-semibold">DROP 2 — AUGUST</span>
              <h3 className="font-headline text-foreground text-3xl md:text-4xl tracking-wide mb-3">DEAD MAN'S HAND</h3>
              <div className="h-px bg-gold opacity-70 mb-3" />
              <p className="font-body font-bold text-foreground text-base mb-1">LIMITED EDITION SERIES</p>
              <p className="font-accent text-subtext text-sm">Dead Man's Hand • August 23–24 • Austin, TX</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-4">
        <div className="h-px w-full mb-4" style={{ backgroundColor: "rgba(201,160,82,0.2)" }} />
        <p className="font-body text-center" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          Official PBR trademarks, event names, and rider marks can be incorporated on any drop at PBR's direction.
        </p>
      </div>
    </div>
  </Slide>
);
