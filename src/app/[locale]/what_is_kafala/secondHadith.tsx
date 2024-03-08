import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const SecondHadith = () => {
  const t = useTranslations("WhatIsKafala.SecondHadith");
  return (
    <>
      <Typography variant="body1" color={"black"}>
        {t("list.listTitle")}
      </Typography>

      <List>
        <li>
          <Typography color={"black"} paragraph variant="body1">
            {t(`list.listItem1`)}
          </Typography>
        </li>
        <li>
          <blockquote>
            <Typography
              sx={{
                marginY: "30px",
              }}
              color={"black"}
              paragraph
              variant="body1"
            >
              {t(`list.listItem2`)}
            </Typography>
          </blockquote>
        </li>
        <li>
          <Typography color={"black"} paragraph variant="body1">
            {t(`list.listItem3`)}
          </Typography>
        </li>
        <li>
          <Typography color={"black"} paragraph variant="body1">
            {t(`list.listItem4`)}
          </Typography>
        </li>
      </List>
    </>
  );
};

export default SecondHadith;
