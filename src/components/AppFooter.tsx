import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const AppFooter: React.FC = () => {
  return (
    <Grid container>
      <Grid
        sx={{
          bgcolor: "#787542",
        }}
        container
        item
        xs={4}
      >
        <Grid item xs={12}>
          One
        </Grid>
        <Grid item xs={12}>
          Two
        </Grid>
        <Grid item xs={12}>
          Three
        </Grid>
      </Grid>
      <Grid
        sx={{
          bgcolor: "#af8729",
        }}
        container
        item
        xs={4}
      >
        <Grid item xs={12}>
          One
        </Grid>
        <Grid item xs={12}>
          Two
        </Grid>
        <Grid item xs={12}>
          Three
        </Grid>
      </Grid>
      <Grid
        sx={{
          bgcolor: "#ac4123",
        }}
        item
        container
        xs={4}
      >
        <Grid item xs={12}>
          One
        </Grid>
        <Grid item xs={12}>
          Two
        </Grid>
        <Grid item xs={12}>
          Three
        </Grid>
      </Grid>
      <Grid
        sx={{
          bgcolor: "#aa12ae",
        }}
        item
        container
        xs={8}
      >
        <Grid item xs={4}>
          One
        </Grid>
        <Grid item xs={4}>
          Two
        </Grid>
        <Grid item xs={4}>
          Three
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppFooter;
