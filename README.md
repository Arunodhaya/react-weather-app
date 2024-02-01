# Weather Application

This is a simple weather application built with React.js that allows users to search for weather information based on location.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Arunodhaya/react-weather-app
cd react-weather-app
```
### 2. Install Dependencies

```
yarn install
```
### 3. Set Up Environment Variables
Copy the .env.sample file and create a new file named .env

Obtain an API key from OpenWeatherMap to fetch weather data. Once you have your API key, paste it into the .env file.

```
REACT_APP_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
```
### 4. Start the Application
```
yarn start
```
## Usage

- Enter the location you want to search for in the search bar.
- The application will fetch weather information for the entered location.Debouncing is used to limit API fetch and reduce the number of unnecessary requests.
- The displayed weather information includes temperature and weather description.



