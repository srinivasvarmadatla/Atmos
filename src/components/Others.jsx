import React, { useContext, useState } from 'react';
import { DataContext } from '../context/Context';

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
      {weatherData ? <HomeCard weatherdata={weatherData} /> : <div className='loding_state'>
        <p style={{ color: `${textclr}`, fontSize: '20px' }}>Loding data...</p><br />
        <p style={{ color: `${textclr}`, fontSize: '20px' }}>Use this link for Coordinates<a href="https://developers.google.com/maps/documentation/geocoding/overview">LINK</a></p></div>}
    </div>
  );
};

export default Others;
