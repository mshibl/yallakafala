import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import React from "react";

interface ListSectionProps {
  title: string;
  content: string[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, content }) => {
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
      <ul>
        {content.map((item, index) => {
          return (
            <li key={index}>
              <Typography
                sx={{
                  display: "list-item",
                  marginBottom: "0px",
                  lineHeight: "32px",
                }}
                color={"black"}
                variant="body1"
                gutterBottom
              >
                {item}
              </Typography>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default ListSection;
