import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const SilverBadge = () => {
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
        <Link href="/">
          <Grid container direction="row">
            <Grid
              sx={{
                paddingRight: "11px",
              }}
              item
            >
              <Image
                src="/images/GuideStarIcon.svg"
                alt="GuideStar Silver Level"
                width={87}
                height={87}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1">
                Yalla Kafala is a silver-level <br /> GuideStar participant,
                <br />
                demonstrating its commitment to
                <br /> transparency.
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Box>
    </Grid>
  );
};

export default SilverBadge;
