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
        <Box mb="100px">
          <StoriesPageHeader locale={locale} />
          <Stories locale={locale} />
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoriesPage;
