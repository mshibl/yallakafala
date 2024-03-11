import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import Stories from "@/src/components/Stories";
import StoriesPageHeader from "@/src/components/Stories/StoriesPageHeader";
import { Box } from "@mui/material";
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
        <Stories locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoriesPage;
