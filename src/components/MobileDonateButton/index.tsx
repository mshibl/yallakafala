"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import DonationDialog from "../DonationDialog";

const MobileDonationButton = ({ locale }: { locale: "ar" | "en" }) => {
  const [donationFormOpen, setDonationFormOpen] = useState(false);

  const openDonationForm = () => {
    setDonationFormOpen(true);
  };

  return (
    <Box
      width="100%"
      display={{ xs: "flex", md: "none" }}
      position="sticky"
      bottom={0}
    >
      <Button
        onClick={openDonationForm}
        variant="contained"
        fullWidth
        sx={{
          height: "64px",
          borderRadius: 0,
          color: "white",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        {locale === "ar" ? "تبرع الآن" : "Donate"}
      </Button>
      <DonationDialog
        locale={locale}
        donationFormOpen={donationFormOpen}
        setDonationFormOpen={setDonationFormOpen}
      />
    </Box>
  );
};

export default MobileDonationButton;
