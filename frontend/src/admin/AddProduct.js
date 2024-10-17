import React, { useEffect, useReducer, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { fetchcategory1, fetchSubcategory1 } from "../utils/fetchData";
import axios from "axios";

const AddProduct = ({ setIsShow }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const weightRef = useRef();
  const karatRef = useRef();
  const diamondCTRef = useRef();

  const [categoryName, setCategoryName] = useState();
  const [subcategoryName, setSubategoryName] = useState();
  const [selectedImages, setSelectedImages] = useState([]);

  const [category, setCategory] = useState();
  const [isCategory, setIsCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [isSubCategory, setIsSubCategory] = useState();

  const [subcategoryType, setsubcategoryType] = useState();
  const [error, setError] = useState();
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();
  const [selectedSubCategoryType, setSelectedSubCategoryType] = useState();

  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subcategoryData = await fetchSubcategory1();
        setSubCategory(subcategoryData?.subcategories);
        setIsSubCategory(true);

        const categoryData = await fetchcategory1();
        setCategory(categoryData?.categories);
        setIsCategory(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetchSubcategory();
    }
  }, [selectedCategoryId]);

  const fetchSubcategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/admin/managecategory/subcategory/${selectedCategoryId}`
      );
      if (response && response.data) {
        setSubCategory(response.data.subcategory);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedSubCategoryId) {
      fetchsubcategorydata();
    }
  }, [selectedSubCategoryId]);

  const fetchsubcategorydata = async () => {
    try {
      const data = {
        categoryId: selectedCategoryId,
        subcategoryId: selectedSubCategoryId,
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
        setsubcategoryType(jsonData.subcategorydata);
      }
    } catch (error) {
      console.error("Error fetching subcategory data:", error);
    }
  };

  //   useEffect(() => {
  //     console.log("category >>>>>>>", category);
  //     console.log("sub category >>>>>>", subCategory);
  //     console.log("sub category type>>>>>>", selectedImages);
  //     console.log("category name>>>>>>", categoryName);
  //     console.log("sub category name>>>>>>", subcategoryName);
  //   }, [categoryName, subcategoryName]);

  const handleCategoryChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedCategoryId(e.target.value);
    setCategoryName(selectedOption.text);
  };

  const handleSubCategoryChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedSubCategoryId(e.target.value);
    setSubategoryName(selectedOption.text);
  };
  const handleSubCategorytypeChange = (e) => {
    setSelectedSubCategoryType(e.target.value);
    alert(e.target.value);
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    const imagePreviews = files.map((file) => file.name);
    setImagePreview(imagePreviews);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value &&
      priceRef.current.value &&
      weightRef.current.value &&
      categoryName &&
      subcategoryName &&
      selectedSubCategoryType &&
      selectedImages
    ) {
      const productData = {
        name: nameRef.current.value,
        price: priceRef.current.value,
        weight: weightRef.current.value,
        karat: karatRef.current.value,
        diamondCT: diamondCTRef.current.value,
        category: categoryName,
        subcategory: subcategoryName,
        subcategoryType: selectedSubCategoryType,
        images: selectedImages,
      };
      console.log("Product Data: ", productData);
    } else {
      console.log("missing data");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="bg-transparent flex justify-center items-center w-full h-screen relative">
        <span
          className="absolute top-3 right-3 text-xl cursor-pointer"
          onClick={() => setIsShow(false)}
        >
          <RxCross1 />
        </span>
        <form className="bg-white rounded-lg p-2 py-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <label className="w-40 text-nowrap p-1">Product Name:</label>
              <input
                ref={nameRef}
                className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
                type="text"
                placeholder="please write product name"
              />
            </div>
            <div className="flex gap-1">
              <label className="w-40 text-nowrap p-1">Product Price:</label>
              <input
                ref={priceRef}
                className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
                type="text"
                placeholder="Enter Price"
              />
            </div>
            <div className="flex gap-1">
              <label className="w-40 text-nowrap p-1">Product Weight:</label>
              <input
                ref={weightRef}
                className="w-full p-1 border rounded focus:ring-1 focus:ring-primary outline-none"
                type="text"
                placeholder="Enter Weight"
              />
            </div>
          </div>

          <div className="flex justify-between py-3 gap-2 border pe-2">
            <div className="flex flex-col gap-1 items-center text-center">
              <lebel className="text-nowrap ">Select Category</lebel>
              <select
                disabled={!isCategory}
                className="text-center bg-slate-700 text-white rounded mx-2 py-1"
                value={selectedCategoryId}
                onChange={handleCategoryChange}
              >
                <option value=""></option>
                {category &&
                  category.map((category, index) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <lebel className="text-nowrap">Select Subcategory</lebel>
              <select
                className="text-center bg-slate-700 text-white rounded mx-2 py-1"
                disabled={!isSubCategory}
                value={selectedSubCategoryId}
                onChange={handleSubCategoryChange}
              >
                <option value=""></option>
                {subCategory &&
                  subCategory.map((subcategory, index) => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.subcategoryName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <lebel className=" text-nowrap">Select Subcategory type</lebel>
              <select
                className="text-center w-full  bg-slate-700 text-white rounded mx-2 py-1"
                disabled={!isSubCategory}
                value={selectedSubCategoryType}
                onChange={handleSubCategorytypeChange}
              >
                <option value=""></option>
                {subcategoryType &&
                  subcategoryType.map((subcategorytype, index) => (
                    <option
                      key={subcategorytype._id}
                      value={subcategorytype.subcategoryDataName}
                    >
                      {subcategorytype.subcategoryDataName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2 justify-between p-1">
            <div className="">
              <lable className="p-1">Gold Karat:</lable>
              <input
                ref={karatRef}
                className="p-1 ms-1 border rounded"
                type="number"
                placeholder="Enter number"
              />
            </div>
            <div className="">
              <lable className="p-1">Diamond ct:</lable>
              <input
                ref={diamondCTRef}
                className="p-1 ms-1 border rounded"
                type="number"
                placeholder="Enter number"
              />
            </div>
          </div>

          <div className="flex gap-2 my-2">
            <input
              className="my-2 pt-1 w-[105px] rounded"
              type="file"
              multiple
              accept="image/*"
              files="vinay"
              onChange={handleImageChange}
            ></input>
            <div className="flex flex-col gap-2 mt-2">
              {imagePreview.map((file, index) => (
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="w-[440px]">{file}</h1>
                  <RxCross1
                    className="cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="btn-primary p-2 w-full hover:bg-orange-800">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
