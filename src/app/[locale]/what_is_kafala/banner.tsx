import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React, { use } from "react";

const Banner = () => {
  const t = useTranslations("WhatIsKafala.Banner");

  return (
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/images/whatIsKafala/banner.webp")', // Replace with the path to your image
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: 250, // Adjust the height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: { xs: "0px", md: "40px" },
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: "38px",
          lineHeight: "44px",
          padding: "0 20px",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        {t("mainText")}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: { xs: "18px", md: "36px" },
          padding: "0 20px",
        }}
      >
        {t("subText")}
      </Typography>
    </Box>
  );
};

export default Banner;
