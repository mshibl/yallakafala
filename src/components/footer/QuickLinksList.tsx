import List from "@mui/material/List";
import AppListItem from "./AppListItem";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface QuickLink {
  title: string;
  url: string;
}

const QuickLinksList = () => {
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
  return (
    <>
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
            <AppListItem
              key={index}
              title={quickLink.title}
              url={quickLink.url}
            ></AppListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};

export default QuickLinksList;
