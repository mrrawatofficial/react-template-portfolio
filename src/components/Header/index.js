import React, { useState } from "react";
import Icons from "../Icons";
import { Carousel } from "rsuite";
import { Link } from "react-scroll";

const index = () => {
  const [showNav, setShowNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [banners, setBanners] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5",
    },
  ]);

  const showMobileNav = () => {
    setShowNav(!showNav);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <header>
      <div className="header_top">
        <div className="top_left">
          <a href="#"> +91 1234 567 891 </a>
          <a href="#"> info@example.com </a>
        </div>
        <div className="top_right">
          <Icons />
          {/* <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a> */}
        </div>
      </div>
      <div id="banner">
        <Carousel
          className="banner_Slider"
          autoplay
          shape="bar"
          placement="right"
        >
          {banners.map((banner) => (
            <img src={banner.image} height="250" key={banner.id} />
          ))}
        </Carousel>
      </div>
      <div className={colorChange ? "navbar navbar-fixed" : "navbar"}>
        <div className="logo">
          <Link to="banner">
            <span>Logo</span>
          </Link>
        </div>
        <button className="nav--toggle--btn" onClick={showMobileNav}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav ${showNav && "mobile-nav"}`}>
          <button className="nav--toggle--btn closebtn" onClick={showMobileNav}>
            <i className="fas fa-times"></i>
          </button>
          <li>
            <Link
              to="banner"
              activeClass="active"
              spy={true}
              onClick={showMobileNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              onClick={showMobileNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              onClick={showMobileNav}
            >
              Services
            </Link>
          </li>
          {/* <li>
            <Link to="skills" activeClass="active" spy={true}>
              My Skills
            </Link>
          </li> */}
          <li>
            <Link
              to="portfolio"
              activeClass="active"
              spy={true}
              onClick={showMobileNav}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              onClick={showMobileNav}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default index;
