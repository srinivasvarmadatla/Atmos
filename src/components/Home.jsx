import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import HomeCard from "./HomeCard";
import IPGeolocationAPI from "ip-geolocation-api-javascript-sdk";

const Home = () => {
  const { setCurrentLatitude, setCurrentLongitude, currentWeatherData, bg, textclr } = useContext(DataContext);

  const API_KEY = "1711f766ff044e969c8d06ea3efeec05";
  const timezone = new IPGeolocationAPI();

  const handleResponse = (response) => {
    if (response && response.location) {
      const { latitude, longitude } = response.location;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    } else {
      console.log("Failed to retrieve location data.");
    }
  };

  timezone.getGeolocation(handleResponse, {}); // Fixed: using timezone here

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(`Error: ${error.message}`);
        }
      );
    }
  }, [setCurrentLatitude, setCurrentLongitude]);

  const [message, setMessage] = useState("Loading weather data...");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Taking more than usual...");
    }, 10000);
  });

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
