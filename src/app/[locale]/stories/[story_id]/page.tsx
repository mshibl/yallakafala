import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import Story from "@/src/components/Stories/Story";
import { Suspense } from "react";

const StoryPage = ({
  params: { locale, story_id },
}: {
  params: { locale: string; story_id: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Story story_id={story_id} locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoryPage;
