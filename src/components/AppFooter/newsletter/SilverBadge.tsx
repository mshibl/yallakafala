import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SilverBadge = () => {
  const t = useTranslations("AppFooter.newsletter");
  return (
    <Grid
      item
      sx={{
        pb: 13,
      }}
    >
      <Box
        sx={{
          maxHeight: { xs: "75px", md: "60px" }, // To force box to take children hight
        }}
      >
        <Grid container direction="row">
          <Grid item display="flex" alignItems="center">
            <Link href="https://www.guidestar.org/profile/85-3323627">
              <Image
                src="/images/GuideStarIcon.svg"
                alt="GuideStar Silver Level"
                width={87}
                height={87}
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              marginX: "11px",
            }}
          >
            <Typography variant="subtitle1" color="#ffffff">
              {t("silverBadge.description.lineOne")} <br />{" "}
              {t("silverBadge.description.lineTwo")}
              <br />
              {t("silverBadge.description.lineThree")}
              <br /> {t("silverBadge.description.lineFour")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SilverBadge;
