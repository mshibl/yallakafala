import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import FaqsList from "./FaqsList";
import ErrorBoundary from "../ErrorBoundary";
import { Box } from "@mui/material";

const ErrorFallback = () => {
  // TODO: Implement error page
  return <Box>Error</Box>;
};

const LoadingFallback = () => {
  // TODO: Implement loading page
  return <Box height="500px">Loading...</Box>;
};

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
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<LoadingFallback />}>
          <FaqsList />
        </Suspense>
      </ErrorBoundary>
    </Grid>
  );
};

export default FAQs;
