import React, { useContext, useState } from 'react';
import { DataContext } from '../context/Context';
import { motion } from 'framer-motion';

import HomeCard from './HomeCard';

const Others = () => {
  const { bg, setLatitude, setLongitude, weatherData, textclr } = useContext(DataContext);
  const [inputLatitude, setInputLatitude] = useState('');
  const [inputLongitude, setInputLongitude] = useState('');

  const setData = (e) => {
    e.preventDefault();
    setLatitude(inputLatitude);
    setLongitude(inputLongitude);
  };
  const varient1 = {
    init: {
      opacity: 0,
      x: '100%'
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <div className="Other" style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <form
          onSubmit={setData} className='lat_long'>
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
        {weatherData ? <HomeCard weatherdata={weatherData} /> : <div className='loding_state'>
          <p style={{ color: `${textclr}`, fontSize: '20px' }}>Loding data...</p><br />
          <p style={{ color: `${textclr}`, fontSize: '20px' }}>Use this link for Coordinates<a href="https://developers.google.com/maps/documentation/geocoding/overview">LINK</a></p></div>}
      </div>
    </div>
  );
};

export default Others;
