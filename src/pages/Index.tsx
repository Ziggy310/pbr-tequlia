import { SlideCover } from "@/components/deck/SlideCover";
import { SlideCulture } from "@/components/deck/SlideCulture";
import { SlideStory } from "@/components/deck/SlideStory";
import { SlideMasterPlay } from "@/components/deck/SlideMasterPlay";
import { SlideFit } from "@/components/deck/SlideFit";
import { SlideWhyMashbill } from "@/components/deck/SlideWhyMashbill";
import { SlideCase } from "@/components/deck/SlideCase";
import { SlideClose } from "@/components/deck/SlideClose";

const Index = () => (
  <main className="w-full overflow-x-hidden">
    <SlideCover />
    <SlideCulture />
    <SlideStory />
    <SlideMasterPlay />
    <SlideFit />
    <SlideWhyMashbill />
    <SlideCase />
    <SlideClose />
  </main>
);

export default Index;
