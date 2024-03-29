import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const EmailUs = ({ locale }: { locale: string }) => {
  const t = useTranslations("AppFooter.contactUs");

  return (
    <Grid item container>
      <Link style={{ textTransform: "none" }} href={`/${locale}/contact_us`}>
        <Button variant="text" sx={{ color: "white", px: 0 }}>
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
            <Typography variant="body2">{t("email")}</Typography>
          </Grid>
        </Button>
      </Link>
    </Grid>
  );
};

export default EmailUs;
