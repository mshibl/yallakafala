import { Box, Typography } from "@mui/material";
import React from "react";

const YallaKafalaBeginning = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "32px", md: "180px" },
        paddingTop: { xs: "24px", md: "58px" },
        minHeight: { xs: "320px", md: "911px" },
        marginTop: { xs: "20px", md: "40px" },
        backgroundColor: "secondary.main",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          lineHeight: { sx: "32px", md: "61px" },
        }}
        variant="h2"
      >
        The beginning of <br />
        Yalla Kafala
      </Typography>
    </Box>
  );
};

export default YallaKafalaBeginning;
