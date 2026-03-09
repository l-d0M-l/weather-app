import styles from "../styles/card.module.css";

function renderInfo(data) {
  return `<div class="${styles.weatherCard}">
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
        <div class="${styles.weatherCard} ${styles.locationCard}">
          <h3 class="${styles.subTitle}">Location Info</h3>
          <div class="${styles.locationDetails}">
            <p>Local Time: <span>${data.location.localtime}</span></p>
            <p>Region: <span>${data.location.region}</span></p>
            <p>Country: <span>${data.location.country}</span></p>
            <p>Lat/Lon: <span>${data.location.lat}, ${data.location.lon}</span></p>
        </div>`;
}

export default renderInfo;
