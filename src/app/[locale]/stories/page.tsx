import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import StoriesPageHeader from "@/src/components/Stories/StoriesPageHeader";
import StoryCard from "@/src/components/Stories/StoryCard";
import { Suspense } from "react";

const StoriesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <StoriesPageHeader locale={locale} />
        <StoryCard />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoriesPage;
