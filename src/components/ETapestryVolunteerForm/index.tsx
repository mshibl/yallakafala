"use client";

import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

/**
 * ETapestryVolunteerForm relies on the eTapestry iframe volunteer form.
 */

const ETapestryVolunteerForm = ({
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
              ? "جاري تحميل نموذج التطوع..."
              : "Loading volunteer form..."}
          </Typography>
        </Box>
      )}

      <Box height="800px" flexGrow={1}>
        <iframe
          id="etapIframe"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            display: show ? "block" : "none",
            visibility: iframeLoading ? "hidden" : "visible",
          }}
          src="https://app.etapestry.com/onlineforms/YallaKafala/volunteer.html"
          onLoad={handleIframeDoneLoading}
        ></iframe>
      </Box>
    </Box>
  );
};

export default ETapestryVolunteerForm;
