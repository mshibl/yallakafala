import Grid from "@mui/material/Grid";
import QuickLinksList from "./QuickLinksList";
import ContactList from "./ContactList";
import { Typography } from "@mui/material";
import NewsletterList from "./NewsletterList";
const AppFooter: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "primary.main",
        paddingX: { xs: "40px", md: "90px" },
        paddingTop: { xs: "34px", md: "68px" },
        paddingBottom: { xs: "20px", md: "30px" },
      }}
    >
      <Grid
        sx={{
          marginBottom: { xs: "60px", md: "0px" },
        }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <QuickLinksList />
      </Grid>
      <Grid
        sx={{
          marginBottom: { xs: "60px", md: "0px" },
        }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <ContactList />
      </Grid>

      <Grid
        container
        justifyContent="flex-start"
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <NewsletterList />
      </Grid>
      <Grid item container md={8} xs={12}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Copyright © 2023. All rights reserved | Yalla Kafala USA is a
            registered 501c3 nonprofit organization. All donations are tax
            deductible. EIN: 85-3323627
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppFooter;
