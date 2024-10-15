import React, { useEffect, useRef, useState } from "react";
import { fetchcategory1, fetchSubcategory1 } from "../utils/fetchData";
import {
  addCategory,
  addSubCategory,
  addSubCategoryData,
} from "../utils/addData";

const ManageCategory = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState();
  const [category, setCategory] = useState(null);
  const [isCategory, setIsCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(null);
  const [issubCategory, setIsSubCategory] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);

  const categoryRef = useRef();
  const subCategoryRef = useRef();
  const subCategoryDataRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subcategoryData = await fetchSubcategory1();
        setSubCategory(subcategoryData?.subcategories);
        setIsSubCategory(true);

        const categoryData = await fetchcategory1();
        setCategory(categoryData?.categories);
        setIsCategory(true);

        console.log("category >>>>>", category);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategoryId(e.target.value);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const categoryName = categoryRef.current.value.trim();

    if (!categoryName) {
      setError("Category name cannot be empty.");
      setSuccessMessage(null);
      return;
    }

    const data = { categoryName };

    try {
      const message = await addCategory({ data });
      setSuccessMessage(message);
      setError(null);
      categoryRef.current.value = null;
    } catch (error) {
      setError("Error adding category.");
      setSuccessMessage(null);
    }
  };

  const handleAddSubCategory = async (e) => {
    e.preventDefault();
    const subcategoryName = subCategoryRef.current.value.trim();
    // setSelectedCategoryId(e.target.value);

    if (!subcategoryName || !selectedCategoryId) {
      setError("Please provide a subcategory name and select a category.");
      setSuccessMessage(null);
      return;
    }

    const data = {
      subcategoryName,
      categoryId: selectedCategoryId,
    };

    try {
      const message = await addSubCategory({ data });
      setSuccessMessage(message);
      setError(null);
      subCategoryRef.current.value = null;
    } catch (error) {
      setError("Error adding subcategory.");
      setSuccessMessage(null);
    }
  };

  const handleAddSubCategoryData = async (e) => {
    e.preventDefault();
    const subcategoryDataName = subCategoryDataRef.current.value.trim();
    // setSelectedSubCategoryId(e.target.value);

    if (!subcategoryDataName || !selectedSubCategoryId || !selectedCategoryId) {
      setError(
        "Please provide subcategory data and select a subcategory and subcategory."
      );
      setSuccessMessage(null);
      return;
    }

    const data = {
      subcategoryDataName,
      subcategoryId: selectedSubCategoryId,
      categoryId: selectedCategoryId,
    };

    try {
      const message = await addSubCategoryData({ data });
      setSuccessMessage(message);
      setError(null);
      subCategoryDataRef.current.value = null;
    } catch (error) {
      console.log(error);
      setError("Error adding subcategory data.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="flex justify-between p-5 w-[30rem]">
      <div className="w-full">
        {successMessage && <p className="text-green-700">{successMessage}</p>}
        {error && <p className="text-red-700">{error}</p>}

        <div className="flex flex-col gap-6 pt-2">
          <div className="p-1 rounded border-2 border-t-0 border-gray-300">
            <form className="flex flex-col gap-2" onSubmit={handleAddCategory}>
              <input
                ref={categoryRef}
                className="block border rounded py-1"
                type="text"
                placeholder="write category"
              />
              <button className="btn-primary hover:bg-orange-800 font-normal py-2">
                Add Category
              </button>
            </form>
          </div>
          <div className="p-1 rounded border-2 border-t-0 border-gray-300">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleAddSubCategory}
            >
              <div className="flex justify-between">
                <lebel className="block">Select Category:</lebel>
                <select
                  disabled={!isCategory}
                  className="text-center"
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
              <input
                ref={subCategoryRef}
                className="block border rounded py-1"
                type="text"
                placeholder="Add Subcategory"
              />
              <button className="btn-primary px-2 hover:bg-orange-800 font-normal py-2">
                Add Sub Category
              </button>
            </form>
          </div>
          <div className=" p-1 rounded border-2 border-t-0 border-gray-300">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleAddSubCategoryData}
            >
              <div className="flex justify-between">
                <lebel className="block">Select Category:</lebel>
                <select
                  disabled={!isCategory}
                  className="text-center"
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
              <div className="flex justify-between">
                <lebel className="">Select Subcategory:</lebel>
                <select
                  className="text-center"
                  disabled={!issubCategory}
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
              <input
                ref={subCategoryDataRef}
                className="block border rounded py-1"
                type="text"
                placeholder="Add Subcategory data"
              />
              <button className="btn-primary py-2 px-2 hover:bg-orange-800 font-normal">
                Add Sub Category Data
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <p>View category</p>
      </div>
    </div>
  );
};

export default ManageCategory;

// const fetchcategory = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:4500/api/admin/managecategory/category"
//     );
//     const jsonData = await response.json();
//     setCategory(jsonData?.categories);
//     console.log(jsonData.categories);
//     setIsCategory(true);

//     if (!response.ok) {
//       setError("Somthing is wrong");
//     }
//   } catch (error) {
//     setError(error);
//   }
// };
// const fetchSubcategory = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:4500/api/admin/managecategory/subcategory"
//     );
//     const jsonData = await response.json();
//     setSubCategory(jsonData?.subcategories);
//     setIsSubCategory(true);

//     if (!response.ok) {
//       setError("Somthing is wrong");
//     }
//   } catch (error) {
//     setError(error);
//   }
// };

// const addCategory = async () => {
//   const data = {
//     categoryName: categoryRef.current.value,
//   };

//   const response = await fetch(
//     "http://localhost:4500/api/admin/managecategory/category",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );
//   const jsonData = await response.json();

//   if (!response.ok) {
//     setError(jsonData.message);
//   }
//   setSuccessMessage(jsonData.message);
// };

// const addSubCategory = async () => {
//   const data = {
//     subcategoryName: subCategoryRef.current.value,
//     categoryId: selectedCategoryId,
//   };
//   console.log(data);
//   const response = await fetch(
//     "http://localhost:4500/api/admin/managecategory/subcategory",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );
//   const jsonData = await response.json();

//   if (!response.ok) {
//     setError(jsonData.message);
//   }
//   // console.log(jsonData);
//   setSuccessMessage(jsonData.message);
// };

// const addSubCategoryData = async () => {
//   const data = {
//     subcategoryDataName: subCategoryRef.current.value,
//     subcategoryId: selectedSubCategoryId,
//   };
//   console.log(data);
//   const response = await fetch(
//     "http://localhost:4500/api/admin/managecategory/subcategorydata",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );
//   const jsonData = await response.json();

//   if (!response.ok) {
//     setError(jsonData.message);
//   }
//   // console.log(jsonData);
//   setSuccessMessage(jsonData.message);
// };

// const handleAddCategory = (e) => {
//   e.preventDefault();
//   addCategory({ data });
//   categoryRef.current.value = null;
// };
// const handleAddSubCategory = (e) => {
//   e.preventDefault();
//   addSubCategory({ data });
// };
// const handleAddSubCategoryData = (e) => {
//   e.preventDefault();
//   addSubCategoryData({ data });
// };
