import React from 'react'
import './slide.scss'
import { Fade } from 'react-slideshow-image'

const fadeImages = [
  'https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg',
  'https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  infinite: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
  }
}

const SlideShow = () => {
  return (
    <div className='slide-container'>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow