import React from 'react'
import Achievement from './Achievement'
import Challenges from './Challenges'
//import Slider from './Slider'
import Slideshow from './Slideshow'
//import Navigation from './Navigation'

const Home = () => {
  return (
    <div>
    <Slideshow/>
      <Challenges/>
      <Achievement/>
    </div>
  )
}

export default Home
