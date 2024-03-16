import ErrorBoundary from "@/src/components/ErrorBoundary";
import FAQs from "@/src/components/FAQs";
import FAQsPageHeader from "@/src/components/FAQs/FAQsPageHeader";
import LoadingFallback from "@/src/components/LoadingFallback";
import { Box } from "@mui/material";
import { Suspense } from "react";

const FAQsPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Box bgcolor="secondary.main">
          <FAQsPageHeader locale={locale} />
          <FAQs locale={locale} firstFaqOpen={true} />
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
};

export default FAQsPage;
