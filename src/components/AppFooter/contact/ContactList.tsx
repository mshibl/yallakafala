import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailUs from "./EmailUs";
import Address from "./Address";
import { useTranslations } from "next-intl";
import { headers } from "next/headers";
import Link from "next/link";

const ContactList = () => {
  const t = useTranslations("AppFooter.contactUs");
  const country = headers().get("country");

  const egyptAddress = (
    <>
      {t("egyptAddress.lineOne")} <br />
      {t("egyptAddress.lineTwo")}
      <Link
        style={{ textDecoration: "underline" }}
        href="https://maps.app.goo.gl/d24Rt7cnGfYYkSyq8?g_st=ic"
      >
        {t("egyptAddress.lineThree")}
      </Link>
    </>
  );

  const usAddress = (
    <>
      {t("usAddress.lineOne")}
      <br /> {t("usAddress.lineTwo")}
      <br />
      {t("usAddress.lineThree")}
    </>
  );

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
          <Typography variant="h6" fontWeight={700}>
            {t("title")}
          </Typography>
        </Grid>
        <EmailUs />
        {country === "EG" ? (
          <Address title={t("egyptAddressTitle")} content={egyptAddress} />
        ) : (
          <Address title={t("usAddressTitle")} content={usAddress} />
        )}
      </Grid>
    </>
  );
};

export default ContactList;
