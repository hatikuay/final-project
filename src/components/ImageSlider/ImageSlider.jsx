import React, {useState} from 'react';
import "./ImageSlider.scss"
import SearchBox from "../SearchBox/SearchBox";

function ImageSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
  }
  return (
    <div className={"slider"}>
      <span className={"left-arrow"} onClick={prevSlide}>
           <img src={"\thttps://captainfargo.com/static/main/ic-right-arrow.179f968435bb.svg"}/>
      </span>
      <span className={"right-arrow"} onClick={nextSlide}>
        <img src={"\thttps://captainfargo.com/static/main/ic-right-arrow.179f968435bb.svg"}/>
      </span>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (<img className={"slide-image"} src={slide.image} alt={"captain-fargo"}/>)}
          </div>
        )
      })}
      <ol className={"carousel-indicators"}>
        {slides.map((slide, index) => {
          if (index === current) {
            return <li className={"active"}></li>
          } else {
            return <li></li>
          }
        })}
      </ol>
    </div>
  );
}

export default ImageSlider;