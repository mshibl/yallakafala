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
        px: { xs: 20, md: 45 },
        pt: { xs: 17, md: 34 },
        pb: { xs: 10, md: 15 },
      }}
    >
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
        <QuickLinksList />
      </Grid>
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
