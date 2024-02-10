import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const IntroParagraphs = () => {
  const t = useTranslations("WhatIsKafala.IntroParagraphs");
  return (
    <>
      <Typography color={"black"} paragraph variant="body1">
        {t("p1")}
      </Typography>
      <Typography color={"black"} paragraph variant="body1">
        {t("p2")}
      </Typography>
    </>
  );
};

export default IntroParagraphs;
