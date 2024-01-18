import { Box } from "@mui/material";
import { google } from "googleapis";
import Image from "next/image";

export async function getStories({ query }: { query: { id: string } }) {
  try {
    // Auth
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    // Google Sheets Instance
    const sheets = google.sheets({ version: "v4", auth });

    // Get Sheet Data
    const { id } = query;
    const range = `Stories!A${id}:F${id}`;

    const response = await sheets.spreadsheets.values.get({
      // spreadsheetId: process.env.SHEET_ID,
      spreadsheetId: "1RwanzeTqzIvt-hQuSXdYZ0CtH0iDNIE3YbiVQ4ANqyE",
      range,
    });

    if (response.status !== 200 || !response.data.values) {
      return {
        props: {
          error: "Error",
        },
      };
    }

    const [name, slug, publish, category, description, image_link] =
      response.data.values[0];

    console.log(response.data.values);
    // console.log({ name, slug, publish, category, description, image_link });

    const imageLink = convertToDirectLink(image_link);

    return {
      props: {
        name,
        description,
        image_link: imageLink,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        error: "Error",
      },
    };
  }
}

export default async function Story({
  params: { id },
}: {
  params: { id: string };
}) {
  const story = await getStories({ query: { id } });

  if (!story) return <div>loading...</div>;

  if (story.props.error) {
    return <div>error</div>;
  }

  const { name, description, image_link } = story.props;

  return (
    <article>
      <h1>{name || "no name"}</h1>
      <p>{description || "no description"}</p>
      <Box position="relative" height={500}>
        <Image fill={true} objectFit="contain" src={image_link} alt={name} />
      </Box>
    </article>
  );
}

function convertToDirectLink(url: string): string | null {
  // Extract the file ID from the provided URL
  const match = url.match(/[-\w]{25,}/);

  if (!match) {
    console.error("Invalid Google Drive URL");
    return null;
  }

  const fileId = match[0];
  // Construct the direct access URL
  const directLink = `https://drive.google.com/uc?export=view&id=${fileId}`;

  return directLink;
}
