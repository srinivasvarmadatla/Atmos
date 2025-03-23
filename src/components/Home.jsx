import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/Context";
import HomeCard from "./HomeCard";

const Home = () => {
  const {setCurrentLatitude, setCurrentLongitude, currentWeatherData,bg,textclr } = useContext(DataContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      }, (error) => {
        console.error(`Error: ${error.message}`);
      });
    }
  }, [setCurrentLatitude, setCurrentLongitude]);

  
  

  return (
    <div 
    className="Home" style={{ backgroundImage: `url(${bg})` }}>
      {currentWeatherData ? (
        <HomeCard 
        weatherdata={currentWeatherData}
        />
      ) : (
        <p style={{ color:`${textclr}`, fontSize:'25px'}}>Loading weather content...</p>
      )}
    </div>
  );
};

export default Home;
