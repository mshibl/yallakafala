import { Box, Typography } from "@mui/material";
import React from "react";

const WhoWeAreText = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "40px", md: "180px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          marginTop: { xs: "20px", md: "40px" },
          lineHeight: "32px",
          color: "primary.main",
        }}
        variant="h2"
      >
        Our Story
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "24px" },
          lineHeight: { xs: "25px", md: "32px" },
        }}
        variant="body1"
      >
        Yalla Kafala is a pioneering NGO founded in 2020, dedicated to reshaping
        child welfare in Egypt through alternative care options and Kafala
        (guardianship/adoption).
        <br />
        <br /> Inspired by our founder Rasha Mekky's personal journey and her
        Kafala of her son Mostafa, we launched Egypt's first Kafala-dedicated
        website and established Yalla Kafala.
        <br />
        <br /> With headquarters in Egypt and San Francisco, we strive to
        provide orphans with nurturing home environments through innovative care
        alternatives, support services, and advocacy.
      </Typography>
    </Box>
  );
};

export default WhoWeAreText;
