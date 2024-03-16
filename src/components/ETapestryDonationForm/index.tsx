"use client";

import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";

/**
 * ETapestryDonationForm relies on the eTapestry iframe donation form.
 * "eTapestry" is a third-party service that provides donation processing among other services to Yalla Kafala.
 */

const ETapestryDonationForm = ({
  locale,
  show,
}: {
  locale: string;
  show: boolean;
}) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeDoneLoading = () => {
    setIframeLoading(false);
  };

  const isMD = useResponsiveBreakpoint("md");

  return (
    <Box height="100%" minHeight="500px" display="flex" flexDirection="column">
      {iframeLoading && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt="20px"
        >
          <CircularProgress />
          <Typography
            align="center"
            pt="20px"
            pb="20px"
            fontWeight="bold"
            color="primary.main"
          >
            {locale === "ar"
              ? "جاري تحميل نموذج التبرع..."
              : "Loading donation form..."}
          </Typography>
        </Box>
      )}

      <Box height="100%">
        <iframe
          id="etapIframe"
          style={{
            border: "none",
            width: "100%",
            height: isMD ? "1200px" : "1500px",
            display: show ? "block" : "none",
            visibility: iframeLoading ? "hidden" : "visible",
          }}
          src="https://app.etapestry.com/onlineforms/YallaKafala/website-donation.html"
          onLoad={handleIframeDoneLoading}
        ></iframe>
      </Box>
    </Box>
  );
};

export default ETapestryDonationForm;
