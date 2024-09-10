import React from "react";
import ShopByCategoryComponent from "../../comman component/ShopByCategoryComponent";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import bangle from "../../img/static images/shop by category/diamond-bangle.webp";
import bracelet from "../../img/static images/shop by category/diamond-bracelet.webp";
import chains from "../../img/static images/shop by category/diamond-chains.webp";
import earrings from "../../img/static images/shop by category/diamond-earrings.webp";
import mangalsutras from "../../img/static images/shop by category/diamond-mangalsutra.webp";
import necklaceSet from "../../img/static images/shop by category/diamond-necklace-set.webp";
import necklace from "../../img/static images/shop by category/diamond-necklace.webp";
import nosepins from "../../img/static images/shop by category/diamond-nosepins.webp";
import pendantEarringSet from "../../img/static images/shop by category/diamond-pendant-earring-set.webp";
import pendant from "../../img/static images/shop by category/diamond-pendants.webp";
import rings from "../../img/static images/shop by category/diamond-rings.webp";
import fodGoldCoins from "../../img/static images/shop by category/fod-gold-coins.jpg";
import Slider from "react-slick";

export default function ShopByCategory() {
  const images = [
    mangalsutras,
    chains,
    fodGoldCoins,
    bracelet,
    earrings,
    bangle,
    rings,
    necklace,
    pendant,
    necklaceSet,
    nosepins,
    pendantEarringSet,
  ];
  const names = [
    "Mangalsutras",
    "Chains",
    "Gold Coins",
    "Bracelets",
    "Earrings",
    "Bangles",
    "Finger Rings",
    "NeckWear",
    "Pendants",
    "Necklace Set",
    "Nose Pins",
    "Pendant Sets",
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Shop By Category"
        dec="Browse through your favorite categories. We've got them all!"
      />
      <div className="w-full">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="px-1 pt-6">
                <ShopByCategoryComponent
                  imagePath={image}
                  name={names[index]}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
