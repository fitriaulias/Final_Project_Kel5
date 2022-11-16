import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

  return (
    <div>
      <h4>Order Details</h4>
      <div>
        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty!</p>
            <button>
              <Link to="/">Click here to get your favorite item.</Link>
            </button>
          </div>
        ) : (
          <div>
            <p>{`Cart item(s): ${cartTotalQuantity}`}</p>
            <div>
              <p>Total Price: {cartTotalPrice.toFixed(2)}</p>
            </div>
            {cartItems.map((product, index) => (
              <div>
                <p>{product.name}</p>
                <p>Quantity: {product.cartQuantity}</p>
                <p>Price per unit: {product.price}</p>
                <p>Total Price: {product.price * product.cartQuantity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutDetail;
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

  return (
    <div>
      <h4>Order Details</h4>
      <div>
        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty!</p>
            <button>
              <Link to="/">Click here to get your favorite item.</Link>
            </button>
          </div>
        ) : (
          <div>
            <p>{`Cart item(s): ${cartTotalQuantity}`}</p>
            <div>
              <p>Total Price: {cartTotalPrice.toFixed(2)}</p>
            </div>
            {cartItems.map((product, index) => (
              <div>
                <p>{product.name}</p>
                <p>Quantity: {product.cartQuantity}</p>
                <p>Price per unit: {product.price}</p>
                <p>Total Price: {product.price * product.cartQuantity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutDetail;
