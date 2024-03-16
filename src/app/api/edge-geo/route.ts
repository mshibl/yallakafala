import { geolocation } from "@vercel/edge";

export const runtime = "edge";

export function GET(request: Request) {
  const locationData = geolocation(request);

  return new Response(JSON.stringify(locationData));
}
