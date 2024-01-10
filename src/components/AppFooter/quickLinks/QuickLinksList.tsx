import List from "@mui/material/List";
import QuickLinksListItem from "./QuickLinksListItem";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface QuickLink {
  title: string;
  url: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "What is Kafala?",
    url: "/",
  },
  {
    title: "Kafala Steps",
    url: "/",
  },
  {
    title: "About us",
    url: "/",
  },
  {
    title: "Frequent asked questions",
    url: "/",
  },
  {
    title: "Yalla Kafala Partners",
    url: "/",
  },
  {
    title: "Our campaigns",
    url: "/",
  },
  {
    title: "Our brochure",
    url: "/",
  },
  {
    title: "Volunteer",
    url: "/",
  },
];

const QuickLinksList = () => {
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
            pb: 6,
          }}
        >
          <Typography variant="h4">Quick Links</Typography>
        </Grid>
        <Grid item>
          <List
            sx={{
              p: 0,
            }}
          >
            {quickLinks.map((quickLink, index) => (
              <QuickLinksListItem
                key={index}
                title={quickLink.title}
                url={quickLink.url}
              ></QuickLinksListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default QuickLinksList;
