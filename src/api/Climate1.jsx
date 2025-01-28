import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather"
});

export const getWeatherData = async (lat, lon) => {
  try {
    const apiKey=process.env.REACT_APP_API_KEY;
    const response = await apiClient.get(`?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};