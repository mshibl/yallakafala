"use client";

import AchievementsSection from "@/src/components/AchievementsSection";
import ActivitiesSection from "@/src/components/ActivitiesSection";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import MilestonesSection from "@/src/components/MilestonesSection";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import { Box } from "@mui/material";
import Image from "next/image";
import { Suspense } from "react";

const ActivitiesAndMilestonesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const isMD = useResponsiveBreakpoint("md");

  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
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

        <ActivitiesSection isMD={isMD} locale={locale} />

        <AchievementsSection isMD={isMD} locale={locale} />

        <MilestonesSection isMD={isMD} locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ActivitiesAndMilestonesPage;
