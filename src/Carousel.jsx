import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComp = () => {

  return (
    <Carousel
      centerMode
      centerSlidePercentage={40}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      swipeable
      showThumbs={false}
    >
      <button className="btn-red-capsule-carousel bold">
        <div className="white-circle">
          {" "}
          <span className="">🍔</span>
        </div>
        Burger
      </button>
      {/* <p className="legend">Legend 1</p> */}

      <button className="btn-white-capsule-carousel bold">
        <div className="transparent-circle">
          {" "}
          <span className="">🍕</span>
        </div>
        Pizza
      </button>
      {/* <p className="legend">Legend 2</p> */}
      <button className="btn-white-capsule-carousel bold">
        <div className="transparent-circle">
          {" "}
          <span className="">🍦</span>
        </div>
        Ice cream
      </button>
      <button className="btn-white-capsule-carousel bold">
        <div className="transparent-circle">
          {" "}
          <span className="">🍕</span>
        </div>
        Pizza
      </button>
      <button className="btn-white-capsule-carousel bold">
        <div className="transparent-circle">
          {" "}
          <span className="">🍕</span>
        </div>
        Pizza
      </button>
      {/* <p className="legend">Legend 3</p> */}
    </Carousel>
  );
};

export default CarouselComp;
