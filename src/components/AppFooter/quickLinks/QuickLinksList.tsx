import List from "@mui/material/List";
import QuickLinksListItem from "./QuickLinksListItem";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocale, useTranslations } from "next-intl";
import {
  ABOUT_US_PAGE,
  CAMPAIGNS_PAGE,
  FAQS_PAGE,
  KAFALA_PARTNERS_PAGE,
  KAFALA_STEPS_PAGE,
  PAGE_PATHNAMES,
  SERVICES_PAGE,
  VOLUNTEER_PAGE,
  WHAT_IS_KAFALA_PAGE,
} from "@/src/constants/pages";

const QUICK_LINKS = [
  WHAT_IS_KAFALA_PAGE,
  KAFALA_STEPS_PAGE,
  ABOUT_US_PAGE,
  FAQS_PAGE,
  KAFALA_PARTNERS_PAGE,
  CAMPAIGNS_PAGE,
  SERVICES_PAGE,
  VOLUNTEER_PAGE,
];

const QuickLinksList = () => {
  const t = useTranslations("AppFooter.quickLinks");
  const locale = useLocale();

  return (
    <>
      <Grid
        sx={{ mb: { xs: 30, md: 0 } }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
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
