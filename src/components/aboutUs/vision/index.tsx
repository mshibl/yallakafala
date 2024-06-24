import React from "react";
import HelpChildrenAndFamilies from "../helpChildrenAndFamilies";
import Mission from "./mission";
import Values from "./values";
import Vision from "./vision";

const MissionVisionAndValues = ({ locale }: { locale: string }) => {
  return (
    <>
      <Vision locale={locale} />
      <Mission locale={locale} />
      <Values locale={locale} />
      <HelpChildrenAndFamilies locale={locale} />
    </>
  );
};

export default MissionVisionAndValues;
