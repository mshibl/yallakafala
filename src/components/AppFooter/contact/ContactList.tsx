import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailUs from "./EmailUs";
import Address from "./Address";

const egyptAddress = (
  <Typography variant="body1">
    El Lasilky Street, New Maadi, Cairo <br />
    Address on{" "}
    <a style={{ textDecoration: "underline" }} href="/">
      Google maps
    </a>
  </Typography>
);
const americaPOBox = (
  <Typography variant="body1">
    15 Onondaga Ave, San Francisco,
    <br /> CA, United States
    <br />
    T: (415) 246-5007
  </Typography>
);

const ContactList = () => {
  return (
    <>
      <Grid
        sx={{
          mb: { xs: 30, md: 0 },
        }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <Grid
          item
          sx={{
            pb: 13,
          }}
        >
          <Typography variant="h4">Contact Us</Typography>
        </Grid>
        <EmailUs />
        <Address title="Egypt address" content={egyptAddress} />
        <Address title="America - PO Box" content={americaPOBox} />
      </Grid>
    </>
  );
};

export default ContactList;
