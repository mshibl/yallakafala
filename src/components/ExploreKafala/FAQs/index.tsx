import type { Locale } from "@/components/Providers/LocaleProvider";
import FAQsHeader from "./FAQsHeader";
import FAQsAccordion from "./FAQsAccordion";

const FAQs = ({ locale }: { locale: Locale }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FAQsHeader locale={locale} />
            <FAQsAccordion locale={locale} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQs;
