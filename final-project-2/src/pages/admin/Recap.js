import React, { useEffect, useState } from "react";
import './Styles.css'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

function Recap() {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState([]);
    const [totalEarning, setTotalEarning] = useState(0);
    const allOrders = useSelector((state) =>
        state.orderItems.orderItems.length > 0
        ? state.orderItems.orderItems
        : JSON.parse(localStorage.getItem("orderItems"))
    );

    useEffect(() => {
        const testReport = async () => {
          const products =
            (await allOrders) &&
            allOrders.reduce((result, orders) => {
              const item = orders.filter((order) => {
                const sameItem = result.find((item) => item.id === order.id);
                if (sameItem) {
                  sameItem.count += order.count;
                  return null;
                }
                return order;
              });
              return [...result, ...item];
            }, []);
          const earning =
            products &&
            products.reduce(
              (result, product) => result + product.price * product.count,
              0
            );
          setOrders(products);
          setTotalEarning(earning);
        };
        testReport();
      }, []);

      const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
      const cartTotalQuantity = useSelector(
        (state) => state.cart.cartTotalQuantity
      );

    return(
        <div className="container">
            <header className="py-4 mt-5 mb-2 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                <Link
                        to="/recap"
                        className="d-flex align-items-center mb-lg-0 me-lg-5 text-dark text-decoration-none"
                    >
                        <span className="fs-4">Order Recap</span>
                    </Link>
                    <Link
                        to="/admin"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                    >
                        <span className="fs-4">Product Stock</span>
                    </Link>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search here..."
                        aria-label="Search"
                    />
                    </form>
                </div>
            </header>
            {orders && orders.length > 0 ? (
                <div className="tablerounededCorner">
                    <table className="roundedTable">
                        <tbody>
                            <tr className="align-middle">
                                <th style={{ textAlign: 'center' }}>
                                    Products
                                </th>
                                <th width="38%">
                                    
                                </th>
                                <th>
                                    Category
                                </th>
                                <th style={{ textAlign: 'center' }}>
                                    Price
                                </th>
                                <th style={{ textAlign: 'center' }}>
                                    Sold
                                </th>
                                <th style={{ textAlign: 'center' }}>
                                    Total
                                </th>
                            </tr>
                            {orders &&
                                orders.map((product, idx) => {
                                    return (
                                        <tr 
                                        key={product.id}
                                        className={`${
                                            idx % 2 === 0 && "align-middle"
                                        } `}>
                                            <td style={{ textAlign: 'center' }}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    width={90}
                                                    height={100}
                                                />
                                            </td>
                                            <td width="38%" style={{ textAlign: 'left' }}>
                                                <h5>{product.title}</h5>
                                            </td>
                                            <td>
                                                <h6 className="text-secondary w-75">
                                                    {product.category}
                                                </h6>
                                            </td>
                                            <td>
                                                <h5 className="text-secondary w-75">
                                                    ${product.price}
                                                </h5>
                                            </td>
                                            <td>
                                                <h5>
                                                    {product.count} items
                                                </h5>
                                            </td>
                                            <td>
                                                <h5>
                                                    ${totalEarning}
                                                </h5>
                                            </td>
                                        </tr>
                                        );
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>
                                        Cart item(s): <b>{cartTotalQuantity}</b>
                                    </td>
                                    <td>
                                        <b>{`$${cartTotalPrice.toFixed(2)}`}</b>
                                    </td>
                                    
                                </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-2xl font-semibold text-left">Belum ada Penjualan</p>
            )}
        </div>
    )
}

export default Recap;
