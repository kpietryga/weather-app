import './style.css'; // Import CSS styles
import './ts/ui/details-components.ts'; // Import UI detail components
import { processWeatherData } from "./ts/services/weather-service.ts"; // Import function to process weather data
import { setupFormHandler } from "./ts/handlers/form-handler.ts"; // Import function to set up form handling
import { dom, library } from '@fortawesome/fontawesome-svg-core'; // Import Font Awesome library
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome solid icons
import { createResult } from "./ts/ui/result.ts"; // Import function to create results

// Add icons to the Font Awesome library
library.add(fas);
dom.watch(); // Watch the DOM for Font Awesome icons

/**
 * Checks if the given element exists.
 * @param element - The HTML element to be checked.
 * @returns - Returns the HTML element if it exists.
 * @throws - Throws an error if the element is not found.
 */
export const checkElement = (element: HTMLElement | null): HTMLElement => {
    if (!element) {
        throw new Error(`Element ${element} not found`);
    } else {
        return element; // Return the element if it exists
    }
}

/**
 * Main function of the application that processes weather data
 * and sets up form handling.
 * @returns - A promise that resolves after processing the data.
 */
const main = async (): Promise<void> => {
    await processWeatherData(); // Process weather data
    setupFormHandler('#form', '#input', '#weather', '#details'); // Set up form handling
    createResult(); // Create results based on the processed data
}

// Run the main function
main().catch((error: Error) => {
    console.error(error); // Log the error to the console if it occurs
});