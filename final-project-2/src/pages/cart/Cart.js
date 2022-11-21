import React, { useEffect } from "react";
import { calculatePrice } from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import IncreaseButton from "../../components/IncreaseButton";
import DecreaseButton from "../../components/DecreaseButton";
import { BsFillCartXFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "../admin/Styles.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems, dispatch]);

  const CheckLogin = () => {
    if (localStorage.getItem("userToken")) {
      navigate("/checkout-details");
    } else {
      navigate("/notlogin");
    }
  };

  return (
    <div className="homepage cart-me d-flex justify-content-center">
      <div className="w-75">
        <div className="tablerounededCorner">
          {cartItems.length > 0 ? (
            <>
              <div className="table-responsive-sm">
                <table className="roundedTable">
                  <thead>
                    <tr>
                      <th className="text-center">Picture</th>
                      <th className="text-center">Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Total</th>
                      <th className="text-center">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems &&
                      cartItems.map((cart, index) => {
                        return (
                          <tr key={index}>
                            <td className="p-4">
                              <img
                                src={cart.image}
                                alt={cart.title}
                                width="100px"
                              />
                            </td>
                            <td>{cart.title}</td>
                            <td>${cart.price}/item</td>
                            <td>
                              ${(cart.price * cart.cartQuantity).toFixed(2)}
                            </td>
                            <td>
                              <div className="d-flex justify-content-center">
                                <DecreaseButton
                                  product={cart}
                                  name="-"
                                  styling="btn btn-outline-dark mx-2 py-0"
                                />
                                <div>
                                  <p>{cart.cartQuantity}</p>
                                </div>
                                <IncreaseButton
                                  product={cart}
                                  name="+"
                                  styling="btn btn-outline-dark mx-2 py-0"
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    <tr>
                      <td>Total</td>
                      <td>
                        Cart item(s): <b>{cartTotalQuantity}</b>
                      </td>
                      <td>
                        <b>{`$${cartTotalPrice.toFixed(2)}`}</b>
                      </td>
                      <td></td>
                      <td>
                        <button
                          className="btn btn-dark btn-outline-light px-5"
                          onClick={CheckLogin}
                        >
                          Place order
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="cart-empty">
              <h3>Your cart is empty!</h3>
              <Link to="/">
                <h4>Click here to check your favorite item.</h4>
              </Link>
              <BsFillCartXFill size={200} className="m-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
