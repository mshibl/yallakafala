import { fetchAllStories } from "@/src/utils/kafala-stories";
import { Box, Grid } from "@mui/material";
import StoryCard from "./StoryCard";

export default async function Stories({
  locale,
  cardsPerRow,
  storiesCount,
  random,
  exclude,
}: {
  locale: string;
  cardsPerRow?: number;
  storiesCount?: number;
  random?: boolean;
  exclude?: string[];
}) {
  let stories = await fetchAllStories();

  if (exclude) {
    stories = stories.filter((story) => !exclude.includes(story.id));
  }

  if (random) {
    stories.sort(() => Math.random() - 0.5);
  }

  return (
    <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
      {stories.slice(0, storiesCount).map((story, index) => (
        <Grid
          item
          md={12 / (cardsPerRow || 2)} // 2 cards per row by default
          key={story.id}
          sx={{ display: "flex", justifyContent: "center", my: "16px" }}
          width="100%"
        >
          <Box key={story.id} width="95%">
            <StoryCard locale={locale} story={story} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
