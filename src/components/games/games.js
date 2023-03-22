import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import P5 from '../../assets/P5.png';
import P4 from '../../assets/P4.png';
import SH from '../../assets/SH2.png';
import {useSelector} from 'react-redux';

const Games = () => {
  const [carouselBackgroundColor, changeCarouselBackgroundColor] = useState("carousel-image-red");
  const [availableBlock, updateAvailableBlock] = useState([]);

  const games = useSelector(state => state.games.value);

  useEffect(() => {
    updateAvailableBlock(games);
  },[games]);

  const changeBgColor = (index) => {
    switch(index) {
      case 0:
        changeCarouselBackgroundColor("carousel-image-red");
        break;
      case 1:
        changeCarouselBackgroundColor("carousel-image-yellow");
        break;
      default:
        changeCarouselBackgroundColor("carousel-image-green");
        break;
    };
  }

  return(
    <>
      <Carousel onChange={changeBgColor} className={carouselBackgroundColor} renderThumbs={() => {}} autoPlay interval="7000" transitionTime="1000" infiniteLoop>
        <div>
          <img src={P5} className="carousel-image carousel-image-red" alt="Persona 5 promotion"/>
        </div>
        <div>
          <img src={P4} className="carousel-image carousel-image-yellow" alt="Persona 4 promotion" />
        </div>
        <div>
          <img src={SH} className=" carousel-image carousel-image-green" alt="Soul hackers promotion" />
        </div>
      </Carousel>
      <div className="gradient-bar"></div>
      <div className="main-body">
        <div className="image-container-main">
          {
            availableBlock.map((item, index) => {
              return (
                <div className="card-container" key={index}><div className="inner-main-card-container">{item.image}</div><div className="inner-main-card-container">{item.title}</div></div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Games;
