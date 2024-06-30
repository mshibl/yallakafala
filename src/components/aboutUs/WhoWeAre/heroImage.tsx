import { Box } from "@mui/material";
import React from "react";

const HeroImage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "250px", md: "450px" },
        objectFit: "cover",
        objectPosition: "center",
      }}
      component={"img"}
      src="/images/who_we_are.png"
    />
  );
};

export default HeroImage;
