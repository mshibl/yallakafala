import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import Partnerships from "@/src/components/Partnerships";
import { Suspense } from "react";

const PartnershipsPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Partnerships locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default PartnershipsPage;
