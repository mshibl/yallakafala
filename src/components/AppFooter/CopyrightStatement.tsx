"use client";

import { useLocationData } from "@/src/utils/useLocationData";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";

const CopyrightStatement = () => {
  const locale = useLocale();
  const { locationData, loading, error } = useLocationData();
  if (loading || error || !locationData) return null;
  const country = locationData.country.toLowerCase();

  let text: JSX.Element | string = "";

  const currentYear = new Date().getFullYear();

  if (country === "us") {
    if (locale === "ar") {
      text = (
        <>
          يلا كفالة هي منظمة غير ربحية مسجلة 501(c)3. جميع التبرعات معفاة من
          الضرائب EIN: 85-3323627
          <br />© {currentYear} جميع الحقوق محفوظة
        </>
      );
    } else {
      text = (
        <>
          Yalla Kafala is a registered 501(c)3 nonprofit organization. All
          donations are tax deductible. EIN: 85-3323627
          <br />© {currentYear} All rights reserved
        </>
      );
    }
  } else {
    if (locale === "ar") {
      text = (
        <>
          تأسست يلا كفالة في مصر في عام 2021 برقم إشهار (990)
          <br />© جميع الحقوق محفوظة {currentYear}
        </>
      );
    } else {
      text = (
        <>
          Yalla Kafala was established in Egypt in 2021 with a license number
          (990)
          <br />© {currentYear} All rights reserved
        </>
      );
    }
  }

  return (
    <Grid item container md={12} xs={12} mt={"20px"} pb="50px">
      <Grid item xs={12}>
        <Typography variant="subtitle1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CopyrightStatement;
