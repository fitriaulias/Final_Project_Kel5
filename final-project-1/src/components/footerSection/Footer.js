import React from "react";
import brand from '../../assets/icon-navbar.png'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
            <img src={brand} alt="Logo" className="brand-image" />
          </div>

          <div className="col">
            <h5>Resources</h5>
            <ui className="list-unstyled">
              <li>Articles</li>
              <li>FAQs</li>
            </ui>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col text-center copyrights">
            &copy;{new Date().getFullYear()} Copyright • All rights reserved • NewsApp
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;