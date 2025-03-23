import React from "react";
import { DataContext } from "../context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const HomeCard = ({ weatherdata}) => {
  const {curTime,getWeatherIcon}=useContext(DataContext)

  const formatTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const varient1={
    init:{
      opacity:0,
      x:'70%'
    },
    end:{
      opacity:1,
      x:0,
      transition:{
        duration:1
      }
    }
  }

  return (
    <motion.div 
    variants={varient1}
    initial="init"
    animate="end"
    layout
    className="card">
      <div className="card_title">
        <div className="weather_img">
          {getWeatherIcon(weatherdata.weather[0].main)}
        </div>
        <div className="card_title_body">
          <h1 style={{ color: "white" }}>
            {weatherdata.name},{weatherdata.sys.country}
          </h1>
          <p style={{ color: "white" }}>
            {Math.floor(weatherdata.main.temp - 273)}<sup>°</sup>C
          </p>
          <h4 style={{ color: "white" }}>{weatherdata.weather[0].description}</h4>
        </div>
      </div>
      <p style={{ color: "white", fontSize:'1.5rem'}}>{curTime}</p>
      <div className="card_body">
        <p style={{ color: "white" }}>
        <strong>Feels like:</strong> {Math.floor(weatherdata.main.feels_like - 273)}<sup>°C</sup>
        </p>
        <p style={{ color: "white" }}>
          <strong>Min Temp:</strong> {Math.floor(weatherdata.main.temp_min - 273)}<sup>°C</sup> | 
          <strong> Max Temp:</strong> {Math.floor(weatherdata.main.temp_max - 273)}<sup>°C</sup>
        </p>
        <p style={{ color: "white" }}>
          <strong>Humidity:</strong> {weatherdata.main.humidity}% | <strong>Pressure:</strong> {weatherdata.main.pressure} hPa
        </p>
        <p style={{ color: "white" }}>
          <strong>Wind:</strong> {weatherdata.wind.speed} m/s, {weatherdata.wind.deg}&deg;
        </p>
        {weatherdata.rain && (
          <p style={{ color: "white" }}>
            <strong>Rain (last hour):</strong> {weatherdata.rain["1h"]} mm
          </p>
        )}
        <p style={{ color: "white" }}>
          <strong>Cloudiness:</strong> {weatherdata.clouds.all}%
        </p>
        <p style={{ color: "white" }}>
          <strong>Sunrise:</strong> {formatTime(weatherdata.sys.sunrise, weatherdata.timezone)}
          | <strong>Sunset:</strong> {formatTime(weatherdata.sys.sunset, weatherdata.timezone)}
        </p>
      </div>
    </motion.div>
  );
};

export default HomeCard;
