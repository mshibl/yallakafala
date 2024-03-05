import Typography from "@mui/material/Typography";
import React from "react";
interface SectionListProps {
  content: string[];
}
const SectionList: React.FC<SectionListProps> = ({ content }) => {
  return (
    <ul style={{ marginTop: "0" }}>
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
  );
};

export default SectionList;
