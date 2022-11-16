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
    <div className="homepage d-flex justify-content-center">
      <div className="bg-white w-75 my-5 rounded">
        {cartItems.length > 0 ? (
          <>
            <div className="table-responsive-sm">
              <table className="m-4">
                <thead className="">
                  <tr className="border">
                    <th>Picture</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartItems &&
                    cartItems.map((cart, index) => {
                      return (
                        <tr key={index} className="">
                          <td className="p-4">
                            <img
                              src={cart.image}
                              alt={cart.title}
                              width="100px"
                            />
                          </td>
                          <td className="text-start w-25">{cart.title}</td>
                          <td>${cart.price}</td>
                          <td>
                            ${(cart.price * cart.cartQuantity).toFixed(2)}
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <IncreaseButton
                                product={cart}
                                name="+"
                                styling="btn btn-outline-dark mx-2"
                              />
                              <div className="border border-dark rounded px-2">
                                {cart.cartQuantity}
                              </div>
                              <DecreaseButton
                                product={cart}
                                name="-"
                                styling="btn btn-outline-dark mx-2"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  <tr className="border border-top">
                    <td>Total</td>
                    <td>{`Cart item(s): ${cartTotalQuantity}`}</td>
                    <td>{`$${cartTotalPrice.toFixed(2)}`}</td>
                    <td></td>
                    <td>
                      <button className="btn btn-outline-dark px-5">
                        Place order
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <h5>Your cart is empty!</h5>
        )}
      </div>
    </div>
  );
};

export default Cart;
