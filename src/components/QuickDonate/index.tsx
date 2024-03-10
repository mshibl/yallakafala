"use client";

import React, { useState } from "react";
import SubmitDonationButton from "./SubmitDonationButton";
import Script from "next/script";
import CloseIcon from "@mui/icons-material/Close";
import { isUsingMobile } from "@/src/utils/mobile-utils";
import DialogTransition from "../DialogTransition";
import {
  Box,
  CircularProgress,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";

/**
 * QuickDonate relies on the eTapestry donation form. The form is loaded in an iframe inside a dialog.
 * "eTapestry" is a third-party service that provides donation processing among other services to Yalla Kafala.
 */

const QuickDonate = ({ locale }: { locale: "ar" | "en" }) => {
  const [donationFormOpen, setDonationFormOpen] = useState(false);

  const openDonationForm = () => {
    setDonationFormOpen(true);
  };

  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeDoneLoading = () => {
    setIframeLoading(false);
  };

  const isMobile = isUsingMobile();

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <SubmitDonationButton handleSubmit={openDonationForm} locale={locale} />
      <Dialog
        fullWidth
        keepMounted
        open={donationFormOpen}
        onClose={() => setDonationFormOpen(false)}
        TransitionComponent={DialogTransition}
        fullScreen={isMobile}
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

          <IconButton onClick={() => setDonationFormOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
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
                visibility: iframeLoading ? "hidden" : "visible",
              }}
              src="https://app.etapestry.com/onlineforms/YallaKafala/website-donation.html"
              onLoad={handleIframeDoneLoading}
            ></iframe>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default QuickDonate;
