import React, { useState } from "react";
import './Styles.css'
import { Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { updateStock } from "../../redux/features/productSlice";

const Stock = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const allProducts = useSelector((state) =>
        state.product.products.length > 0
        ? state.product.products
        : JSON.parse(localStorage.getItem("allProducts"))
    );
    console.log(allProducts)

    const handleUpdateStock = (id) => {
        dispatch(updateStock({ id: id, stock: count }));
      };


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
            {allProducts &&
                allProducts.length > 0 &&
                allProducts.map((product, idx) => {
                    return (
                        <div 
                            key={product.id}
                            className={`${
                                idx % 2 === 0 && "tablerounededCorner"
                                } `}
                            >
                            <table className="roundedTable">
                                <tbody>
                                    <tr className="align-middle">
                                        <td style={{ textAlign: 'center' }}>
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={90}
                                                height={100}
                                            />
                                        </td>
                                        <td width="45%" style={{ textAlign: 'left' }}>
                                            <h5>{product.title}</h5>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <h6 className="text-secondary w-75">
                                                {product.category}
                                            </h6>
                                        </td>
                                        <td width="130px" style={{ textAlign: 'right' }}>
                                            <Form.Control 
                                                onChange={(e) => setCount(parseInt(e.target.value))}
                                                defaultValue={product.stock}
                                                type="number" 
                                                min={0} 
                                            />
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <Button
                                                onClick={() => handleUpdateStock(product.id)}
                                                variant="dark"
                                                type="button"
                                            >
                                            Update
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        );
                    })}
        </div>
    )
}

export default Stock;
