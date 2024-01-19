import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const CopyrightStatement = () => {
  const t = useTranslations("AppFooter");

  return (
    <Grid item container md={8} xs={12}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">{t("copyRight")}</Typography>
      </Grid>
    </Grid>
  );
};

export default CopyrightStatement;
