import React, { useEffect, useState } from "react";
import { categoryType } from "../utils/Categories";
import axios from "axios";
import { json } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState();
  const [subcategory, setsubcategory] = useState();
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [subCategoryId, setSubcategoryId] = useState([]);
  const [subcategorydata, setsubcategorydata] = useState([]);
  const [display, setDisplay] = useState(false);

  const colArray = ["collection", "gifting", "more"];
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/admin/managecategory/category"
      );

      if (response && response.data) {
        setCategory(response.data.categories);
      } else {
        console.error("Unexpected response format", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (activeCategoryId) {
      fetchSubcategory();
    }
  }, [activeCategoryId]);

  const fetchSubcategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/admin/managecategory/subcategory/${activeCategoryId}`
      );
      if (response && response.data) {
        setsubcategory(response.data.subcategory);

        const subcategoryIds = response.data.subcategory.map((sub) => sub._id);
        setSubcategoryId(subcategoryIds);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (subCategoryId.length > 0) {
      fetchsubcategorydata();
    }
  }, [subCategoryId]);

  const fetchsubcategorydata = async () => {
    try {
      const tempSubcategoryData = [];

      for (let i = 0; i < subCategoryId.length; i++) {
        const data = {
          categoryId: activeCategoryId,
          subcategoryId: subCategoryId[i],
        };

        const response = await fetch(
          "http://localhost:4500/api/admin/managecategory/subcategorydata/ids",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          const jsonData = await response.json();
          tempSubcategoryData.push(jsonData);
        }
      }
      setsubcategorydata(tempSubcategoryData);
      console.log(subcategorydata);
    } catch (error) {
      console.error("Error fetching subcategory data:", error);
    }
  };

  const handleMouseEnter = (categoryId) => {
    setActiveCategoryId(categoryId);
    setDisplay(true);
    // console.log("sub categoryis id >>>>>", subCategoryId);
  };

  const handleMouseLeave = (categoryId) => {
    setActiveCategoryId(categoryId);
    setDisplay(false);
  };

  return (
    <div>
      <div className="w-full flex justify-center relative uppercase">
        <div className="w-5/6 text-slate-900 font-normal text-opacity-80 text-xs xl:text-sm  hidden lg:flex items-center justify-center">
          <ul className="flex text-nowrap w-full justify-evenly ">
            {category &&
              category.map((category, index) => (
                <li
                  key={category._id}
                  className="relative py-4"
                  onMouseEnter={() => handleMouseEnter(category._id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="#" className="hover:text-primary">
                    {category.categoryName}
                  </a>

                  <div
                    className={`${
                      subcategory?.length > 0 &&
                      display &&
                      activeCategoryId === category._id
                        ? "flex"
                        : "hidden"
                    } ${
                      category.categoryName == "collection" ||
                      category.categoryName == "gifting" ||
                      category.categoryName == "more"
                        ? "flex-col gap-1 min-w-6"
                        : "flex-row gap-2"
                    } w-fit justify-between ${
                      category.categoryName == "all jewellery"
                        ? "min-w-[600px]"
                        : "min-w-[850px]"
                    }  text-primary text-justify py-2 px-1 border border-primary rounded-md absolute top-[100%] left-1/2 -translate-x-1/4 z-50 bg-white ms-3`}
                  >
                    {subcategory &&
                      subcategory.map((subcategory, index) => (
                        <div
                          className="w-fit px-2 shrink-0"
                          key={subcategory._id}
                        >
                          <p
                            className={`mb-2 font-semibold ps-4 ${
                              category.categoryName == "collection" ||
                              category.categoryName == "gifting" ||
                              category.categoryName == "more"
                                ? "font-light"
                                : "font-semibold"
                            }`}
                          >
                            {subcategory.subcategoryName}
                          </p>
                          <ul className="w-fit font-normal max-h-[350px] flex flex-col flex-wrap mx-2">
                            {subcategorydata[index] &&
                              subcategorydata[index].subcategorydata &&
                              subcategorydata[index].subcategorydata.map(
                                (data) => (
                                  <li
                                    className="w-fit shrink-0 my-1 px-2 hover:text-red-500 hover:cursor-pointer"
                                    key={data._id}
                                  >
                                    {data.subcategoryDataName}
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      ))}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
