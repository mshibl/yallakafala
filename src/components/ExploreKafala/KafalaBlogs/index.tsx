import BlogsSection from "./BlogsSection";
import type { Locale } from "@/components/Providers/LocaleProvider";

const KafalaBlogs = ({ locale }: { locale: Locale }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 md:pt-32">
        <BlogsSection locale={locale} />
      </main>
    </div>
  );
};

export default KafalaBlogs;
