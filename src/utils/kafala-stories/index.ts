import { DATA_SOURCES } from "@/src/constants/data-sources";
import { loadGoogleSheet } from "../google-api";
import { convertGoogleDriveImageUrlToImageSrc } from "../string-utils";

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

  return {
    id: id,
    publish,
    arabic_title: arabic_title || english_title,
    english_title: english_title || arabic_title,
    arabic_description: arabic_description || english_description,
    english_description: english_description || arabic_description,
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
      .slice(1)
      .filter((row: any) => row[0] === "TRUE")
      .map((row: any, index: number) => parseStoryData(row, String(index + 2)));

    return stories;
  } catch (error) {
    console.error("Error fetching stories", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
}
