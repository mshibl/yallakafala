import { cookies } from "next/headers";

interface LocationData {
  city?: string;
  country: string;
  flag?: string;
  countryRegion?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
}

export function getLocationDataFromCookies(): LocationData {
  // We embed the location data in a cookie in the middleware
  const locationDataCookie = cookies().get("locationData");

  const locationData = locationDataCookie?.value
    ? JSON.parse(locationDataCookie?.value)
    : {};

  if (!locationData.country) {
    locationData.country = "US"; // default to US
  }

  return locationData;
}
