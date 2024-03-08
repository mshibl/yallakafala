import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface TextSectionProps {
  title: string;
  content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content }) => {
  return (
    <Box>
      <Typography
        color={"secondary.main"}
        sx={{
          fontSize: { xs: "26px", md: "40px" },
          marginBottom: "10px",
          lineHeight: { xs: "40px", md: "72px" },
        }}
        variant="h2"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        sx={{
          marginBottom: "10px",
          paddingBottom: "20px",
          lineHeight: "32px",
        }}
        color={"black"}
        variant="h6"
        gutterBottom
      >
        {content}
      </Typography>
    </Box>
  );
};

export default TextSection;
