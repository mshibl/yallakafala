import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const EmailUs = () => {
  return (
    <Grid
      item
      container
      sx={{
        pb: 15,
      }}
    >
      <Grid
        sx={{
          marginRight: 5,
        }}
        item
      >
        <Box component="img" src="emailIcon.png" />
      </Grid>
      <Grid item>
        <Link href="/">
          <Typography variant="h5">Email Us</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default EmailUs;
