import { convertGoogleDriveImageUrlToImageSrc } from "@/src/utils/string-utils";
import { Box, Typography } from "@mui/material";
import React from "react";

const YallaKafalaBeginning = ({ locale }: { locale: string }) => {
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
        {locale === "en" ? (
          <>
            The beginning of <br /> Yalla Kafala:
          </>
        ) : (
          "بداية يلا كفالة"
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: { xs: "20px", md: "40px" },
          height: { sx: "175px", md: "605px" },
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1pNG2124NcWwSvV3LuLmlhj8XtwJ2X7w1/preview"
          width="1065"
          height="100%"
          allow="autoplay"
        ></iframe>
      </Box>
    </Box>
  );
};

export default YallaKafalaBeginning;
