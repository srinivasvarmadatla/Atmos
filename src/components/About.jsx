import React from 'react'
import { DataContext } from '../context/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const { bg } = useContext(DataContext)
  const varient1 = {
    init: {
      opacity: 0,
      x: '70%'
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
    <div style={{ backgroundImage: `url(${bg})` }} className='About'>
      <motion.div
        variants={varient1}
        initial="init"
        animate="end"
        className="about_card">
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
      </motion.div>
    </div>
  )
}

export default About