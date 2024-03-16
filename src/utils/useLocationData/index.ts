import { LocationData } from "@/src/types";
import { useState, useEffect } from "react";

export const useLocationData = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLocationData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/edge-geo");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLocationData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error);

        setError(true);
        setLoading(false);
      }
    };

    getLocationData();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return { locationData, loading, error };
};
