import "../styles/style.css";
import styles from "../styles/card.module.css";
import fetchWeather from "./api/weatherAppApi";

// 1. Create a function to handle the "State Change" and Re-render
async function updateWeather(city) {
  try {
    const weatherResult = await fetchWeather(city);
    render(weatherResult);
  } catch (error) {
    console.error("Failed to fetch weather:", error);
  }
}

// 2. The Render Function (Your HTML logic)
function render(data) {
  document.querySelector("#app").innerHTML = `
    <div class="${styles.weatherCard}">
      <h2 class="${styles.cityName}">${data.location.name}</h2>
      <div class="${styles.weatherMain}">
        <span class="temperature">${data.current.temp_c}°C</span>
        <span class="${styles.condition}">
          <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />
          ${data.current.condition.text}
        </span>
      </div>
      <div class="${styles.weatherDetails}">
        <p>Feels like: <span>${data.current.feelslike_c}°C</span></p>
        <p>Humidity: <span>${data.current.humidity}%</span></p>
        <p>Wind: <span>${data.current.wind_kph} km/h</span></p>
      </div>
    </div>
  `;
}

// 3. Event Listener (The "Setter")
const form = document.querySelector('#searchForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = e.target[0].value;
  updateWeather(city); // Triggers the "state" update
});

// 4. Initial Load (Initial State)
updateWeather('Paris');