import { fetchData, SynopData } from "../api/get-data.ts"; // Import fetch function and SynopData interface

// Create a map to store city IDs and their corresponding weather data
export const idsOfCities: Map<string, SynopData> = new Map();

/**
 * Processes weather data by fetching it from the API and storing it in the idsOfCities map.
 * @returns - A promise that resolves when the data has been processed.
 */
export const processWeatherData = async (): Promise<void> => {
    const data: SynopData[] = await fetchData(); // Fetch weather data from the API
    data.forEach((city) => {
        // Store each city in the idsOfCities map with the station name as the key
        idsOfCities.set(city.stacja.toLowerCase(), city);
    });
};