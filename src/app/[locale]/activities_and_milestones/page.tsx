import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import { Box } from "@mui/material";
import { Suspense } from "react";

const ActivitiesAndMilestonesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Box>Hello World</Box>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ActivitiesAndMilestonesPage;
