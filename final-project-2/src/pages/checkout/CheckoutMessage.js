import React from "react";
import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

const CheckoutMessage = () => {
  return (
    <div className="homepage d-flex justify-content-center">
      <div
        className="bg-white w-50 py-5 rounded-3 mb-5"
        style={{ marginTop: "5em" }}
      >
        <h3>Your purchase was successful!</h3>
        <h5>Thank you for your trust in our shop</h5>
        <br />
        <div className="my-4">
          <BsFillPatchCheckFill size={200} />
        </div>
        <Link to="/">
          <button className="btn btn-outline-dark">
            Check for another product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutMessage;
