import "../styles/style.css";
import styles from "../styles/card.module.css";

import fetchWeather from "./api/weatherAppApi";
let weatherResult = await fetchWeather("edmonton");
// returns {location:, current: }
console.log(weatherResult.current);
document.querySelector("#app").innerHTML = `
  <div class="${styles.weatherCard}">
    <h2 class="${styles.cityName}">${weatherResult.location.name}</h2>

    <div class="${styles.weatherMain}">
      <span class="temperature">${weatherResult.current.temp_c}°C</span>
      <span class="${styles.condition}">
        <img 
          src="https:${weatherResult.current.condition.icon}" 
          alt="${weatherResult.current.condition.text}" 
          width="32" 
          height="32"
        />
        ${weatherResult.current.condition.text}
      </span>
    </div>

    <div class="${styles.weatherDetails}">
      <p>
        Feels like:
        <span class="feels-like">${weatherResult.current.feelslike_c}°C</span>
      </p>
      <p>
        Humidity:
        <span class="humidity">${weatherResult.current.humidity}%</span>
      </p>
      <p>
        Wind: <span class="wind">${weatherResult.current.wind_kph} km/h</span>
      </p>
    </div>
  </div>
`;
