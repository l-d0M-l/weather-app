import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});
async function fetchWeather(city) {
  try {
    const response = await weatherApi.get("/current.json", {
      params: {
        q: city,
        aqi: "no",
      },
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
}

export default fetchWeather;
