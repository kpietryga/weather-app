import { checkElement } from "../../main.ts"; // Import function to check the existence of an element

/**
 * Class representing the weather details component.
 */
export default class DetailsComponents {
    private readonly details: HTMLElement;

    /**
     * Creates an instance of DetailsComponents.
     * @param windDirection - Wind direction as a string.
     * @param windSpeed - Wind speed as a string.
     * @param humidity - Humidity level as a string.
     * @param pressure - Atmospheric pressure as a string.
     * @param rain - Rainfall amount as a string.
     */
    constructor(
        private readonly windDirection: string,
        private readonly windSpeed: string,
        private readonly humidity: string,
        private readonly pressure: string,
        private readonly rain: string
    ) {
        this.details = checkElement(document.getElementById('details')); // Get the details container element
    }

    /**
     * Creates a column element and appends it to the details container.
     * @param name - Optional ID for the column element.
     */
    private createCol(name: string = "col"): void {
        const col = document.createElement("div");
        this.details.appendChild(col);
        col.className = "col"; // Set the class name for styling
        col.id = name; // Set the ID for the column
    }

    /**
     * Creates an icon element and appends it to the specified parent element.
     * @param name - Icon name for Font Awesome.
     * @param parent - Parent element to append the icon to.
     */
    private createIcon(name: string, parent: HTMLElement): void {
        const i = document.createElement("i");
        i.className = "fa-solid fa-" + name; // Set the icon class
        parent.appendChild(i); // Append the icon to the parent
    }

    /**
     * Creates a paragraph element with specified class and text, and appends it to the parent element.
     * @param name - Class name for the paragraph element.
     * @param parent - Parent element to append the paragraph to.
     * @param text - Text content for the paragraph.
     */
    createP(name: string, parent: HTMLElement, text: string): void {
        const p = document.createElement("p");
        p.className = name; // Set the class name
        p.innerText = text; // Set the text content
        parent.appendChild(p); // Append the paragraph to the parent
    }

    /**
     * Creates the wind direction component.
     */
    private createWindDirection(): void {
        this.createCol("wind_dir");
        const col = checkElement(document.getElementById("wind_dir"));
        this.createIcon("compass", col);
        this.createP("wind_dir", col, this.windDirection || "0 °");
        this.createP("wind_dir", col, "Wind Direction");
    }

    /**
     * Creates the wind speed component.
     */
    private createWindSpeed(): void {
        this.createCol("wind_speed");
        const col = checkElement(document.getElementById("wind_speed"));
        this.createIcon("wind", col);
        this.createP("wind_speed", col, this.windSpeed || "0 km/h");
        this.createP("wind_speed", col, "Wind Speed");
    }

    /**
     * Creates the humidity component.
     */
    private createHumidity(): void {
        this.createCol("humidity");
        const col = checkElement(document.getElementById("humidity"));
        this.createIcon("droplet", col);
        this.createP("humidity", col, this.humidity || "0 %");
        this.createP("humidity", col, "Humidity");
    }

    /**
     * Creates the pressure component.
     */
    private createPressure(): void {
        this.createCol("pressure");
        const col = checkElement(document.getElementById("pressure"));
        this.createIcon("gauge", col);
        this.createP("pressure", col, this.pressure || "0");
        this.createP("pressure", col, "Pressure");
    }

    /**
     * Creates the rain component.
     */
    private createRain(): void {
        this.createCol("rain");
        const col = checkElement(document.getElementById("rain"));
        this.createIcon("cloud-rain", col);
        this.createP("rain", col, this.rain || "0");
        this.createP("rain", col, "Rainfall");
    }

    /**
     * Creates all weather detail components.
     */
    createAll(): void {
        this.createWindDirection();
        this.createWindSpeed();
        this.createHumidity();
        this.createPressure();
        this.createRain();
    }
}