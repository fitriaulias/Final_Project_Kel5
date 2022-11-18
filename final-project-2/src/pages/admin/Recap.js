import React from "react";
import './Styles.css'
import { Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Recap() {
    return(
        <div className="container recap">
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
                            <td style={{ textAlign: 'center' }}>
                                <Image
                                    width={90}
                                    height={100}
                                />
                            </td>
                            <td width="45%">
                            <h4>Title</h4>
                            </td>
                            <td>
                                <span className="text-secondary w-75">
                                    category
                                </span>
                            </td>
                            <td width="130px">
                                <Form.Control 
                                    type="number" 
                                    min={0} 
                                />
                            </td>
                            <td>
                                <Button
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
        </div>
    )
}

export default Recap;
