import { checkElement } from "../../main.ts"; // Import function to check the existence of an element

/**
 * Class representing the weather component displaying current weather information.
 */
export default class WeatherComponents {
    private readonly weather: HTMLElement;

    /**
     * Creates an instance of WeatherComponents.
     * @param temp - Temperature as a string.
     * @param station - Name of the weather station.
     * @param number - Station number as a string.
     * @param date - Date of the weather measurement.
     * @param time - Time of the weather measurement.
     */
    constructor(
        private readonly temp: string,
        private readonly station: string,
        private readonly number: string,
        private readonly date: string,
        private readonly time: string
    ) {
        this.weather = checkElement(document.getElementById('weather')); // Get the weather container element
    }

    /**
     * Creates and appends a temperature element to the weather container.
     */
    private createTemp(): void {
        const h1 = document.createElement("h1"); // Create an <h1> element
        this.weather.appendChild(h1); // Append to the weather container
        h1.className = "temp"; // Set class name for styling
        h1.innerText = this.temp + " °C"; // Set the temperature text
    }

    /**
     * Creates and appends a city name element to the weather container.
     */
    private createCity(): void {
        const h2 = document.createElement("h2"); // Create an <h2> element
        this.weather.appendChild(h2); // Append to the weather container
        h2.className = "city"; // Set class name for styling
        h2.innerText = this.station; // Set the city name text
    }

    /**
     * Creates and appends a station number element to the weather container.
     */
    private createStation(): void {
        const h3 = document.createElement("h3"); // Create an <h3> element
        this.weather.appendChild(h3); // Append to the weather container
        h3.className = "number"; // Set class name for styling
        h3.innerText = "Station No: " + this.number; // Set the station number text
    }

    /**
     * Creates and appends a date element to the weather container.
     */
    private createDate(): void {
        const p = document.createElement("p"); // Create a <p> element
        const i = document.createElement("i"); // Create an <i> element for the icon
        const span = document.createElement("span"); // Create a <span> for the date
        i.className = "fa-solid fa-calendar-days"; // Set the icon class
        p.appendChild(i); // Append the icon to the paragraph
        this.weather.appendChild(p); // Append the paragraph to the weather container
        span.className = "number"; // Set class name for styling
        span.innerText = " " + this.date; // Set the date text
        p.appendChild(span); // Append the span to the paragraph
    }

    /**
     * Creates and appends a time element to the weather container.
     */
    private createTime(): void {
        const p = document.createElement("p"); // Create a <p> element
        const i = document.createElement("i"); // Create an <i> element for the icon
        const span = document.createElement("span"); // Create a <span> for the time
        i.className = "fa-solid fa-clock"; // Set the icon class
        p.appendChild(i); // Append the icon to the paragraph
        this.weather.appendChild(p); // Append the paragraph to the weather container
        span.className = "number"; // Set class name for styling
        span.innerText = " " + this.time; // Set the time text
        p.appendChild(span); // Append the span to the paragraph
    }

    /**
     * Creates and appends all weather information elements to the weather container.
     */
    createAll(): void {
        this.createTemp(); // Create temperature element
        this.createCity(); // Create city element
        this.createStation(); // Create station number element
        this.createDate(); // Create date element
        this.createTime(); // Create time element
    }
}