import React from "react";
import { Box, Typography } from "@mui/material";
import IntroParagraphs from "./introParagraphs";
import FirstHadith from "./firstHadith";
import SecondHadith from "./secondHadith";
import Footnotes from "./footnotes";
import References from "./references";
import Banner from "./banner";

const WhatIsKafalaPage = () => {
  return (
    <>
      <Banner />
      <Box
        sx={{
          maxWidth: "940px",
          margin: "auto",
          paddingY: { xs: "40px", md: "60px" },
          paddingX: "20px",
        }}
      >
        <IntroParagraphs />
        <FirstHadith />
        <SecondHadith />
        <Footnotes />
        <References />
      </Box>
    </>
  );
};

export default WhatIsKafalaPage;
