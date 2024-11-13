import { checkElement } from "../../main.ts"; // Import function to check the existence of an element
import { idsOfCities } from "../services/weather-service.ts"; // Import city IDs and their weather data
import WeatherComponents from "../ui/weather-components.ts"; // Import WeatherComponents class
import DetailsComponents from "../ui/details-components.ts"; // Import DetailsComponents class

/**
 * Sets up the form handler for submitting weather requests.
 * @param formSelector - CSS selector for the form element.
 * @param inputSelector - CSS selector for the input element.
 * @param weatherContainerSelector - CSS selector for the weather container element.
 * @param detailsContainerSelector - CSS selector for the details container element.
 */
export const setupFormHandler = (formSelector: string, inputSelector: string, weatherContainerSelector: string, detailsContainerSelector: string) => {

    // Check and get the form and input elements
    const formElement: HTMLElement = checkElement(document.querySelector(formSelector));
    const inputElement: HTMLInputElement = checkElement(document.querySelector(inputSelector)) as HTMLInputElement;
    const weatherContainer: HTMLElement = checkElement(document.querySelector(weatherContainerSelector));
    const detailsContainer: HTMLElement = checkElement(document.querySelector(detailsContainerSelector));

    // Add submit event listener to the form
    formElement.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Clear previous weather and details
        weatherContainer.innerHTML = '';
        detailsContainer.innerHTML = '';

        const inputValue = inputElement.value; // Get the value from the input field
        const filterData = idsOfCities.get(inputValue.toLowerCase()); // Filter data based on input

        // Check if the city exists in the data
        if (!filterData) {
            alert("No such city in our database, please use the suggestions."); // Alert user if city is not found
            return;
        }

        // Create weather component with the fetched data
        const weatherComponent = new WeatherComponents(
            filterData.temperatura,
            filterData.stacja,
            filterData.id_stacji,
            filterData.data_pomiaru,
            filterData.godzina_pomiaru
        );
        weatherComponent.createAll(); // Render weather component

        // Create details component with the fetched data
        const detailsComponent = new DetailsComponents(
            filterData.kierunek_wiatru,
            filterData.predkosc_wiatru,
            filterData.wilgotnosc_wzgledna,
            filterData.cisnienie,
            filterData.suma_opadu
        );
        detailsComponent.createAll(); // Render details component
    });
}