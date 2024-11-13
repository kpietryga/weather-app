import { idsOfCities } from "../services/weather-service.ts"; // Import city IDs and their corresponding weather data
import { checkElement } from "../../main.ts"; // Import function to check the existence of an element

/**
 * Creates a result box for displaying available city names based on user input.
 */
export const createResult = (): void => {
    const input: HTMLInputElement = checkElement(document.getElementById("input")) as HTMLInputElement; // Get the input element
    let availableTags: string[] = [...idsOfCities.keys()].map((el) => el.toUpperCase()); // Get city names and convert to uppercase
    const resultBox: HTMLElement = checkElement(document.getElementById("result-box")); // Get the result box element

    console.log(availableTags); // Log available tags for debugging

    /**
     * Updates the result box with filtered city names based on user input.
     */
    const updateResultBox = (): void => {
        resultBox.innerHTML = ""; // Clear previous results

        // Filter and display city names that match the input value
        availableTags.filter(el => el.includes(input.value.toUpperCase())).forEach((el): void => {
            console.log(el); // Log the filtered city name for debugging
            const div: HTMLDivElement = document.createElement("div"); // Create a new div for each city name
            div.textContent = el; // Set the text content to the city name
            resultBox.appendChild(div); // Append the div to the result box

            // Add click event listener to populate input field and hide result box
            div.addEventListener("click", () => {
                input.value = el; // Set the input value to the clicked city name
                resultBox.classList.add("hide"); // Hide the result box
            });
        });
    }

    // Add input event listener to update the result box as the user types
    input.addEventListener("input", () => {
        updateResultBox(); // Call updateResultBox to filter results
    });

    // Add focus event listener to show the result box when the input is focused
    input.addEventListener("focus", function () {
        resultBox.classList.remove("hide"); // Show the result box
        updateResultBox(); // Update the result box with current input
    });

    // Add click event listener to hide the result box when clicking outside of it
    document.addEventListener('click', (event) => {
        const target = event.target as Node; // Get the clicked target
        const isClickInsideElement1 = input.contains(target); // Check if the click is inside the input
        const isClickInsideElement2 = resultBox.contains(target); // Check if the click is inside the result box
        if (!isClickInsideElement1 && !isClickInsideElement2) {
            resultBox.classList.add("hide"); // Hide the result box if clicked outside
        }
    });
}
