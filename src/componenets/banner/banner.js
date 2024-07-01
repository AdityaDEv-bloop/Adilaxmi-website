import './banner.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat:'no-repeat',
    height: '100%',
    width:'100%',
    borderRadius: '5px',
  }
  const slideImages = [
    {
      url: require('../../static/images/banner1.png'),
    },
    {
      url: require('../../static/images/banner2.png'),
    },
  ];
const Banner=()=>{
    return(
        <div className="bannerContainer">
            <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle,}}>
                <img src={slideImage.url} style={{objectFit:'cover'}}>
                </img>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
        </div>
    )
}

export default Banner;