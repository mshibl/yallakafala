"use client";

import ErrorBoundary from "@/src/components/ErrorBoundary";
import ETapestryVolunteerForm from "@/src/components/ETapestryVolunteerForm";
import { useLocationData } from "@/src/utils/useLocationData";
import { Box, Typography } from "@mui/material";

const VolunteerPage = ({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) => {
  const { locationData, loading, error } = useLocationData();
  if (loading || error || !locationData) return <Box height="500px" />;

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
            {locale === "ar" ? "تطوع معنا" : "Volunteer with us"}
          </Typography>
        </Box>
        <ETapestryVolunteerForm locale={locale} show={true} />
      </Box>
    </ErrorBoundary>
  );
};

export default VolunteerPage;
