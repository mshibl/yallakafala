import sanitizeHtml from "sanitize-html";

export function cleanResponse(dirty: string) {
  return sanitizeHtml(dirty, {
    allowedTags: [],
    allowedAttributes: {
      a: [],
    },
    allowedIframeHostnames: [],
  });
}

export function convertGoogleDriveImageUrlToImageSrc(
  url: string
): string | null {
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
