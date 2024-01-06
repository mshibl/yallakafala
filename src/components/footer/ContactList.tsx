import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const ContactList = () => {
  return (
    <>
      <Grid
        item
        sx={{
          paddingBottom: "26px",
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
      </Grid>
      <Grid
        item
        container
        sx={{
          paddingBottom: "30px",
        }}
      >
        <Grid
          sx={{
            marginRight: "10px",
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
      <Grid
        item
        sx={{
          paddingBottom: "21px",
        }}
      >
        <Box>
          <Typography
            sx={{
              paddingBottom: "7px",
            }}
            variant="h5"
          >
            Egypt address
          </Typography>
          <Typography variant="body1">
            El Lasilky Street, New Maadi, Cairo <br />
            Address on <a href="/">Google maps</a>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          paddingBottom: "21px",
        }}
      >
        <Box>
          <Typography
            sx={{
              paddingBottom: "7px",
            }}
            variant="h5"
          >
            America - PO Box
          </Typography>
          <Typography variant="body1">
            15 Onondaga Ave, San Francisco,
            <br /> CA, United States
            <br />
            T: (415) 246-5007
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ContactList;
