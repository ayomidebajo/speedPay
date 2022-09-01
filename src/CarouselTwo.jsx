import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Burger from './assets/burger-removebg.png'
import DoubleBeef from './assets/double-beef-removebg.png'

const CarouselTwo = () => {

  return (
    <Carousel
      centerMode
      centerSlidePercentage={60}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      swipeable
      transitionTime={10}
      showThumbs={false}
    >
      <div className="card--container">
        <div className="notify-container">
          <div className="notify">🔥</div>
        </div>
        <div className="card-body">
          <img src={Burger} alt="" srcset="" />
          <p className="name bold">Beef Burger</p>
          <p className="caption-text">
            Cheezy Mozarella <span>🧀</span>
          </p>
          <p className="price bold big-text">
            <span className="red-text">$</span>6.59
          </p>
        </div>
      </div>
      {/* <p className="legend">Legend 1</p> */}

      <div className="card--container">
        <div className="notify-container">
          <div className="notify">🔥</div>
        </div>
        <div className="card-body">
          <img src={DoubleBeef} alt="" srcset="" />
          <p className="name bold">Double Burger</p>
          <p className="caption-text">
            Double beef <span>🍖</span>
          </p>
          <p className="price bold big-text">
            <span className="red-text">$</span>7.49
          </p>
        </div>
      </div>
      {/* <p className="legend">Legend 2</p> */}
      <div className="card--container">
        <div className="notify-container">
          <div className="notify">🔥</div>
        </div>
        <div className="card-body">
          <img src={Burger} alt="" srcset="" />
          <p className="name bold">Beef Burger</p>
          <p className="caption-text">
            Cheezy Mozarella <span>🧀</span>
          </p>
          <p className="price bold big-text">
            <span className="red-text">$</span>6.59
          </p>
        </div>
      </div>
      <div className="card--container">
        <div className="notify-container">
          <div className="notify">🔥</div>
        </div>
        <div className="card-body">
          <img src={Burger} alt="" srcset="" />
          <p className="name bold">Beef Burger</p>
          <p className="caption-text">
            Cheezy Mozarella <span>🧀</span>
          </p>
          <p className="price bold big-text">
            <span className="red-text">$</span>6.59
          </p>
        </div>
      </div>
      <div className="card--container">
        <div className="notify-container">
          <div className="notify">🔥</div>
        </div>
        <div className="card-body">
          <img src={Burger} alt="" srcset="" />
          <p className="name bold">Beef Burger</p>
          <p className="caption-text">
            Cheezy Mozarella <span>🧀</span>
          </p>
          <p className="price bold big-text">
            <span className="red-text">$</span>6.59
          </p>
        </div>
      </div>
      {/* <p className="legend">Legend 3</p> */}
    </Carousel>
  );
};

export default CarouselTwo;
