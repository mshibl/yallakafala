import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const FirstHadith = () => {
  const t = useTranslations("WhatIsKafala.FirstHadith");
  const listItems = [
    "listItem1",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
  ];

  return (
    <>
      <blockquote>
        <Typography
          sx={{
            marginY: "30px",
          }}
          color={"black"}
          paragraph
          variant="body1"
        >
          {t("hadith")}
        </Typography>
      </blockquote>
      <Typography color={"black"} paragraph variant="body1">
        {t("conclusionParagraph")}
      </Typography>
      <Typography color={"black"} paragraph variant="body1">
        {t("list.listTitle")}
      </Typography>
      <List>
        {listItems.map((item) => (
          <li key={t(`list.${item}`)}>
            <Typography color={"black"} paragraph variant="body1">
              {t(`list.${item}`)}
            </Typography>
          </li>
        ))}
      </List>
    </>
  );
};

export default FirstHadith;
