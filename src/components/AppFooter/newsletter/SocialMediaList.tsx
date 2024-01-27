import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";
import SocialMediaListItem from "./SocialMediaListItem";

const socialMediaItems = ["facebook", "instagram", "youtube", "twitter"];

const SocialMediaList = () => {
  const t = useTranslations("AppFooter.newsletter");
  const locale = useLocale();

  return (
    <Grid
      item
      sx={{
        pb: 13,
      }}
    >
      <Box>
        <Typography variant="h4">{t("socialMediaList.title")}</Typography>
        <Grid justifyContent="flex-start" container sx={{ pt: 4 }}>
          {socialMediaItems.map((item, index) => (
            <SocialMediaListItem key={index} name={item} language={locale} />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SocialMediaList;
