import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          paddingX: { xs: "40px", md: "180px" },
          mb: 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "50px" },
            marginBottom: { xs: "10px", md: "35px" },
            marginTop: { xs: "28px", md: "100px" },
            lineHeight: "32px",
            color: "primary.main",
          }}
          variant="h2"
        >
          Our Vision
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "24px" },
            lineHeight: { xs: "25px", md: "32px" },
          }}
          variant="body1"
        >
          Building the best possible future for orphans and kafala families.
        </Typography>
      </Box>
      <Box
        component={"img"}
        sx={{
          paddingX: { xs: "24px", md: "24px" },
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
          height: { xs: "190px", md: "532px" },
          width: { xs: "390px", md: "1064px" },
        }}
        alt="Vision"
        src="/images/mission_vision_image.png"
      ></Box>
    </Box>
  );
};

export default Vision;
