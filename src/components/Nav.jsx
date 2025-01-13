import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <ul className='Nav'>
        <li className='nav-item'><Link to='/'>Home Weather</Link></li>
        <li className='nav-item'><Link to='/Others_weather'>Weather</Link></li>
        <li className='nav-item'><Link to='/About'>About</Link></li>
    </ul>
  )
}

export default Nav