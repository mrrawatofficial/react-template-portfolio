import React from "react";
import { Link } from "react-scroll";
import Icons from "../Icons";

function index() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <div className="bar mb-3"></div>
            <p>
              Our team is experienced with advanced latest technologies and we
              try to use suitable ones in our client projects! We try not to let
              your project down anyway!
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <div className="bar mb-3"></div>
            <ul className="footer-link">
              <li>
                <Link to="banner" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow US</h5>
            <div className="bar mb-3"></div>

            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
