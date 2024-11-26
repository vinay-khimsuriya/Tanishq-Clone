import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Category() {
  const [data, setData] = useState([]);
  const [seconduryCategory, setSeconduryCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  const [display, setDisplay] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/api/primarycategory`
        );
        if (response && response.data) {
          setData(response?.data?.category);
          // console.log(response?.data?.category);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMouseEnter = (id) => {
    setActiveCategoryId(id);

    const categoryId = data.find((catId) => catId._id === id);
    // console.log(categoryId);

    if (categoryId) {
      if (
        categoryId.seconduryCategoryIds &&
        categoryId.seconduryCategoryIds.length > 0
      ) {
        setSeconduryCategory(categoryId.seconduryCategoryIds);
      } else if (
        categoryId.subcategoryIds &&
        categoryId.subcategoryIds?.length > 0
      ) {
        setSubcategory(categoryId.subcategoryIds);
      } else {
        setSeconduryCategory([]);
        setSubcategory([]);
      }
      setDisplay(true);
    }
  };

  if (subcategory) {
    // console.log("subcategory >>>>>", subcategory);
  }

  const handleMouseLeave = () => {
    setActiveCategoryId(null);
    setDisplay(false);
  };
  useEffect(() => {
    console.log(activeCategoryId);
  }, [activeCategoryId]);

  return (
    <div className="w-full flex justify-center items-center uppercase">
      <div className="w-5/6 text-slate-900 font-normal text-opacity-80 text-xs xl:text-sm  hidden lg:flex items-center justify-between">
        <ul className="flex text-nowrap w-full justify-evenly">
          {data.length > 0 &&
            data.map((category, index) => (
              <li
                className="py-3 px-2 relative cursor-pointer text-nowrap"
                key={index}
                onMouseOver={() => handleMouseEnter(category._id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="py-3 hover-underline"
                  to={`/shop/${category.slug}`}
                >
                  {category.name}
                </Link>
                <div
                  className={`${
                    (seconduryCategory.length || subcategory.length) &&
                    display &&
                    activeCategoryId === category._id
                      ? "flex"
                      : "hidden"
                  } ${
                    category.name == "all jewellery" || category.name == "gold"
                      ? "h-[22rem]"
                      : "w-fit h-auto"
                  } bg-white text-primary text-start uppercase absolute top-[100%] left-0 -translate-x-2 border border-primary shadow-md px-3 py-2 rounded-lg z-20`}
                >
                  {seconduryCategory.length > 0 &&
                    seconduryCategory.map((obj, index) => (
                      <div className="flex justify-between text-nowrap text-base text-primary">
                        <ul className="px-3 flex flex-col">
                          <p className=" font-medium text-black">{obj.name}</p>
                          <div
                            className={`h-full flex flex-col flex-wrap ${
                              obj.name == "category" &&
                              obj.subcategoryIds.length > 11
                                ? "w-80 h-[23.rem]"
                                : "w-auto h-auto"
                            }`}
                          >
                            {obj?.subcategoryIds?.length > 0 &&
                              obj?.subcategoryIds.map((subCat) => (
                                <li className="text-start text-sm py-1 pe-2 hover:text-red-600">
                                  <Link
                                    className="py-1"
                                    to={`/shop/${subCat.slug}`}
                                  >
                                    {subCat.name}
                                  </Link>
                                </li>
                              ))}
                          </div>
                        </ul>
                      </div>
                    ))}
                  {subcategory && subcategory.length > 0 && (
                    <div className="h-full">
                      <ul
                        className={` ${
                          category.name == "collections"
                            ? "w-96 h-52"
                            : " h-auto"
                        } flex flex-col flex-wrap justify-start`}
                      >
                        {subcategory.map((subCat) => (
                          <li
                            className="text-start text-sm ps-2 py-1 hover:text-red-600"
                            key={subCat.slug}
                          >
                            <Link className="py-1" to={`/shop/${subCat.slug}`}>
                              {subCat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
