import React, { useEffect } from "react";
import { calculatePrice } from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import IncreaseButton from "../../components/IncreaseButton";
import DecreaseButton from "../../components/DecreaseButton";

const Cart = () => {
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
    <div>
      {cartItems.length > 0 ? (
        <>
          <p>Your Cart has {cartTotalQuantity}</p>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Picture</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((cart, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{cart.title}</td>
                      <td>
                        <img src={cart.image} alt={cart.title} width="100px" />
                      </td>
                      <td>${cart.price}</td>
                      <td>{cart.cartQuantity}</td>
                      <td>{(cart.price * cart.cartQuantity).toFixed(2)}</td>
                      <td>
                        <IncreaseButton product={cart} name="+" />
                        <DecreaseButton product={cart} name="-" />
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td>Total</td>
                <td>{`Cart item(s): ${cartTotalQuantity}`}</td>
                <td>{`$${cartTotalPrice.toFixed(2)}`}</td>
                <td>
                  <button>Place order</button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h5>Your cart is empty!</h5>
      )}
    </div>
  );
};

export default Cart;
