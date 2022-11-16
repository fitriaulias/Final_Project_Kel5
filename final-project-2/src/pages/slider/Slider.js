import React, { useEffect, useState } from "react";
// import IncreaseButton from "../../components/IncreaseButton";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

const Slider = () => {
  const [product, setProduct] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = product.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // useEffect(() => {
  //   setCurrentSlide(0);
  // }, [])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);

      setProduct(response.data);
      setCurrentSlide(0);
    })();
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div>
      <div className="d-flex section-one">
        <div className="d-flex justify-content-center flex-row w-50 ms-5 ps-5">
          <div className="text-start p-5 m-5">
            <h2 className="mt-5">Fashion Up Your Look</h2>
            <h2>
              {" "}
              With Our <b>Best Product</b>
            </h2>
            <button className="btn btn-dark btn-outline-light mt-2 py-1 border border-dark rounded">
              Login here
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-row w-50 pe-5">
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 ">
              <img
                src={LeftArrow}
                alt="Previous Slide"
                onClick={prevSlide}
                style={{ width: "2rem" }}
                className=""
              />
            </div>
          </div>
          <div className="m-3 card-center">
            {product.map((item, index) => {
              return (
                <div
                  className={index === currentSlide ? "slide current" : "slide"}
                  key={index}
                >
                  {index === currentSlide && (
                    <>
                      <ProductCard product={item} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 ">
              <img
                src={RightArrow}
                alt="Next Slide"
                onClick={nextSlide}
                style={{ width: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
