import React from 'react';
import About from '../body-components/about/about';
import 'react-slideshow-image/dist/styles.css'
import './body.css';
  const slideImages = [
    {
      url: require('../../static/images/slide1.jpg'),
    },
    {
      url: require('../../static/images/slide2.jpg'),
    },
    {
      url: require('../../static/images/slide3.jpg'),
    },
  ];
const Body=()=>{
    return(
        <div className="container">
          <video className='imageContainer' autoPlay muted loop >
            <source src={require('../../static/images/video.mp4')} type="video/mp4"/>
          </video>
          <div className='videoOverley'></div>
          <div className='titelContainer'>
              <h2 className='titleMain'>ADI LAXMI <span className='titelSpan'>Exports</span></h2>
              <p className='titleParagraph'>World’s Largest Rice Millers and Basmati Rice Exporters</p>
          </div>
        </div>
    )
}

export default Body;