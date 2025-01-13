import React from 'react'

const Footer = () => {

    const date=new Date();
    const year=date.getFullYear();

  return (
    <main className='Footer'>
        <p>Copyrights@ {year}</p>
    </main>
  )
}

export default Footer
