import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { calculateQuantity } from "../redux/features/cartSlice";

const Navbar = () => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateQuantity());
  }, [dispatch]);

  return (
    <div>
      <div className="border border-bottom">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">
          Cart <p>{cartTotalQuantity}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
