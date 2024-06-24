import React from "react";
import HeroImage from "./heroImage";
import WhoWeAreText from "./whoWeAreText";
import HelpChildrenAndFamilies from "../helpChildrenAndFamilies";
import Initiatives from "./initiatives";
import YallaKafalaBeginning from "./beginning";
import Founder from "./founder";

const WhoWeAre = ({ locale }: { locale: string }) => {
  return (
    <>
      <HeroImage />
      <WhoWeAreText />
      <Founder />
      <YallaKafalaBeginning />
      <Initiatives />
      <HelpChildrenAndFamilies locale={locale} />
    </>
  );
};

export default WhoWeAre;
