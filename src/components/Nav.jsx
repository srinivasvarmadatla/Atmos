import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <motion.ul
      initial={{ y: '-100px' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className='Nav'>
      <li className='nav-item'><Link to='/'>Home Weather</Link></li>
      <li className='nav-item'><Link to='/Others_weather'>Weather</Link></li>
      <li className='nav-item'><Link to='/About'>About</Link></li>
    </motion.ul>
  )
}

export default Nav