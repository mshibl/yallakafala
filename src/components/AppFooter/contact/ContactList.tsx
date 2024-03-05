import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailUs from "./EmailUs";
import Address from "./Address";
import { useTranslations } from "next-intl";

const ContactList = () => {
  const t = useTranslations("AppFooter.contactUs");
  const egyptAddress = (
    <Typography variant="body2">
      {t("egyptAddress.lineOne")} <br />
      {t("egyptAddress.lineTwo")}
      <a
        style={{ textDecoration: "underline" }}
        href="https://maps.app.goo.gl/d24Rt7cnGfYYkSyq8?g_st=ic"
      >
        {t("egyptAddress.lineThree")}
      </a>
    </Typography>
  );

  const usAddress = (
    <Typography variant="body2">
      {t("usAddress.lineOne")}
      <br /> {t("usAddress.lineTwo")}
      <br />
      {t("usAddress.lineThree")}
    </Typography>
  );
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
            pb: 13,
          }}
        >
          <Typography variant="h4">{t("title")}</Typography>
        </Grid>
        <EmailUs />
        <Address title={t("egyptAddressTitle")} content={egyptAddress} />
        <Address title={t("usAddressTitle")} content={usAddress} />
      </Grid>
    </>
  );
};

export default ContactList;
