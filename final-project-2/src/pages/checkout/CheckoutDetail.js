import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculatePrice } from "../../redux/features/cartSlice";
import "../admin/Styles.css";

const CheckoutDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems, dispatch]);

  return (
    <div className="container pt-5 mb-5">
      <div className="tablerounededCorner">
        <h3 className="py-5">
          <b>Checkout Details</b>
        </h3>
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
              <table className="roundedTable">
                {cartItems.map((product, index) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} style={{ width: "6em" }} />
                    </td>
                    <td className="checkout">
                      <p>
                        <b>{product.title}</b>
                      </p>
                      <p>{product.category}</p>
                    </td>
                    <td className="checkout">
                      <p>Quantity: {product.cartQuantity}</p>
                      <p>Price per unit: ${product.price}</p>
                    </td>
                    <td>
                      <p>
                        <b>${product.price * product.cartQuantity}</b>
                      </p>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}>
                    <h5>
                      Cart item(s): <b>{cartTotalQuantity}</b>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <h5>
                      Total: <b>${cartTotalPrice.toFixed(2)}</b>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <a href="checkout-message">
                      <button
                        className="btn btn-dark btn-outline-light"
                        style={{ width: "50%" }}
                      >
                        Place Order
                      </button>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetail;
