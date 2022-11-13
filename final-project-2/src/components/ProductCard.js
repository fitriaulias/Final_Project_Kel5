import React from "react";
import IncreaseButton from "./IncreaseButton";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div
        className="card border-dark d-flex flex-column align-items-center mb-5"
        style={{ width: "18rem", height: "27rem" }}
      >
        <div className="p-2">
          <img
            className="card-img-top"
            src={product.image}
            alt={product.title}
            height="200px"
            width="auto"
          />
        </div>
        <div className="card-body border-top border-dark w-100 p-2">
          <div className="d-flex" style={{ height: "32%" }}>
            <div className="w-75">
              <a href={`/product/${product.id}`}>
                <h5 className="card-title text-start">
                  {product.title.slice(0, 45)}
                </h5>
              </a>
            </div>
            <div className="ms-3">
              <p className="rating">
                {product.rating.rate} {`(${product.rating.count})`}
              </p>
            </div>
          </div>
          <p className="card-text text-capitalize text-start my-2">
            {product.category}
          </p>
          <h4 className="card-text text-start mb-3">${product.price}</h4>
          <div className="add-to-cart">
            <IncreaseButton product={product} name="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
