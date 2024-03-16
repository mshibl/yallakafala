import List from "@mui/material/List";
import QuickLinksListItem from "./QuickLinksListItem";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocale, useTranslations } from "next-intl";
import {
  ABOUT_US_PAGE,
  DONATE_PAGE,
  FAQS_PAGE,
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  PAGE_PATHNAMES,
  WHAT_IS_KAFALA_PAGE,
} from "@/src/constants/pages";

const QUICK_LINKS = [
  DONATE_PAGE,
  ABOUT_US_PAGE,
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  WHAT_IS_KAFALA_PAGE,
  FAQS_PAGE,
];

const QuickLinksList = () => {
  const t = useTranslations("AppFooter.quickLinks");
  const locale = useLocale();

  return (
    <>
      <Grid
        sx={{ mb: { xs: 30, md: 0 } }}
        direction={"column"}
        container
        xs={12}
        md={4}
        item
      >
        <Grid item sx={{ pb: 6 }}>
          <Typography color="#ffffff" variant="h6" fontWeight={700}>
            {t("title")}
          </Typography>
        </Grid>
        <Grid item>
          <List sx={{ p: 0 }}>
            {QUICK_LINKS.map((link) => (
              <QuickLinksListItem
                key={link}
                title={t(`${link}.title`)}
                url={`/${locale}${PAGE_PATHNAMES[link]}`}
              ></QuickLinksListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default QuickLinksList;
