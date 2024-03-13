"use client";

import React, { useState } from "react";
import SubmitDonationButton from "./SubmitDonationButton";
import { Box } from "@mui/material";
import DonationDialog from "../../../DonationDialog";

const QuickDonate = ({ locale }: { locale: "ar" | "en" }) => {
  const [donationFormOpen, setDonationFormOpen] = useState(false);

  const openDonationForm = () => {
    setDonationFormOpen(true);
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <SubmitDonationButton handleSubmit={openDonationForm} locale={locale} />
      <DonationDialog
        locale="en"
        donationFormOpen={donationFormOpen}
        setDonationFormOpen={setDonationFormOpen}
      />
    </Box>
  );
};

export default QuickDonate;
