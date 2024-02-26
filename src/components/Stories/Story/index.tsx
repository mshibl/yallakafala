import { DATA_SOURCES } from "@/src/constants/data-sources";
import { loadGoogleSheet } from "@/src/utils/google-api";
import { convertGoogleDriveImageUrlToImageSrc } from "@/src/utils/string-utils";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function parseStoryData(data: any) {
  const [
    publish,
    arabic_title,
    english_title,
    arabic_description,
    english_description,
    image_link,
  ] = data;

  const imageLink = convertGoogleDriveImageUrlToImageSrc(image_link);

  if (!arabic_title && !english_title) {
    throw new Error("Story title is missing");
  }

  if (!arabic_description && !english_description) {
    throw new Error("Story description is missing");
  }

  return {
    publish,
    arabic_title: arabic_title || english_title,
    english_title: english_title || arabic_title,
    arabic_description: arabic_description || english_description,
    english_description: english_description || arabic_description,
    image_link: imageLink,
  };
}

export async function fetchStory({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const range = `${DATA_SOURCES.STORIES.STORIES_SHEET_NAME}!A${id}:G${id}`;

    const response = await loadGoogleSheet({
      spreadsheetId: DATA_SOURCES.STORIES.STORIES_SPREADSHEET_ID,
      range,
    });

    const storyData = parseStoryData(response[0]);

    return storyData;
  } catch (error) {
    console.error("Error fetching story", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
}

function StoryHeader({
  locale,
  title,
  sx,
}: {
  locale: string;
  title: string;
  sx: SxProps;
}) {
  return (
    <Box sx={sx}>
      <Link href={`/${locale}/stories`}>
        {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
      </Link>
      <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</Box>
    </Box>
  );
}

export default async function Story({
  locale,
  id,
}: {
  locale: string;
  id: string;
}) {
  const story = await fetchStory({ query: { id } });
  const title = locale === "ar" ? story.arabic_title : story.english_title;
  const image_link = story.image_link;
  let description =
    locale === "ar" ? story.arabic_description : story.english_description;

  if (!description) {
    description = story.arabic_description || story.english_description;
  }

  return (
    <Box sx={{ padding: "16px" }}>
      <StoryHeader
        sx={{ mb: "8px", display: { xs: "block", md: "none" } }}
        locale={locale}
        title={title}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
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
          >
            <Image
              fill={true}
              style={{ objectFit: "contain" }}
              src={image_link}
              alt={title}
            />
          </Box>
        )}
        <Box flexBasis="150%" pt="8px">
          <StoryHeader
            sx={{ mb: "8px", display: { xs: "none", md: "block" } }}
            locale={locale}
            title={title}
          />
          {description}
        </Box>
      </Box>
    </Box>
  );
}
