import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better education for a better world</h1>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero