import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const Footnotes = () => {
  const t = useTranslations("WhatIsKafala.References");
  const listItems = ["listItem1", "listItem2", "listItem3"];
  return (
    <>
      <Typography color={"black"} paragraph variant="subtitle1">
        {t("source")}
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
