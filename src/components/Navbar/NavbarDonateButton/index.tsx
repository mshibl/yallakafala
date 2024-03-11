"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Button } from "@mui/material";
import DonationDialog from "../../DonationDialog";

function DonateButton() {
  const locale = useLocale();
  const [donationFormOpen, setDonationFormOpen] = React.useState(false);

  const openDonationForm = () => {
    setDonationFormOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={openDonationForm}
        sx={{
          fontWeight: 600,
          backgroundColor: "#87226C",
          color: "#FFFFFF",
          fontSize: "14px",
          borderRadius: "24px",
          textTransform: "none",
        }}
      >
        {locale === "en" ? "Donate" : "تبرع الآن"}
      </Button>
      <DonationDialog
        locale="en"
        donationFormOpen={donationFormOpen}
        setDonationFormOpen={setDonationFormOpen}
      />
    </>
  );
}
export default DonateButton;
