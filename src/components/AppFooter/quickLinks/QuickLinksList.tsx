import List from "@mui/material/List";
import QuickLinksListItem from "./QuickLinksListItem";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";

const QuickLinksList = () => {
  const t = useTranslations("AppFooter.quickLinks");
  const keys = [
    "linkOne",
    "linkTwo",
    "linkThree",
    "linkFour",
    "linkFive",
    "linkSix",
    "linkSeven",
    "linkEight",
  ] as const;

  return (
    <>
      <Grid
        sx={{
          mb: { xs: 30, md: 0 },
        }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <Grid
          item
          sx={{
            pb: 6,
          }}
        >
          <Typography variant="h4">{t("title")}</Typography>
        </Grid>
        <Grid item>
          <List
            sx={{
              p: 0,
            }}
          >
            {keys.map((key) => (
              <QuickLinksListItem
                key={key}
                title={t(`${key}.title`)}
                url={t(`${key}.url`)}
              ></QuickLinksListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default QuickLinksList;
