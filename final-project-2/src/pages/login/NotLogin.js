import React from "react";
import { Link } from "react-router-dom";

const NotLogin = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="notlogin">
        <h2 className="py-2">
          Oops you're <b>not logged in</b>
        </h2>
        <p>Click the button below to enjoy this feature</p>
        <Link to="/login">
          <button className="btn btn-dark btn-outline-light w-50">
            LOG IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotLogin;
