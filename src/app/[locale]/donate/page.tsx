"use client";

import ETapestryDonationForm from "@/src/components/ETapestryDonationForm";
import EgyptDonationOptions from "@/src/components/EgyptDonationOptions";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import { useLocationData } from "@/src/utils/useLocationData";
import { Box, Typography } from "@mui/material";

const DonatePage = ({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) => {
  const { locationData, loading, error } = useLocationData();
  if (loading || error || !locationData) return <Box height="500px" />;

  const country = locationData?.country.toLowerCase();

  return (
    <ErrorBoundary locale={locale}>
      <Box mb="100px" px={{ xs: "16px", md: "100px" }}>
        <Box
          sx={{
            textAlign: { xs: "center", md: "center" },
            py: "40px",
          }}
        >
          <Typography variant="h4" color="primary.main" fontWeight={500}>
            {locale === "ar" ? "التبرع" : "Donation"}
          </Typography>
        </Box>
        {country === "eg" ? (
          <EgyptDonationOptions locale={locale} />
        ) : (
          <ETapestryDonationForm locale={locale} show={true} />
        )}
      </Box>
    </ErrorBoundary>
  );
};

export default DonatePage;
