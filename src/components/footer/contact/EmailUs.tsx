import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
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
        <Image src="/images/EmailIcon.svg" alt="Email Us" width={16} height={16} />
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
