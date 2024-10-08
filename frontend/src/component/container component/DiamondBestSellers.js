import React, { useEffect, useState } from "react";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import axios from "axios";
import Slider from "react-slick";
import CommonCard from "../../carousal/carousal card/CommonCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux files/productSlice";

export default function DiamondBestSellers() {
  const [data, setData] = useState(null);
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
        className="hidden md:block py-2 px-4 absolute top-1/2 right-6 lg:-right-16 -translate-y-1/2 text-default-high bg-default-light hover:text-black hover:bg-stone-300 rounded-full z-10"
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
        className="hidden md:block py-2 px-4 absolute top-1/2 left-6 lg:-left-16 -translate-y-1/2 text-default-high bg-default-light hover:text-black hover:bg-stone-300 rounded-full z-10"
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
        setData(response.data);

        const filter = response.data.filter((dataObject, index) =>
          dataObject.category.includes("Diamond")
        );
        // console.log(filter);
        setFilteredData(filter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Diamond Best Sellers"
        dec="Dazzling diamond jewellery, now at delightful prices"
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
                onClick={() => {
                  dispatch(addProduct(product));
                  localStorage.setItem("productId", product._id);
                }}
                // onClick={() => {
                //   localStorage.setItem("productId", product._id);
                // }}
              >
                <div className="px-3">
                  <CommonCard product={product} />
                  {/* <CommonCard /> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
