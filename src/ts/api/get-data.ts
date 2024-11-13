import axios from "axios";

// Interface representing the structure of synoptic data
export interface SynopData {
    id_stacji: string; // Station ID
    stacja: string; // Station name
    data_pomiaru: string; // Measurement date
    godzina_pomiaru: string; // Measurement hour
    temperatura: string; // Temperature
    predkosc_wiatru: string; // Wind speed
    kierunek_wiatru: string; // Wind direction
    wilgotnosc_wzgledna: string; // Relative humidity
    suma_opadu: string; // Total precipitation
    cisnienie: string; // Pressure
}

/**
 * Fetches synoptic data from the public API.
 * @returns - A promise that resolves to an array of SynopData objects.
 * @throws - Throws an error if the data fetching fails.
 */
export const fetchData = async (): Promise<SynopData[]> => {
    try {
        // Make a GET request to the API
        const response = await axios.get<SynopData[]>(`https://danepubliczne.imgw.pl/api/data/synop/`);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error); // Log the error to the console
        throw error; // Rethrow the error for further handling
    }
};