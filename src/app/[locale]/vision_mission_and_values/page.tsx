import MissionVisionAndValues from "@/src/components/aboutUs/vision";
import React from "react";

const VisionMissionAndValuesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return <MissionVisionAndValues locale={locale} />;
};

export default VisionMissionAndValuesPage;
