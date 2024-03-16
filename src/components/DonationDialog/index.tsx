"use client";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import DialogTransition from "../DialogTransition";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import ETapestryDonationForm from "../ETapestryDonationForm";
import { useLocationData } from "@/src/utils/useLocationData";
import EgyptDonationOptions from "../EgyptDonationOptions";

const DonationDialog = ({
  locale,
  donationFormOpen,
  setDonationFormOpen,
}: {
  locale: string;
  donationFormOpen: boolean;
  setDonationFormOpen: (open: boolean) => void;
}) => {
  const isMD = useResponsiveBreakpoint("md");

  const { locationData, loading, error } = useLocationData();
  if (loading || error || !locationData) return null;

  const country = locationData?.country.toLowerCase();

  return (
    <Dialog
      fullWidth
      keepMounted
      open={donationFormOpen}
      TransitionComponent={DialogTransition}
      fullScreen={!isMD}
      onClose={() => {
        setDonationFormOpen(false);
      }}
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
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {country === "eg" ? (
        <Box padding="20px">
          <EgyptDonationOptions locale={locale} />
        </Box>
      ) : (
        <ETapestryDonationForm locale={locale} show={donationFormOpen} />
      )}
    </Dialog>
  );
};

export default DonationDialog;
