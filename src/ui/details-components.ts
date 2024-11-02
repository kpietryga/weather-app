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

}