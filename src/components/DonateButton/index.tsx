import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button, SxProps } from "@mui/material";

function DonateButton() {
  const locale = useLocale();

  return (
    <Button
      variant="contained"
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
  );
}
export default DonateButton;
