import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateQuantity } from "../redux/features/cartSlice";
import { removeItem } from "../redux/features/cartSlice";

const DecreaseButton = ({ product, name, styling }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const removeItemButton = (product) => {
    dispatch(removeItem(product));
  };

  useEffect(() => {
    dispatch(calculateQuantity());
  }, [cartItems, dispatch]);

  return (
    <div>
      <button
        type="button"
        className={`button-style ${styling}`}
        onClick={() => removeItemButton(product)}
      >
        {name}
      </button>
    </div>
  );
};

export default DecreaseButton;
