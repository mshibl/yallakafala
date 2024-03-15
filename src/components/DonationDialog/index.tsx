"use client";

import React, { useState } from "react";
import Script from "next/script";
import CloseIcon from "@mui/icons-material/Close";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import DialogTransition from "../DialogTransition";
import {
  Box,
  CircularProgress,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";

/**
 * DonationDialog relies on the eTapestry donation form. The form is loaded in an iframe inside a dialog.
 * "eTapestry" is a third-party service that provides donation processing among other services to Yalla Kafala.
 */

const DonationDialog = ({
  locale,
  donationFormOpen,
  setDonationFormOpen,
}: {
  locale: "ar" | "en";
  donationFormOpen: boolean;
  setDonationFormOpen: (open: boolean) => void;
}) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeDoneLoading = () => {
    setIframeLoading(false);
  };

  const isMD = useResponsiveBreakpoint("md");

  return (
    <Dialog
      fullWidth
      open={donationFormOpen}
      onClose={() => {
        setDonationFormOpen(false);
        setIframeLoading(true);
      }}
      TransitionComponent={DialogTransition}
      fullScreen={!isMD}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
        borderBottom={"1px solid #2194BC"}
        p="10px"
      >
        <Typography variant="h6">
          {locale === "ar" ? "تبرع الى يلا كفالة" : "Donate to Yalla Kafala"}
        </Typography>

        <IconButton
          onClick={() => {
            setDonationFormOpen(false);
            setIframeLoading(true);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        height="100%"
        minHeight="500px"
        display="flex"
        flexDirection="column"
      >
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
          <Script
            type="text/JavaScript"
            src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
          ></Script>
          <iframe
            id="etapIframe"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              minHeight: "1407px",
              visibility: iframeLoading ? "hidden" : "visible",
            }}
            src="https://app.etapestry.com/onlineforms/YallaKafala/website-donation.html"
            onLoad={handleIframeDoneLoading}
          ></iframe>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DonationDialog;
