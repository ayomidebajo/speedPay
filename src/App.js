import "@egjs/react-flicking/dist/flicking.css";
import "./App.css";
import Girl from "./assets/girl-removebg.png";
import {MdKeyboardArrowDown} from 'react-icons/md'
import { GoLocation } from "react-icons/go";
import {RiHome6Fill} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {IoMdArrowDroprightCircle} from 'react-icons/io'
import {VscBell} from 'react-icons/vsc'
import { FiSearch } from "react-icons/fi";
import {CgShoppingCart} from 'react-icons/cg'
import DeliveryGuy from "./assets/delivery-removebg.png";
import CarouselComp from "./Carousel";
import CarouselTwo from "./CarouselTwo";

function App() {
  const settings = {
    dots: false,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
    // rows: 3,
    // slidesPerRow: 2,
    // arrows: false,
    swipeToSlide: true,
    swipe: true,
  };
  return (
    <div className="app">
      <div className="body">
        <div className="nav">
          <ul className="navlist-container">
            <li className="navlist-item">
              <div className="box">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot red"></span>
              </div>
            </li>
            <li className="navlist-item">
              <div className="drop-down">
                <span>
                  <GoLocation color="red" />
                </span>{" "}
                <span className="bold">Califonia, US </span>
                <span>
                  <MdKeyboardArrowDown color="orange" />
                </span>
              </div>
            </li>
            <li className="navlist-item">
              <div className="box-avatar">
                <img src={Girl} width="30px" alt="girl" />
              </div>
            </li>
          </ul>
          <div className="header">
            <div className="header-text">
              <p className="big-text bold header-text-child">
                The Fastest in Delivery{" "}
                <span className="red-text big-text">Food</span>
              </p>
              <button className="btn-red-capsule">Order Now</button>
            </div>

            <img src={DeliveryGuy} width="90%" alt="" srcset="" />
          </div>
        </div>
        <div className="categories">
          <h4 className="mb-2">Categories</h4>
          <CarouselComp />
        </div>
        <div className="popular">
          <div className="header-popular">
            <h4 className="mb-2">Popular Now</h4>
            <p className="orange-text">
              View all{" "}
              <span>
                <IoMdArrowDroprightCircle color="oranege" />
              </span>
            </p>
          </div>
          <CarouselTwo />
        </div>
        <div className="footer">
          <ul className="list-icons-container">
            <li className="list-icon">
              <RiHome6Fill color="red" className="large-text" />
              <div className="text-center">
                <div className="dot red text-center"></div>
              </div>
              {/* <FontAwesomeIcon icon={faHouse} color="red" /> */}
            </li>
            <li className="list-icon">
              <AiOutlineHeart className="large-text grey" />
              {/* <FontAwesomeIcon icon={faHeart} /> */}
            </li>
            <li className="list-icon ">
              <div className="red-bg-circle">
                <FiSearch color="white" className="large-text" />
              </div>
            </li>
            <li className="list-icon">
              <VscBell className="large-text grey" />
            </li>
            <li className="list-icon">
              <div className="dot-red notify-count bold">4</div>
              <CgShoppingCart className="large-text grey" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
