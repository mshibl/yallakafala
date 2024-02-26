import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import Story from "@/src/components/Stories/Story";
import { Suspense } from "react";

const StoryPage = ({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Story id={id} locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoryPage;
