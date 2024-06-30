import WhoWeAre from "@/src/components/aboutUs/WhoWeAre";
import React from "react";

const WhoWeArePage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return <WhoWeAre locale={locale} />;
};

export default WhoWeArePage;
