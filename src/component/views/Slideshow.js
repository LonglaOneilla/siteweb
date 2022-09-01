
//import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import './styles/slideshow.css'
import { v4 as uuid } from 'uuid';
import sliderdata from '../data/sliderdata'

const Slideshow = () => {
  return (
    <div>
    <Carousel className='carousel' autoPlay interval="5000" 
    infiniteLoop useKeyboardArrows animationHandler='fade' >
    {sliderdata.slides.map((slide) => (
                <div key={uuid()}>
                    <img src={slide.image} alt='image1'/>
                    <p className="legend">Legend 1</p>
                </div>
                ))}
                
            </Carousel>
    </div>
  )
}

export default Slideshow
