import React, { useState, useEffect } from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import P5 from '../../assets/P5.png';
import P4 from '../../assets/P4.png';
import SH from '../../assets/SH2.png';
import {useSelector} from 'react-redux';

const Home = () => {
  const [carouselBackgroundColor, changeCarouselBackgroundColor] = useState("carousel-image-red");
  const [availableBlock, updateAvailableBlock] = useState([]);
  const [upcomingBlock, updateUpcomingBlock] = useState([]);
  const [innerSub, updateInnerSub] = useState([]);

  const news = useSelector(state => state.news.value);
  const games = useSelector(state => state.games.value);

  useEffect(() => {
    updateAvailableBlock(games)
  },[games]);

  useEffect(() => {
    updateInnerSub(news);
  },[news]);

  useEffect(() => {
    updateUpcomingBlock([
      {"image": "image", "title": "Persona 3 Protable"},
      {"image": "image", "title": "Persona 4 Golden"},
    ]);
  },[]);

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
        <div className="sub-main">
          <h1>AVAILABLE NOW</h1>
          <div className="image-container-main">
            {
              availableBlock.filter(i => i.availableNow).map((item, index) => {
                return (
                  <div className="card-container" key={index}><div className="inner-main-card-container">{item.image}</div><div className="inner-main-card-container">{item.title}</div></div>
                )
              })
            }
          </div>
          <h1>UPCOMING RELEASES</h1>
          <div className="image-container-main">
            {
              upcomingBlock.map((item, index) => {
                return (
                  <div className="card-container" key={index}><div className="inner-main-card-container">{item.image}</div><div className="inner-main-card-container">{item.title}</div></div>
                )
              })
            }
          </div>
        </div>
        <div className="sub-main">
          <h1>Latest News</h1>
          <h2><center>Holiday savings</center></h2>
          {
            innerSub.filter((ele, index) => index < 3).map((item, index) => {
              return (
                <div className="sub-inner-block" key={index}>
                  <h3>{item.title}</h3>
                  <div className="dates"><em>{item.date}</em></div>
                  <div>{item.description}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </>
  );
};

export default Home;
