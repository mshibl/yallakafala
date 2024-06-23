"use client";

import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import { Box } from "@mui/material";
import Image from "next/image";

const ActivitiesAndMilestonesHero = () => {
  const isMD = useResponsiveBreakpoint("md");
  
  return (
    <Box
      id="activities-and-milestones-hero"
      position="relative"
      display="flex"
      justifyContent="center"
      height="50vw"
      maxHeight="600px"
    >
      <Image
        src="/images/yk-team-1.jpg"
        alt="Yalla Kafala Team Photo"
        fill={true}
        style={{
          objectFit: "cover",
          padding: isMD ? "30px" : "0",
          borderRadius: isMD ? "50px" : "0",
        }}
      />
    </Box>
  );
};

export default ActivitiesAndMilestonesHero;
