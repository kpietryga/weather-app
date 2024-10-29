# IMGW Weather App

A TypeScript-based weather application that fetches and displays current weather data for selected cities. The app includes a search form and dynamically updates the UI with the weather results.

## Features

- **Data Fetching**: Retrieves weather data from a public weather API.
- **City Search**: Allows users to search for a city and view its weather conditions.
- **Weather Information**: Displays current temperature, city name, station ID, date, time, wind direction, wind speed, humidity, and pressure.
- **Responsive Design**: Uses Font Awesome icons to enhance the UI.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd weather-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```

## Usage

- **Launch the app**: Open the application in your browser.
- **Search for a city**: Enter a city name in the form and submit to display the current weather data.

## Technologies Used

- **TypeScript** for enhanced JavaScript type safety and code organization.
- **HTML/CSS** for layout and styling.
- **Font Awesome** for UI icons.
- **Async/Await** for handling asynchronous data fetching.

## Project Structure

- **API**: Fetches weather data from the API and maps it to specific city IDs.
- **Components**: `WeatherComponents` and `DetailsComponents` for dynamically generating weather data display.
- **Event Handlers**: Manages form submission and user interaction.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. For significant changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the MIT License.

---