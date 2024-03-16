import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailUs from "./EmailUs";
import Address from "./Address";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getLocationDataFromCookies } from "@/src/utils/geolocation";

const ContactList = () => {
  const t = useTranslations("AppFooter.contactUs");
  const locationData = getLocationDataFromCookies();
  const locale = useLocale();

  const egyptAddress = (
    <>
      {locale === "ar"
        ? "شارع اللاسلكي، المعادي الجديدة. القاهرة"
        : "El Laselki Street, New Maadi, Cairo"}
      <br />
      <Link
        style={{ textDecoration: "underline" }}
        href="https://maps.app.goo.gl/d24Rt7cnGfYYkSyq8?g_st=ic"
      >
        {locale === "ar" ? "العنوان على الخريطة" : "Address on Map"}
      </Link>
    </>
  );

  const usAddress = (
    <Box
      sx={{ direction: "ltr", textAlign: locale === "ar" ? "right" : "left" }}
    >
      15 Onondaga Ave
      <br />
      San Francisco, California
      <br />
      T: (415) 246-5007
    </Box>
  );

  const country = locationData.country.toLowerCase();

  let EgyptAddressTitle = locale === "ar" ? "العنوان" : "Address";
  EgyptAddressTitle +=
    country !== "eg" ? (locale === "ar" ? " فى مصر" : " in Egypt") : "";

  const USAddressTitle =
    locale === "ar" ? "العنوان فى امريكا" : "Address in USA";

  return (
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
      <Address title={EgyptAddressTitle} content={egyptAddress} />
      {country !== "eg" && (
        <Address content={usAddress} title={USAddressTitle} />
      )}
    </Grid>
  );
};

export default ContactList;
