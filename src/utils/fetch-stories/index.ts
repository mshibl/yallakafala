import { DATA_SOURCES } from "@/src/constants/data-sources";
import { loadGoogleSheet } from "../google-api";
import {
  cleanResponse,
  convertGoogleDriveImageUrlToImageSrc,
} from "../string-utils";

function parseStoryData(data: any, id: string) {
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

  const cleanArabicTitle = cleanResponse(arabic_title?.trim() || "");
  const cleanEnglishTitle = cleanResponse(english_title?.trim() || "");
  const cleanArabicDescription = cleanResponse(
    arabic_description?.trim() || ""
  );
  const cleanEnglishDescription = cleanResponse(
    english_description?.trim() || ""
  );

  const arabicDescription = cleanArabicDescription || cleanEnglishDescription;
  const englishDescription = cleanEnglishDescription || cleanArabicDescription;

  return {
    id: id,
    publish: publish === "TRUE",
    arabic_title: arabic_title || english_title,
    english_title: english_title || arabic_title,
    arabic_description: arabicDescription,
    english_description: englishDescription,
    image_link: imageLink,
  };
}

export async function fetchStory({ story_id }: { story_id: string }) {
  try {
    const range = `${DATA_SOURCES.STORIES.STORIES_SHEET_NAME}!A${story_id}:G${story_id}`;

    const response = await loadGoogleSheet({
      spreadsheetId: DATA_SOURCES.STORIES.STORIES_SPREADSHEET_ID,
      range,
    });

    const storyData = parseStoryData(response[0], story_id);

    return storyData;
  } catch (error) {
    console.error("Error fetching story", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
}

export async function fetchAllStories() {
  try {
    const response = await loadGoogleSheet({
      spreadsheetId: DATA_SOURCES.STORIES.STORIES_SPREADSHEET_ID,
      range: DATA_SOURCES.STORIES.STORIES_SHEET_NAME,
    });

    const stories = response
      .slice(1) // remove the header row
      .map((row: any, index: number) => parseStoryData(row, String(index + 2)));

    // filter out unpublished stories
    const publishedStories = stories.filter((story) => story.publish);

    return publishedStories;
  } catch (error) {
    console.error("Error fetching stories", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
}
