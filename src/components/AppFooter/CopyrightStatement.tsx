import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";
import { headers } from "next/headers";

const CopyrightStatement = () => {
  const locale = useLocale();
  const country = headers().get("country");
  let text = "";

  const currentYear = new Date().getFullYear();

  if (country === "US") {
    text =
      locale === "ar"
        ? `جميع الحقوق محفوظة © ${currentYear}. جميع الحقوق محفوظة | يلا كفالة هي منظمة غير ربحية مسجلة 501c3. جميع التبرعات معفاة من الضرائب. EIN: 85-3323627`
        : `Copyright © ${currentYear}. All rights reserved | Yalla Kafala USA is a registered 501c3 nonprofit organization. All donations are tax deductible. EIN: 85-3323627`;
  } else {
    text =
      locale === "ar"
        ? `© جميع الحقوق محفوظة ${currentYear} ، تأسست  يلا كفالة فى مصر في عام ٢٠٢١ برقم إشهار ( ٩٩٠)`
        : `© All rights reserved ${currentYear}, Yalla Kafala was established in Egypt in 2021 with a license number (990)`;
  }

  return (
    <Grid item container md={12} xs={12} mt={"20px"} pb="50px">
      <Grid item xs={12}>
        <Typography variant="subtitle1" fontWeight={600}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CopyrightStatement;
