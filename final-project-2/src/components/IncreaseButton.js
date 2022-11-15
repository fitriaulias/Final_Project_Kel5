import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateQuantity } from "../redux/features/cartSlice";
import { addItem } from "../redux/features/cartSlice";

const IncreaseButton = ({ product, name, styling }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addItemButton = (product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    dispatch(calculateQuantity());
  }, [cartItems, dispatch]);

  return (
    <div>
      <button
        type="button"
        className={`button-style ${styling}`}
        onClick={() => addItemButton(product)}
      >
        {name}
      </button>
    </div>
  );
};

export default IncreaseButton;
