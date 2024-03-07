import Box from "@mui/material/Box";
import React from "react";
import KafalaGuideTabs from "./kafalaGuideTabs";
import { Typography } from "@mui/material";
import { useLocale } from "next-intl";

const KafalaGuidePage = () => {
  const locale = useLocale();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          marginTop: "20px",
          fontSize: "38px",
          lineHeight: "44px",
        }}
        color="black"
      >
        {locale === "en" ? "Kafala Guide" : "دليل الكفالة"}
      </Typography>
      <KafalaGuideTabs />
    </Box>
  );
};

export default KafalaGuidePage;
