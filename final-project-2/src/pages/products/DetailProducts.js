import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IncreaseButton from "../../components/IncreaseButton";
import DecreaseButton from "../../components/DecreaseButton";
import { useSelector } from "react-redux";

const DetailProducts = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cart = cartItems.find((cart) => cart.id === id);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setDetail(response.data);
    })();
  }, [id]);

  return (
    <div className="detail-page">
      <div className="d-flex justify-content-center pt-5">
        <div className="container-one bg-white rounded">
          <div className="m-4">
            <img
              src={detail.image}
              alt={detail.title}
              style={{ width: "12rem" }}
            />
          </div>
        </div>
        <div
          className="bg-white rounded ms-3 p-4 w-25"
          style={{ height: "14rem" }}
        >
          <p className="text-start fs-5 fw-bold mb-1">Set the order</p>
          <div className="border-top border-bottom border-1">
            <div className="d-flex">
              <div className="button-detail d-flex border border-1 w-25 my-3 rounded-1">
                <div className="w-50">
                  <DecreaseButton product={detail} name="-" />
                </div>

                <div className="w-50">
                  <IncreaseButton product={detail} name="+" />
                </div>
              </div>
              <p className="m-3">Stok: belum dikerjain</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-start">
              Subtotal
              <span className="detail-price fw-bold fs-5">${detail.price}</span>
            </p>
          </div>
          <div className="add-to-cart rounded-2">
            <IncreaseButton product={detail} name="Add to Cart" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5">
        <div className="container-one text-start bg-white mt-3 rounded">
          <div className="m-4">
            <div className="lh-1">
              <p className="text-black-50">{detail.category}</p>
              <h5>{detail.title}</h5>
              <p>
                {/* {detail.rating.rate} {`(${detail.rating.count} rating)`} */}
              </p>
              <h3 className="border-bottom pb-2">${detail.price}</h3>
            </div>
            <p className="fw-bold mb-1">Description</p>
            <p>{detail.description}</p>
          </div>
        </div>
        <div className="ms-3 p-4 w-25"></div>
      </div>
    </div>
  );
};

export default DetailProducts;
