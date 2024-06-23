import AchievementsSection from "@/src/components/AchievementsSection";
import ActivitiesAndMilestonesHero from "@/src/components/ActivitiesAndMilestonesHero";
import ActivitiesSection from "@/src/components/ActivitiesSection";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import MilestonesSection from "@/src/components/MilestonesSection";
import OnGroundAccomplishments from "@/src/components/OnGroundAccomplishments";
import { Suspense } from "react";

const ActivitiesAndMilestonesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <ActivitiesAndMilestonesHero />

        <ActivitiesSection locale={locale} />

        <AchievementsSection locale={locale} />

        <MilestonesSection locale={locale} />

        <OnGroundAccomplishments locale={locale} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ActivitiesAndMilestonesPage;
