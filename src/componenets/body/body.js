import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './body.css';
import { windowWidth } from '../../const';

const Body=()=>{
  if (windowWidth && windowWidth>768) {
      return(
        <div className="container-body">
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
  else if (windowWidth && windowWidth>1400) {
    return(
      <div className="container-body">
        <video className='imageContainer' autoPlay muted loop >
          <source src={require('../../static/images/video.mp4')} type="video/mp4"/>
        </video>
        <div className='videoOverley'></div>
        <div className='titelContainer'>
            <h2 className='titleMain-big'>ADI LAXMI <span className='titelSpan-small'>Exports</span></h2>
            <p className='titleParagraph-big'>World’s Largest Rice Millers and Basmati Rice Exporters</p>
        </div>
      </div>
  )
  }else{
    return(
      <div className="container-body-small">
        <video className='imageContainer-small' autoPlay muted loop >
          <source src={require('../../static/images/video.mp4')} type="video/mp4"/>
        </video>
        <div className='videoOverley-small'></div>
        <div className='titelContainer-small'>
            <h2 className='titleMain-small'>ADI LAXMI <span className='titelSpan-small'>Exports</span></h2>
            <p className='titleParagraph-small'>World’s Largest Rice Millers and Basmati Rice Exporters</p>
        </div>
      </div>
  )
  } 
}

export default Body;