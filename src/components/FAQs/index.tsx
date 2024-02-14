import React from "react";
import Grid from "@mui/material/Grid";
import FaqsList from "./FaqsList";

const FAQs = () => {
  return (
    <Grid
      spacing={5}
      justifyContent={"center"}
      alignContent={"center"}
      container
      sx={{
        px: { xs: 20, md: 45 },
        pt: { xs: 17, md: 34 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <FaqsList />
    </Grid>
  );
};

export default FAQs;
