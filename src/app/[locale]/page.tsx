"use client";

import { loadBlackbaudCheckout } from "@/src/utils/blackbaud-checkout";
import { Box } from "@mui/material";

const Home = () => {
  loadBlackbaudCheckout()

  return <Box height="500px"></Box>;
};

export default Home;
