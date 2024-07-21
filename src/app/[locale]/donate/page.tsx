"use client";

import PublicIcon from "@mui/icons-material/Public";
import ETapestryDonationForm from "@/src/components/ETapestryDonationForm";
import EgyptDonationOptions from "@/src/components/EgyptDonationOptions";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import { useLocationData } from "@/src/utils/useLocationData";
import { Box, Button, IconButton, Typography } from "@mui/material";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import { useState } from "react";

const DonatePage = ({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) => {
  const isMD = useResponsiveBreakpoint("md");
  const { locationData, loading, error } = useLocationData();
  const [showEtapestry, setShowEtapestry] = useState(false);

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
        {country === "eg" && !showEtapestry ? (
          <Box>
            <Box mb="20px" mx={isMD ? 0 : "22px"}>
              <Button
                variant="outlined"
                startIcon={
                  <Box
                    component="span"
                    display="flex"
                    alignItems="center"
                    ml={locale === "en" ? 0 : "12px"}
                  >
                    <PublicIcon />
                  </Box>
                }
                onClick={() => {
                  setShowEtapestry(true);
                }}
              >
                {locale === "en"
                  ? "Donate from outside of Egypt"
                  : "تبرع من خارج مصر"}
              </Button>
            </Box>
            <EgyptDonationOptions locale={locale} />
          </Box>
        ) : (
          <ETapestryDonationForm locale={locale} show={true} />
        )}
      </Box>
    </ErrorBoundary>
  );
};

export default DonatePage;
