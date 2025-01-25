import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather"
});

export const getWeatherData = async (lat, lon) => {
  try {
    const apiKey="c35868b96f07e7b82a6196e353db5b0c";
    const response = await apiClient.get(`?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};