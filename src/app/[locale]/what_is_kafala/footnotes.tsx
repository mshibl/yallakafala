import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const Footnotes = () => {
  const t = useTranslations("WhatIsKafala.Footnote");
  const listItems = [
    "listItem1",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
    "listItem6",
    "listItem7",
  ];
  return (
    <>
      <Typography color={"black"} paragraph variant="subtitle1">
        {t("copiedFrom")}
      </Typography>
      <Typography
        sx={{
          marginBottom: 0,
        }}
        color={"black"}
        paragraph
        variant="subtitle1"
      >
        {t("list.listTitle")}
      </Typography>
      <List>
        {listItems.map((item) => (
          <li key={t(`list.${item}`)}>
            <Typography color={"black"} paragraph variant="subtitle1">
              {t(`list.${item}`)}
            </Typography>
          </li>
        ))}
      </List>
    </>
  );
};

export default Footnotes;
