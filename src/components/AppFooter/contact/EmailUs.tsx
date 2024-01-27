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
      <Grid item>
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
        <a href="mailto:info@yallakafala.org">
          <Typography variant="h5">{t("email")}</Typography>
        </a>
      </Grid>
    </Grid>
  );
};

export default EmailUs;
