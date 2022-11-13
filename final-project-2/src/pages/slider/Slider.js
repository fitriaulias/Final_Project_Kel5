import React, { useEffect, useState } from "react";
// import IncreaseButton from "../../components/IncreaseButton";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const Slider = () => {
  const [product, setProduct] = useState([]);
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideLength = product.length;

  // const autoScroll = true;
  // let slideInterval;
  // let intervalTime = 5000;

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  // };

  // useEffect(() => {
  //   setCurrentSlide(0);
  // }, [])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);

      setProduct(response.data);
      // setCurrentSlide(0);
    })();
  }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     const auto = () => {
  //       slideInterval = setInterval(nextSlide, intervalTime);
  //     };
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className="">
      <div className="">
        <div className="container">
          <div className="card-container">
            {product.map((item, index) => {
              let position =
                index > 0
                  ? "nextCard"
                  : index === 0
                  ? "activeCard"
                  : "prevCard";
              return (
                <div className="" key={item.id}>
                  <ProductCard product={item} cardStyle={position} />
                </div>
              );
            })}
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            onClick={prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            onClick={nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
