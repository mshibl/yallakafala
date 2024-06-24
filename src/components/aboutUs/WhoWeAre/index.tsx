import React from "react";
import HeroImage from "./heroImage";
import WhoWeAreText from "./whoWeAreText";
import HelpChildrenAndFamilies from "../helpChildrenAndFamilies";
import Initiatives from "./initiatives";
import YallaKafalaBeginning from "./beginning";

const WhoWeAre = () => {
  return (
    <>
      <HeroImage />
      <WhoWeAreText />
      <YallaKafalaBeginning />
      <Initiatives />
      <HelpChildrenAndFamilies />
    </>
  );
};

export default WhoWeAre;
