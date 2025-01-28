import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import HomeCard from "./HomeCard";

const Home = () => {
  const { setCurrentLatitude, setCurrentLongitude, currentWeatherData, bg, textclr } = useContext(DataContext);

  const [message, setMessage] = useState("Loading weather data...");

  useEffect(() => {
    // Use navigator.geolocation for client-side geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(`Error: ${error.message}`);
          setMessage("Unable to retrieve location.");
        }
      );
    } else {
      setMessage("Geolocation is not supported by this browser.");
    }

    // Fallback message after a timeout
    setTimeout(() => {
      setMessage("Taking more than usual...");
    }, 10000);
  }, [setCurrentLatitude, setCurrentLongitude]);

  return (
    <div className="Home" style={{ backgroundImage: `url(${bg})` }}>
      {currentWeatherData ? (
        <HomeCard weatherdata={currentWeatherData} />
      ) : (
        <p style={{ color: `${textclr}`, fontSize: "25px" }}>{message}</p>
      )}
    </div>
  );
};

export default Home;
