import Image from "next/image";
import type { Locale } from "@/components/Providers/LocaleProvider";

type LocalizedText = Record<Locale, string>;

interface ExploreKafalaHeroProps {
  locale: Locale;
  title: LocalizedText;
  description: LocalizedText;
  imageSrc: string;
  imageAlt: LocalizedText;
}

const ExploreKafalaHero = ({
  locale,
  title,
  description,
  imageSrc,
  imageAlt,
}: ExploreKafalaHeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-white pb-12 pt-28 md:pb-16 md:pt-36"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="animate-fade-in">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              {locale === "en" ? "Explore Kafala" : "استكشف الكفالة"}
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              {title[locale]}
            </h1>
            <div className="mb-6 h-1 w-20 rounded-full bg-primary"></div>
            <p className="max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
              {description[locale]}
            </p>
          </div>

          <div className="animate-fade-in md:pl-8">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-4 -translate-x-4 translate-y-4 rounded-[2rem] bg-primary/20 blur-3xl"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
                <Image
                  src={imageSrc}
                  alt={imageAlt[locale]}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreKafalaHero;
