# Weather App

## Overview

This lightweight app shows current weather and a five‑day forecast for any city. Built with HTML, CSS and vanilla JavaScript, it uses Axios to call the SheCodes Weather API and displays the results dynamically. On page load it defaults to Paris, but you can search for any city via the search bar.

## Live Demo

Experience the app in action here:  
👉 **[Weather App Live](https://weather-app-mona.netlify.app/)**


## Features

* **Search a city:** Enter a city name to fetch its current weather.
* **Live conditions:** Shows city name, local time, description, temperature, humidity and wind speed.
* **Five‑day forecast:** Displays a row of forecast cards with daily highs and lows.

## Structure

Weather-App-Project/

├── index.html # HTML layout and search form

├── src/

│ ├── index.js # Fetches data and updates the page

│ ├── style.css # Basic styling

│ └── config.js # Your API keys (ignored)

└── .gitignore # Ignores src/config.js


### Setup

To make requests to the SheCodes API you need to create `src/config.js` with your own API keys. This file defines `CURRENT_API_KEY` and `FORECAST_API_KEY` and is ignored by Git so you don’t accidentally commit secrets. Without this file the app will still load but will not fetch data.
