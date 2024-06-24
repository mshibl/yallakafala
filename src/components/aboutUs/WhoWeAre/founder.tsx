import { Box, Typography } from "@mui/material";
import React from "react";

const Founder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        marginTop: { xs: "20px", lg: "150px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          position: "relative",
          justifyContent: "end",
          backgroundColor: "secondary.main",
          paddingY: { xs: "40px", lg: "50px" },
          paddingX: { xs: "32px", lg: "180px" },
          paddingLeft: { xs: "32px", lg: "450px" },
          borderRadius: { lg: "1000px 0px 0px 1000px" },
          width: { xs: "100%", lg: "95%" },
        }}
      >
        <Box
          sx={{
            left: { lg: "-40px" },
            top: { lg: "-90px" },
            position: { xs: "relative", lg: "absolute" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { lg: "430px" },
              height: { lg: "400px" },
            }}
          >
            <Box
              sx={{
                position: { xs: "relative", lg: "absolute" },
                zIndex: "1",
                width: "100%",
              }}
              component={"img"}
              src="/images/founder.png"
            ></Box>
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                position: "absolute",
                backgroundColor: "secondary.main",
                width: "100%",
                height: "90%",
                top: "-25px",
                left: "-20px",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                position: "absolute",
                backgroundColor: "primary.main",
                width: "100%",
                height: "90%",
                bottom: "-20px",
                right: "-20px",
                borderRadius: "8px",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            // width: { xs: "100%", lg: "60%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", lg: "50px" },
              fontWeight: "bold",
              marginBottom: { xs: "10px", lg: "35px" },
              lineHeight: "32px",
              color: "white",
              width: "100%",
            }}
            variant="h2"
          >
            Our Founder
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", lg: "24px" },
              lineHeight: { xs: "25px", lg: "32px" },
              color: "white",
            }}
            variant="body1"
          >
            Rasha Mekky has over 25 years of experience in Child Development,
            Child Assessment, and Positive Discipline. Her journey began with
            the Kafala of her son Mostafa eight years ago, which inspired her to
            launch Yalla Kafala. Rasha also established Little Pharaohs daycare
            in the San Francisco Bay Area in 2015.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Founder;
