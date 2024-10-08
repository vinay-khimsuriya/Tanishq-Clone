import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import HeadeLineComponent from "../comman component/HeadeLineComponent";
import CommonCard from "./carousal card/CommonCard";
import { addProduct } from "../redux files/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function TopSellers() {
  const [filteredData, setFilteredData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" hidden md:block py-2 px-4 absolute top-1/2 right-6 lg:-right-16 -translate-y-1/2 text-default-high bg-default-light hover:text-black hover:bg-stone-300 rounded-full z-10"
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="hidden md:block py-2 px-4 absolute top-1/2 left-6 lg:-left-16 -translate-y-1/2 text-default-high bg-default-light bg-black  hover:text-black hover:bg-stone-300 rounded-full z-10"
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    );
  }

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/product");

      if (response ?? response.data) {
        setFilteredData(response.data.slice(0, 25));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Top Sellers"
        dec="Love the most to bought the most"
      />
      {!filteredData && (
        <div className="w-full flex items-center justify-center text-2xl">
          <div>Data is loading...</div>
        </div>
      )}
      {filteredData && (
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {filteredData.map((product, index) => (
              <Link
                key={index}
                to={"product"}
                onClick={() => dispatch(addProduct(product))}
              >
                <div className="px-3">
                  <CommonCard product={product} />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
