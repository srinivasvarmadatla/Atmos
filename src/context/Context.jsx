import { createContext } from "react";
import { useState, useEffect } from "react";
import { getWeatherData as api } from "../api/Climate1";
import { WiDayHaze, WiDaySunny, WiCloud, WiRain } from "react-icons/wi";
import nightImg from '../images/landscape-4827278_1920.jpg';
import dayImg from '../images/sunset-1117008_1280.jpg';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [latitude, setLatitude] = useState(''); // For user-inputted location
    const [longitude, setLongitude] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState(''); // For current location
    const [currentLongitude, setCurrentLongitude] = useState('');
    const [currentWeatherData, setCurrentWeatherData] = useState(null);

    useEffect(() => {
        if (latitude && longitude) {
            const fetchWeatherData = async () => {
                try {
                    const data = await api(latitude, longitude);
                    setWeatherData(data);
                } catch (err) {
                    console.error(err.message);
                }
            };
            fetchWeatherData();
        }
    }, [latitude, longitude]);

    useEffect(() => {
        if (currentLatitude && currentLongitude) {
            const fetchCurrentWeatherData = async () => {
                try {
                    const data = await api(currentLatitude, currentLongitude);
                    setCurrentWeatherData(data);
                } catch (err) {
                    console.error(err.message);
                }
            };
            setTimeout(()=>{
                fetchCurrentWeatherData();
            },3000)
        }
    }, [currentLatitude, currentLongitude]);

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const curTime = `${hours % 12 || 12}:${minutes} ${ampm}`;

    const getWeatherIcon = (condition) => {
        switch (condition) {
            case "Haze":
                return <WiDayHaze />;
            case "Clear":
                return <WiDaySunny />;
            case "Clouds":
                return <WiCloud />;
            case "Rain":
                return <WiRain />;
            default:
                return <WiDaySunny />;
        }
    };

    const date = new Date();
    const time = date.getHours();
    const textclr = time > 6 && time < 18 ? "black" : "white";
    const bg = time > 6 && time < 18 ? dayImg : nightImg;

    return (
        <DataContext.Provider value={{
            setLatitude,
            setLongitude,
            latitude,
            longitude,
            weatherData,
            curTime,
            getWeatherIcon,
            time,
            textclr,
            bg,
            setCurrentLatitude,
            setCurrentLongitude,
            currentLatitude,
            currentLongitude,
            currentWeatherData,
        }}>
            {children}
        </DataContext.Provider>
    );
};
