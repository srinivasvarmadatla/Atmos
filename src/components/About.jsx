import React from 'react'
import { DataContext } from '../context/Context';
import { useContext } from 'react';

const About = () => {
  const { bg } = useContext(DataContext)
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='About'>
      <div className="about_card">
        <h2>About Us</h2>
        <p>
          Welcome to "ATMOS", your trusted companion for real-time, accurate weather updates. Whether
          you’re planning your day, scheduling a trip, or simply curious about the current weather conditions, we’ve got you covered.
          <br />
          <br />
          This website is simple: to provide you with precise,
          easy-to-understand weather information tailored to your location. Powered by advanced technology a
          nd reliable data sources, we aim to keep you informed about the weather wherever you are.
        </p>
      </div>
    </div>
  )
}

export default About