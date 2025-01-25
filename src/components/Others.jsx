import React, { useContext, useState } from 'react';
import { DataContext } from '../context/Context';

import HomeCard from './HomeCard';

const Others = () => {
  const { bg, setLatitude, setLongitude, weatherData, textclr } = useContext(DataContext);
  const [inputLatitude, setInputLatitude] = useState('');
  const [inputLongitude, setInputLongitude] = useState('');
  const [message, setMessage] = useState("Enter required data")

  const setData = (e) => {
    setMessage("Loding weather data...")
    e.preventDefault();
    setLatitude(inputLatitude);
    setLongitude(inputLongitude);
  };



  return (
    <div className="Other" style={{ backgroundImage: `url(${bg})` }}>
      <form onSubmit={setData} className='lat_long'>
        <input
          type="text"
          placeholder="Enter latitude"
          value={inputLatitude}
          onChange={(e) => setInputLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter longitude"
          value={inputLongitude}
          onChange={(e) => setInputLongitude(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <HomeCard weatherdata={weatherData} />
      ) : (
        <div className='loading_state'>
          <p style={{ color: `${textclr}`, fontSize: '20px' }}>Enter the required data</p>
          <br />
          {message === "Enter required data" ? (
            <p style={{ color: `${textclr}`, fontSize: '20px' }}>
              Use this link for Coordinates:
              <a href="https://developers.google.com/maps/documentation/geocoding/overview" target="_blank" rel="noopener noreferrer">
                LINK
              </a>
            </p>
          ) : null}
        </div>
      )}

    </div>
  );
};

export default Others;
