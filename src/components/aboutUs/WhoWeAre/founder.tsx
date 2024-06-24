import { Box, Typography } from "@mui/material";
import React from "react";

const Founder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        marginTop: { xs: "20px", md: "150px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "end",
          backgroundColor: "secondary.main",
          paddingY: { xs: "40px", md: "50px" },
          paddingX: { xs: "32px", md: "180px" },
          paddingLeft: { xs: "20px", md: "450px" },
          borderRadius: "1000px 0px 0px 1000px",
          width: "95%",
        }}
      >
        <Box
          sx={{
            left: "-40px",
            top: "-90px",
            position: "absolute",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "430px",
              height: "400px",
            }}
          >
            <Box
              sx={{ position: "absolute", zIndex: "2" }}
              component={"img"}
              src="/images/founder.png"
            ></Box>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "secondary.main",
                width: "100%",
                height: "90%",
                // zIndex: "-1",
                top: "-25px",
                left: "-25px",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "primary.main",
                width: "100%",
                height: "90%",
                // zIndex: "3",
                bottom: "-25px",
                right: "-25px",
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
            // width: { xs: "100%", md: "60%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "50px" },
              fontWeight: "bold",
              marginBottom: { xs: "10px", md: "35px" },
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
              fontSize: { xs: "16px", md: "24px" },
              lineHeight: { xs: "25px", md: "32px" },
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
