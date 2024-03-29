import { fetchStory } from "@/src/utils/fetch-stories";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import StoryPageHeader from "../StoryPageHeader";

export default async function Story({
  locale,
  story_id,
}: {
  locale: string;
  story_id: string;
}) {
  const story = await fetchStory({ story_id });
  const title = locale === "ar" ? story.arabic_title : story.english_title;
  const image_link = story.image_link;
  let description =
    locale === "ar" ? story.arabic_description : story.english_description;

  if (!description) {
    description = story.arabic_description || story.english_description;
  }

  return (
    <Box sx={{ padding: "16px" }}>
      <StoryPageHeader sx={{ mb: "8px" }} locale={locale} title={title} />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        {image_link && (
          <Box
            position="relative"
            width="100%"
            height="70vw"
            m="16px"
            maxHeight={500}
            alignSelf="center"
          >
            <Image
              fill={true}
              style={{ objectFit: "contain" }}
              src={image_link}
              alt={title}
              sizes="100% 100%"
            />
          </Box>
        )}
        <Box flexBasis="150%" pt="8px">
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
