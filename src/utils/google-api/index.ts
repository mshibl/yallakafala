import { google } from "googleapis";

export const loadGoogleSheet = async ({
  spreadsheetId,
  range,
}: {
  spreadsheetId: string;
  range: string;
}) => {
  let response;

  try {
    const credential = JSON.parse(
      Buffer.from(
        process.env.GOOGLE_APPLICATION_CREDENTIALS as string,
        "base64"
      ).toString()
    );

    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      credentials: {
        client_email: credential.client_email,
        private_key: credential.private_key,
      },
    });

    const sheets = google.sheets({ version: "v4", auth });

    response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    if (response.status !== 200 || !response.data.values) {
      throw new Error("Error");
    }

    return response.data.values;
  } catch (error) {
    console.error({
      message: "Error fetching Google Sheet",
      error,
      response,
    });

    throw error;
  }
};
