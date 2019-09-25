import React from 'react'
import './slide.scss'
import { Fade } from 'react-slideshow-image'

const fadeImages = [
  'https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg',
  'https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://thumbs-prod.si-cdn.com/ttQ_J3nAhFMEyzSgmZOkfIEOzzs=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/5b/3e/5b3eefc6-3a12-45ad-8a46-f3ab1ab28901/istock-953069774.jpg'
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  infinite: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
  }
}

const SlideShow = () => {
  return (
    <div className='slide-container'>
      <Fade {...fadeProperties}>
        {
          fadeImages.map(
            (imgUrl, index) => (
              <div className="each-fade">
                <div className="image-container">
                  <img src={imgUrl} />
                </div>
              </div>    
            )
          )
        }
        {/* <div className="each-fade">
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
        </div> */}
      </Fade>
    </div>
  )
}

export default SlideShow