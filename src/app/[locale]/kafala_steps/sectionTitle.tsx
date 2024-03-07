import Typography from "@mui/material/Typography";
import React from "react";

interface SectionTitleProps {
  title: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Typography
      color={"primary.main"}
      sx={{
        fontSize: { xs: "26px", md: "30px" },
        marginBottom: "0",
        lineHeight: { xs: "40px", md: "42px" },
      }}
      variant="h6"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
