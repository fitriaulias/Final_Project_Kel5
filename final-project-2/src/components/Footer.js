import React from "react";
import brand from ".././assets/icon.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/">
              <img
                src={brand}
                alt="Home"
                className="brand-image"
                style={{ width: "15%" }}
              />
            </a>
          </div>

          <div className="col">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Men's Clothing</a>
              </li>
              <li>
                <a to="/">Women's Clothing</a>
              </li>
              <li>
                <a href="/">Jewelery</a>
              </li>
              <li>
                <a href="/">Electronics</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-2">
                  Getting started
                </a>
              </li>
              <li>
                <a href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-2">
                  How to use
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="mailto:support@bukapedia.com">support@bukapedia.com</a>
              </li>
              <li>
                <a href="tel:0234567890">02345-567-890</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col text-center copyrights">
            &copy;{new Date().getFullYear()} Copyright • All rights reserved •
            Bukapedia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
