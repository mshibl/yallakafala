import React from "react";
import HeroImage from "./heroImage";
import Story from "./story";
import HelpChildrenAndFamilies from "../helpChildrenAndFamilies";
import Initiatives from "./initiatives";
import YallaKafalaBeginning from "./beginning";
import Founder from "./founder";
import Board from "./board";

const WhoWeAre = ({ locale }: { locale: string }) => {
  return (
    <>
      <HeroImage />
      <Story locale={locale} />
      <Founder locale={locale} />
      <Board locale={locale} />
      <YallaKafalaBeginning locale={locale} />
      <Initiatives locale={locale} />
      <HelpChildrenAndFamilies locale={locale} />
    </>
  );
};

export default WhoWeAre;
