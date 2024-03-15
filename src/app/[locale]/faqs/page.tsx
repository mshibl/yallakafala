import ErrorBoundary from "@/src/components/ErrorBoundary";
import FAQs from "@/src/components/FAQs";
import FAQsPageHeader from "@/src/components/FAQs/FAQsPageHeader";
import LoadingFallback from "@/src/components/LoadingFallback";
import { Suspense } from "react";

const FAQsPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <FAQsPageHeader locale={locale} />
        <FAQs locale={locale} firstFaqOpen={true} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FAQsPage;
