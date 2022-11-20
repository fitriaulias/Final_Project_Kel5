import React from "react";
import './Styles.css'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Recap() {
    return(
        <div className="container recap vh-100">
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
                        <tr className="align-middle">
                            <td style={{ textAlign: 'center' }}>
                                <Image
                                    width={90}
                                    height={100}
                                />
                            </td>
                            <td width="38%">
                                <h4>Title</h4>
                            </td>
                            <td>
                                <h5 className="text-secondary w-75">
                                    category
                                </h5>
                            </td>
                            <td>
                                <h4 className="text-secondary w-75">
                                    price
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    sold
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    Total
                                </h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recap;
