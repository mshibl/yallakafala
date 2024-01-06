import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
        <Grid container direction="row">
          <Grid
            sx={{
              paddingRight: "11px",
            }}
            item
          >
            <Box component="img" src="silver.png" />
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
      </Box>
    </Grid>
  );
};

export default SilverBadge;
