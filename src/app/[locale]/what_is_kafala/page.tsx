import React from "react";
import { Box } from "@mui/material";
import IntroParagraphs from "./introParagraphs";
import FirstHadith from "./firstHadith";
import SecondHadith from "./secondHadith";
import Footnotes from "./footnotes";
import References from "./references";

const WhatIsKafalaPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "940px",
        margin: "auto",
        paddingY: "60px",
        paddingX: "20px",
      }}
    >
      <IntroParagraphs />
      <FirstHadith />
      <SecondHadith />
      <Footnotes />
      <References />
    </Box>
  );
};

export default WhatIsKafalaPage;
