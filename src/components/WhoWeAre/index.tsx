import type { Locale } from "@/components/Providers/LocaleProvider";
import { HeroSection } from "./HeroSection";
import { OurStorySection } from "./OurStorySection";
import { TeamSection } from "./TeamSection";
import { VideoSection } from "./VideoSection";

const WhoWeAre = ({ locale }: { locale: Locale }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection locale={locale} />
        <OurStorySection locale={locale} />
        <TeamSection locale={locale} />
        <VideoSection locale={locale} />
      </main>
    </div>
  );
};

export default WhoWeAre;
