import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EmailUs = () => {
  const t = useTranslations("AppFooter.contactUs");

  return (
    <Grid
      item
      container
      sx={{
        pb: 15,
      }}
    >
      <Grid item display="flex" alignItems="center">
        <Image
          src="/images/EmailIcon.svg"
          alt="Email Us"
          width={16}
          height={16}
        />
      </Grid>
      <Grid
        sx={{
          marginX: 5,
        }}
        item
      >
        <a style={{ textTransform: "none" }} href="mailto:info@yallakafala.org">
          <Typography variant="h6">{t("email")}</Typography>
        </a>
      </Grid>
    </Grid>
  );
};

export default EmailUs;
