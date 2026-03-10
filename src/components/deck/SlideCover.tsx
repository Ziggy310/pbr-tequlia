import { FadeIn, GoldRule } from "./DeckPrimitives";
import coverBottle from "@/assets/cover-bottle.png";

export const SlideCover = () => (
  <section className="min-h-screen w-full bg-background leather-texture relative overflow-hidden">
    <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
      {/* Mobile image - top */}
      <div
        className="block md:hidden w-full relative"
        style={{ height: "45vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${coverBottle})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0D0D0D 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Left column - text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-16 md:pl-12 md:pr-8">
        <div>
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
        </div>
        <div className="mt-auto pt-20">
          <FadeIn delay={0.4}>
            <p className="font-body text-subtext text-xs tracking-widest">MashbillSpirits.com</p>
          </FadeIn>
        </div>
      </div>

      {/* Right column - image (desktop) */}
      <div className="hidden md:block w-[45%] relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${coverBottle})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0D0D0D 0%, transparent 40%)",
          }}
        />
      </div>
    </div>
  </section>
);
