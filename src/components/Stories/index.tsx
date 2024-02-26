import { fetchAllStories } from "@/src/utils/kafala-stories";
import { Box, Grid } from "@mui/material";
import StoryCard from "./StoryCard";

export default async function Stories({ locale }: { locale: string }) {
  const stories = await fetchAllStories();

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {stories.map((story, index) => (
        <Grid
          item
          md={6}
          key={index}
          sx={{ display: "flex", justifyContent: "center", my: "16px" }}
          width="100%"
        >
          <Box width="90%">
            <StoryCard locale={locale} story={story} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
