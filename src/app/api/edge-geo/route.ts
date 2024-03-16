import { geolocation } from "@vercel/edge";

export const runtime = "edge";

export function GET(request: Request) {
  const locationData = geolocation(request);

  if (!locationData.country) {
    locationData.country = "US"; // default to US
  }

  return new Response(JSON.stringify(locationData));
}
