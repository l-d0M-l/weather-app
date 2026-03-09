import "../styles/style.css";
import fetchWeather from "./api/weatherAppApi";
import renderInfo from "./renderElements";
if (window.lucide) {
  window.lucide.createIcons();
}

// 1. Create a function to handle the "State Change" and Re-render
async function updateWeather(city) {
  try {
    const weatherResult = await fetchWeather(city);

    // SAVE: Store the successfully fetched city name
    localStorage.setItem("lastSearchedCity", city);

    render(weatherResult);
  } catch (error) {
    console.error("Failed to fetch weather:", error);
  }
}

// 2. The Render Function (Your HTML logic)
function render(data) {
  console.log(data);

  document.querySelector("#app").innerHTML = renderInfo(data);
}

// 3. Event Listener (The "Setter")
const form = document.querySelector("#searchForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = e.target[0].value;
  if (city) {
    updateWeather(city);
    e.target[0].value = ""; // Clear input after search
  }

  // updateWeather(city); // Triggers the "state" update
});

// 4. Initial Load (Initial State)
const savedCity = localStorage.getItem("lastSearchedCity");
updateWeather(savedCity || "");
